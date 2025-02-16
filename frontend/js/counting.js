document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.rc-achievement-stats');
  const numbers = document.querySelectorAll('.rc-achievement-number');
  const cards = document.querySelectorAll('.rc-achievement-card');
  let animated = false;

  const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentValue = Math.floor(progress * (end - start) + start);
          element.textContent = currentValue + (end === 7500 || end === 1000 ? '+' : '+');
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  };

  const animateNumbers = () => {
      numbers.forEach((number) => {
          const target = parseInt(number.getAttribute('data-target'));
          animateValue(number, 0, target, 2000);
      });
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
              animated = true;
              cards.forEach((card, index) => {
                  setTimeout(() => {
                      card.classList.add('animate');
                  }, index * 200);
              });
              animateNumbers();
          }
      });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});
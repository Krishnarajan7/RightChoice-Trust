document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
      duration: 800,
      once: true,
      offset: 100
  });

  const courseCards = document.querySelectorAll('.course-card');
  
  courseCards.forEach(card => {
      const header = card.querySelector('.course-card__header');
      
      header.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent event bubbling
          
          // If this card is already active, just close it
          if (card.classList.contains('is-active')) {
              card.classList.remove('is-active');
              return;
          }
          
          // Close all other cards
          courseCards.forEach(otherCard => {
              if (otherCard !== card) {
                  otherCard.classList.remove('is-active');
              }
          });
          
          // Open this card
          card.classList.add('is-active');
      });
  });
});
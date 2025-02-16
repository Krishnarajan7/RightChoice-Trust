

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add hover effect to footer sections with scale
const footerSections = document.querySelectorAll('.edu-footer__section');
footerSections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.transform = 'translateY(-5px) scale(1.01)';
    section.style.transition = 'all 0.3s ease';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.transform = 'translateY(0) scale(1)';
  });
});

// Animate decorative elements on scroll with smooth rotation and scale
window.addEventListener('scroll', () => {
  const decorations = document.querySelectorAll('.edu-footer__decoration');
  const scrolled = window.scrollY;
  
  decorations.forEach((decoration, index) => {
    const rotation = scrolled * 0.1;
    const scale = 1 + Math.sin(scrolled * 0.003) * 0.1;
    decoration.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    decoration.style.transition = 'transform 0.5s ease';
  });
});

// Add floating animation to statistics
const statItems = document.querySelectorAll('.edu-footer__stat-item');
statItems.forEach((item, index) => {
  item.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
});

// Add keyframe animation for floating effect
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// Add parallax effect to waves with smooth movement
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const waves = document.querySelectorAll('.edu-footer__wave');
      waves.forEach((wave, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(lastScrollY * speed);
        wave.style.transform = `translateY(${yPos}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// Add ripple effect to social links
document.querySelectorAll('.edu-footer__social-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});

// Newsletter form submission animation
const newsletterForm = document.querySelector('.edu-footer__form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = newsletterForm.querySelector('.edu-footer__submit');
    const originalContent = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
      button.innerHTML = originalContent;
      button.style.backgroundColor = '';
    }, 2000);
  });
}
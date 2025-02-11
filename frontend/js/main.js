const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

// Add ripple effect to nav links
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - radius}px`;
  ripple.style.top = `${event.clientY - rect.top - radius}px`;
  ripple.classList.add('ripple');
  
  const rippleContainer = document.createElement('span');
  rippleContainer.classList.add('ripple-container');
  
  rippleContainer.appendChild(ripple);
  button.appendChild(rippleContainer);
  
  ripple.addEventListener('animationend', () => {
    rippleContainer.remove();
  });
}

// Add ripple effect to all nav links
document.querySelectorAll('.nav-link').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Toggle mobile menu with animation
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Close all dropdowns when closing the menu
  if (!navLinks.classList.contains('active')) {
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  }
});

// Handle dropdowns
dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('.nav-link');
  
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (window.innerWidth <= 768) {
      const isActive = dropdown.classList.contains('active');
      
      // Close other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
      
      // Smooth scroll into view if opening
      if (!isActive) {
        setTimeout(() => {
          dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
      }
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  
  // Add a class to disable transitions during resize
  document.body.classList.add('resize-animation-stopper');
  
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
    
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
  }, 400);
});
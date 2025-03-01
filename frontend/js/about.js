// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.trust-hero-section');
    const scrollPosition = window.pageYOffset;
    
    if (heroSection) {
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
  });

  // Add hover effect for team cards
  const teamCards = document.querySelectorAll('.trust-team-card');
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba 0, 0, 0, 0.05)';
    });
  });

  // Add hover effect for vision cards
  const visionCards = document.querySelectorAll('.trust-vision-card');
  visionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
  });

  // Add hover effect for service cards
  const serviceCards = document.querySelectorAll('.trust-service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      card.querySelector('.trust-service-icon').style.color = '#1a3a3a';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
      card.querySelector('.trust-service-icon').style.color = '#ff6b6b';
    });
  });

  // Add active state for navigation links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link'); // Assuming you'll add these in your navbar

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    if (navLinks.length > 0) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Slider
  const slides = document.querySelectorAll('.rcet-testimonial-slide');
  const dots = document.querySelectorAll('.rcet-dot');
  const prevBtn = document.querySelector('.rcet-prev-btn');
  const nextBtn = document.querySelector('.rcet-next-btn');
  
  let currentSlide = 0;
  
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto slide every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);

  // Animate stats counter when in viewport
  const statNumbers = document.querySelectorAll('.rcet-stat-number');
  
  function animateStats() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'));
      const count = +stat.innerText;
      
      const increment = target / 50; // Adjust speed
      
      if (count < target) {
        stat.innerText = Math.ceil(count + increment);
        setTimeout(animateStats, 30);
      } else {
        stat.innerText = target;
      }
    });
  }
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Start animation when stats section is in viewport
  let animationStarted = false;
  
  window.addEventListener('scroll', () => {
    if (!animationStarted && statNumbers.length > 0 && isInViewport(statNumbers[0])) {
      animationStarted = true;
      animateStats();
    }
  });

  // Form submission
  const contactForm = document.getElementById('rcetContactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demo purposes, we'll just log it and show an alert
      console.log({ name, email, phone, subject, message });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Animate elements on scroll
  const animateElements = document.querySelectorAll('[data-aos]');
  
  function checkScroll() {
    animateElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('aos-animate');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.rcet-hero');
  if (heroSection) {
    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }
});

// Add hover effects to program cards
const programCards = document.querySelectorAll('.rcet-program-card');
programCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
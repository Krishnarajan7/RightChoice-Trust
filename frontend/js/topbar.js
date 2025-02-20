// Add loading animation for logo
window.addEventListener('load', () => {
  const logo = document.querySelector('.rct_logo');
  const title = document.querySelector('.rct_main_title');
  
  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-20px)';
  title.style.opacity = '0';
  title.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    logo.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
    
    title.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s';
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }, 100);
});

// Add scroll effect for header
let lastScroll = 0;
const header = document.querySelector('.rct_header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});

// Initialize social media hover effects with improved animation
const socialLinks = document.querySelectorAll('.rct_social_link');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateY(-5px) rotate(8deg)';
  });
  
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateY(0) rotate(0)';
  });
});
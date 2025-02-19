document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Set initial active state
  document.querySelector('[data-filter="all"]').classList.add('active');

  // Filter functionality
  filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filterValue = this.getAttribute('data-filter');
          
          // Filter the gallery items
          galleryItems.forEach(item => {
              const itemCategory = item.getAttribute('data-category');
              
              if (filterValue === 'all' || filterValue === itemCategory) {
                  item.classList.remove('hidden');
                  item.style.opacity = '0';
                  item.style.transform = 'translateY(20px)';
                  
                  // Add a slight delay for a staggered animation effect
                  setTimeout(() => {
                      item.style.opacity = '1';
                      item.style.transform = 'translateY(0)';
                  }, 50);
              } else {
                  item.classList.add('hidden');
              }
          });

          // Smooth scroll with offset for sticky header
          const galleryGrid = document.querySelector('.gallery-grid');
          const headerHeight = document.querySelector('.filter-buttons').offsetHeight;
          const scrollTop = galleryGrid.offsetTop - headerHeight - 20;

          window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
          });
      });
  });

  // Add transition properties to gallery items
  galleryItems.forEach(item => {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });

  // Add lazy loading for images
  if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
          img.loading = 'lazy';
      });
  }
});
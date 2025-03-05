// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// // Add smooth scroll animation to college items
// document.querySelectorAll('.college-item').forEach(item => {
//   item.addEventListener('click', () => {
//     item.style.transform = 'scale(0.95)';
//     setTimeout(() => {
//       item.style.transform = 'scale(1)';
//     }, 200);
//   });
// });

// // Add hover effect to field cards
// document.querySelectorAll('.field-card').forEach(card => {
//   card.addEventListener('mouseenter', () => {
//     card.style.transform = 'translateY(-5px)';
//   });
  
//   card.addEventListener('mouseleave', () => {
//     card.style.transform = 'translateY(0)';
//   });
// });

// // PDF Export functionality for individual fields
// window.exportFieldToPDF = async function(fieldCard, fieldName) {
//   const loading = document.querySelector('.loading');
//   const exportBtn = fieldCard.querySelector('.card-export-btn');
  
//   // Show loading indicator
//   loading.classList.add('active');
//   exportBtn.style.opacity = '0.5';
//   exportBtn.disabled = true;
  
//   try {
//     // Create canvas from field card
//     const canvas = await html2canvas(fieldCard, {
//       scale: 2,
//       useCORS: true,
//       logging: false,
//       backgroundColor: '#ffffff'
//     });
    
//     // Create PDF
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4'
//     });
    
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();
//     const imgWidth = canvas.width;
//     const imgHeight = canvas.height;
//     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
//     const imgX = (pdfWidth - imgWidth * ratio) / 2;
//     const imgY = 30;
    
//     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
//     // Save the PDF
//     pdf.save(`colleges_${fieldName.toLowerCase()}.pdf`);
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     alert('There was an error generating the PDF. Please try again.');
//   } finally {
//     // Hide loading indicator and restore button
//     loading.classList.remove('active');
//     exportBtn.style.opacity = '1';
//     exportBtn.disabled = false;
//   }
// };

// Add interactive effects to the cards
document.addEventListener('DOMContentLoaded', function() {
  // Get all category cards
  const cards = document.querySelectorAll('.categoryCard');
  const modal = document.getElementById('notificationModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const closeModal = document.querySelector('.closeModal');
  
  // Add hover effects and click handlers
  cards.forEach(card => {
    // Parallax effect on mouse move
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Calculate rotation and movement values
      const rotateX = (0.5 - yPercent) * 8;
      const rotateY = (xPercent - 0.5) * 8;
      
      // Apply the transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      
      // Move background image slightly for parallax effect
      const moveX = (xPercent - 0.5) * 10;
      const moveY = (yPercent - 0.5) * 10;
      card.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
      
      // Add a subtle glow effect based on mouse position
      const glowX = x / rect.width * 100;
      const glowY = y / rect.height * 100;
      card.style.boxShadow = `
        0 15px 25px -5px rgba(0, 0, 0, 0.2),
        0 10px 10px -5px rgba(0, 0, 0, 0.1),
        0 0 20px 5px rgba(255, 255, 255, 0.1),
        inset 0 0 40px 5px rgba(255, 255, 255, 0.05)
      `;
      // Adjust overlay opacity based on mouse position
      const overlay = card.querySelector('.cardOverlay');
      const centerDistance = Math.sqrt(Math.pow(xPercent - 0.5, 2) + Math.pow(yPercent - 0.5, 2));
      const opacity = 0.5 - centerDistance * 0.3;
      overlay.style.background = `linear-gradient(to bottom, 
        rgba(0, 0, 0, ${opacity}), 
        rgba(0, 0, 0, ${opacity + 0.3}))`;
    });
    
    // Reset transform on mouse leave
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.backgroundPosition = '50% 50%';
      card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      
      const overlay = card.querySelector('.cardOverlay');
      overlay.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))';
    });
    
    // Add click handlers for buttons
    const viewButton = card.querySelector('.viewButton');
    const exportButton = card.querySelector('.exportButton');
    const categoryName = card.querySelector('.categoryTitle').textContent;
    
    viewButton.addEventListener('click', function(e) {
      // We're not preventing default here to allow the PDF to open in a new tab
      showModal('College List Opening', `Opening ${categoryName} college list in a new tab.`);
      
      // Add ripple effect to button
      createRippleEffect(e, this);
    });
    
    exportButton.addEventListener('click', function(e) {
      // We're not preventing default here to allow the PDF to download
      showModal('Download Started', `${categoryName} college list is being downloaded.`);
      
      // Add ripple effect to button
      createRippleEffect(e, this);
    });
  });
  
  // Create ripple effect for buttons
  function createRippleEffect(e, button) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add('active');
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // Modal functions
  function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add('show');
    
    // Add confetti effect for download
    if (title.includes('Download')) {
      createConfetti();
    }
    
    // Auto close after 3 seconds
    setTimeout(() => {
      closeModalFunction();
    }, 3000);
  }
  
  function closeModalFunction() {
    modal.classList.remove('show');
  }
  
  // Close modal when clicking the X
  closeModal.addEventListener('click', closeModalFunction);
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });
  
  // Add subtle background animation to cards
  cards.forEach(card => {
    // Create a subtle pulse animation for the card
    setInterval(() => {
      const overlay = card.querySelector('.cardOverlay');
      overlay.style.transition = 'background 3s ease';
      
      // Slightly vary the overlay opacity
      const baseOpacity = 0.5;
      const randomVariation = Math.random() * 0.1 - 0.05;
      const newOpacity = baseOpacity + randomVariation;
      
      overlay.style.background = `linear-gradient(to bottom, 
        rgba(0, 0, 0, ${newOpacity - 0.2}), 
        rgba(0, 0, 0, ${newOpacity + 0.2}))`;
    }, 3000);
  });
  
  // Create confetti effect for download modal
  function createConfetti() {
    const modalContent = document.querySelector('.modalContent');
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Random position, color, and animation delay
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = (Math.random() * 20 - 20) + '%';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
      confetti.style.animationDelay = Math.random() * 2 + 's';
      
      modalContent.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }
  
  // Create directory structure for PDFs
  function createDummyPDFs() {
    console.log('Note: In a real application, PDF files would be stored in a "pdfs" directory.');
    console.log('For this demo, clicking the buttons will show the modal but actual PDFs are not available.');
  }
  
  createDummyPDFs();
  
  // Add tilt effect to all cards on page scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    cards.forEach((card, index) => {
      const offset = (index % 2 === 0) ? 1 : -1;
      const tiltAmount = Math.sin(scrollPosition / 500) * 2 * offset;
      
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(${tiltAmount}deg) scale3d(1, 1, 1)`;
    });
  });
});
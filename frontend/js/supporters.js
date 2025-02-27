import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Add smooth scroll animation to college items
document.querySelectorAll('.college-item').forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = 'scale(0.95)';
    setTimeout(() => {
      item.style.transform = 'scale(1)';
    }, 200);
  });
});

// Add hover effect to field cards
document.querySelectorAll('.field-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// PDF Export functionality for individual fields
window.exportFieldToPDF = async function(fieldCard, fieldName) {
  const loading = document.querySelector('.loading');
  const exportBtn = fieldCard.querySelector('.card-export-btn');
  
  // Show loading indicator
  loading.classList.add('active');
  exportBtn.style.opacity = '0.5';
  exportBtn.disabled = true;
  
  try {
    // Create canvas from field card
    const canvas = await html2canvas(fieldCard, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
    // Save the PDF
    pdf.save(`colleges_${fieldName.toLowerCase()}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again.');
  } finally {
    // Hide loading indicator and restore button
    loading.classList.remove('active');
    exportBtn.style.opacity = '1';
    exportBtn.disabled = false;
  }
};
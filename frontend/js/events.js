// Sample data for ID cards
const idCards = [
  {
      id: 1,
      name: "Student 1",
      studentId: "2023001",
      department: "Computer Science",
      image: "/frontend/public/images/idcards/2025RCT0001.jpg",
      year: "2023-2024"
  }
].concat(Array.from({ length: 19 }, (_, i) => {
  const studentId = `2025RCT${String(i + 2).padStart(4, '0')}`;
  return {
      id: i + 2,
      name: `Student ${i + 2}`,
      studentId: studentId,
      image: `/frontend/public/images/idcards/${studentId}.jpg`,
      category: "id-cards"
  };
}));


function createIdCard(card) {
    return `
        <div class="card fade-in" data-category="id-cards">
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}'s ID Card">
                <span class="card-tag">ID Card</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${card.name}</h3>
            </div>
        </div>
    `;
}

// Category filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter cards
      cards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
              card.classList.remove('filtered-out');
          } else {
              card.classList.add('filtered-out');
          }
      });
  });
});

// ID Cards expansion functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
const idCardsSection = document.getElementById('idCardsSection');
const idCardsGrid = document.getElementById('idCardsGrid');
let idCardsVisible = false;

viewMoreBtn.addEventListener('click', () => {
  if (!idCardsVisible) {
      idCardsSection.classList.remove('hidden');
      idCardsGrid.innerHTML = '';
      idCards.forEach(card => {
          idCardsGrid.innerHTML += createIdCard(card);
      });
      viewMoreBtn.textContent = 'Hide ID Cards';
      idCardsVisible = true;
      
      // Smooth scroll to ID cards section
      idCardsSection.scrollIntoView({ behavior: 'smooth' });
  } else {
      idCardsSection.classList.add('hidden');
      viewMoreBtn.textContent = 'View ID Cards';
      idCardsVisible = false;
  }
});


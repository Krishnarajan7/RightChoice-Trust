
// Colleges data
const colleges = [
  {
      name: 'Anna University',
      location: 'Chennai',
      type: 'engineering',
      established: 'Est. 1978',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Anna+University',
      students: '8000+',
      faculty: '500+'
  },
  {
      name: 'Madras Institute of Technology',
      location: 'Chennai',
      type: 'engineering',
      established: 'Est. 1949',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=MIT',
      students: '3500+',
      faculty: '200+'
  },
  {
      name: 'Madras Medical College',
      location: 'Chennai',
      type: 'medical',
      established: 'Est. 1835',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=MMC',
      students: '2000+',
      faculty: '300+'
  },
  {
      name: 'Loyola College',
      location: 'Chennai',
      type: 'arts',
      established: 'Est. 1925',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Loyola+College',
      students: '6000+',
      faculty: '400+'
  },
  {
      name: 'PSG College of Technology',
      location: 'Coimbatore',
      type: 'engineering',
      established: 'Est. 1951',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=PSG+Tech',
      students: '7000+',
      faculty: '450+'
  },
  {
      name: 'Madurai Medical College',
      location: 'Madurai',
      type: 'medical',
      established: 'Est. 1954',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Madurai+Medical',
      students: '1500+',
      faculty: '250+'
  },
  {
      name: 'St. Joseph\'s College',
      location: 'Tiruchirappalli',
      type: 'arts',
      established: 'Est. 1844',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=St.+Joseph\'s',
      students: '5000+',
      faculty: '300+'
  },
  {
      name: 'Thiagarajar College of Engineering',
      location: 'Madurai',
      type: 'engineering',
      established: 'Est. 1957',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=TCE',
      students: '4000+',
      faculty: '250+'
  },
  {
      name: 'Presidency College',
      location: 'Chennai',
      type: 'arts',
      established: 'Est. 1840',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Presidency+College',
      students: '5500+',
      faculty: '350+'
  },
  {
      name: 'Coimbatore Medical College',
      location: 'Coimbatore',
      type: 'medical',
      established: 'Est. 1966',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=CMC',
      students: '1800+',
      faculty: '200+'
  },
  {
      name: 'Government College of Technology',
      location: 'Coimbatore',
      type: 'engineering',
      established: 'Est. 1945',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=GCT',
      students: '3500+',
      faculty: '220+'
  },
  {
      name: 'Bharathiar University',
      location: 'Coimbatore',
      type: 'arts',
      established: 'Est. 1982',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Bharathiar',
      students: '7000+',
      faculty: '400+'
  },
  {
      name: 'National Institute of Technology',
      location: 'Tiruchirappalli',
      type: 'engineering',
      established: 'Est. 1964',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=NIT+Trichy',
      students: '6500+',
      faculty: '380+'
  },
  {
      name: 'Stanley Medical College',
      location: 'Chennai',
      type: 'medical',
      established: 'Est. 1938',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Stanley',
      students: '1600+',
      faculty: '280+'
  },
  {
      name: 'Alagappa University',
      location: 'Karaikudi',
      type: 'arts',
      established: 'Est. 1985',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=Alagappa',
      students: '4500+',
      faculty: '300+'
  },
  {
      name: 'Kilpauk Medical College',
      location: 'Chennai',
      type: 'medical',
      established: 'Est. 1960',
      image: 'https://placehold.co/400x200/1a237e/ffffff?text=KMC',
      students: '1400+',
      faculty: '240+'
  }
];

// Function to create college card
function createCollegeCard(college) {
  return `
      <div class="supporters-card" data-type="${college.type}">
          <div class="supporters-image-wrapper">
              <img src="${college.image}" alt="${college.name}" class="supporters-image">
          </div>
          <div class="supporters-content">
              <h2 class="supporters-title">${college.name}</h2>
              <p class="supporters-location">${college.location}</p>
              <span class="supporters-type">${college.type.charAt(0).toUpperCase() + college.type.slice(1)}</span>
              <p class="supporters-established">${college.established}</p>
              <div class="supporters-stats">
                  <div class="supporters-stat">
                      <div class="supporters-stat-value">${college.students}</div>
                      <div class="supporters-stat-label">Students</div>
                  </div>
                  <div class="supporters-stat">
                      <div class="supporters-stat-value">${college.faculty}</div>
                      <div class="supporters-stat-label">Faculty</div>
                  </div>
              </div>
          </div>
      </div>
  `;
}

// Function to filter colleges
function filterColleges(filter) {
  const cards = document.querySelectorAll('.supporters-card');
  cards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

// Initialize the supporters section
function initSupporters() {
  const grid = document.getElementById('supporters-grid');
  grid.innerHTML = colleges.map(college => createCollegeCard(college)).join('');

  // Add filter functionality
  const filterButtons = document.querySelectorAll('.supporters-filter-btn');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          // Filter colleges
          filterColleges(button.dataset.filter);
      });
  });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initSupporters);
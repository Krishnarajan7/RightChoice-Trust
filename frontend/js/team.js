// Team members data
const teamMembers = [
  {
    name: 'L.Thanasekar',
    position: 'Co-Founder',
    image: '/frontend/public/images/thanasekar.jpg',
    description: 'Right Choice Education, 2/18 bharti nagar, Kutralam main road, Melagaram, Tenkasi - 627818'
 },
 {
      name: 'Dr.Sivakumar.',
      position: 'Global Delta Edu Life Services',
      image: '/frontend/public/images/sivakumar.jpg',
      description: 'P.N.Palayam, Coimbatore.'
  },
  {
      name: 'Dr.A.ArjunanDCE,B.E,M.E.Ph.D',
      position: 'Structural Engineer, KRA Civil and structural consultant',
      image: '/frontend/public/images/arjunan.jpg',
      description: 'Medical College road, Tanjavur.'
  },
  {
      name: 'S.Mohamed Naina Maricar., MBA.,LLB.',
      position: 'MNM Law Association',
      image: '/frontend/public/images/advocate.jpg',
      description: '458 Main Road,Nagore - 611002'
  }
];

// Function to create team member cards
function createTeamMemberCard(member) {
  return `
      <div class="team-section-member">
          <div class="team-section-member-image">
              <img src="${member.image}" alt="${member.name}">
          </div>
          <div class="team-section-member-info">
              <h2>${member.name}</h2>
              <h3>${member.position}</h3>
              <p>${member.description}</p>
          </div>
      </div>
  `;
}

// Render team members
function renderTeamMembers() {
  const teamGrid = document.getElementById('team-section-grid');
  teamGrid.innerHTML = teamMembers.map(member => createTeamMemberCard(member)).join('');
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', renderTeamMembers);
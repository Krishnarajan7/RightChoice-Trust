// Team members data
const teamMembers = [
  {
    name: 'L.Thanasekar',
    degree: 'B.E,M.E - MEchanical Engineer',
    position: 'CEO',
    image: '/frontend/public/images/thanasekar_rm.png',
    description: 'Tenkasi'
 },
 {
      name: 'Dr.Sivakumar',
      degree: 'M.E,.Ph.D',
      position: 'Career Advisor',
      image: '/frontend/public/images/sivakumar.jpg',
      description: 'Coimbatore'
  },
  {
      name: 'Dr.A.Arjunan',
      degree: 'DCE,B.E,M.E.Ph.D',
      position: 'Scholarships Organizer',
      image: '/frontend/public/images/arjunan_rm.png',
      description: 'Tanjavur'
  },
  {
      name: 'S.Mohamed Naina Maricar',
      degree:'MBA.,LLB.',
      position: 'Legal Analyzer',
      image: '/frontend/public/images/advocate_rm.png',
      description: 'Nagapattinam'
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
              <h6>${member.degree}</h6>
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
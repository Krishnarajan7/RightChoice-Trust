// Team members data
const teamMembers = [
  {
      name: 'Sarah Johnson',
      position: 'Technical Director',
      image: 'https://placehold.co/150x150',
      description: 'Leading our technical initiatives with expertise in software architecture and team leadership. Passionate about emerging technologies and scalable solutions.'
  },
  {
      name: 'Michael Chen',
      position: 'Creative Director',
      image: 'https://placehold.co/150x150',
      description: 'Bringing creative vision and innovation to our projects. Over 10 years of experience in design and brand strategy.'
  },
  {
      name: 'Emily Rodriguez',
      position: 'Senior Developer',
      image: 'https://placehold.co/150x150',
      description: 'Expert in full-stack development with a focus on creating efficient and maintainable code. Leading our core development initiatives.'
  },
  {
      name: 'David Kim',
      position: 'UX Designer',
      image: 'https://placehold.co/150x150',
      description: 'Creating intuitive and engaging user experiences. Specializes in user research and interaction design.'
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
const eventsData = [
  {
    id: 1,
    title: "Weekly Scholarship Meetup",
    date: "Every Sunday, 10:00 AM",
    description:
      "Join us every Sunday for our weekly scholarship meetup where we connect deserving students with life-changing opportunities. Our experienced counselors provide guidance on various scholarship programs, application processes, and educational pathways. Parents and students are welcome to participate in interactive sessions designed to unlock academic potential.",
    image: "/frontend/public/images/IMG-20250227-WA0007.jpg",
    category: "scholarship",
    location: "RightChoice Trust Office",
    highlights: [
      "One-on-one counseling sessions",
      "Scholarship application workshops",
      "Success stories from previous recipients",
      "Q&A sessions with education experts",
    ],
  },
//   {
//     id: 2,
//     title: "Annual Science Exhibition 2024",
//     date: "March 15, 2024",
//     description:
//       "Students showcased innovative science projects and experiments, demonstrating their understanding of various scientific concepts through interactive displays and presentations. The exhibition featured groundbreaking projects in robotics, environmental science, and sustainable technology.",
//     image:
//       "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800",
//     category: "academic",
//     location: "Science Block",
//     highlights: [
//       "Interactive science demonstrations",
//       "Robotics showcase",
//       "Environmental projects",
//       "Innovation awards ceremony",
//     ],
//   },
//   {
//     id: 3,
//     title: "Cultural Festival Celebrations",
//     date: "February 28, 2024",
//     description:
//       "A vibrant celebration of diverse cultures through dance, music, and theatrical performances, bringing together students from different backgrounds. The festival showcased traditional and contemporary art forms, fostering cultural understanding and appreciation.",
//     image:
//       "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?auto=format&fit=crop&q=80&w=800",
//     category: "cultural",
//     location: "Open Air Theatre",
//     highlights: [
//       "Traditional dance performances",
//       "Musical concerts",
//       "Art exhibitions",
//       "Cultural food festival",
//     ],
//   },
//   {
//     id: 4,
//     title: "Inter-School Sports Meet",
//     date: "January 20, 2024",
//     description:
//       "Annual sports competition featuring track and field events, team sports, and athletic demonstrations from talented students across different schools. The event promotes sportsmanship, physical fitness, and competitive spirit among young athletes.",
//     image:
//       "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
//     category: "sports",
//     location: "Sports Complex",
//     highlights: [
//       "Track and field events",
//       "Team sports competitions",
//       "Athletic demonstrations",
//       "Awards ceremony",
//     ],
//   },
];

document.addEventListener("DOMContentLoaded", () => {
  const eventsGrid = document.querySelector(".events-grid");
  const modal = document.querySelector(".event-modal");
  const filterButtons = document.querySelectorAll(".filter-btn");
  let currentFilter = "all";

  // Initialize events
  displayEvents(currentFilter);

  // Add text content to filter buttons
  filterButtons.forEach((button) => {
    const text = button.textContent;
    button.innerHTML = `<span>${text}</span>`;
  });

  // Filter button click handlers
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      currentFilter = filter;

      // Update active button with smooth transition
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.style.transform = "scale(0.95)";
      });
      button.classList.add("active");
      button.style.transform = "scale(1)";

      // Display filtered events with stagger effect
      displayEvents(filter);
    });
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal when clicking close button
  document.querySelector(".close-modal").addEventListener("click", closeModal);

  function displayEvents(filter) {
    eventsGrid.style.opacity = "0";

    setTimeout(() => {
      eventsGrid.innerHTML = "";

      const filteredEvents = eventsData.filter(
        (event) => filter === "all" || event.category === filter
      );

      filteredEvents.forEach((event, index) => {
        const eventCard = createEventCard(event);
        eventCard.style.animationDelay = `${index * 0.15}s`;
        eventsGrid.appendChild(eventCard);

        // Add show class after a brief delay to trigger animation
        setTimeout(() => {
          eventCard.classList.add("show");
        }, 50);
      });

      eventsGrid.style.opacity = "1";
    }, 300);
  }

  function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "event-card";

    const isScholarship = event.category === "scholarship";
    const cardContent = `
          <div class="event-image-container">
              <img src="${event.image}" alt="${
      event.title
    }" class="event-image">
              ${
                isScholarship
                  ? '<div class="event-badge">Weekly Event</div>'
                  : ""
              }
          </div>
          <div class="event-details">
              <h3 class="event-title">${event.title}</h3>
              <p class="event-date">📅 ${event.date}</p>
              <p class="event-location">📍 ${event.location}</p>
              <p class="event-description">${event.description.substring(
                0,
                100
              )}...</p>
              ${
                isScholarship
                  ? '<button class="register-btn">Register Now</button>'
                  : ""
              }
          </div>
      `;

    card.innerHTML = cardContent;

    if (isScholarship) {
        const registerBtn = card.querySelector(".register-btn");
        registerBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            window.location.href = "/frontend/pages/register.html";
        });
    }
    

    // Add hover effect for image zoom
    const imageContainer = card.querySelector(".event-image-container");
    imageContainer.addEventListener("mouseenter", () => {
      card.querySelector(".event-image").style.transform = "scale(1.15)";
    });
    imageContainer.addEventListener("mouseleave", () => {
      card.querySelector(".event-image").style.transform = "scale(1)";
    });

    card.addEventListener("click", () => openModal(event));
    return card;
  }

  function openModal(event) {
    const modalImage = modal.querySelector(".modal-image");
    const modalContent = modal.querySelector(".modal-details");

    modalImage.src = event.image;
    modalImage.alt = event.title;

    const isScholarship = event.category === "scholarship";
    const highlightsList = event.highlights
      ? `
          <div class="highlights-section">
              <h3>Program Highlights</h3>
              <ul class="highlights-list">
                  ${event.highlights
                    .map((highlight) => `<li>${highlight}</li>`)
                    .join("")}
              </ul>
              ${
                isScholarship
                  ? '<button class="register-btn modal-register">Register for Next Session</button>'
                  : ""
              }
          </div>
      `
      : "";

    modalContent.innerHTML = `
          <h2 class="modal-title">${event.title}</h2>
          <p class="modal-date">📅 ${event.date}</p>
          <p class="modal-location">📍 ${event.location}</p>
          <p class="modal-description">${event.description}</p>
          ${highlightsList}
      `;

    if (isScholarship) {
      const registerBtn = modalContent.querySelector(".modal-register");
      registerBtn.addEventListener("click", () => {
        alert("Registration form will open here!");
      });
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add smooth entrance animation for modal content
    setTimeout(() => {
      modalImage.style.transform = "scale(1.02)";
    }, 300);
  }

  function closeModal() {
    const modalImage = modal.querySelector(".modal-image");
    modalImage.style.transform = "scale(1)";

    setTimeout(() => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }, 200);
  }

  // Handle escape key press to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

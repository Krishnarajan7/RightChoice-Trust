// Sample data for ID cards
const idCards = [
  {
    id: 1,
    name: "Student 1",
    studentId: "2023001",
    department: "Computer Science",
    image: "/frontend/public/images/idcards/2025RCT0001.jpg",
    year: "2023-2024",
  },
].concat(
  Array.from({ length: 19 }, (_, i) => {
    const studentId = `2025RCT${String(i + 2).padStart(4, "0")}`;
    return {
      id: i + 2,
      name: `Student ${i + 2}`,
      studentId: studentId,
      image: `/frontend/public/images/idcards/${studentId}.jpg`,
      category: "id-cards",
    };
  })
);

// Sample data for trust schemes
const trustSchemes = Array.from({ length: 15 }, (_, i) => {
  const imageIndex = (i % 12) + 1; // Cycles through 1-12 for any number of schemes
  return {
    id: i + 1,
    title: `Trust Scheme ${i + 1}`,
    description: `This trust scheme provides financial assistance for ${
      ["education", "healthcare", "sports", "arts"][
        Math.floor(Math.random() * 4)
      ]
    } related expenses.`,
    amount: `₹${Math.floor(Math.random() * 50000) + 10000}`,
    deadline: new Date(
      Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),
    image: `/frontend/public/images/scheme/rc${imageIndex}.jpg`, // Uses rc1.jpg to rc12.jpg cyclically
  };
});

function createIdCard(card, isChild = false) {
  return `
        <div class="card fade-in" data-category="id-cards">
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}'s ID Card">
                <span class="card-tag">ID Card</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${card.name}</h3>
                ${
                  !isChild
                    ? `
                    <div class="card-details">
                        <p class="detail-item">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'%3E%3C/path%3E%3C/svg%3E" width="16" height="16" alt="ID">
                            ${card.studentId}
                        </p>
                        <p class="detail-item">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'%3E%3C/path%3E%3C/svg%3E" width="16" height="16" alt="department">
                            ${card.department}
                        </p>
                    </div>
                    <p class="card-description">Academic Year: ${card.year}</p>
                    <button class="action-btn view-details-btn">View Details</button>
                `
                    : ""
                }
            </div>
        </div>
    `;
}

function createTrustSchemeCard(scheme, isChild = false) {
  return `
        <div class="scheme-item" data-category="trust-schemes">
            <div class="scheme-image">
                <img src="${scheme.image}" alt="${scheme.title}">
            </div>
            <div class="scheme-overlay">
                <h3 class="scheme-title">${scheme.title}</h3>
            </div>
        </div>
    `;
}

// Category filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter cards
    cards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.classList.remove("filtered-out");
      } else {
        card.classList.add("filtered-out");
      }
    });
  });
});

// ID Cards expansion functionality
const viewMoreBtn = document.getElementById("viewMoreBtn");
const idCardsSection = document.getElementById("idCardsSection");
const idCardsGrid = document.getElementById("idCardsGrid");
let idCardsVisible = false;

viewMoreBtn.addEventListener("click", () => {
  if (!idCardsVisible) {
    idCardsSection.classList.remove("hidden");
    idCardsGrid.innerHTML = "";
    idCards.forEach((card) => {
      idCardsGrid.innerHTML += createIdCard(card, true);
    });
    viewMoreBtn.textContent = "Hide ID Cards";
    idCardsVisible = true;

    // Smooth scroll to ID cards section
    idCardsSection.scrollIntoView({ behavior: "smooth" });
  } else {
    idCardsSection.classList.add("hidden");
    viewMoreBtn.textContent = "View ID Cards";
    idCardsVisible = false;
  }
});

// Trust Schemes expansion functionality
const viewSchemesBtn = document.getElementById("viewSchemesBtn");
const trustSchemesSection = document.getElementById("trustSchemesSection");
const trustSchemesGrid = document.getElementById("trustSchemesGrid");
let schemesVisible = false;

viewSchemesBtn.addEventListener("click", () => {
  if (!schemesVisible) {
    trustSchemesSection.classList.remove("hidden");
    trustSchemesGrid.innerHTML = "";
    trustSchemes.forEach((scheme, index) => {
      trustSchemesGrid.innerHTML += createTrustSchemeCard(scheme, true);
    });
    viewSchemesBtn.textContent = "Hide Trust Schemes";
    schemesVisible = true;

    // Smooth scroll to trust schemes section
    trustSchemesSection.scrollIntoView({ behavior: "smooth" });

    // Add staggered animation to schemes
    const schemes = trustSchemesGrid.querySelectorAll(".scheme-item");
    schemes.forEach((scheme, index) => {
      setTimeout(() => {
        scheme.classList.add("visible");
      }, index * 150);
    });
  } else {
    trustSchemesSection.classList.add("hidden");
    viewSchemesBtn.textContent = "View Trust Schemes";
    schemesVisible = false;
  }
});

// Button click handlers
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-details-btn")) {
    alert("Student details will be shown here!");
  }
  if (e.target.classList.contains("scholarship-btn")) {
    alert("Scholarship application form will be shown here!");
  }
  if (e.target.classList.contains("event-btn")) {
    alert("Event registration form will be shown here!");
  }
  if (e.target.classList.contains("trust-scheme-btn")) {
    alert("Trust scheme application form will be shown here!");
  }
});

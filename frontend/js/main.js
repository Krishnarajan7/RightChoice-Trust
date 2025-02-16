const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Close all dropdowns when closing the menu
    if (!navLinks.classList.contains('active')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Handle dropdowns correctly in mobile view
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            const isActive = dropdown.classList.contains('active');

            // Close all other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                    other.querySelector('.dropdown-content').classList.remove('show');
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle('active');

            // Smooth transition for dropdown
            if (isActive) {
                dropdownContent.classList.remove("show");
            } else {
                dropdownContent.classList.add("show");
                setTimeout(() => {
                    dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    }
});

// Remove extra event listener that was causing conflicts
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        dropdown.classList.remove("show");
    });
});

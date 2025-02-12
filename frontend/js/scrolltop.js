// Create scroll to top button with unique class name
const backToTopBtn = document.createElement('button')
backToTopBtn.className = 'back-to-top-btn'
backToTopBtn.innerHTML = '↑'
document.body.appendChild(backToTopBtn)

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('show-scroll-btn')
  } else {
    backToTopBtn.classList.remove('show-scroll-btn')
  }
})

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

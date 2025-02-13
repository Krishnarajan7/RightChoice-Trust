document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// Footer Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Update current year
  const currentYearElement = document.getElementById('rcCopyrightYear')
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // Quick Links hover effect
  const primaryLinks = document.getElementById('rcPrimaryLinks')
  const secondaryLinks = document.getElementById('rcSecondaryLinks')

  const handleLinksHover = (element) => {
    if (element) {
      element.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A') {
          const links = element.querySelectorAll('a')
          links.forEach(link => {
            if (link !== e.target) {
              link.style.opacity = '0.5'
            }
          })
        }
      })

      element.addEventListener('mouseout', () => {
        const links = element.querySelectorAll('a')
        links.forEach(link => {
          link.style.opacity = '1'
        })
      })
    }
  }

  handleLinksHover(primaryLinks)
  handleLinksHover(secondaryLinks)

  // Floating images animation
  const floatingImages = document.querySelectorAll('.rc-footer__float-img')
  let animationFrame

  const animateImages = () => {
    const time = Date.now() * 0.001
    floatingImages.forEach((img, index) => {
      const offsetY = Math.sin(time + index) * 15
      const offsetX = Math.cos(time + index) * 15
      img.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${index === 0 ? '15deg' : '-15deg'})`
    })
    animationFrame = requestAnimationFrame(animateImages)
  }

  // Start animation
  animateImages()

  // Clean up animation on page unload
  window.addEventListener('unload', () => {
    cancelAnimationFrame(animationFrame)
  })
})

setupCounter(document.querySelector('#counter'))
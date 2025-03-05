const quotes = [
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    image: "/frontend/public/images/gandhi.jpg",
  },
  {
    text: "You have to dream before your dreams can come true.",
    author: "A.P.J. Abdul Kalam",
    image: "/frontend/public/images/APJ.jpg",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Swami Vivekananda",
    image: "/frontend/public/images/swami.jpg",
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "B.R.Ambedkar",
    image: "/frontend/public/images/Ambedkar.jpg",
  },
  {
    text: "Excellence is a continuous process and not an accident.",
    author: "K.Kamaraj",
    image: "/frontend/public/images/kamaraj.jpeg",
  },
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteImage = document.querySelector(".quote-image");
const quoteContainer = document.querySelector(".quote-container");
let currentIndex = 0;

function updateQuote() {
  const quote = quotes[currentIndex];

  // Add exit animations
  quoteText.classList.add("exit");
  quoteAuthor.classList.add("exit");
  quoteImage.classList.add("exit");

  setTimeout(() => {
    // Update content
    quoteText.innerHTML = `"${quote.text}"`;
    quoteAuthor.innerHTML = `- ${quote.author}`;
    quoteImage.innerHTML = `<img src="${quote.image}" alt="${quote.author}">`;

    // Remove exit and add entrance animations
    quoteText.classList.remove("exit");
    quoteAuthor.classList.remove("exit");
    quoteImage.classList.remove("exit");

    // Add random color theme
    const hue = 210 + Math.random() * 40; // Generate a hue between 210 and 250 (blue shades)
    quoteContainer.style.background = `linear-gradient(135deg, 
  hsla(${hue}, 70%, 20%, 0.95), 
  hsla(${hue + 30}, 70%, 25%, 0.95))`;

    // Update index
    currentIndex = (currentIndex + 1) % quotes.length;
  }, 500);
}

// Initial quote
updateQuote();

// Update quote every 5 seconds
setInterval(updateQuote, 5000);

// Add hover effect for image
quoteImage.addEventListener("mousemove", (e) => {
  const img = quoteImage.querySelector("img");
  const rect = quoteImage.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  img.style.transform = `
    scale(1.1)
    rotateX(${y * 10}deg)
    rotateY(${x * 10}deg)
  `;
});

quoteImage.addEventListener("mouseleave", () => {
  const img = quoteImage.querySelector("img");
  img.style.transform = "scale(1) rotateX(0) rotateY(0)";
});

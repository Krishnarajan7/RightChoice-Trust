const quotes = [
  {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      image: "/frontend/public/images/mandela.jpg"
  },
  {
      text: "A child without education is like a bird without wings.",
      author: "A.P.J. Abdul kalam",
      image: "/frontend/public/images/APJ.jpg"
  },
  {
      text: "The foundation of every state is the education of its youth.",
      author: "Dr. B.R. Ambedkar",
      image: "/frontend/public/images/Ambedkar.jpg"
  },
  {
      text: "No one should be deprived of education due to poverty. Education is a birthright.",
      author: "K. Kamaraj",
      image: "/frontend/public/images/kamaraj.jpeg"
  },
  {
    text: "Give me educated mothers, I will give you a great nation.",
    author: "Mahatma Gandhi",
    image: "/frontend/public/images/gandhi.jpg"
  }
];

let currentQuoteIndex = 0;

function showNextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const heroImage = document.getElementById('hero-image');

  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;
  heroImage.style.opacity = 0;

  setTimeout(() => {
      quoteText.textContent = `"${quotes[currentQuoteIndex].text}"`;
      quoteAuthor.textContent = `- ${quotes[currentQuoteIndex].author}`;
      heroImage.src = quotes[currentQuoteIndex].image;

      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
      heroImage.style.opacity = 1;
  }, 700);
}

setInterval(showNextQuote, 5000);

document.addEventListener('DOMContentLoaded', showNextQuote);
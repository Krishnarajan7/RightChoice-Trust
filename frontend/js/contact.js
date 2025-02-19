// Frontend JavaScript for form handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
    purposes: Array.from(document.querySelectorAll('input[name="purpose"]:checked'))
      .map(checkbox => checkbox.value)
  };

  try {
    // Replace this URL with your Google Apps Script web app URL
    const response = await fetch('https://script.google.com/macros/s/AKfycbwqFIQd_jc7A0yBfK79lM9sYT3sY5nedo7036k4QDqJJgCSOQgYW6akv6mr6-0UyI9maw/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString()
    });

    // Clear the form
    document.getElementById('contactForm').reset();
    alert('Thank you for your enquiry. We will get back to you soon!');
    
  } catch (error) {
    console.error('Error:', error);
    alert('Sorry, there was an error submitting the form. Please try again.');
  }
});


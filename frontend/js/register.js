document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = {
      studentName: document.getElementById('studentName').value,
      mobileNumber: document.getElementById('mobileNumber').value,
      whatsappNumber: document.getElementById('whatsappNumber').value,
      age: document.getElementById('age').value,
      dateOfBirth: document.getElementById('dateOfBirth').value,
      community: document.getElementById('community').value,
      schoolName: document.getElementById('schoolName').value,
      district: document.getElementById('district').value,
      studyingGroup: document.getElementById('studyingGroup').value,
      courseWillingness: document.getElementById('courseWillingness').value
  };
  
  // Log form data (you can modify this to send to a server)
  console.log('Form submitted:', formData);
  
  // Optional: Show success message
  alert('Form submitted successfully!');
  
  // Optional: Reset form
  this.reset();
});
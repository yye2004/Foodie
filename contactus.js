document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for validation

  let valid = true;

  // Clear previous error messages
  clearErrors();

  // Validate Name
  const name = document.getElementById('name').value;
  if (name.trim() === '') {
      showError('nameError', 'Name is required.');
      valid = false;
  }

  // Validate Phone
  const phone = document.getElementById('phone').value;
  const phonePattern = /^\d{10,11}$/;
  if (!phonePattern.test(phone)) {
      showError('phoneError', 'Phone number must be either 10 or 11 digits.');
      valid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      showError('emailError', 'Please enter a valid email address.');
      valid = false;
  }

  // Validate Enquiry Type
  const enquiry = document.getElementById('enquiry').value;
  if (enquiry === '') {
      showError('enquiryError', 'Please select an enquiry type.');
      valid = false;
  }

  // Validate Details
  const details = document.getElementById('details').value;
  if (details.trim() === '') {
      showError('detailsError', 'Please enter the details of your enquiry.');
      valid = false;
  }

  if (valid) {
      alert('Your enquiry is successfully sent! We will get back to you as soon as possible. Redirecting to home page...');
     window.location.href = 'index.html';
  }
});

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
  errorElement.style.color = 'red';
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(function(element) {
      element.textContent = '';
  });
}

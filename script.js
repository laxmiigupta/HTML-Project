document.getElementById('contact-form').addEventListener('submit', function (event) {
    let valid = true;
  
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
      valid = false;
      nameError.textContent = 'Name is required.';
      nameError.style.display = 'block';
    } else {
      nameError.textContent = '';
      nameError.style.display = 'none';
    }
  
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      emailError.textContent = 'Please enter a valid email.';
      emailError.style.display = 'block';
    } else {
      emailError.textContent = '';
      emailError.style.display = 'none';
    }
  
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
      valid = false;
      messageError.textContent = 'Message is required.';
      messageError.style.display = 'block';
    } else {
      messageError.textContent = '';
      messageError.style.display = 'none';
    }
  
    // Prevent form submission if invalid
    if (!valid) {
      event.preventDefault();
    }
  });
  
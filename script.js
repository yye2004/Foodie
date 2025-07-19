function toggleForm() {
    var loginContainer = document.getElementById('login-container');
    var signupContainer = document.getElementById('signup-container');
    var forgotPasswordContainer = document.getElementById('forgot-password-container');

    if (signupContainer.style.display === "none") {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
        forgotPasswordContainer.style.display = "none";
    } else {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
        forgotPasswordContainer.style.display = "none";
    }
}

function showForgotPasswordForm() {
  var loginContainer = document.getElementById('login-container');
  var forgotPasswordContainer = document.getElementById('forgot-password-container');

  loginContainer.style.display = "none";
  forgotPasswordContainer.style.display = "block";
}

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Login successful! Redirecting to home page...');
  setTimeout(function() {
      window.location.href = 'index.html';
  }, 0);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Sign up successful! Please login.');
  toggleForm();
});

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Password reset link has been sent to email. Redireting to login page...');
  setTimeout(function() {
      window.location.href = 'login.html';
  }, 0);
});


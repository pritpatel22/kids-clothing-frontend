// Function to toggle the login box and change background color
function logintoggle() {
  document.getElementById("login-toggle-btn").style.backgroundColor = "#117a7a";
  document.getElementById("register-toggle-btn").style.backgroundColor = "transparent";
  document.getElementById("login-box").style.display = "block";
  document.getElementById("register-box").style.display = "none";
}

// Function to toggle the register box and change background color
function registertoggle() {
  document.getElementById("login-toggle-btn").style.backgroundColor = "transparent";
  document.getElementById("register-toggle-btn").style.backgroundColor = "#117a7a";
  document.getElementById("login-box").style.display = "none";
  document.getElementById("register-box").style.display = "block";
}

// Add event listeners to the toggle buttons
document.getElementById("login-toggle-btn").addEventListener("click", logintoggle);
document.getElementById("register-toggle-btn").addEventListener("click", registertoggle);

// Function to handle form submission
function submitLoginForm(event) {
  event.preventDefault(); // Prevent default form submission behavior


  // Redirect user to main.html
  window.location.href = "main.html";
}

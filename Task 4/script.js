function toggleRegister() {
  document.getElementById("registerBox").classList.toggle("hidden");
}

function register() {
  if (!newUser.value || !newPass.value) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem(newUser.value, newPass.value);
  localStorage.setItem("loggedIn", true);
  localStorage.setItem("currentUser", newUser.value);
  window.location.href = "welcome.html";
}

function login() {
  if (localStorage.getItem(username.value) === password.value) {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("currentUser", username.value);
    window.location.href = "welcome.html";
  } else {
    alert("Invalid credentials");
  }
}

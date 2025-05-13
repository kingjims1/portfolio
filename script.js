function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function validateForm() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (email === "" || message === "") {
      alert("Please fill out all fields.");
      return false;
  }
  alert("Message sent!");
  return true;
}

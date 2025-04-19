function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "meinpasswort123";

  if (input === correctPassword) {
    window.location.href = "seite1.html";
  } else {
    document.getElementById("error").textContent = "Falsches Passwort!";
  }
}
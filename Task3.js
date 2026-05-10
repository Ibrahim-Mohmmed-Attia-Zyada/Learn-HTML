document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message").value;

    // Required fields
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      message === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Email check
    if (!email.endsWith("@azhar.adu.eg")) {
      alert("Email must end with @azhar.adu.eg");
      return;
    }

    // Password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    // Success
    alert("Form submitted successfully ✔");

    window.location.href = "HTML.html";
  });
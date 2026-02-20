document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Minimum 6 characters required";
        isValid = false;
    }

    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").textContent = "Enter valid 10-digit mobile number";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }

});
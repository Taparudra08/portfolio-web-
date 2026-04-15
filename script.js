// Button Interaction
function sayHello() {
    alert("Welcome to my portfolio, Boss 🚀");
}

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Enter a valid email!";
        return false;
    }

    error.style.color = "lightgreen";
    error.innerText = "Message sent successfully!";
    return false; // prevent actual submission (for demo)
}

// Mouse Events (Cool Effect)
let skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.1)";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});
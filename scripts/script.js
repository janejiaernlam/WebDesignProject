// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    let valid = true;

    // Get input values
    //.value getting value from user and .trim is removing any extra spaces before and after text
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check if fields are filled
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // email validation
    if (!email.includes("@") || !email.includes(".") || email === "") {
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // message validation
    if (message === "") {
        document.getElementById("messageError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    // Show success alert if all fields are valid
    if (valid) {
        alert("Thank you for your message 🙂");
        this.reset();
    }
}
);

function filterProducts(category) {
    const cards = document.querySelectorAll('.card'); // select all cards

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const parentCol = card.parentElement; // column div

        if (category === 'all' || cardCategory === category) {
            parentCol.style.display = 'block'; // show column
        } else {
            parentCol.style.display = 'none';  // hide column
        }
    });
}


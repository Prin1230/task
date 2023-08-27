document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // You can add code here to handle form submission, like sending an email or displaying a thank you message.
        
        // For now, let's just alert a message.
        alert("Message sent successfully!");
    });
});

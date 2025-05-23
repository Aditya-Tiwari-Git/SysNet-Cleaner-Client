document.addEventListener("DOMContentLoaded", () => {
  // Render all dynamic content
  renderFeatures();
  renderPricing();
  renderTestimonials();

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Contact form submission handler
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('[name="name"]').value;
    const email = this.querySelector('[name="email"]').value;
    const message = this.querySelector('[name="message"]').value;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "n8dl54pc7g@vafyxh.com",
      Password: "6141AE58F6080C5C08BABB1BAE740B99713A",
      To: "info@sysnetcleaner.com",
      From: "n8dl54pc7g@vafyxh.com",
      Subject: `New Contact Form Message from ${name}`,
      Body: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });
  });
});
// Function to show success message
function showSuccessMessage() {
  const successMessage = document.getElementById("success-message");
  const overlay = document.getElementById("overlay");

  successMessage.classList.remove("hidden");
  overlay.classList.remove("hidden");

  successMessage.classList.add("slide-in");
  overlay.classList.add("fade-in");
}

// Function to close success message
function closeSuccessMessage() {
  const successMessage = document.getElementById("success-message");
  const overlay = document.getElementById("overlay");

  successMessage.classList.add("hidden");
  overlay.classList.add("hidden");

  successMessage.classList.remove("slide-in");
  overlay.classList.remove("fade-in");
}

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Send form data to Web3Forms
    fetch(this.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Show success message
          showSuccessMessage();
          // Reset form
          this.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

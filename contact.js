const spinner = document.getElementById("spinner");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("message-box");
  
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
      
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const honeypot = form.website.value;
      
        messageBox.textContent = "";
        spinner.style.display = "block"; // Show spinner
      
        if (!name || !email || !message) {
          messageBox.textContent = "Please fill in all fields.";
          messageBox.style.color = "red";
          spinner.style.display = "none"; // Hide spinner
          return;
        }
      
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          messageBox.textContent = "Please enter a valid email.";
          messageBox.style.color = "red";
          spinner.style.display = "none"; // Hide spinner
          return;
        }
      
        if (honeypot) return;
      
        const formData = new FormData(form);
      
        try {
          const response = await fetch("contact.php", {
            method: "POST",
            body: formData
          });
      
          const text = await response.text();
          messageBox.textContent = text.includes("successfully")
            ? "Message sent!"
            : "Failed to send.";
          messageBox.style.color = text.includes("successfully") ? "green" : "red";
      
          if (text.includes("successfully")) {
            form.reset();
          }
        } catch (error) {
          messageBox.textContent = "Error sending message. Please try again later.";
          messageBox.style.color = "red";
        }
      
        spinner.style.display = "none"; // Hide spinner after response
      })
    });
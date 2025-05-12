function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    const form = event.target;
    const fromEmail = form.from.value;  // Get the email of the sender
    const message = form.message.value; // Get the message content
  
    // Prepare the template parameters
    const templateParams = {
      from_name: fromEmail,  // Use the 'from' email as the sender's name
      from_email: fromEmail, // Set the sender's email (dynamic)
      to_name: "Justin Faderanga", // Static value for recipient's name
      to_email: "faderangajustin@gmail.com", // Static recipient email
      message: message, // The message content
      subject: "Message from Portfolio Contact Form" // Subject of the email
    };
  
    // Send the email via EmailJS
    emailjs.send('service_mjfwfcg', 'template_j53frc6', templateParams)
      .then(response => {
        console.log("Email sent successfully!", response);
        document.getElementById("success-msg").style.display = "block";
        document.getElementById("error-msg").style.display = "none";
      })
      .catch(error => {
        console.error("Error sending email:", error);
        document.getElementById("error-msg").style.display = "block";
        document.getElementById("success-msg").style.display = "none";
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", sendMail);
  });

  
document.querySelectorAll('.nav-right li a').forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent immediate page navigation
    event.preventDefault();
    
    // Trigger exit animation
    animateExit();

    // After exit animation completes, navigate to the clicked page
    const targetUrl = link.getAttribute('href');
    setTimeout(() => {
      window.location.href = targetUrl; // Navigate after animation
    }, 600); // 600ms to match the duration of the animation
  });
});

function animateExit() {
  // Add the exit-animation class to the body or the container
  document.body.classList.add("exit-animation");

  // Optional: You can also animate the navigation menu or other elements here if needed
}

const navToggle = document.querySelector('.nav-toggle');
  const navRight = document.querySelector('.nav-right');

  navToggle.addEventListener('click', () => {
    navRight.classList.toggle('show');
  });
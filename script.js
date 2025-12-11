emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const templateParams = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};

	emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
		.then((response) => {
			statusDiv.textContent = "Email sent successfully!";
			statusDiv.style.color = "green";
			form.reset();
		})
		.catch((error) => {
			statusDiv.textContent = "Failed to send email. Please try again.";
			statusDiv.style.color = "red";
			console.error("EmailJS error:", error);
		});
});

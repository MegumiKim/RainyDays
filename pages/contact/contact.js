import { validateContactForm } from "../../components/validateForm.js";
import { displayMessage } from "../../components/displayMessage.js";

const contactForm = document.querySelector(".contact-form");
const userAlert = document.querySelector(".user-alert");

contactForm.onsubmit = function (event) {
  console.log("hi");
  event.preventDefault();
  if (validateContactForm()) {
    userAlert.innerHTML = displayMessage(
      "success",
      "Thank you for your message"
    );
    contactForm.reset();
  } else {
    userAlert.innerHTML = displayMessage(
      "error",
      "Please fill all the required fields"
    );
  }
};

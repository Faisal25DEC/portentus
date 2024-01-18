const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");
console.log(contactMessage);
console.log(contactSubject);
const sendEmail = (e) => {
  e.preventDefault();
  console.log("hey");
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Write all the input fields";
    console.log(contactMessage);
  } else {
    console.log("in else");
    emailjs
      .sendForm(
        "service_dfop9pr",
        "template_7wja36r",
        "#contact-form",
        "OO6-VkijNLIANsWdu"
      )
      .then(() => {
        //show message and add color
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message sent ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 4000);
      })
      .catch((err) => {
        contactMessage.classList.add("color-red");
        contactMessage.textContent = "OOPS! something went wrong";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      });
  }
  contactEmail.value = "";
  contactName.value = "";
  contactSubject.value = "";
};
contactForm.addEventListener("submit", sendEmail);

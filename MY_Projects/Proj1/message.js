// Handle form submission so alert shows only after successful validation
const form = document.getElementById("data-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (form.checkValidity()) {
    alert("Hey Your Details have been submitted.");
    form.reset();
  } else {
    form.reportValidity();
  }
});
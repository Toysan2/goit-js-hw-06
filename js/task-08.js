const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  if (!formValues.email || !formValues.password) {
    alert("Wypełnij wszystkie pola formularza.");
  } else {
    console.log("Dane formularza:", formValues);

    loginForm.reset();
  }
});

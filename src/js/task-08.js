const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formElements = loginForm.elements;

  const formValues = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== "submit") {
      formValues[element.name] = element.value;
    }
  }

  if (!formValues.email || !formValues.password) {
    alert("Wypełnij wszystkie pola formularza.");
  } else {
    console.log("Dane formularza:", formValues);

    loginForm.reset();
  }
});

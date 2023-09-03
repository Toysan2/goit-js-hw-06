const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById("value");

let counterValue = 0;

function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();

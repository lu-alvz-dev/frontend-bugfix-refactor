function calculateTotal() {
  const value1 = Number(document.getElementById("value1").value);
  const value2 = Number(document.getElementById("value2").value);
  //conversion text to number, using Number()
  const resultElement = document.getElementById("result");

  // Validation
  if (isNaN(value1) || isNaN(value2)) {
    resultElement.innerText = "Please enter valid numbers";
    return;
  }

  const total = value1 + value2;

  resultElement.innerText = total;
}

function init() {
  document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateTotal);
}
// call init() once
init();

let total = 0;

function calculateTotal() {
  const v1 = Number(document.getElementById("value1").value);
  const v2 = Number(document.getElementById("value2").value);
  //conversion text to number, using Number()
  const resultElement = document.getElementById("result");

  // Validation
  if (isNaN(v1) || isNaN(v2)) {
    resultElement.innerText = "Please enter valid numbers";
    return;
  }

  const total = v1 + v2;

  resultElement.innerText = total;
}

function init() {
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", calculateTotal);
}
// call init() once
init();

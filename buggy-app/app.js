let total = 0;

function calculateTotal() {
  const v1 = document.getElementById("value1").value;
  const v2 = document.getElementById("value2").value;

  // BUG 1: concatenation instead of addition
  total = v1 + v2;

  document.getElementById("result").innerText = total;
}

function init() {
  const button = document.getElementById("calculateBtn");

  // BUG 2: event listener added multiple times
  button.addEventListener("click", calculateTotal);
}

init();
init(); // BUG 3: duplicate initialization

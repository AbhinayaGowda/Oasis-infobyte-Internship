let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearAll() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.innerText.replace("÷", "/").replace("×", "*");
    display.innerText = eval(expression);
  } catch {
    display.innerText = "Error";
  }
}

function square() {
  try {
    display.innerText = Math.pow(eval(display.innerText), 2);
  } catch {
    display.innerText = "Error";
  }
}

function sqrt() {
  try {
    display.innerText = Math.sqrt(eval(display.innerText));
  } catch {
    display.innerText = "Error";
  }
}

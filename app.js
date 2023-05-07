const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));

  } else if (btnValue === "c") {
    output = "";
  } else if (btnValue === "←") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
}

//Add event listner to buttons, call calculate on click
buttons.forEach((button) => {
  //Button click listener will call calculate() with dataset vaule as argument
  button.addEventListener('click', (e) => {
    calculate(e.target.dataset.value);
  })
})
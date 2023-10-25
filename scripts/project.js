document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = ""; // The current input (number or operator)
  let firstOperand = "";
  let operator = "";
  let secondOperand = "";

  // Add a click event listener to each button
  buttons.forEach(function (button) {
      button.addEventListener("click", function () {
          const value = button.getAttribute("data-value");

          if (!isNaN(value) || value === ".") {
              // If the button clicked is a number or a decimal point
              currentInput += value;
              display.value = currentInput;
          } else if (value === "C") {
              // Clear the calculator
              currentInput = "";
              firstOperand = "";
              operator = "";
              secondOperand = "";
              display.value = "";
          } else if (value === "=") {
              // Calculate the result
              if (firstOperand && operator && currentInput !== "") {
                  secondOperand = currentInput;
                  const result = calculate(firstOperand, operator, secondOperand);
                  display.value = result;
                  currentInput = result;
                  firstOperand = result;
                  operator = "";
                  secondOperand = "";
              }
          } else {
              // Set the operator
              if (currentInput !== "") {
                  firstOperand = currentInput;
                  operator = value;
                  currentInput = "";
              }
          }
      });
  });

  // Function to perform calculations
  function calculate(num1, operator, num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (operator) {
          case "+":
              return (num1 + num2).toString();
          case "-":
              return (num1 - num2).toString();
          case "*":
              return (num1 * num2).toString();
          case "/":
              return (num1 / num2).toString();
          default:
              return "Error";
      }
  }
});

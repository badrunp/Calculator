const evaluate = function ({ currentOperand, previousOperand, operation }) {
  const current = parseInt(currentOperand);
  const prev = parseInt(previousOperand);
  if (isNaN(current) || isNaN(prev)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "*":
      computation = prev * current;
      break;
  }
  return computation.toString();
};

export default evaluate;

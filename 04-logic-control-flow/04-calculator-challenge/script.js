/* 
  Create a function call calculator that takes three parameters:
  num1, num2, and operator. The operator can be +, -, *, or /.
  The function should return the result of the calculation. If anything other than
  the four operators are passed in, the function should return an error message.

  Examples:
  calculator(5, 2, '+') // Returns 7
  calculator(5, 2, '-') // Returns 3
  calculator(5, 2, '*') // Returns 10
  calculator(5, 2, '/') // Returns 2.5
  calculator(5, 2, '&') // Returns an error message
*/

// My solution (Still works)
// function calculator(num1, num2, operator) {

//   switch(true) {
//     case operator == '+':
//       return num1 + num2;
//     break;
//     case operator == '-':
//       return num1 - num2;
//     break;
//     case operator == '*':
//       return num1 * num2;
//     break;
//     case operator == '/':
//       return num1 / num2;
//     break;
//     default:
//       return `Please one of the four valid operators of + - * or /`;
//   }

// }

// console.log(calculator(15, 2, '/'));

// Brads code was cleaner
function calculator(num1, num2, operator) {
  let result;

  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = `Ivalid Operator`;
  }

  console.log(result);
  return result;
}

calculator(15, 2, '/');
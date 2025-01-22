let name = "Jphn Doe"
let age = 25
let Is_Student = true

console.log(name, age, Is_Student)

console.log(typeof name,typeof age,typeof Is_Student)


function myFunction() {
    let first_number = prompt("enter number1"); 
    let second_number = prompt("enter number2"); 
    const operation = prompt(
      "Choose an operation: + for addition, - for subtraction, * for multiplication, / for division"
    );
    // Validate input for numbers
    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }
    // Perform calculation based on operation
    let result;
    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        result = number1 / number2;
        break;
      default:
        alert("Invalid operation. Please choose +, -, *, or /.");
        return;
    }
  
    // Display the result
    alert(`The result of ${number1} ${operation} ${number2} is: ${result}`);
}
// Call the calculator function
console.log(myFunction());

function greetUser(name) {
    return `Hello, ${name}!`;
}

// Function to display the greeting message in the HTML element
function showGreeting() {
    const nameInput = document.getElementById("nameInput").value; // Get the user's name from the input field
    const greetingElement = document.getElementById("greeting");
    if (nameInput.trim() === "") {
        greetingElement.textContent = "Please enter your name."; // Handle empty input
      } else {
        greetingElement.textContent = greetUser(nameInput); // Set the greeting message
      }
}

function checkVotingEligibility() {
    const age = prompt("Please enter your age:")

    const eligibilityElement = document.getElementById("eligibility");

    // Validate the input and check voting eligibility
    if (isNaN(age) || age.trim() === "") {
     eligibilityElement.textContent = "Invalid input. Please enter a valid number.";
    } else if (age >= 18) {
     eligibilityElement.textContent = "You are eligible to vote!";
    } else {
     eligibilityElement.textContent = "You are not eligible to vote. You must be at least 18 years old.";
    }

    const numberList = document.getElementById("numberList");

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        // Append the <li> element to the <ol> element
        numberList.appendChild(listItem);
    }
}


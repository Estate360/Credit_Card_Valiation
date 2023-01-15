const prompt = require("prompt-sync")({ sigint: true });

const set1 = / hello[0-9]/.test("hello");
console.log(set1);

const set2 = /^\S+@+\S+\.?\S+$/.test("hello@gmail.com");
console.log(set2);

const set3 = /favou?r/.test("favor");
console.log(set3);

function isValidMasterCardNumber() {
  const masterCardNumber = prompt("Enter your card number: ");
  // Regex to check valid MasterCard_Number
 let regex = new RegExp(/^(?:5[1-5][0-9]{14})$/);
  // let regex = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);

  // Check for validity of card
  if (regex.test(masterCardNumber) == true) {
    console.log(`Your Master card number ${masterCardNumber} is valid`);
    const retry = prompt("Do you still want to retry your action ? ");
    if (
      retry.includes("YES") ||
      retry.includes("Yes") ||
      retry.includes("YEs") ||
      retry.includes("YeS") ||
      retry.includes("yes") ||
      retry.includes("y") ||
      retry.includes("Y")
    ) {
      return isValidMasterCardNumber();
    } else {
      console.log("Thank you for testing the validity of your credit card😉.");
    }
  } else {
    console.log(`Invalid card!. Please input your credit card number!`);
    const retry = prompt("Do you want to retry your action ? ");
    if (
      retry.includes("YES") ||
      retry.includes("Yes") ||
      retry.includes("YEs") ||
      retry.includes("YeS") ||
      retry.includes("yes") ||
      retry.includes("y") ||
      retry.includes("Y")
    ) {
      return isValidMasterCardNumber();
    } else {
      console.log("Thank you for testing the validity of your credit card😉.");
    }
  }
}

isValidMasterCardNumber();


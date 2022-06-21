reply = "Yes"
while (reply == "Yes") {
    let num1 = Number(prompt("Enter a number"));
    let num2 = Number(prompt("Enter another number"));
    let operator = prompt("Enter operator: +, -, *, /");


    if (operator == "+") {
        // add two numbers
        let response = num1 + num2;
        alert(response)
    }
    else if (operator == "-") {
        // subtract two numbers
        let response = num1 - num2;
        alert(response)
    }
    else if (operator == "*") {
        // multiply two numbers
        let response = num1 * num2;
        alert(response)
    } else {
        // divide two numbers
        let response = num1 / num2;
        alert(response)
    }
    // Users can choose to continue the calculation loop or not.
    reply = prompt("Want to make another calculation? Enter Yes or No")

}

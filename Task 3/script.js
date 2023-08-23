let outputScreen = document.getElementById("input");

// Function to display a number or symbol on the calculator display
function display(num){
    outputScreen.value += num;
}
// Function to calculate the result of the expression on the calculator display
function Calculate(){
        outputScreen.value = eval(outputScreen.value);
}
// Function to clear the calculator display
function Clear(){
    outputScreen.value = "";
}
// Function to delete the last character on the calculator display
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function processInput (){
    let input = document.getElementById("value-input").value;
    let selectFunction = document.getElementById("select-function").value;
    let output;
    
    
    switch (selectFunction){
      case "factorial":
        output = factorialNumber(input);
        break;
      case "reverse-word":
        output = reverseWord(input);
        break;
      case "uppercase":
        output = makeUpperCase(input);
        break;
      case "loop":
        output = squareNumber(input);
        break;
      default:
        output = "Invalid input";
    }
    
    setTimeout(function() {
      let outputField = document.getElementById("output-field");
      outputField.innerText = output;
      outputField.style.opacity = '1';
   }, 2000);
}

button.addEventListener("click", function() {
  let button = document.getElementById("button");// Disable the button
  button.disabled = true;
  button.style.backgroundColor = "red";
});

//let input = document.getElementById("value-input").value; //what to do with this?
//let outputArea = document.getElementById("outputArea");
//document.getElementById("value-input").classList.remove("invalid-input");

  //factorial function
  function factorialNumber(num) {
    
    num = parseInt(num);
    if (isNaN(num)) {
       document.getElementById("value-input").classList.add("invalid-input"); //wont work when its setup here
       return "invalid input";
       }
    if (num < 0) {
      document.getElementById("value-input").classList.add("invalid-input");
      return "Cannot calculate factorial of a negative number";}
    if (num === 0 || num === 1) {
      return 1;
    }
    
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
      }
    return sum;
  }
  
  //reverse word
  function reverseWord(word) {
    return word.split("").reverse().join("");
  }
  
  //to upper case
  function makeUpperCase(word){
    let myArray = word.split(". ");
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1);
    }
    return myArray.join(". "); 
  }
  
  
  //loop example
  function squareNumber(num) {
    num = parseInt(num);
    if (isNaN(num)) return "Invalid input";
    let sequence = '';
    for (let i = 1; i <= num; i++) {
        sequence += `${i}: ${i * i}\n`;
    }
    return sequence;
  }
  
  
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
  
    document.getElementById("output-field").innerText = output;
    
  }
  
  //factorial function
  function factorialNumber(num) {
    num = parseInt(num);
    if (isNaN(num)) return "Invalid input";
    if (num < 0) return "Cannot calculate factorial of a negative number";
    if (num === 0 || num === 1) return 1;
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
    return word.toUpperCase();
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
  
  
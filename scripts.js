$( document ).ready(function() {
  let originalInput = prompt("Enter a word or sentence and we'll tell you if it's a palindrome");

  function reverser(input) {
    let newInput = input.split("").reverse().join("");
    console.log(newInput);

    if (originalInput === newInput) {
      alert("this is a palindrome")
    } else {
      alert('this is not a palindrome')
    }
  }

  reverser(originalInput);
});
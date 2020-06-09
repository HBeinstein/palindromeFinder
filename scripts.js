$(document).ready(function() {
  let originalInput = prompt("Enter a word or sentence and we'll tell you if it's a palindrome");
  var noSpaceInput = originalInput.replace(/[" "\|&;\$%@"?'-<>\(\)\+,/]/g, "");
  console.log(noSpaceInput); // var cleanString = dirtyString.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");

  function reverser(input) {
    let newInput = input.split("").reverse().join("");
    console.log(newInput);

    if (noSpaceInput === newInput) {
      alert("this is a palindrome")
    } else {
      alert('this is not a palindrome')
    }
  }

  reverser(noSpaceInput);
});

//var cleanString = dirtyString.replace(/[|&;$%@"<>()+,]/g, "");

// function isPalindrome(s,i) {
//  return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
// }
// console.log(isPalindrome('test'));
// console.log(isPalindrome('racecar'));
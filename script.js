//your JS code here. If required.
function findFirstNonRepeatedCharacter(str) {
  // Create an empty object to store character frequencies
//your JS code here. If required.
function firstNonRepeatedChar() {
  var input = prompt("Enter a string:");
  var charCount = {};

  // Count the occurrences of each character in the string
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first non-repeated character
  for (var j = 0; j < input.length; j++) {
    var char = input[j];
    if (charCount[char] === 1) {
      alert("The first non-repeated character is: " + char);
      return;
    }
  }

  // If no non-repeated character found
  alert("No non-repeated character found.");
}
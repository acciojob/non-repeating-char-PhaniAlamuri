//your JS code here. If required.
function findFirstNonRepeatedCharacter(str) {
  // Create an empty object to store character frequencies
  const charFrequencies = {};

  // Iterate over each character in the string and update frequencies
  for (let char of str) {
    if (charFrequencies[char]) {
      charFrequencies[char]++;
    } else {
      charFrequencies[char] = 1;
    }
  }

  // Find the first character with frequency equal to 1
  for (let char of str) {
    if (charFrequencies[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Prompt the user to enter a string
const inputString = prompt('Enter a string:');

// Find the first non-repeated character
const result = findFirstNonRepeatedCharacter(inputString);

// Display the result in an alert box
if (result) {
  alert( result);
} else {
  alert('null');
}
function reverseString(str) {
  let reversed = ''
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed
  }
  return reversed
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// initialize empty string to hold new word
// itirate over word starting from last letter
// add eache letter of itiration to empty string until beginning of string is reached.


// And a written explanation of your solution

// I initialized a variable "reversed" to an empty string. 
// I started the counter from 1 and looked for the index of str.length minus the counter
// added that letter to the empty string then added 1 to the counter and repeat.
// when i finished the iterations I returned the reversed word.

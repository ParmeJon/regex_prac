let petString = "James has a pet cat."
// This tests if the string has any of the options (OR) 
// returns true or false
let petRegex = /dog|cat|bird|fish/
let result1 = petRegex.test(petString)
// logs true
console.log(result1)

// To be case insensitive add an i
let myString = "Jonathan Chan"
let myRegex = /chan/i
let result2 = myRegex.test(myString) 
console.log(result2)
// logs true

// Extract Matches - use the .match() method
let extractStr = "Extract the word 'hamburger' from this string."
let burgerRegex = /hamburger/
let result3 = extractStr.match(burgerRegex)
console.log(result3)
// logs [
//   'hamburger',
//   index: 18,
//   input: "Extract the word 'hamburger' from this string.",
//   groups: undefined
// ]

// Finding more than the first Match by adding 'g' flag
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
let result4 = testStr.match(ourRegex);
console.log(result4)
// logs [ 'Repeat', 'Repeat', 'Repeat' ]

// You can also add other flags as well like 'i' for case insensitivity.
let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /twinkle/ig
let result5 = twinkleStar.match(starRegex)
console.log(result5)
// logs [ 'Twinkle', 'twinkle' ]


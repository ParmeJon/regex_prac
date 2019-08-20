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
// first match is the default
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

// Wildcard Period 
// Can be added at the front or back /.um/ or /hu./
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
let result6 = humStr.match(huRegex)
let result7 = hugStr.match(huRegex)
console.log(result6, result7)

// Match Single Character with multiple possibilities.
let bgRegex = /b[aiu]g/
// matches bag big bug

// this will grab all the vowels in quoteSample.
let quoteSample = "Beware of bugs in the above code; i have only proved it correctly once."
let vowelRegex = /[aeiou]/ig
let result8 = quoteSample.match(vowelRegex)
console.log(result8)
// logs [
//   'e', 'a', 'e', 'o',
//   'u', 'i', 'e', 'a',
//   'o', 'e', 'o', 'e',
//   'i', 'a', 'e', 'o',
//   'o', 'e', 'i', 'o',
//   'e', 'o', 'e'
// ]

// Match letters of the alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog."
let alphabetRegex = /[a-z]/ig
let result9 = quoteSample2.match(alphabetRegex)
console.log(result9)
// logs [
//   'T', 'h', 'e', 'q', 'u',
//   'i', 'c', 'k', 'b', 'r',
//   'o', 'w', 'n', 'f', 'o',
//   'x', 'j', 'u', 'm', 'p',
//   's', 'o', 'v', 'e', 'r',
//   't', 'h', 'e', 'l', 'a',
//   'z', 'y', 'd', 'o', 'g'
// ]

// Match numbers and letters 
let quoteSample3 = "Blueberry 3.141592653s are delicious."
let azNumRegex = /[2-6h-s]/ig
let result10 = quoteSample3.match(azNumRegex)
console.log(result10)
// logs [
//   'l', 'r', 'r',
//   '3', '4', '5',
//   '2', '6', '5',
//   '3', 's', 'r',
//   'l', 'i', 'i',
//   'o', 's'
// ]

// Match single character not specified
// match everything except all numbers and all vowels
let quoteSample4 = "3 blind mince."
let myRegex2 = /[^0-9aeiou]/ig
let result11 = quoteSample4.match(myRegex2)
console.log(result11)
// logs [
//   ' ', 'b', 'l',
//   'n', 'd', ' ',
//   'm', 'n', 'c',
//   '.'
// ]
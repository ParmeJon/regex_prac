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

// Wildcard Period ('.' is wildcard!)
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

// Match Characters that Occur one or more times 
let difficultSpelling = "Mississipspi"
let myRegex3 = /s+/g
let result12 = difficultSpelling.match(myRegex3)
console.log(result12)
// logs ["ss", "ss", "s"]

// Match Characters that Occur Zero or more times (*)
let soccerWord = "gooooooal!"
let gPhrase = "gut feeling"
let oPhrase = "over the moon"
// Match g than o (zero or more times)
let goRegex = /go*/
console.log(soccerWord.match(goRegex))
// logs [ 'goooooo', index: 0, input: 'gooooooal!', groups: undefined ]
console.log(gPhrase.match(goRegex))
// logs [ 'g', index: 0, input: 'gut feeling', groups: undefined ]
console.log(oPhrase.match(goRegex))
// logs null

// Find Characters with Lazy Matching
// Greedy finds longest part of string that fits(default)
// Lazy match finds smallest possible
let string = "titanic"
// finds t and 0 or more occurences of a-z than finds i at the end. (greedy)
let greedRegex = /t[a-z]*i/;
let lazyRegex = /t[a-z]*?i/
console.log(string.match(greedRegex))
// logs titani
console.log(string.match(lazyRegex))
// logs ti

let text = "<h1>Winter is coming</h1>";
// 0 or more occurences of dot (anything)
let myRegex4 = /<.*>/
let lazyMyRegex4 = /<.*?>/
console.log(text.match(myRegex4))
// logs <h1>Winter is coming</h1>
console.log(text.match(lazyMyRegex4))
// logs <h1>

// Find One ore More Criminals in a Hunt
// criminals represented by 'C'
// + matches anytime there are one or more Cs
let crowd = 'P1P2P3P4P5P6CCCP7P8P9'
let reCriminals = /C+/
// let reCriminals = /CC*/ig
console.log(crowd.match(reCriminals))
// logs ["CCC"]

// Match Beginning String Patterns with '^'
let rickyAndCal = "Cal and Ricky both like racing."
// matches only if Cal is in the beginning of the string.
let calRegex = /^Cal/
console.log(calRegex.test(rickyAndCal))
// logs true

// Match Ending String Patterns with '$'
let caboose = "The last ca on a train is the caboose"
let lastRegex = /caboose$/
console.log(lastRegex.test(caboose))
// logs true

// Match all letters and Numbers
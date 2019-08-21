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
let quoteSample5 = "The five boxing wizards jump quickly."
// \w is a short hand to match the alphabet A-Z, a-z, 0-9, _
let alphabetRegexV2 = /\w/g
console.log(quoteSample5.match(alphabetRegexV2))
// logs [
//   'T', 'h', 'e', 'f',
//   'i', 'v', 'e', 'b',
//   'o', 'x', 'i', 'n',
//   'g', 'w', 'i', 'z',
//   'a', 'r', 'd', 's',
//   'j', 'u', 'm', 'p',
//   'q', 'u', 'i', 'c',
//   'k', 'l', 'y'
// ]

// Match everything but letters and Numbers 
// \W is the opposite of \w
let nonAlphabetRegex = /\W/g
console.log(quoteSample5.match(nonAlphabetRegex))
// logs all the spaces

// Match All Numbers or Digits
// \d
let numString = "Your sandwich will be $5.00"
let numRegex = /\d/g
console.log(numString.match(numRegex))
// logs [ '5', '0', '0' ]
// Non Numbers would be \D 

// Restrict possible Usernames
// numbers must be at the end
// letters can be lowercase and uppercase 
// at least 2 characters long, two letter names can't have numbers 
let username = "JackOfAllTrades"
// {2,} number of times previous thing can match {min, max}
// \d* checks for digits any number of it
// \d*$ makes sure it is at the end
let userCheck = /^[A-Za-z]{2,}\d*$/
console.log(userCheck.test(username))
// logs true

// Match whitespace 
//  \s new line character space or tab. 
let countWhiteSpace = /\s/g
console.log(numString.match(countWhiteSpace))
// logs [ ' ', ' ', ' ', ' ' ]

// Match all non-whitespace characters 
//  \S is the opposite 

// Specify Upper and Lower Number of Matches
// quantity specifiers {}
let ohStr = "Ohhh no"
// Always match letter O and h only match if in between 3-6 hs. then match no
let ohRegex = /Oh{3,6} no/ 
console.log(ohRegex.test(ohStr));
// logs true

// Specify only the lower number of matches 
let haStr = "Hazzzzah"
let haRegex = /z{4,}/
console.log(haRegex.test(haStr))
// logs true

// Specify Exact Number of matches 
let timStr = "Timmmmber"
// without comma it is exactly 4
let timRegex = /Tim{4}ber/
console.log(timRegex.test(timStr))
// logs true

// Check for All or None
// check possible existence of element with '?'
let favWord = "favorite"
// this is saying it may have a u or it may have not.
let faveRegex = /favou?rite/
console.log(faveRegex.test(favWord))
// logs true

// Positive and Negative look ahead
// check for patterns ahead. 

let quit = "qu"
let noquit = "qt"
// ?= positive look ahead ?! negative look ahead

// check for q than look ahead to make sure there is a u later in the string/
// Does not return u
let quRegex = /q(?=u)/
// check for q then look ahead that a u is not in the later string.
let qRegex = /q(?!u)/
quit.match(quRegex)
// returns ["q"]
noquit.match(qRegex)
// returns ["q"]

// check two or more patterns in one string.
let sampleWord = "astronaut23"
// match 5 or more characters than 2 or more digits
let pwRegex = /(?=\w{5})(?=\D*\d{2})/
console.log(pwRegex.test(sampleWord))
// logs true

// Reuse Patterns usince Capture Groups 
let repeatStr = "regex regex"
// create capture groups with parenthesis (\w+)
// searching for any number of characters then a space than again (\1) 
// below is equal to /(\w+)\s\(\w+)/
let repeatRegex = /(\w+)\s\1/
console.log(repeatRegex.test(repeatStr))
// logs true
console.log(repeatStr.match(repeatRegex))
// second element is w.e is in the capture group
// logs ["regex regex", "regex"]

let repeatNum = "42 42 42"
// find a number 3 times. want only a group of 3 numbers so add ^ and $
let reRegex = /^(\d+)\s\1\s\1$/
console.log(reRegex.test(repeatNum))
// logs true

// Use Capture groups to search and replace 
let wrongText = "The sky is silver."
let silverRegex = /silver/
wrongText.replace(silverRegex, "blue")
// returns "The sky is blue."

// any number of letters space than any number of letters
// $2 second capture group in the regex. $1 means first capture group
// Can switch capture groups with replace.
let reverse = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')
console.log(reverse)
// logs Camp Code

let huhText = "This sandwich is good."
let fixRegex = /good/
let replaceText = "okey-dokey"
console.log(huhText.replace(fixRegex, replaceText))
// logs This sandwich is okey-dokey.

// Remove whitespace from front and end 
let hello = "    Hello, World!    "
let wsRegex = /^\s+|\s+$/g
console.log(hello.replace(wsRegex, ""))
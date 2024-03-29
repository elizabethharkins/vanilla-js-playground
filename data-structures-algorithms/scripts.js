// ========== 1. String Reversal ========== // 

// Chaining in-built methods
const reverseString = (text) => {
	return text.split('').reverse('').join('')
}

const reverseMe = (text) => [...text].reverse('').join('')

// With a For-Loop 
const reverseIt = (text) => {
	let result = '';

	for (let i = text.length - 1; i>= 0; i--) {
		result += text[i]
	}

	return result;
}

// For ... Of
const getBackJoJo = (text) => {
	let result = '';

	for (let char of text) {
		result = char + result
	}

	return result;
}

// Recursion
const getBackJoJo2 = (text) => {
	if (text === '') {
		return ''
	} else {
		return getBackJoJo2(text.substr(1)) + text[0]
	}
}

// Using Reduce // Most Optimal
const getBackJoJo3 = (text) => [...text].reduce((acc, char) => char + acc, '');

document.getElementById('string-solution').innerText = getBackJoJo3('thewalruswaspaul');



// ========== 2. Count the Vowels ========== //

// An Iterative Approach
const vowels = ['a', 'e', 'i', 'o', 'u'];

const vowelsCounter = (text) => {
	// initialize counter
	let counter = 0;

	// loop through the text to test if each character is a vowel
	for (let letter of text.toLowerCase()) {
		if (vowels.includes(letter)) {
			counter++
		}
	}

	// return number of vowels
	return counter;
}

// Using Regular Expressions // More Optimal
const vowelsCounter2 = (text) => {
	// search text with regex and store all matches
	let matchingInstances = text.match(/[aeiou]/gi);

	// check if matches exist, then calculate length
	if (matchingInstances) {
		// return number of vowels
		return matchingInstances.length
	} else {
		return 0
	}
}

document.getElementById('vowel-solution').innerText = vowelsCounter2('you got the silver');



// ========== 3. The Most Recurring Character ========== //

// For ... in Iteration // Somewhat More Optimal ~30%
const maxRecurringChar = (text) => {
	let charMap = {};
	let maxCharValue = 0;
	let maxChar = '';

	for (let char of text) {
		if (charMap.hasOwnProperty(char)) {
			charMap[char]++
		} else {
			charMap[char] = 1;
		}
	}	

	for (let char in charMap) {
		if (charMap[char] > maxCharValue) {
			maxCharValue = charMap[char]
			maxChar = char
		}
	}

	return maxChar;
}

// From Object to Array ...
const maxRecurringChar2 = (text) => {
	let charMap = {};
	let charArray = [];
	let valuesArray = [];
	let maxCharValue = 0;

	for (let char of text) {
		if (charMap.hasOwnProperty(char)) {
			charMap[char]++
		} else {
			charMap[char] = 1
		}
	}

	charArray = Object.keys(charMap)
	valuesArray = Object.values(charMap)
	maxCharValue = Math.max(...valuesArray)

	return charArray[valuesArray.indexOf(maxCharValue)];
}

document.getElementById('max-char-solution').innerText = maxRecurringChar2('Tierney');



// ========== 4. Sentence Capitalization ========== //

// Using .forEach() Method
const capSentence = (text) => {
	let wordsArray = text.toLowerCase().split(' ');
	let capsArray = [];

	wordsArray.forEach(word => {
		capsArray.push(word[0].toUpperCase() + word.slice(1))
	});

	return capsArray.join(' ');
}

// Using .map() and .slice() // Most Optimal
const capMe = (text) => {
	let wordsArray = text.toLowerCase().split(' ');
	
	let capsArray = wordsArray.map(word => {
		return word[0].toUpperCase() + word.slice(1)
	})

	return capsArray.join(' ');
}

// Using .map() and .replace()
const capIt = (text) => {
	let wordsArray = text.toLowerCase().split(' ');

	let capsArray = wordsArray.map(word => {
		return word.replace(word[0], word[0].toUpperCase())
	});

	return capsArray.join(' ');
}

document.getElementById('sentence-cap-solution').innerText = capIt('freshly ground coffee sold here daily forever!');



// ========== 5. Palindromes ========== //

// Super Direct ...
const palindromeChecker = (text) => {
	let reversedText = text.toLowerCase()
		.split('').reverse().join('')

	return text === reversedText;
}

// Looping through and Comparing Characters
const palindromeChecker2 = (text) => {
	let charArray = text.toLowerCase().split('');

	let result = charArray.every((letter, index) => {
		return letter === charArray[charArray.length - index - 1];
	})

	return result;
}

// Looping through and Comparing Characters (Optimized)
const palindromeChecker3 = (text) => {
	let textLen = text.length;
	for (var i = 0; i < textLen/2; i++) {
		if (text[i] !== text[textLen - 1 - i]) {
			return false;
		}
	}
	return true;
}

document.getElementById('palindrome-solution').innerText = palindromeChecker3('yep');



// ========== 6. Hamming Distance ========== //

// Using a For-Loop
const hammingDistance = (stringA, stringB) => {
    let result = 0;

    if (stringA.length === stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                result++
            }
        }

        return result;

    } else {
        throw new Error('strings do not have equal length')
    }
}

document.getElementById('hamming-distance-solution').innerText = hammingDistance('rover', 'river');



// ========== 7. Finding the Longest Word in a Sentence ========== //

// Using a For-Loop
const longestWord = (text) => {
	let wordArray = text.split(' ');
	let maxLength = 0;
	let result = '';

	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > maxLength) {
			maxLength = wordArray[i].length
			result = wordArray[i]
		}
	}

	return result;
}

// Using .reduce()
const longestWord2 = (text) => {
	let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
		if (currentWord.length > maxLengthWord.length) {
			return currentWord
		} else {
			return maxLengthWord
		}
	}, "")
	return result;
}

// Using .sort() // Least Optimal
const longestWord3 = (text) => {
	let sortedArray = text.split(' ')
						  .sort((wordA, wordB) => wordB.length - wordA.length)

	return sortedArray[0];
}

document.getElementById('longest-word-solution').innerText = longestWord3("There's a Staaarman waiting in the sky");



// ========== 8. Search and Replace ========== //

// Using .replace() // More Optimal
const searchReplace = (str, word, newWord) => {
	if ( word[0] === word[0].toUpperCase() ) {
		newWord = newWord[0].toUpperCase() + newWord.slice(1)
	}

	return str.replace(word, newWord);
}

// Using Regular Expressions
const searchReplace2 = (str, word, newWord) => {
	let regex = new RegExp(word, 'gi');
	if ( /[A-Z]/.test(word[0])) {
		newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
	}

	return str.replace(regex, newWord);
}

document.getElementById('search-replace-solution').innerText = searchReplace2('I would walk 500 miles', 'walk', 'run');



// ========== 9. Anagrams ========== //

// Direct Comparison
const isAnagram = (stringA, stringB) => {
	
	const sanitizeString = (str) => {
		return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
	}
	return sanitizeString(stringA) == sanitizeString(stringB); 

}

// Character Map Comparison // Most Optimal
const isAnagram2 = (stringA, stringB) => {
	
	const createCharMap = (text) => {
		let charMap = {};

		for (let char of text) {
			if (charMap.hasOwnProperty(char)) {
				charMap[char]++
			} else {
				charMap[char] = 1;
			}
		}

		return charMap;
	}

	if (stringA.length === stringB.length) {
		let stringAMap = createCharMap(stringA);
		let stringBMap = createCharMap(stringB);
		for (let char in stringAMap) {
			if (stringAMap[char] !== stringBMap[char]) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}

}

document.getElementById('anagrams-solution').innerText = isAnagram2('silent', 'listen');



// ========== 10. Pig Latin ========== //

// An Imperative Approach
const pigLatin = (str) => {
	// convert string to lowercase
	str = str.toLowerCase();
	// initialize the array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	// initialize vowel index to 0 
	let vowelIndex = 0;

	if (vowels.includes(str[0])) {
		// if first letter is a vowel
		return str + 'way';
	} else {
		// if the first letter isn't a vowel i.e. is a consonant
		for (let char of str) {
			// loop through until the first vowel is found
			if (vowels.includes(char)) {
				// store the index at which the first vowels exists
				vowelIndex = str.indexOf(char);
				break;
			}
		}
		// compose final string
		return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
	}
}

// A Declarative Approach (i.e. let's get a lil lazy ;) )
// Much Slower ~88%
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

const pigLatin2 = (str) => {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

document.getElementById('pig-latin-solution').innerText = pigLatin('Tierney');



// ========== 11. Array Chunking ========== //

// for ... of
const chunkArray = (array, size) => {
    let result = [];
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// .splice()
const chunkArray2 = (array, size) => {
	let result = [];
	let arrayCopy = [...array];
	while (arrayCopy.length > 0) {
		result.push(arrayCopy.splice(0, size))
	}
	return result;
}

console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// .slice()
const chunkArray3 = (array, size) => {
	let result = [];
	for (let i = 0; i < array.length; i += size) {
		let chunk = array.slice(i, i + size)
		result.push(chunk);
	}
	return result;
}

console.log(chunkArray3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));

// with recursion 
const chunkArray4 = (array, size) => {
	if(array.length <= size) {
		return [array];
	}
	return [array.slice(0, size), ...chunkArray4(array.slice(size), size)];
}

console.log(chunkArray4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));









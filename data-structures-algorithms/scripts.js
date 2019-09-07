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









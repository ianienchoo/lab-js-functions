// Question 1
function maxOfTwoNumbers(a,b) {
	return Math.max(a,b);
}

// Question 2
function maxOfThree(a,b,c) {
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function(prev, next) {
		return Math.max(prev, next);
	});
}
// Question 3
function isCharacterAVowel(myChar) {
	if ("aeiou".indexOf(myChar) == -1) {
		return false;
	}
	return true;
}

// Question 4
function sumArray(myArr) {
	return myArr.reduce(function (prev, next) {
		return prev + next;
	})
}


// Question 4
function multiplyArray(myArr) {
	return myArr.reduce(function (prev, next) {
		return prev * next;
	})
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
}



// Question 6
var reverseString = function (myStr){
	var charArr = myStr.split('');
	return charArr.reverse().join('');
};


// Question 7
function findLongestWord (wordArr) {
	return wordArr.reduce(function(prev,next) {
		return (prev.length >= next.length)
					? prev
					: next;
	})
}


// Question 8
function filterLongWords (wordArr, i) {
	return wordArr.filter(function (word) {
		return (word.length > i);
	})
}

// Bonus 1
String.prototype.reverseString = function () {
	var charArr = this.split('');
	return charArr.reverse().join('');
}

// Bonus 2
function CharacterBreakdown(wordString) {
	var
		obj = {}
		, charArr = wordString.split('');

	for (var i = 0; i<charArr.length; i++) {
		if (obj[charArr[i]]) {
			obj[charArr[i]]++;
		} else {
			obj[charArr[i]] = 1;
		}
	}
	return obj;
}

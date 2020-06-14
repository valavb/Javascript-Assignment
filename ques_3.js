/*
	Ques-3) Create a function that takes two strings as arguments and returns the number of times the first string
(the single character) is found in the second string.
*/

const charCount = (char,str) => {
	let charOccr = 0;
	for(let pos = 0; pos < str.length ; pos++){
		if(str.charAt(pos) === char){
			charOccr++;
		}
	}
	return charOccr;
};
console.log(charCount('a','vala bhagirath singh '));
console.log(charCount('a','Cipher School'));
console.log(charCount('a','MERN StAck'));//Case-sensitive function 
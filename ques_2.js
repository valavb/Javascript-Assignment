/*
	Ques 2 ) Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
*/

const divideCompletely = (a,b) => (Number.isInteger(a/b)? 'true' : 'false')
console.log(divideCompletely(10,5));
console.log(divideCompletely(25,7));
console.log(divideCompletely(2,5));
console.log(divideCompletely(13,5));
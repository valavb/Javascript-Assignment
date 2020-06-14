/*
	Ques-6) Write a function that reverses all the words in a sentence that start with a particular letter.
*/

const stringReverse = str => {
	return str.split("").reverse().join("");
}
const specialReverse = (str,searchChar) =>{
	let arr = str.split(" ");
	for( let pos = 0 ; pos < arr.length ; pos++ ){
		if(arr[pos].includes(searchChar))
		{
			arr[pos] = stringReverse(arr[pos]);
		}
		
	}
	return arr.join(" ");

};

console.log(specialReverse('Vala Bhagirath Singh','a'));
console.log(specialReverse('Full Stack Web Dev using MERN','e'));
console.log(specialReverse('Cipher School','c'));



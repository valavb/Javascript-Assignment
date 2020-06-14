/*
	Ques-10) Create a function that takes an array of strings and returns an array with only the strings that have
	numbers in them. If there are no strings containing numbers, return an empty array.
*/

const numInStr = arr =>{
	let newArray = new Array();
	for( let pos = 0 ; pos < arr.length ; pos++){
		if(!arr[pos].match(/[0-9]/)){
			newArray.push(arr[pos]);
		}
	}
	return newArray;
};


console.log(numInStr(['vala','bhagirath','1va','2v22v2v']));

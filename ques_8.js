/*
	Ques-8)
*/

const removeDup = arr => {
	let oldArray = new Array();
	for( let pos = 0 ; pos < arr.length ; pos ++){
		if( oldArray.indexOf(arr[pos]) === -1){
			oldArray.push(arr[pos]);
		}
	}
	return oldArray;
};

console.log(removeDup([1,0,1,0]));
console.log(removeDup(['Mern','stack','is','full','stack']));
console.log(removeDup(['vala','bhagirath','vala']));
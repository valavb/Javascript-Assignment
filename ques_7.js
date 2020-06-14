/*
	Ques-7) Create a function that takes in an array (slot machine outcome) and returns true if all elements in the
	array are identical, and false otherwise. The array will contain 4 elements.
*/

const testJackpot = arr =>{
	let flag = 0 ;
	for (let i = 0 ; i < arr.length ; i++){
		for( let j = i+1 ; j < arr.length ; j++ ){
			(arr[i] === arr[j] ? flag = 1 : flag =0);
		}
	}
	if (flag === 1) {
		return 'Bingo! Jackpot';
	}
	else{
		return 'Better Luck next time';
	}
};

console.log(testJackpot(['SS','SS','SS','SS']));
console.log(testJackpot(['SS','SS','SS','Ss']));
console.log(testJackpot([1,1,1,'SS']));

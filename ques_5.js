/*
	Ques-5) Create a function that takes a string and replaces the vowels with another character.
	a = 1, e = 2, i = 3, o = 4, u = 5
*/

let replaceVowel = str =>{
	
	for( let pos = 0 ; pos < str.length ; pos++){
		if( str[pos] === 'a'){
			str = str.replace(/a/g,'1') ;
		}
		if( str[pos] === 'e'){
			str = str.replace(/e/g,'2') ;
		}
		if( str[pos] === 'i'){
			str = str.replace(/i/g,'3') ;
		}
		if( str[pos] === 'o'){
			str = str.replace(/o/g,'4') ;
		}
		if( str[pos] === 'u'){
			str = str.replace(/u/g,'5') ;
		}

	}
	return str;

}

console.log(replaceVowel('vala bhagirath singh'));
console.log(replaceVowel('cipher school'));
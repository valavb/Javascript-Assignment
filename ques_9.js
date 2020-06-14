/*
	Ques-9) Create a function that takes a value as an argument and returns the type of this value. You should get
	the real type of a value (JavaScript typeof doesn&#39;t return the real object type of values and you need to
	fix that).
*/


let realType = object => {
  return ({}).toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

console.log(realType(NaN));
console.log(realType(null));
console.log(realType(true));
console.log(realType([]));

//Camel Case String

var noramalString = 'aNgular is fOrnt enD language';
var stringList = noramalString.split(' ');
let res = stringList.map(element=>{
   return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
}).join(" ");
console.log(res);















// for(var i=0; i<3;i++){
//     setTimeout(()=>{ console.log('var i=0;', i)},1000);
// } 

// for(let i=0; i<3;i++){
//     setTimeout(()=>{ console.log('let i=0;', i)},1000);
// } 

// let i = 0;
// for (i = 0; i<4;i++){
//     setTimeout(()=>{ console.log('outer let i=0;',i)},1000);
// }

//Reverse Number using manual method

// let arrOfNum = [1,2,3,4,5,6,7,8,9];
// let arrOfReverseNum = [];
// for(i=arrOfNum.length -1; i>=0; i--){
//     arrOfReverseNum.push(arrOfNum[i]);
// }
// console.log('Array Of Number',arrOfNum);
// console.log('Array Of Reverse Number',arrOfReverseNum);

// // using by default methods

// console.log(arrOfReverseNum.reverse());

// // Reverse Array of String

// let names = "Bhupendra Jogi";
// let nameArray = names.split('');
// console.log((nameArray.reverse()).join(''));

// let mainString = "Javascript";
// let reveseString = '';
// for(var i = mainString.length -1; i>=0; i--){
//     reveseString += mainString[i];
// }
// console.log("Reverse String using for",reveseString);
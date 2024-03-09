//Count Duplicate charcter in string
var noramalString = 'geekforgeeks';
var charCount = {};
for(let i=0; i< noramalString.length; i++){
    charCount[noramalString[i]] = (charCount[noramalString[i]] || 0) + 1;
}
console.log(charCount);

// Count All Duplicate Characters in a array 

var arr=[3,4,5,6,5,4,3,7,8,9,3,2,1,4,5,6];

var res =arr.reduce(function(acc,cur){
acc[cur]=(acc[cur]||0)+1;
return acc;
},{});
console.log(res);

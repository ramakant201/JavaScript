//Count Duplicate charcter in string
var noramalString = 'geekforgeeks';
var charCount = {};
for(let i=0; i< noramalString.length; i++){
    charCount[noramalString[i]] = (charCount[noramalString[i]] || 0) + 1;
}
console.log(charCount);
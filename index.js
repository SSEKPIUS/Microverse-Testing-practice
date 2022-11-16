
const stringLength = function stringLength(string){
  if(string.length < 1 || string.length > 10) throw new Error("String is lessn than 1 character or more than 10 characters!");
  return string.length;
}

const reverseString = function reverseString(string) {
  return [...string].reverse().reduce((prev,cur)=>{prev + cur},"");
}

module.exports = { stringLength };
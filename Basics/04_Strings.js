let name="vikas"
let score=0
console.log(`My name is ${name} and score is ${score}`)

let myName=new String('Vikas')
console.log(myName[2])
console.log(myName.length)
console.log(myName.charAt(2))
console.log(myName.indexOf('k'));
console.log(myName.toLocaleUpperCase())
const newString=myName.slice(-3,4)
console.log(newString);
const newStringOne="    vikas  "
console.log(newStringOne.trim()) //trims the whitespaces from beginning and end
const url="https://google.com/vikas%20bhat"
console.log(url.replace('%20','_'))
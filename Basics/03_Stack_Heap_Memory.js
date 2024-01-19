//example for stack memory
let name1="rahulaa"
let anotherName=name1
console.log(anotherName)
anotherName="vikas"
console.log(name1)
console.log(anotherName);

//example for heap memory
let user1={
    emailId:"user@google.com",
    birthPlace:"India"
}
let user2=user1
console.log(user1);
console.log(user2);
user2.emailId="vikas@gmail.com"
console.log(user1.emailId)
console.log(user2.emailId)
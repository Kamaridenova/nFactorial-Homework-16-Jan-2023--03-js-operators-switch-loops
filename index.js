'use strict';
//Ex. 1
alert("Exercise 1!")
let newUser = {
    name: "",
    age: "",
    gender:"",
}

alert("You are a new User! We need more information about you");
const name = prompt("Set your name, please", '');
newUser.name = name;
let age = prompt("Your age", "");
newUser.age = age;
let gender = confirm("Are you man?");
if (gender == true){
    newUser.gender = "Man";
}
else {
    newUser.gender = "Female";}
console.log(newUser);

//Ex.2
alert("Exercise 2!")
let years = prompt("How old are you?");
if (years <= 35){
    alert(years + " years only, You are so young!");
}
else{
    alert ("You are only" + years + " years, I consider Your age is so beautiful!")
}

//Ex.3
alert("Exercise 3!");
let a = +prompt('a?', '');

switch (a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3');
        break;
}

//Ex.4
alert("Exercise 4!");
let result = 0;
for(let i = 1; i<101; i++){
    i++;
    result += i;
}
console.log(result);


let j = 0;
    
while(j < 3){
    alert( `number ${j}!`);
    j++;
}

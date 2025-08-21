/*// Let keyword 
let userEmail = "adonay@gmail.com";
let age = 17;
let name = "adonay";

age = age + 10;
console.log(age)

// Const keyword
const points = 100;
console.log (points)

 */

// currency converter
// $AUD to $USD formaula:
// AUD = USD x 1.5

/* let USD = 1200;
let AUD = USD * 1.5;
console.log(USD)*/

/*let comparison = '4' !== 4;
console.log(comparison)*/

/*let loggedIn = true;
let hasMembership = true;

let user = loggedIn && hasMembership ? "show video" : "dont show video";
console.log(user)*/

//DRY - Dont repeat yourself

/* let counter = 1;
while (counter <= 20){
    counter.log(counter);
    counter++
}*/

/* for (let i = 1; i <= 15; ++i){

    if (i % 5 === 0){
        console.log( i + " ASAP Frontend");
    }
    else if ( i % 2 === 0){
        console.log(i + " Frontend")
    
    }else{
        console.log( i + " ASAP");
    }

}
*/

// print all the characters from ( "asap Front end")

/*let str = "ASAP frontend";
for (let i = 0; i < str.length; i++){
    console.log(str[i])

}*/
/*// Function Declaration
function greetUser(name, time){
 console.log("Good," + time + name)
}
// Call the Function
greetUser(" Iman", " morning");
greetUser(" mike", "evening");
*/
// Regular function
/*function convertUsdToAud(dollars){
  return dollars * 1.5 
}*/
//Arrow Function
/* const convertUsdToAud = (dollars) => {
    return dollars * 1.5;
}

console.log(convertUsdToAud(200));

*/

// let taskOne = [18, 20, 16, 15, 21]; // -> [ 18, 20, 21 ]
// let taskTwo = [16, 17, 14, 15, 19]; // -> [ 19 ]
// let taskThree = [20, 22, 26, 16, 20]; // -> [ 20, 22, 26, 20 ]

// .filter method
/*let outPut1 = taskOne.filter(out => out >= 18);
let outPut2 = taskTwo.filter(out => out == 19);
let outPut3 = taskThree.filter(out => out >= 20);

console.log(outPut1);
console.log(outPut2);
console.log(outPut3);*/

//for loop method
/*let adults = [];
for(i = 0; i < taskOne.length ;i++){
    if(taskOne[i] >= 18){
        adults.push(taskOne[i])
    }
}
console.log(adults)*/

/*let filteredArray = array.filter((element) => {console.log(element); return true})
console.log(filteredArray)*/
// let array = [1,2,3,4,5]
// let newArray = array.map((element)=>{
//     console.log(element);
//     return null;
// })
// console.log(newArray);

/*let usDollars = [10,20,30,40]
let AUD = usDollars.map((element)=>{
        return element * 1.5;
    
})
console.log(AUD)*/

//OBJECTS

/*let users = [{
    email: "example@gmail.com",
    password: "test1234",
    name: "john doe",
    discord: "discordexample",
    subscription:"VIP+",
    lessonCompleted: [1,2,3]
}]

function signUp(user) {
  users.push(user)
}
signUp({email: "john@gmail.com",
    password: "test",
    name: "jd",
    discord: "billyooo",
    subscription: "plat",
    lessonCompleted: [1,2,3,4]});
console.log(users)
*/

// THE DOM
//1st method
// //change content / html
// document.querySelector("h1").innerHTML = " i like coding";
// //change css
// document.querySelector("h1").style.color = "green"

// //2nd method
// // console.log(document.getElementById("heading"))

// function changeButtonToGreen(){
//     document.querySelector("button").style.backgroundColor="green"; 
// }
function togSideBar(){
    document.querySelector("body").classList.toggle("open")
}

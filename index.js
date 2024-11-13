console.log("||||||||||||||||||||||||||");
console.log(22);


//String||||||||||||||||||||||||||||||||||||||||||||||||
//ตัวแปร ค่าสมมุติที่เปลี่ยนตัวแปรระหว่างการทำงาน

let x = 1 ; 
x = 2 ;
// console.log(typeof x);
x = "SSS" ; 
// console.log(typeof x);

//  ตัวแปร ค่าคงตัวไม่สามารถเปลี่ยนได้ 

const y = 5 ;
// console.log(y);


// str + num = str + str
//str - num = num - num 



const Firstname = "Firstname" ; 
const LastName = "Sssss";

// concate ต่อ str 

const fullName = Firstname + " " + LastName ; 

const concateWithGrave = `Your firstname is ${Firstname} Your last name is ${LastName}` ;


// Upcase/ Lowcase
// console.log(Firstname.length);

const upperCase = Firstname.toUpperCase();
const lowerCase = LastName.toLowerCase();


//NoSpace
const withSpace = "     HelloTrim      ";

// console.log(withSpace);

const noSpace = withSpace.trim();

//Split
const token = "Bearer=1234567";
// console.log(token);

const splitword = token.split("=");
// console.log(splitword);
// console.log(splitword[1]);




//Number||||||||||||||||||||||||||||||||||||||||||

const NumA = 10 ;
const NumB = 20 ;

// console.log(NumA ** NumB);
const floatA = 1.2345435;
const ceil = Math.ceil(floatA);
const floor = Math.floor(floatA);
// console.log(`Ceil is ${ceil} Floor is ${floor}`)


//Boolean|||||||||||||||||||||||||||||||||||||||||

const t = true;
const f = false;

const S = 0;
const Unfind = undefined; // ไม่รู้
const nu = null; // ไม่มี
// if (S != undefined) {
//     console.log(`Score is ${S}`);
// } else {
//     console.log(`Not Have Score`);
// }



// Array |||||||||||||||||||||||||||||||||||||||||
//No need ประกาศ size array


const arr =[1,2,3,4,5];
// console.log(arr[4]);
// console.log(arr.length);


// Array Medthod \\\\\\\\\\\\

const namesArr = [];
// console.log(namesArr);
namesArr.push("as");
// console.log(namesArr);
namesArr.pop();
// console.log(namesArr);
namesArr.unshift("JS");
// console.log(namesArr);
namesArr.shift();


// Object ||||||||||||||||||||||||||||||||||

const userObject = {
    username: "Username1",
    password: "PassWord1",
};

// console.log(userObject.username);
// console.log(userObject.password);
userObject.email="test1@gmail.com";
// console.log(userObject);
// console.log(userObject.email);
// console.log(userObject["username"]);

const axios = require("axios");

async function FetchAPI(name){

try{
const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
console.log(data.data);

}catch(error){
 console.log("error occured");
};
}

FetchAPI("pikachu");
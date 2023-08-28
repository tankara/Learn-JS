/*
    DEĞİŞKEN TANIMLAMA (LET,VAR,CONST)
*/

var a = 20;

a = 50;

console.log(a);

let b= 20;

b=40;

console.log(b);

const f = 90;

console.log(f);

/* NUMBER, STRING, BOOLEAN, NULL, UNDEFINED */

var name = " John Wick" ; //name

console.log(name);

var truth = false ; //boolean

console.log(truth);

var variable; //undefined
console.log(variable);

var var2 = null;
console.log(typeof var2);
console.log(var2);

/* String Methodları */

let firstname = "John ";

let surname ="Wick";

console.log(firstname+ surname );

console.log(firstname.length);

firstname = "Jason "
surname = "Bourne"

var value = firstname.concat(surname);

console.log(value.toUpperCase());
console.log(value.toLowerCase());

console.log(value.indexOf("B"));
console.log(value.charAt(4));
let langs = "Python,JavaScript,HTML,CSS,Jquery";
value = langs.split(",");
console.log(value);

value = langs.replace("Python",".NET");
console.log(value);

value = langs.includes("Pyton"); //includes???
console.log(value);

/* Template Literal */
let job ="Mühendis";
let age = 26;

let another = `Meslek:${job}\nYaş:${age}`;
console.log(another);

/* arrayler */

const myArray = [10,20,30,40,50] ; //defining
let myArray2 = new Array(1,2,3,4,5)

console.log(myArray);
console.log(myArray2);
console.log(myArray[3]); //myArray'in 3.elemanı
console.log(myArray2.indexOf(4)); // 4 elemanının indexi

myArray.push(60);
myArray2.unshift(0);
console.log(myArray);
console.log(myArray2);

myArray.pop();
console.log(myArray);

myArray2.shift();
console.log(myArray2);

let spliced = myArray.splice(1,3);
console.log(spliced);

//sort 23 ve 5 i sıralarken ilk rakam olan 2'ye göre sıralar. Sadece rakamlar doğru sıralanabilir.


/* OBJE OLUŞTURMA */

const player = {

    name: "Aslan Mashadov",
    age: 28,
    email: "aslan@bbl.com",
    ajanlar: ["Jett","Reyna","KillJoy","Yoru"],

    roller: {

        sentinel: ["cypher","killjoy"],
        duellist: ["jett", "reyna"],
    },

    work: function(){
        console.log("aslan praccta")
    }
}

value = player.work();

value = new Date();

/* Immediately Invoked Function Expression */

(function(name){
    console.log("Merhaba "+ name)
})("TAN")

let i = 0;
do {
    console.log(i + "ilk döngü");
    i++;
}while (i<10);

let j=0;
while (j<10){
    console.log(j + "ikinci döngü");
    j++;
}

let newelement= document.getElementById("bunu-al");

console.log(newelement);

newelement.innerHTML="mavi"
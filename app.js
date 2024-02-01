// function -> dahij ashiglah bolomjtoi kodnii tsugluulag
// define -> zarlana 
// argument/ parametr -> function iin avch boloh utga
function hello(name,age){
    console.log("Hello" + name);
    console.log("Good day" + age);
}
// call-> duudaj ajiluulah ystoi 
hello("Bat",23);
// 2 toonii niilber oloh function
function niilber(a,b) {
    console.log(a+b);
}
niilber(2,3); 
// toonii kvadrat zereg oloh function
function zereg(c) {
console.log(c*c);
}
zereg(12);
// nas oruulhad nasand hursen
function nas(a) {
    if(a>18){
        console.log("nasand hursen");
    } else {
        console.log("nasand hureegui");
    }
}
nas(23);

// backtick
var b=5;
console.log("too" + b);
console.log(`too ${b}`);

// DOM -> document -> html deer bga bvh code
console.log(document);

var h1 = document.getElementsByTagName('h1')[0];
var h2 = document.getElementsByTagName('h2')[0];
var img = document.getElementsByTagName('img')[0];
var inputage = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
console.log(inputage);
console.log(h2);
console.log(h1);
// variableName.style.styleName="value";
h1.style.color="red";
h2.style.color="pink";
h2.style.fontSize="30px";
img.style.width="300px";
function changecolor() {
    // variableName.src="zuragniiNer.jpg";
    img.src="https://cdn.thinglink.me/api/image/615668383383289858/1024/10/scaletowidth/0/0/1/1/false/true?wait=true";
    h1.style.color="aqua";
    // variableName.innerText="solih text bichne"->
    h1.innerText="changed!";
    
}
function nas2(){
    console.log(inputage.value);
    if(inputage.value>17){
        p.innerText="nasand hursen"+ "10 jilin daraah nas" + (parseInt(inputage.value)+10) +  "tursun on" + (2024-inputage.value);
        p.style.color="green";
    } else {
        p.innerText="nasand hureegui" + "10 jilin daraah nas" + (parseInt(inputage.value)+10) +  "tursun on" + (2024-inputage.value);
    } if(inputage.value>129){
        p.innerText="chi bol chutgur" + "10 jilin daraah nas" + (parseInt(inputage.value)+10) +  "tursun on" + (2024-inputage.value);
        p.style.color="red";
    } else if(inputage.value<0) {
        p.innerText="chi bol turuugui hhe" + "10 jilin daraah nas" +  (parseInt(inputage.value)+10) +  "tursun on" +  (2024-inputage.value);
        p.style.color="blue";
    } else if(inputage.value =="") {
        p.innerText="error";
        p.style.color="purple";
    } 
    
}
// 130 aas deesh nasalvar ulaan ungu



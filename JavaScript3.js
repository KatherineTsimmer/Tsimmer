let = a,b,c;
if (a<b && a<c) {
  console.log (a);
} else if (b<a && b<c){
  console.log (b)
} else if (c<a && c<b) {
  console.log (c)
}

let month; 
switch (month) {
  case 1:
    console.log('31');
    break;
  case 2:
    console.log('28');
    break;
  case 3:
    console.log('31');
    break;
  case 4:
    console.log ('30');
    break;   
  case 5:
    console.log ('31');
    break;
  case 6:
    console.log ('30');
    break;
  case 7:
    console.log ('31');
    break;
   case 8:
    console.log ('31');
    break;
  case 9:
    console.log ('30');
    break;
  case 10:
    console.log ('31');
    break;
  case 11:
    console.log ('30');
    break;
  case 12:
    console.log ('31');
    break;
  default: 
  console.log ('Нет таких значений');
}

let num;
let exp;
let r;
for (i=0; num>i; i++) {
	r=r*exp;
	console.log (r);
}

function SayHello() {
    console.log ("Hello");
}

function GetRandom() {
  return Math.ceil(Math.random() * 100);
}
let number = GetRandom();
console.log(number**2); 

function Echo () {
	let NewString = 'hello';
  alert ('hello');
  }
Echo();

function InvertString() {
  let NewString = hello;
  for (let i = str.length - 1; i => 0; i--) {
      NewString += str[i];
  }
  return NewString;
}

InvertString ();
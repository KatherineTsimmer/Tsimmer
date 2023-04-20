function SayHello(){
    console.log("Hello");
}
SayHello();

function GetRandom(){
    var a=1;
    var b=100;
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function Echo(hello){
    console.log(hello);
}

function InvertString(b){
    var len = b;
    var a = [];
    for (var i = 0; i < len; i++){
       a.push(input[len - 1 - i]);
    }
    console.log(a.join(''));
}

var random = GetRandom()
console.log(random*random);

Echo("Минута");
InvertString("Секунда");
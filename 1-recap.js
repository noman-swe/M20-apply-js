//variable declearation
var bookprice = 100;
//array
var partners = ['saddi', 'haddi', 'faddi', 'baddi'];
partners.push('shibly');
partners.pop();

//conditionals
if(bookprice < 100){
    console.log('i will buy this book');
}
else{
    console.log('not have enough money');
}


//loop - while

var a = 0;
while(a < 10){
    console.log(a);
    a++;
}

//for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}

//function

function isMooUp(time){
    if (time >= 19 && time <= 5){
        return true;
    }
    return false;
}
var moonStatus = isMooUp();


//let & const

//j sob variable er maan or (value) changable or change kori sei sob variable er khettre let use kora uchit
//let example
let eggPrice = 34;
eggPrice = 36;
eggPrice = 40;

//ar j variable er maan change korbo na emn variable er khettre const likha better
//const example
const name = 'Shibly';
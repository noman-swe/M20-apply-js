/*
var dadaInches = 132;
var feet = dadaInches / 12;
console.log(feet);

//dadi
var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);

//nani
var naniInches = 156;
var feet = naniInches / 12;
//console.log(feet);

//nana
var nanaInches = 156;
var feet = nanaInches / 12;
//console.log(feet);

//eikhan e ak e kaj bar bar kora hocchy & emn kaj er jonne function use kora hoy  
*/

function inchToFeet(inches){
 var feet = inches / 12;
 return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('My Inches to feet: ' + feet);

//dadi
var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('Dadi Inches to feet: ' + feet);

//nani
var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Nani Inches to feet: ' + feet);

//nana
var nanaInches = 156;
var feet = inchToFeet(nanaInches);
console.log('Nana Inches to feet: ' + feet);


//miles to KM
function mileToKM(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKM(26.2);
console.log('marathon in km: ' + marathon);
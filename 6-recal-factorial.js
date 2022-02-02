// let factorial = 1;
// for(let i = 1; i <= 5; i++){
//     factorial = factorial * i;   
// }
// console.log(factorial);



 function factorial(value){
     
     let fact = 1;
     for(let i  = 1; i <= value; i++){
         fact = fact * i;
     }
     return fact;
    //  console.log(fact);
 }

 var firstFactorial = factorial(7);
 console.log('factorial of 7 is: ' + firstFactorial);

 var secondFactorial = factorial(9);
 console.log('factorial of 9 is :' + secondFactorial);
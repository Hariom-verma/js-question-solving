// let a = 10;
// let b = 20;
//  console.log (a+b);

// let a = 14;
// let b =16;
// console.log(`the sum of ${a} and ${b}is${a+b}` );

// let a = +prompt("enter a number");
// let b = +prompt("entersecondnumber");
// console.log(`the sum of ${a} and ${b}is${a+b}` ); 

// let username = prompt("enter user name ");
// let age = + prompt ("enter your age")
// console.log(`Hello ${username} you are ${age}  years old.`);


// let a = 2;
// let b = 3;
// let temp = a;
// a=b;
//  b = temp;

// console.log(a,b);

// let a = 2;
// let b = 3;
// a= a+b;//5
// b= a-b;//2
// a= a-b//3
// console.log(a,b);

// let length = +prompt("enter length");
// let width = +prompt("enter width");
// console.log(`area  of reactangle is ${length*width}`);
// console.log(`perameter of rectangle  is ${2*(length+width)}`);

 
// const P= 10000;
// const r = 5;
// const n= 12;
// const t=10;
// const rateDecimal= 5/100;
// const A = P* Math.pow((1+rateDecimal/n), n*t);
// const CI = A-P;
// console.log(`Total Amount after ${t} years: ${A.toFixed(2)}`);
// console.log(`Compound Interest: ${CI.toFixed(2)}`);




// let radius = +prompt("enter radius");
//  let val=  4*3.14*radius*radius;
//   console.log(val);

// let radius = +prompt("enter radius");
// let cir = 2*3.14*radius;
// console.log(cir);
// let area= 3.14*radius*radius;
// console.log(area);

//  let a= 12;
//  let b= 14;
//  if(a>b){
//     console.log("a is greater");
//  }else{
//     console.log("b is greater");  
//  }
 

// let gender = prompt("entergender");

// console.log(`good morning ${gender}`);


// let gender = prompt("enter gender");

// if (gender ==='m'){
//     console.log("good morning sir");
// }
//     else if (gender === 'f'){
//         console.log("good morning mam");
        
    
    
// }else {
//     console.log("wrong input");
    
// }

// let a = +prompt("enter number");
// if (a%2==0){
//     console.log("even");
    
// }else {
//     console.log("odd");
    
// }

// let name = prompt("enter name");
// let age = +prompt("enter age");

// if (age>=18){
//     console.log(`Hello ${name} you are a valid voter`);
    
// } 
// else {
//     let untileligble = 18- age;
//     console.log(`sorry,${name }you,cant cast to vote ,you will be eligible in ${untileligble} years `)
// }




// let daynumber= +prompt("enter no.");
//   switch(daynumber){
//      case 1 : console.log("sunday");
//      break;
//      case 2: console.log("monday");
//      break;
//      case 3: console.log("tuesday");
//      break;
//      case 4: console.log("wednesday");
//      break;
//      case 5: console.log("thursday");
//      break;
//      case 6: console.log("friday");
//      break;
//      case 7: console.log("saturday");
//      break;
//      default : console.log("enter valid-number");
//  }


// let  a = 1;
// let b= 2;
// let c=120;
//  if(a>b ){
//     console.log( "a is  greater" );
    
//  } else if(b>c){
//     console.log("b is greater");
    
//  } else if(c>a){
//     console.log("c is greater");
    
//  }else{
//     console.log("these are equal");
//  }


// let year = +prompt("enter year");
//  if(year%4==0){
//     console.log("leap year");
// }else{
//     console.log("normal year");
    
//  }

// const priceofproduct = 195;
// const dis = 5;
// const priceafterdis = 195 *5/100;
// console.log( priceafterdis);
// const finalprice = priceofproduct-priceafterdis;
// console.log(finalprice);


// let letter = prompt("enter letter");
//  if( letter== 'a'  ||  letter== 'e'  || letter== 'i'|| letter=='o'|| letter=='u'){
//     console.log("vowels");
    
//  }else{
//     console.log("consonant");
    
//  }

// let n = +prompt("enter number");
// for (let i=1; i<=n; i++){
//     console.log("hello world");
     
// }

// let n = +prompt("enter a number");
// for (let i=1; i<=n; i++){
//     console.log(i);
    
// }

// let n = +prompt("enter number");
// for (let i = n; i >=1; i--){
//     console.log(i);
    
// }

// for (let i=1; i<=10; i++){
//     console.log(5*i);
    
// }

// let n = 100;
//  let sum = 0;
// for (let i=1;i<=n;i++){
//    sum +=i;
    
// }console.log(sum);


//  let n = 10;
//  let factorial = 4;
//  for (let i =1; i<=n; i++){
//     factorial = factorial*i;
    
//  }console.log(factorial);
  



// let start = 1;
// let end = 5;

// let evensum = 0;
// let oddsum=0;

// for (let i =start; i<=end; i++){
//     if (i % 2===0){
//         evensum +=i;
      
//     }else {
//         oddsum +=i;
     
//     }
// }
//  console.log(evensum);
//  console.log(oddsum);




// let n = 13;
// if (n%2===0){
//     console.log("even");
    
// }else {
//     console.log("odd");
    
// }




// let a = 2;
// let b = 5;
// console.log(Math.pow(a,b));



// let number = 123;
// let digit= number.toString();

//  for(let i=digit.length-1;i>=0;i--){
// console.log(digit[i]);
// }


//  let number = 950;
// let sum = 0;
// while(number>0){
//     sum +=number%10;
//     number=Math.floor(number/10);
// }
// console.log(sum);


// let number = 12345;
// let reversednumber = 0;
// while (number>0){
//     let digit = number%10;
//     reversednumber = reversednumber*10+digit;
//     number = Math.floor(number/10);
// }
// console.log(reversednumber);

// let number = 12321;
// let reversednumber=0;
// let originalnumber = number;
// while(number>0){
//     let digit = number%10;
//     reversednumber=reversednumber*10+digit;
//     number = Math.floor(number/10);
//     if (originalnumber=== reversednumber){
//         console.log(originalnumber); // this is palindromic number
        
//     }else{
//         console.log(originalnumber); this  is not a palindromic number
        
//     }

// }


 
 

 
 



























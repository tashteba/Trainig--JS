// numero 1 //
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// numero 2 //
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// numero 3 //
var x='10',y=10;
console.log(typeof(x),typeof(y)); // string , number //
x = 10;
console.log(typeof(x),typeof(y)); // number , number //

// numero 4 //
var x = '9.8' , y = 10;
parseFloat(x);
if (x===y){
    console.log("les deux veriables est la meme chose");
}
else {
    console.log(`la veriable ${Math.ceil(x)} maintenaint est égale ${y}.`);
}


// numero 5 //
var x='python', y= 'jargon';
if (x.includes('on') && y.includes("on"))
{
     console.log("true");
}
else (console.log("false"));

// numero 6 //
var x = "I hope this course is not full of jargon";
if (x.includes("jargon"))
{console.log("true")};

// numero 7 //
console.log(Math.random() * 100);

// numero 8 //
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//getRandomInt(50,100);//


// numero 9 //
getRandomInt(0,255);


// numero 10 //
var x =  'You cannot end a sentence with because because because is a conjunction';
console.log(x.substring(x.indexOf('because'),x.lastIndexOf("is")));





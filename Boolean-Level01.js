// numero 4 //
var x1=0, x2=2, x3=3;
console.log(x1 === x1);
console.log(x2 === x2);
console.log(x3 === x3);

console.log(x1 === x2);
console.log(x1 === x3);
console.log(x2 === x3);

// numero 5 //
if (4 > 3){
    console.log('Quatre est supérieur à trois');
}
else if(4 >= 3) {
    console.log("Quatre est supérieur ou égale à trois");
}

else if (4 < 3){
    console.log('Quatre est inférieur à trois');
}
else if(4 <= 3) {
    console.log('Quatre est inférieur ou égale à trois');
}
else if (4 == 4){
    console.log('Quatre est égale à quatre');
}
else if(4 === 4) {
    console.log('Quatre est bien égale à quatre');
}
else if (4 != 4){
    console.log('Quatre est pas égale à quatre');
}
else if(4 !== 4) {
    console.log('Quatre est pas de tout égale à quatre');
}
else if (4 != '4'){
    console.log('Quatre est pas de tout égale à quatre comme text');
}
else if(4 == '4') {
    console.log('Quatre est égale à quatre comme text');
}
else if(4 === '4') {
    console.log('Quatre est bien égale à quatre comme text');
}
else {console.log("C'est pas vrai");}

let longueurPython = 'python'.length;
let longueurJargon = "jargon".length;

if (longueurPython === longueurJargon){
    console.log("python et jargon est égale pas");
}
else {
    console.log("python et jargon est égale");
}

// numero 6 //
if (4 > 3 && 10 < 12) {
    console.log("Quatre est supérieur à trois et aussi dix est inférieur à Douze");
}
else if (4 > 3 && 10 > 12)
{
    console.log("Quatre est supérieur à trois et aussi dix est supérieur à Douze");
}
else if (4 > 3 || 10 < 12) {
    console.log("Quatre est supérieur à trois ou dix est inférieur à Douze");
}
else if (4 > 3 || 10 > 12)
{
    console.log("Quatre est supérieur à trois ou dix est supérieur à Douze");
}
else if (!(4 > 3)) {
    console.log("C'est vrai");
}
else if (!(4 < 3))
{
    console.log("C'est vrai");
}
else if (!(false)) {
    console.log("C'est vrai");
}
else if (!(4 > 3 && 10 < 12))
{
    console.log("C'est vrai");
}
else if ( !(4 > 3 && 10 > 12)) {
    console.log("C'est vrai");
}
else if (!(4 === '4'))
{
    console.log("C'est vrai");

}
else {
    console.log("c'est pas vrai");
}

if ("dragon".includes("on") && "python".includes("on") ) {
    console.log("c'est faux");
}
else  
{
    console.log("c'est vrai");
}
// numero 7 //
const today = new Date ;
const thatDay = new Date('January 1, 70 00:00:00');
const thisYear = today.getFullYear();
const thisMonth = today.getMonth();
const thisDay = today.getDay();
const thisHour = today.getHours();
const thisRecord = today.getDate();
const thisSecond = today.getTime();
const ThatSecond = thatDay.getTime();

console.log(`This Year is ${thisYear}`);
console.log(`This Month is ${thisMonth}`);
console.log(`This Day is ${thisDay}`);
console.log(`This Hour is ${thisHour}`);
console.log(`This Record is ${thisRecord + thisMonth + thisYear + thisHour}`);
console.log(`This numbers of second between 1970 and today is ${thisSecond + ThatSecond}`);














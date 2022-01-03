// numero 1 //
let myAge = 250;
let yourAge = 25;
console.log(`J'ai ${myAge-yourAge}  ans de plus que toi.`);

// numero 2 //

function myFunctionPermis (){
    let utilisateurConduire = prompt ("Entrez votre date de naissance:","soit 1994 ou soit 2005");
if (utilisateurConduire == "1994"){
    document.getElementById("demo").innerHTML = "Vous avez 26 ans. Vous êtes autorisé de conduire.";
}
else if (utilisateurConduire=="2005"){
    document.getElementById("demo").innerHTML = "Vous avez 16 ans. Vous serez autorisé à conduire après 2 ans.";
}

else {
    
document.getElementById("demo").innerHTML ="Il fout mettre juste deux options soit 2005 ou bien soit 1994 pas :" +utilisateurConduire ;
}

}

// numero 3 //

function myFunctionAge () {
    let urAge = prompt ("Enter your age in years and i will you give you in second","In Number");
    if (urAge != null){
        document.getElementById("dimo").innerHTML = urAge *31536000+"  In Second" ;
    } 
}

function myFunctionDate() {
    const moonLanding = new Date();
    let allDAte = moonLanding.getFullYear()+"-" + moonLanding.getMonth() + "-" + moonLanding.getDay()+":"+moonLanding.getMinutes();
    document.getElementById("dimi").innerHTML = allDAte;

}


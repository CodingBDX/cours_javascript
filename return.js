function addition() {
  return 4+5
}

console.log(addition())


const flechee = (a,b) => {
    console.log("je suis la")
  return a+b;

}


const t = [1,2,3,4,5]
// const carre = t.map(function(number){return number*number})
// beaucoup moins long
const carre = t.map(number => number*number)


console.log(carre);

console.log(flechee(2, 3));


// for dans function
let count = 0;
function compteur() {
  for (let index = 0; index < 10 ; index++) {
    if (count == 5) return;

    count++
    console.log(count)
    
  }
}

compteur()


// avec if

function verite(bool) {
  if (bool) {
    console.log("vrai")
    return;
  }console.log("faux")
}

verite(true)

// autre test en if avec string


function passSanitaire(pass) {
  if(pass == "oui"){
    console.log("let's go to holliday!");
return;
  }
  console.log("close in house")
}
passSanitaire("oui")
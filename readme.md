# javascript
---
## boucle
une boucle permet de repeter du code dans des variables et il va verifier des conditions pour savoir si il doit continuer ou s'arrêter
### for
le for permet de lister par exemple un tableau, on doit l'utiliser uniquement quand on sait combien de fois va s'executer la boucle (ici la longueur du tableau, 0 1 2 = 3fois)
```js
const note = [12,13,15]
for (let index = 0; index < note.length; index++) {
  const element = note[index];
  console.log(note[index])
  
}
```
on l'index a une valeur de depart, a chaque tour de boucle il renvoit un + 1 grace a index++, la condition d'arrêt est au milieu
### while
permet de verifier une condition, elle permet de boucle jusqu'a ce qu'un evenement se produise contrairement a for
```js
let nombre = 0
while(nombre < 3){
  nombre++;
}

console.log(nombre)
```

par exemple dans cette exemple, on ne sait pas quand la boucle va s'arrêter
```js

let x = Math.random()

while (x < 0.9) {
  x = Math.random()
  console.log(x)
  
}
```
---

### do while
il a pour particularite par rapport au xhile de tester la condition a la fin. il permet notament d'enlever les constante let ou const

```js
let x
do {
  x = Math.Random()
  console.log(x)
} while(x < 0.9)
```

### for of
permet de lister un iterer dans un objet (mais pas un objet facon js, il faut faire la function forin), T. l'itinerer doit etre comprehensible, donc generalement on ecrit le singulier
```js
const notes = [12,13,14]
for(const note of notes) {
  console.log(note)
}
```

###for in
qui permet de lister les key d'un object, contrairement a for of, on peut voir les key et les resultats

```js

const mama = {
  a: 1,
  b: 2,
  c:5
}

for (const key in mama) {
  if (Object.hasOwnProperty.call(mama, key)) {
    const element = mama[key];
    console.log(key+":"+element)
  }
}
```
## return

il s'utilise dans une function flechee ou non ou une boucle et condition
```js
function addition() {
  return 4+5
}
addition()
```
le return se comporte comme une variable, il va additionner et aussi mettre en memoire le resultat.
apres le return, aucune function n'est appelle

### function flechee
dans une function flechee, cela s ecrit avec une const ou let. la fleche correspond au return. une function flechee peut retourner un resultat mais si il y a plusieurs resultat alors il faut invoquer les accolades et le return
```js
const flechee = (a,b) => a+b
```

ex:2
```js
const flechee = (a,b) => {
  return a+b;
  console.log("je suis la")
}
```

la function flechee s utilise en une seule ligne pour un appel
```js
const t = [1,2,3,4,5]
const carre = t.map(function(number){return number*number})
// beaucoup moins long
const carre = t.map(number => number*number)

```

## return dans une boucle
on voit que cela fonctionner car rien n'est retourner apres le return
```js
let count = 0;
function compteur() {
  for (let index = 0; index < 10 ; index++) {
     if (count == 5) return;// ou break;  

    count++
    console.log(count)
    
  }
}

compteur()
```
normalement il faut utiliser un break a la place, mais ill y a une difference entre break et return. return stop toute les instructions aprs lui alors que break ne stop pas dans les parents, juste dans if

### return dans if
le return permet d economiser des lignes, car dans un if, il peut prendre la place de else
```js

function verite(bool) {
  if (bool) {
    console.log("vrai")
    return;
  }console.log("faux")
}

verite(true)
```

deuxieme exemple avec condition string
```js
function passSanitaire(pass) {
  if(pass == "oui"){
    console.log("let's go to holliday!")
return;
  }
  console.log("close in house")
}
passSaintaire("oui")
```
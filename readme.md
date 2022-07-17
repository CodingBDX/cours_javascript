# javascript
---
## boucle
une boucle permet de repeter du code dans des variables et il va verifier des conditions pour savoir si il doit continuer ou s'arrêter

### while
permet de verifier une condition
```js
let nombre = 0
while(nombre < 3){
  nombre++;
}

console.log(nombre)
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
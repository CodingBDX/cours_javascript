// const note = [12,13,15]
// for (let index = 0; index < note.length; index++) {
//   const element = note[index];
//   console.log(element)
  
// }



const notes = [12,13,14]
for(const note of notes) {
  console.log(note)
}

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
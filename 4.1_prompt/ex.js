

// 8. Reflect on why we should use the === operator and type conversion in this situation.
// answer - to make sure the data we get is specificly what we want, and so we can use it baetter and safer

const numSiblins = Number(prompt('How many siblings do you have?')); 

if(numSiblins === 1){
  console.log('1 sibling!')
}
else if(numSiblins > 1){
  console.log('more than 1 sibling')
}
else {
  console.log('no siblings')
}


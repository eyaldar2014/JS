const listOfNeighbours = [ 
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],
];

// With the use of two for loops, console log all the countries one by one and in your terminal. 

for (i=0; i < listOfNeighbours.length; i++){
  for(b=0; b < listOfNeighbours[i].length; b++){
    console.log('nosense neighboor is: ' + (listOfNeighbours[i])[b])
  }
}
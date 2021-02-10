// 1. Create an object called ‘mycountry’ for a country of your choice, containing properties ‘country’, 
//    ‘capital’, ‘language’, ‘population’ and ‘neighbours’ (an array)
// 2. Add a method to the object called 'describe' to the 'myCountry' object. With the help of the ‘this’ keyword, this method will 
// log a string like this to the console:
// ‘Finland has 6 million people, their mother tongue is Finnish, they have 3 neighbouring countries and a capital called Helsinki’.


mycountry = {
  country : 'Austrslia' ,
  capital : 'Weird' ,
  language: 'English' ,
  population: '22 million' ,
  neighbours: [] ,
  describe(){
    console.log('Finland has ', this.population ,'people, their mother tongue is', this.language ,', they have', 
    this.neighbours.length ,'neighbouring countries and a capital called', this.capital)
  } ,
  checkIsland(isIsland){
    isIsland = (isIsland ? this.neighbours.length = 0 : this.neighbours.length > 0)
    console.log(isIsland)
  },
  checkIsland2(mycountry){
    isIsland = (mycountry ? this.neighbours.length = 0 : this.neighbours.length > 0)
    console.log(isIsland)
  },
}



// 3. Call the ‘descrbie method’.

mycountry.describe()


// 4. Add a method called 'checkIsland' to the 'myCountry' object. This method will -----se a new property on the object------, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

mycountry.checkIsland()

// more elegant :
mycountry.checkIsland2()

function tellFortune (jobTitle, location, partnerName, numberOfChildren){
  let result = "You will be a " + jobTitle + " in " + location + " and married to " + partnerName + " with " + numberOfChildren + " children" ;
  return result
}

let Eyal = tellFortune("traveller", "the moon", "Anastasia", "billion")

console.log(Eyal)
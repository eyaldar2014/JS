const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {
        title: "Fresh tomato pasta", publisher: "Pinchas Hodadad",
      };
      resolve(`${ID}: ${recipe.title}`);
    },
      1500,
      recipeID);
  });
};


getIDs().then((IDs) => {
  console.log(IDs);
  return getRecipe(IDs[2]);
})
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });

async function asyncCall() {
  let IDs
  IDs = await getIDs()
  console.log(IDs)
  let recipe
  recipe = await getRecipe(IDs[2])
  console.log(recipe)

  // if (!recipe) {
  //   console.log('its an error')
  // }
}

asyncCall()
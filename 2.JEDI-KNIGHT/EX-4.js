const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const removeItem = (array, wordUser) => {
  //console.log (findArrayIndex(array, wordUser));

  array.splice(findArrayIndex(array, wordUser),1);

  console.log(array);
};

const findArrayIndex = (array, wordUser) => {
  let i = 0;
  for (let word of array) {
    if (wordUser == word) {
      /* console.log(
        `La palabra ${wordUser} está en la posición ${array.indexOf(word)}`
      ); */
      i = array.indexOf(word);
      //console.log (i);
      return i;
    }
  }
};

removeItem(mainCharacters, "Rey");

const animals = [
    "Rintintín",
    "Cosmo",
    "Gato con botas",
    "Asno",
  ];


  const filterList = (array,letter) =>{
     const filteredList = array.filter ((item) =>item.toLowerCase().includes(letter));
     countLetters(array,letter);
  }

 


const countLetters = (array,letter)=>{
    let counter = 0;
    for (let item of array){
        const characters = [...item];
        for (let character of characters){
            if (character.toLowerCase() === letter ){
                counter ++;
            }
        }
    }

    console.log (`Aparece ${counter} veces la letra ${letter}.`)
    return counter;
}


filterList(animals,"a");
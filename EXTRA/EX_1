/* const splitName = (fullName) =>{
    const nameArray = fullName.split(" ");
    let name = "";
    let surname = "";
    for (let i=0; i<nameArray.length;i++){
         name = nameArray[0];
        surname = nameArray[1];
    }

    console.log (`El nombre es ${name} y el apellido es ${surname}.`)
}

splitName ("Peter Parker"); */



// Método con indexOf y substring
const splitName = (fullName)=>{
    const spaceIndex = fullName.indexOf(" ");
    const name = fullName.substring(0,spaceIndex);
    const surname = fullName.substring(spaceIndex+1);
    console.log (`El nombre es ${name} y el apellido es ${surname}.`);
}

splitName ("Peter Parker");
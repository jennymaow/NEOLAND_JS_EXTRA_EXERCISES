/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */


const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  let mayoresDeEdad = [];
  let menoresDeEdad = [];

  for (const user of users){
    if (user.years >= 18 && user.years < 120){
        mayoresDeEdad.push (user.name);
    } else if (user.years < 18 && user.years >0) {
        menoresDeEdad.push (user.name);
    } else {
        console.log ("Error");
    }
  }

  console.log (`Usuarios mayores de edad: ${mayoresDeEdad}`);
  console.log (`Usuarios menores de edad : ${menoresDeEdad}`);
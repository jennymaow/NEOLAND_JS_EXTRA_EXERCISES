/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const peliculaPequeña = [];
const peliculaMediana = [];
const peliculaGrande = [];

for (const movie of movies) {

  if (movie.durationInMinutes <= 100) {
    peliculaPequeña.push(movie.name);
  } else if (movie.durationInMinutes > 200) {
    peliculaGrande.push(movie.name);
  } else {
    peliculaMediana.push(movie.name);
  }
}

if (peliculaPequeña.length > 0) {
  console.log(`Películas cortas: ${peliculaPequeña}`);
} else {
  console.log("No hay películas cortas en la lista.");
}

if (peliculaMediana.length > 0) {
  console.log(`Películas de duración media: ${peliculaMediana}`);
} else {
  console.log("No hay películas de duración media en la lista.");
}

if (peliculaGrande.length > 0) {
  console.log(`Películas largas: ${peliculaGrande}`);
} else {
  console.log("No hay películas largas en la lista.");
}

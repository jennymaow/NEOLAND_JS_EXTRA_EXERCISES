const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  const myList = document.createElement("ul");
  document.body.appendChild(myList);

  for (album of albums){
    myList.innerHTML +=`
    <li>${album}</li>
    `
  }
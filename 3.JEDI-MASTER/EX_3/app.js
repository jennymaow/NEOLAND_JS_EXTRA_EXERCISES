const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const myDiv= document.querySelector("div");
const myList = document.createElement("ul");
myDiv.appendChild (myList);

for (let place of places){
    myList.innerHTML+=`
    <li>${place}</li>
    `
}
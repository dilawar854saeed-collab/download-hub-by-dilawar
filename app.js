import { db } from "./firebase.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const moviesDiv = document.getElementById("movies");
const trending = document.getElementById("trending");

let allMovies = [];

onValue(ref(db,"movies"), snap=>{
  moviesDiv.innerHTML="";
  trending.innerHTML="";
  allMovies = [];

  snap.forEach(d=>{
    let m = d.val();

    let movie = {
      name: m.name || "No Title",
      link: m.link || "",
      poster: m.poster || "https://via.placeholder.com/300x450"
    };

    allMovies.push(movie);

    let card = createCard(movie);

    moviesDiv.appendChild(card);

    if(trending.children.length < 5){
      trending.appendChild(createCard(movie));
    }
  });
});

function createCard(m){
  let div = document.createElement("div");
  div.className="card";

  div.innerHTML = `
    <img src="${m.poster}">
    <p>${m.name}</p>
  `;

  div.onclick = ()=>{
    window.location.href = `player.html?name=${m.name}&link=${m.link}`;
  };

  return div;
}

/* SEARCH */
document.getElementById("search").oninput = function(){
  let v = this.value.toLowerCase();

  moviesDiv.innerHTML="";

  allMovies
  .filter(m => m.name.toLowerCase().includes(v))
  .forEach(m => moviesDiv.appendChild(createCard(m)));
};
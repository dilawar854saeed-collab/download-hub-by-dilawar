const movieDiv = document.getElementById("movies");
const trendingDiv = document.getElementById("trending");

// LOAD MOVIES
db.ref("movies").on("value", snap => {
  movieDiv.innerHTML = "";
  trendingDiv.innerHTML = "";

  snap.forEach(child => {
    const m = child.val();

    const card = `
      <div class="movie-card">
        <img src="${m.poster || 'https://via.placeholder.com/300'}">
        <h3>${m.title || 'No Title'}</h3>
        <button onclick="window.open('${m.link}')">Watch</button>
      </div>
    `;

    movieDiv.innerHTML += card;
    trendingDiv.innerHTML += card;
  });
});

// ADD MOVIE
function addMovie() {
  const title = document.getElementById("title").value;
  const poster = document.getElementById("poster").value;
  const link = document.getElementById("link").value;

  db.ref("movies").push({
    title,
    poster,
    link
  });

  alert("Added!");
}

// ADMIN TOGGLE
function toggleAdmin() {
  const panel = document.getElementById("adminPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// SEARCH
document.getElementById("search").addEventListener("input", function() {
  const val = this.value.toLowerCase();
  const cards = document.querySelectorAll(".movie-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(val) ? "block" : "none";
  });
});

const movies = [
{ id:1,title:"Inception",genre:"Sci-Fi",language:"English",rating:8.8,year:2010,duration:"2h 28m",poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",description:"A thief enters dreams to plant an idea.",cast:["Leonardo DiCaprio","Joseph Gordon-Levitt"],director:"Christopher Nolan"},
{ id:2,title:"Interstellar",genre:"Sci-Fi",language:"English",rating:8.7,year:2014,duration:"2h 49m",poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",description:"A journey beyond the stars to save humanity.",cast:["Matthew McConaughey","Anne Hathaway"],director:"Christopher Nolan"},
{ id:3,title:"The Dark Knight",genre:"Action",language:"English",rating:9.0,year:2008,duration:"2h 32m",poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",description:"Batman faces the Joker in Gotham City.",cast:["Christian Bale","Heath Ledger"],director:"Christopher Nolan"},
{ id:4,title:"Parasite",genre:"Thriller",language:"Korean",rating:8.6,year:2019,duration:"2h 12m",poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",description:"A family infiltrates a wealthy household.",cast:["Song Kang-ho","Lee Sun-kyun"],director:"Bong Joon-ho"},
{ id:5,title:"RRR",genre:"Action",language:"Hindi",rating:7.8,year:2022,duration:"3h 7m",poster:"https://image.tmdb.org/t/p/w500/k0DNRuHRW6ZjX3zTx4H5vKXoV3P.jpg",description:"Two revolutionaries unite against oppression.",cast:["N.T. Rama Rao Jr.","Ram Charan"],director:"S. S. Rajamouli"},
{ id:6,title:"Spirited Away",genre:"Animation",language:"Japanese",rating:8.6,year:2001,duration:"2h 5m",poster:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",description:"A girl enters a mysterious spirit world.",cast:["Rumi Hiiragi","Miyu Irino"],director:"Hayao Miyazaki"},
{ id:7,title:"Joker",genre:"Drama",language:"English",rating:8.4,year:2019,duration:"2h 2m",poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",description:"An isolated man descends into madness.",cast:["Joaquin Phoenix"],director:"Todd Phillips"},
{ id:8,title:"Dune",genre:"Sci-Fi",language:"English",rating:8.0,year:2021,duration:"2h 35m",poster:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",description:"A noble family fights for control of Arrakis.",cast:["Timothée Chalamet","Zendaya"],director:"Denis Villeneuve"},
{ id:9,title:"3 Idiots",genre:"Comedy",language:"Hindi",rating:8.4,year:2009,duration:"2h 50m",poster:"https://image.tmdb.org/t/p/w500/66A9Mqxojo3H7Ff6b2yV3eKxqf0.jpg",description:"A story about friendship and education.",cast:["Aamir Khan","R. Madhavan"],director:"Rajkumar Hirani"},
{ id:10,title:"The Godfather",genre:"Crime",language:"English",rating:9.2,year:1972,duration:"2h 55m",poster:"https://image.tmdb.org/t/p/w500/jXofv3Zg8C0s0Oa5WJQ0j9cKqkB.jpg",description:"The Corleone family saga.",cast:["Marlon Brando","Al Pacino"],director:"Francis Ford Coppola"},
{ id:11,title:"Taare Zameen Par",genre:"Drama",language:"Hindi",rating:8.3,year:2007,duration:"2h 45m",poster:"https://image.tmdb.org/t/p/w500/1J0CFmxoSYGWLNOrPq0G3uKDz5V.jpg",description:"A child with dyslexia finds hope.",cast:["Darsheel Safary","Aamir Khan"],director:"Aamir Khan"},
{ id:12,title:"Your Name",genre:"Animation",language:"Japanese",rating:8.4,year:2016,duration:"1h 46m",poster:"https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",description:"Two teens mysteriously swap bodies.",cast:["Ryunosuke Kamiki","Mone Kamishiraishi"],director:"Makoto Shinkai"},
{ id:13,title:"Spider-Man: No Way Home",genre:"Action",language:"English",rating:8.2,year:2021,duration:"2h 28m",poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",description:"Spider-Man faces multiversal chaos.",cast:["Tom Holland","Zendaya"],director:"Jon Watts"},
{ id:14,title:"Avengers: Endgame",genre:"Action",language:"English",rating:8.4,year:2019,duration:"3h 1m",poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",description:"The Avengers unite for one final fight.",cast:["Robert Downey Jr.","Chris Evans"],director:"Anthony Russo"},
{ id:15,title:"Titanic",genre:"Romance",language:"English",rating:7.9,year:1997,duration:"3h 14m",poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",description:"A tragic love story aboard the Titanic.",cast:["Leonardo DiCaprio","Kate Winslet"],director:"James Cameron"},
{ id:16,title:"La La Land",genre:"Musical",language:"English",rating:8.0,year:2016,duration:"2h 8m",poster:"https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",description:"A musician and actress chase dreams.",cast:["Ryan Gosling","Emma Stone"],director:"Damien Chazelle"},
{ id:17,title:"Pulp Fiction",genre:"Crime",language:"English",rating:8.9,year:1994,duration:"2h 34m",poster:"https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",description:"Intertwined tales of crime and redemption.",cast:["John Travolta","Uma Thurman"],director:"Quentin Tarantino"},
{ id:18,title:"Coco",genre:"Animation",language:"English",rating:8.4,year:2017,duration:"1h 45m",poster:"https://image.tmdb.org/t/p/w500/6RyX7A5Qy2yQ1Y2fW0qV8P2WmY1.jpg",description:"A boy explores the Land of the Dead.",cast:["Anthony Gonzalez","Gael García Bernal"],director:"Lee Unkrich"},
{ id:19,title:"The Matrix",genre:"Sci-Fi",language:"English",rating:8.7,year:1999,duration:"2h 16m",poster:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",description:"Reality is a simulation.",cast:["Keanu Reeves","Laurence Fishburne"],director:"Lana Wachowski"},
{ id:20,title:"K.G.F: Chapter 2",genre:"Action",language:"Kannada",rating:8.3,year:2022,duration:"2h 48m",poster:"https://image.tmdb.org/t/p/w500/ilyl4lD1Yp5M8Q7K0oKQnq4wRzP.jpg",description:"Rocky expands his empire.",cast:["Yash","Sanjay Dutt"],director:"Prashanth Neel"},
{ id:21,title:"Oppenheimer",genre:"Drama",language:"English",rating:8.4,year:2023,duration:"3h 0m",poster:"https://image.tmdb.org/t/p/w500/4GfOqF2j4p5y7m9WwQm4vQn6mHk.jpg",description:"The story of the atomic bomb's creator.",cast:["Cillian Murphy","Emily Blunt"],director:"Christopher Nolan"},
{ id:22,title:"The Lion King",genre:"Animation",language:"English",rating:8.5,year:1994,duration:"1h 28m",poster:"https://image.tmdb.org/t/p/w500/2G5C0YQm9q7o6t8x5w3fV6s1dKQ.jpg",description:"A lion cub's journey to kingship.",cast:["Matthew Broderick","James Earl Jones"],director:"Roger Allers"},
{ id:23,title:"Jawan",genre:"Action",language:"Hindi",rating:7.6,year:2023,duration:"2h 49m",poster:"https://image.tmdb.org/t/p/w500/qVssnsAzz1xiL0s1ZOqG3QyXz9n.jpg",description:"A man fights corruption in society.",cast:["Shah Rukh Khan","Nayanthara"],director:"Atlee"},
{ id:24,title:"Barbie",genre:"Comedy",language:"English",rating:6.8,year:2023,duration:"1h 54m",poster:"https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",description:"Barbie's journey into the real world.",cast:["Margot Robbie","Ryan Gosling"],director:"Greta Gerwig"},
{ id:25,title:"Memento",genre:"Thriller",language:"English",rating:8.4,year:2000,duration:"1h 53m",poster:"https://image.tmdb.org/t/p/w500/qkA7E2F0r8xY9H5qM6v6R3b2V5Y.jpg",description:"A man with short-term memory loss seeks revenge.",cast:["Guy Pearce","Carrie-Anne Moss"],director:"Christopher Nolan"},
{ id:26,title:"Drive",genre:"Action",language:"English",rating:7.8,year:2011,duration:"1h 40m",poster:"https://image.tmdb.org/t/p/w500/nu7RhLKwX5j6E9T6mXg5uY2fD9Q.jpg",description:"A stunt driver becomes a getaway driver.",cast:["Ryan Gosling","Carey Mulligan"],director:"Nicolas Winding Refn"},
{ id:27,title:"Oldboy",genre:"Thriller",language:"Korean",rating:8.4,year:2003,duration:"2h 0m",poster:"https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",description:"A man seeks revenge after 15 years.",cast:["Choi Min-sik","Yoo Ji-tae"],director:"Park Chan-wook"},
{ id:28,title:"The Notebook",genre:"Romance",language:"English",rating:7.8,year:2004,duration:"2h 3m",poster:"https://image.tmdb.org/t/p/w500/9Xw0I5RV2ZQxLw1iOv3G7wqT4wQ.jpg",description:"A timeless romance across decades.",cast:["Ryan Gosling","Rachel McAdams"],director:"Nick Cassavetes"},
{ id:29,title:"Spartacus",genre:"History",language:"English",rating:7.9,year:1960,duration:"3h 4m",poster:"https://image.tmdb.org/t/p/w500/8j1z4w2z4m6v9x3s0k1q2w3e4r.jpg",description:"A slave leads a revolt.",cast:["Kirk Douglas","Laurence Olivier"],director:"Stanley Kubrick"},
{ id:30,title:"Jujutsu Kaisen 0",genre:"Animation",language:"Japanese",rating:7.8,year:2021,duration:"1h 45m",poster:"https://image.tmdb.org/t/p/w500/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",description:"A cursed high school student fights evil.",cast:["Megumi Ogata","Kana Hanazawa"],director:"Seong-Hu Park"},
{ id:31,title:"Brahmāstra",genre:"Fantasy",language:"Hindi",rating:6.6,year:2022,duration:"2h 49m",poster:"https://image.tmdb.org/t/p/w500/67v3KmvcvJQm48SGW7dJ47yCWG6.jpg",description:"A fantasy adventure with powerful energies.",cast:["Ranbir Kapoor","Alia Bhatt"],director:"Ayan Mukerji"},
{ id:32,title:"Black Panther",genre:"Action",language:"English",rating:7.3,year:2018,duration:"2h 15m",poster:"https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",description:"The king of Wakanda rises.",cast:["Chadwick Boseman","Lupita Nyong'o"],director:"Ryan Coogler"},
{ id:33,title:"Hera Pheri",genre:"Comedy",language:"Hindi",rating:8.2,year:2000,duration:"2h 19m",poster:"https://image.tmdb.org/t/p/w500/1p2S2a8v3a5m9q7f0o1l2k3j4h.jpg",description:"Three men get into a hilarious mess.",cast:["Akshay Kumar","Paresh Rawal"],director:"Priyadarshan"},
{ id:34,title:"The Pursuit of Happyness",genre:"Drama",language:"English",rating:8.0,year:2006,duration:"1h 57m",poster:"https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hM2mISQdM4I.jpg",description:"A father struggles to build a better life.",cast:["Will Smith","Jaden Smith"],director:"Gabriele Muccino"},
{ id:35,title:"Casino Royale",genre:"Action",language:"English",rating:8.0,year:2006,duration:"2h 24m",poster:"https://image.tmdb.org/t/p/w500/vgrCvZQy3BqDq8GfN7G1uQYbJ0v.jpg",description:"Bond's first mission as 007.",cast:["Daniel Craig","Eva Green"],director:"Martin Campbell"},
{ id:36,title:"Drishyam",genre:"Thriller",language:"Hindi",rating:8.2,year:2015,duration:"2h 43m",poster:"https://image.tmdb.org/t/p/w500/vw0JXyKk9j2uV3QmR8y1L2a3s4t.jpg",description:"A family hides a dark secret.",cast:["Ajay Devgn","Shriya Saran"],director:"Nishikant Kamat"},
{ id:37,title:"The Shawshank Redemption",genre:"Drama",language:"English",rating:9.3,year:1994,duration:"2h 22m",poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",description:"Hope blooms inside prison walls.",cast:["Tim Robbins","Morgan Freeman"],director:"Frank Darabont"},
{ id:38,title:"Monster",genre:"Crime",language:"Japanese",rating:8.7,year:2004,duration:"2h 4m",poster:"https://image.tmdb.org/t/p/w500/7rL7Qx5fQ5T9Y2L4m3n1k6j5h4g.jpg",description:"A surgeon is pulled into a deadly mystery.",cast:["Hidenobu Kiuchi","Nozomu Sasaki"],director:"Masayuki Kojima"},
{ id:39,title:"Kingdom of Heaven",genre:"History",language:"English",rating:7.3,year:2005,duration:"2h 25m",poster:"https://image.tmdb.org/t/p/w500/4kq2mI8Dk2V2Qp7y8c9b0n1m2l.jpg",description:"A blacksmith becomes a knight during crusades.",cast:["Orlando Bloom","Eva Green"],director:"Ridley Scott"},
{ id:40,title:"Sita Ramam",genre:"Romance",language:"Hindi",rating:8.6,year:2022,duration:"2h 38m",poster:"https://image.tmdb.org/t/p/w500/A8m3sF0K7y6u8p9q0r1t2y3u4i.jpg",description:"A beautiful wartime love story.",cast:["Dulquer Salmaan","Mrunal Thakur"],director:"Hanu Raghavapudi"}
];

let currentPage = 1;
let pageSize = 8;
let recommendations = [];
let recent = JSON.parse(localStorage.getItem("recent")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const grid = document.getElementById("movieGrid");
const recGrid = document.getElementById("recGrid");

const uniq = a => [...new Set(a)];
function save(){
  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("recent", JSON.stringify(recent));
}
function setRecent(m){
  recent = [m.title, ...recent.filter(x=>x!==m.title)].slice(0,6);
  save();
  renderLists();
}
function toggleFav(title){
  favorites.includes(title) ? favorites = favorites.filter(x=>x!==title) : favorites.unshift(title);
  save();
  renderLists();
  renderMovies();
}
function scoreMovie(m,p){
  let s=0;
  if(!p.genre || m.genre===p.genre) s += 30;
  if(!p.language || m.language===p.language) s += 20;
  if(m.rating >= p.rating) s += 20; else s += Math.max(0, 20 - (p.rating - m.rating) * 5);
  const yearDiff = Math.abs(m.year - p.year);
  s += Math.max(0, 15 - yearDiff);
  if(p.actor && m.cast.join(" ").toLowerCase().includes(p.actor.toLowerCase())) s += 15;
  return Math.min(100, Math.round(s));
}
function renderGenres(){
  const genres = uniq(movies.map(m=>m.genre)).slice(0,8);
  document.getElementById("genreCards").innerHTML = genres.map(g=>`
    <div class="col-6 col-md-3">
      <div class="genre-card rounded-4 p-4 text-center h-100">
        <i class="fa-solid fa-film fs-3 text-danger mb-2"></i>
        <h6 class="mb-0">${g}</h6>
      </div>
    </div>`).join("");
  document.getElementById("genreFilter").innerHTML =
    `<option value="">All Genres</option>` + uniq(movies.map(m=>m.genre)).map(g=>`<option>${g}</option>`).join("");
}
function card(m, score=""){
  return `
  <div class="col-md-6 col-xl-3">
    <div class="movie-card rounded-4 overflow-hidden h-100">
      <img loading="lazy" class="poster" src="${m.poster}" alt="${m.title}">
      <div class="p-3">
        <div class="d-flex justify-content-between align-items-start gap-2">
          <h5 class="mb-1">${m.title}</h5>
          <button class="btn btn-sm ${favorites.includes(m.title) ? 'btn-danger' : 'btn-outline-light'}" onclick="toggleFav('${m.title.replace(/'/g,"\\'")}')"><i class="fa-solid fa-bookmark"></i></button>
        </div>
        <div class="small-muted">${m.genre} • ${m.language} • ${m.year}</div>
        <div class="d-flex justify-content-between my-2"><span class="badge text-bg-warning text-dark">IMDb ${m.rating}</span><span class="badge badge-soft">${m.duration}</span></div>
        ${score!=="" ? `<div class="mb-2"><small>Similarity</small><div class="progress" style="height:8px"><div class="progress-bar bg-danger" style="width:${score}%"></div></div><small>${score}%</small></div>` : ""}
        <p class="small-muted" style="min-height:60px">${m.description}</p>
        <div class="d-flex gap-2 flex-wrap">
          <button class="btn btn-accent btn-sm" onclick="showDetails(${m.id})">Details</button>
          <button class="btn btn-outline-light btn-sm" onclick="openTrailer('${m.title}')">Trailer</button>
          <button class="btn btn-soft btn-sm" onclick='setRecent(${JSON.stringify(m)})'>View</button>
        </div>
      </div>
    </div>
  </div>`;
}
function renderMovies(list=movies){
  document.getElementById("loadingMovies").style.display = "grid";
  setTimeout(()=>{
    const min = +document.getElementById("filterRating").value || 0;
    let arr = list.filter(m => m.rating >= min);
    const s = document.getElementById("sortBy").value;
    arr.sort((a,b)=> s==="year" ? b.year-a.year : b.rating-a.rating);
    const start=(currentPage-1)*pageSize, page=arr.slice(start,start+pageSize);
    grid.innerHTML = page.map(m=>card(m)).join("") || `<div class="col-12 text-center text-muted">No movies found.</div>`;
    renderPagination(arr.length);
    document.getElementById("loadingMovies").style.display = "none";
  }, 400);
}
function renderPagination(total){
  const pages = Math.ceil(total/pageSize) || 1;
  document.getElementById("pagination").innerHTML = Array.from({length:pages},(_,i)=>`
    <li class="page-item ${currentPage===i+1?'active':''}">
      <button class="page-link" onclick="goPage(${i+1})">${i+1}</button>
    </li>`).join("");
}
function goPage(p){ currentPage=p; renderMovies(filteredMovies()); }
function filteredMovies(){
  const q = document.getElementById("searchInput").value.toLowerCase();
  const g = document.getElementById("genreFilter").value;
  const l = document.getElementById("languageFilter").value;
  return movies.filter(m => (!q || m.title.toLowerCase().includes(q)) && (!g || m.genre===g) && (!l || m.language===l));
}
function renderLists(){
  document.getElementById("favoritesList").innerHTML = favorites.length
    ? favorites.map(t=>`<div class="details-box rounded-3 p-2 history-item" onclick="showDetails(${movies.find(m=>m.title===t)?.id})">${t}</div>`).join("")
    : "<div class='small-muted'>No favorites yet.</div>";
  document.getElementById("recentList").innerHTML = recent.length
    ? recent.map(t=>`<div class="details-box rounded-3 p-2 history-item" onclick="showDetails(${movies.find(m=>m.title===t)?.id})">${t}</div>`).join("")
    : "<div class='small-muted'>No recent views.</div>";
}
function recommend(){
  const yearFrom = +document.getElementById("yearFrom").value || 2000;
  const yearTo = +document.getElementById("yearTo").value || 2025;
  const p = {
    genre:document.getElementById("genreFilter").value,
    language:document.getElementById("languageFilter").value,
    rating:+document.getElementById("ratingFilter").value||0,
    year:Math.round((yearFrom + yearTo)/2),
    actor:document.getElementById("actorInput").value.trim()
  };
  recommendations = [...movies].map(m=>({...m, sim:scoreMovie(m,p)})).sort((a,b)=>b.sim-a.sim).slice(0,8);
  recGrid.innerHTML = recommendations.map(m=>card(m,m.sim)).join("");
}
function showDetails(id){
  const m = movies.find(x=>x.id===id);
  if(!m) return;
  setRecent(m);
  document.getElementById("detailsBody").innerHTML = `
    <div class="row g-3">
      <div class="col-md-4"><img src="${m.poster}" class="img-fluid rounded-4"></div>
      <div class="col-md-8">
        <h3>${m.title}</h3>
        <p>${m.description}</p>
        <p><b>Genre:</b> ${m.genre}<br><b>Language:</b> ${m.language}<br><b>Rating:</b> ${m.rating}<br><b>Year:</b> ${m.year}<br><b>Cast:</b> ${m.cast.join(", ")}<br><b>Director:</b> ${m.director}</p>
      </div>
    </div>`;
  new bootstrap.Modal("#detailsModal").show();
}
function openTrailer(title){
  document.getElementById("trailerFrame").src = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(title + " trailer")}`;
  new bootstrap.Modal("#trailerModal").show();
}

document.getElementById("searchBtn").onclick = ()=>{ currentPage=1; renderMovies(filteredMovies()); };
document.getElementById("recommendBtn").onclick = recommend;
document.getElementById("sortBy").onchange = ()=>renderMovies(filteredMovies());
document.getElementById("filterRating").oninput = ()=>renderMovies(filteredMovies());
document.getElementById("themeToggle").onclick = ()=>{
  document.body.dataset.theme = document.body.dataset.theme==="dark" ? "light" : "dark";
};
document.getElementById("addMovieBtn").onclick = ()=>{
  const m = {
    id:Date.now(),
    title:aTitle.value,
    genre:aGenre.value,
    language:aLanguage.value,
    rating:+aRating.value||0,
    year:+aYear.value||2024,
    duration:aDuration.value||"2h",
    poster:aPoster.value||"https://via.placeholder.com/500x750?text=Movie",
    description:aDesc.value,
    cast:aCast.value.split(",").map(s=>s.trim()).filter(Boolean),
    director:aDirector.value||"Unknown"
  };
  if(!m.title) return alert("Enter title");
  movies.unshift(m);
  renderGenres();
  renderMovies(filteredMovies());
  alert("Movie added!");
};
document.getElementById("voiceBtn").onclick = ()=>{
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return alert("Voice search not supported");
  const rec = new SR();
  rec.lang = "en-US";
  rec.onresult = e => {
    searchInput.value = e.results[0][0].transcript;
    renderMovies(filteredMovies());
  };
  rec.start();
};
document.getElementById("clearRec").onclick = ()=>{
  localStorage.removeItem("recent");
  recent = [];
  renderLists();
};

window.toggleFav = toggleFav;
window.showDetails = showDetails;
window.openTrailer = openTrailer;
window.goPage = goPage;
window.setRecent = setRecent;

renderGenres();
renderMovies();
renderLists();
recommend();
const root = document.querySelector(".root");
const btn = document.querySelector(".button");
const btnmode = document.querySelector(".light");
const colorMode = document.querySelector(".colorMode");
let count = 1;

const creatItems = (obj) => {
  // crearting element
  const card = document.createElement("div");
  card.classList.add("card");
  const photos = document.createElement("img");
  photos.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
  const title = document.createElement("h4");
  title.innerHTML = obj.name;
  const overview = document.createElement("p");
  overview.innerHTML = obj.overview;

  //add to html
  card.appendChild(photos);
  card.appendChild(title);
  card.appendChild(overview);
  root.appendChild(card);
};

const display = (imges) => {
  console.log(imges);
  imges.results.forEach((element) => {
    creatItems(element);
  });
};

//fetch data
btn.addEventListener("click", function () {
  fetch(
    "https://api.themoviedb.org/3/trending/all/week?limit=6&api_key=c0b396111ea91e3dd8adc069f9c9529b&language=en-US"
  )
    .then((res) => res.json())
    .then((img) => {
      display(img);
    });
});

// card.addEventListener("mouseover", function () {
//   photos.style.display = "none";
// });

btnmode.addEventListener("click", function () {
  if (count == 1) {
    colorMode.style.backgroundColor = "#000000";
    // card.style.color = "#ffffff";
    count = 0;
  } else {
    colorMode.style.backgroundColor = "#ffffff";
    count = 1;
  }
});

let btn = document.querySelector("button");
let body = document.querySelector("body");

let count = 1;

btn.addEventListener("click", () => {
  if (count == 0) {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    btn.style.backgroundColor = "#181616ff";
    btn.style.color = "#f8f5f5ff";

    btn.innerHTML = "Dark Mode";
    console.log("DarkMode ", count);

    count = 1;
  } else {
    body.style.backgroundColor = "#000000";
    body.style.color = "#ffffff";
    btn.style.backgroundColor = "#f8f5f5ff";
    btn.style.color = "#181616ff";

    btn.innerHTML = "Light Mode";
    console.log("LightMode ", count);

    count = 0;
  }
});

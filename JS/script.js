const leftTeam = document.getElementById("leftTeam");
const rightTeam = document.getElementById("rightTeam");

// When left team is clicked
leftTeam.addEventListener("click", () => {
  leftTeam.style.backgroundColor = "#ECECEE";
  rightTeam.style.backgroundColor = "#FFFFFF";
});

// When right team is clicked
rightTeam.addEventListener("click", () => {
  rightTeam.style.backgroundColor = "#ECECEE";
  leftTeam.style.backgroundColor = "#FFFFFF";
});

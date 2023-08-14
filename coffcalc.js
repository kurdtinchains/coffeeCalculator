const groundsInput = document.getElementById("grounds");
const groundsOutput = document.getElementById("grounds-output");
const waterInput = document.getElementById("water");
const waterOutput = document.getElementById("water-output");

const groundsToWater = (grounds) => {
  let water = 0;
  water = grounds * 16.5;
  return water + "ml";
};

const waterToGrounds = (water) => {
  let grounds = 0;
  grounds = water / 16.5;
  return grounds + "g";
};

groundsInput.addEventListener("input", (e) => {
  grounds = e.target.value;
  groundsOutput.innerHTML = groundsToWater(grounds);
});

waterInput.addEventListener("input", (e) => {
  water = e.target.value;
  waterOutput.innerHTML = waterToGrounds(water);
});
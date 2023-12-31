const brewMethod = document.getElementById("brew-method");
const groundsInput = document.getElementById("grounds");
const groundsOutput = document.getElementById("grounds-output");
const waterInput = document.getElementById("water");
const waterOutput = document.getElementById("water-output");

/* pour over calcs */
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

/* french press calcs */

const fpGroundsToWater = (grounds) => {
  let water = 0;
  water = grounds * 15;
  return water + "ml";
}

const fpWaterToGrounds = (water) => {
  let grounds = 0;
  grounds = water / 15;
  return grounds + "g";
}

/* espresso calcs */

const esGroundsToWater = (grounds) => {
  let water = 0;
  water = grounds * 2;
  return water + "ml";
};

const esWaterToGrounds = (water) => {
  let grounds = 0;
  grounds = water / 2;
  return grounds + "g";
};

const ristrettoToWater = (grounds) => {
  let water = 0;
  water = grounds * 1.5;
  return water + "ml";
};

const waterToRistretto = (water) => {
  let grounds = 0;
  grounds = water / 1.5;
  return grounds + "g";
};

const lungoToWater = (grounds) => {
  let water = 0;
  water = grounds * 3;
  return water + "ml";
};

const waterToLungo = (water) => {
  let grounds = 0;
  grounds = water / 3;
  return grounds + "g";
};

groundsInput.addEventListener("input", (e) => {
  grounds = e.target.value;
  if (brewMethod.value === "pour-over") {
    groundsOutput.innerHTML = groundsToWater(grounds);
  } else if (brewMethod.value === "ris") {
    groundsOutput.innerHTML = ristrettoToWater(grounds);
  } else if (brewMethod.value === "espresso") {
    groundsOutput.innerHTML = esGroundsToWater(grounds);
  } else if (brewMethod.value === "lungo") {
    groundsOutput.innerHTML = lungoToWater(grounds);
  } else if (brewMethod.value === "french-press") {
    groundsOutput.innerHTML = fpGroundsToWater(grounds);
  }
});

waterInput.addEventListener("input", (e) => {
  water = e.target.value;
  if (brewMethod.value === "pour-over") {
    waterOutput.innerHTML = waterToGrounds(water);
  } else if (brewMethod.value === "espresso") {
    waterOutput.innerHTML = esWaterToGrounds(water);
  } else if (brewMethod.value === "ris") {
    waterOutput.innerHTML = waterToRistretto(water);
  } else if (brewMethod.value === "lungo") {
    waterOutput.innerHTML = waterToLungo(water);
  } else if (brewMethod.value === "french-press") {
    waterOutput.innerHTML = fpWaterToGrounds(water);
  }
});

brewMethod.addEventListener("change", (e) => {
  if (e.target.value === "pour-over") {
    groundsOutput.innerHTML = groundsToWater(grounds);
    waterOutput.innerHTML = waterToGrounds(water);
  } else if (e.target.value === "espresso") {
    groundsOutput.innerHTML = esGroundsToWater(grounds);
    waterOutput.innerHTML = esWaterToGrounds(water);
  } else if (e.target.value === "ris") {
    groundsOutput.innerHTML = ristrettoToWater(grounds);
    waterOutput.innerHTML = waterToRistretto(water);
  } else if (e.target.value === "lungo") {
    groundsOutput.innerHTML = lungoToWater(grounds);
    waterOutput.innerHTML = waterToLungo(water);
  } else if (e.target.value === "french-press") {
    groundsOutput.innerHTML = fpGroundsToWater(grounds);
    waterOutput.innerHTML = fpWaterToGrounds(water);
  }
});
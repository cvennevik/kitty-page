let isWiggling = false;

function addKitty() {
  const kitty = document.createElement("p");
  kitty.className = "kitty";
  kitty.textContent = "🐱";

  const kittyContainer = document.getElementById("kitty-container");
  kittyContainer.appendChild(kitty);
}

function toggleWiggle() {
  isWiggling = !isWiggling;
  const kittyContainer = document.getElementById("kitty-container");
  kittyContainer.className = isWiggling ? "wiggling" : "";
}

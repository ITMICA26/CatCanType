// Load saved progress (or start fresh the first time)
let score = Number(localStorage.getItem("score")) || 0;
let clickPower = Number(localStorage.getItem("clickPower")) || 1;
let upgradeCost = Number(localStorage.getItem("upgradeCost")) || 20;
let coins = Number(localStorage.getItem("coins")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

const clickSound = new Audio("pop.mp3");
const cat = document.getElementById("cat");
const scoreDisplay = document.getElementById("score");
const buyButton = document.getElementById("buy");
const costDisplay = document.getElementById("cost");
const resetButton = document.getElementById("reset");
const coinsDisplay = document.getElementById("coins");
const levelDisplay = document.getElementById("level");

// Save everything to the browser
function saveGame() {
    localStorage.setItem("score", score);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("upgradeCost", upgradeCost);
    localStorage.setItem("coins", coins);
    localStorage.setItem("level", level);   // <-- add this

}
// Pick the cat picture based on the score
function updateCatImage() {
  if (score >= 300) {
    cat.src = "cat_images/holo-cat.png";
  } else if (score >= 200) {
    cat.src = "cat_images/silver-cat.png";
  } else if (score >= 50) {
    cat.src = "cat_images/santa-cat.png";
  } else {
    cat.src = "cat.png";
  }
}
// Show the current numbers on the page
function updateDisplay() {
    scoreDisplay.textContent = score;
    coinsDisplay.textContent = coins;
    costDisplay.textContent = upgradeCost;
    levelDisplay.textContent = level;       // <-- add this
}

// Score needed to reach the next level
function scoreForNextLevel() {
  return level * 1000;   // level 1 -> 100, level 2 -> 200, level 3 -> 300...
}

function checkLevelUp() {
  while (score >= scoreForNextLevel()) {
    level++;
    clickPower += 2;   // boost on every level up (change the number you want)
    alert("Level " + level + "! Click power is now " + clickPower);
  }
}

updateCatImage();
// Show loaded values right when the page opens
updateDisplay();

// Clicking the cat
cat.addEventListener("click", function(event) {
    score += clickPower;
    checkLevelUp();  // Check if the player has leveled up
    updateDisplay();
    updateCatImage();
    coins += clickPower;
    saveGame();
    clickSound.currentTime = 0;
    clickSound.play();

    // Bounce the cat
    cat.classList.remove("bounce");
    void cat.offsetWidth;
    cat.classList.add("bounce");

    // Create the floating popup
    const popup = document.createElement("div");
    popup.textContent = "+" + clickPower;
    popup.classList.add("popup");
    popup.style.fontSize = Math.min(30 + clickPower * 4, 70) + "px";

    if (clickPower >= 10) {
        popup.style.color = "gold";
    } else if (clickPower >= 5) {
        popup.style.color = "orange";
    } else {
        popup.style.color = "green";
    }

    popup.style.left = event.clientX + "px";
    popup.style.top = event.clientY + "px";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 700);
});

// Buying an upgrade
buyButton.addEventListener("click", function() {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickPower++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateDisplay();
        saveGame();
    } else {
        alert("Not enough points!");
    }
});

// Reset button: erase the save and start over
resetButton.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Every achievement: its id, its name, and what it looks like in the list
const allAchievements = [
    { id: "first",   name: "🐾 First Click" },
    { id: "clicks1000",  name: "👆 10 Clicks" },
    { id: "clicks10000", name: "💯 100 Clicks" },
    { id: "upgrade20000", name: "⬆️ First Upgrade" },
    { id: "score100", name: "💰 100 Points" },
    { id: "power5",  name: "💪 Power Level 5" }
];

const achievementsList = document.getElementById("achievements-list");

// if the score is 5000, go to next level, start with clickpower +40


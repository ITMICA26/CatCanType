// ===== Cat Lodge: new items appear on the right when your SCORE grows =====
// Teaching goal: createElement + appendChild
// Paste this near the top of app.js (after the "Page elements" section).

// 1) The data. Keep it in order from lowest score to highest score.
//    Put your images in a folder called lodge_images/
// const lodgeItems = [
//   { image: "lodge_images/bed.png",       name: "Cat Bed",   score: 40 },
//   { image: "lodge_images/bowl.png",      name: "Food Bowl", score: 80 },
//   { image: "lodge_images/yarn.png",      name: "Yarn Ball", score: 120 },
//   { image: "lodge_images/plant.png",     name: "Plant",     score: 170 },
//   { image: "lodge_images/fireplace.png", name: "Fireplace", score: 230 },
//   { image: "lodge_images/bookshelf.png", name: "Bookshelf", score: 300 },
//   { image: "lodge_images/sofa.png",      name: "Sofa",      score: 400 },
//   { image: "lodge_images/trophy.png",    name: "Trophy",    score: 500 }
// ];
const lodgeItems = [
  { image: "cat_images/silver-cat.png",       name: "Silver Cat",   score: 40 },
    { image: "cat_images/gold-cat.png",      name: "Gold Cat", score: 80 },
    { image: "cat_images/santa-cat.png",      name: "Black Cat", score: 120 },
    { image: "cat_images/hallo-cat.png",     name: "White Cat",     score: 170 },
    { image: "cat_images/queen-cat.png", name: "Ginger Cat", score: 230 },
    { image: "cat_images/tabby-cat.png", name: "Tabby Cat", score: 300 },
    { image: "cat_images/siamese-cat.png",      name: "Siamese Cat",      score: 400 },
    { image: "cat_images/persian-cat.png",    name: "Persian Cat",    score: 500 }
];
// 2) Build the sidebar with JavaScript (no HTML needed!)
const lodge = document.createElement("aside");
lodge.id = "lodge";

const lodgeTitle = document.createElement("h3");
lodgeTitle.textContent = "🏠 Cat Lodge";
lodge.appendChild(lodgeTitle);

const lodgeHint = document.createElement("p");
lodgeHint.className = "lodge-hint";
lodgeHint.textContent = "Keep typing to unlock items!";
lodge.appendChild(lodgeHint);

document.body.appendChild(lodge);

let unlockedCount = 0;   // how many items are unlocked so far

// 3) THE LESSON: create one item and put it on the page
function addLodgeItem(item) {
  const box = document.createElement("div");       // create
  box.className = "lodge-item";

  const picture = document.createElement("img");   // create
  picture.src = item.image;                        // fill
  picture.alt = item.name;

  const label = document.createElement("p");       // create
  label.textContent = item.name;                   // fill

  box.appendChild(picture);                        // put picture inside box
  box.appendChild(label);                          // put label inside box
  lodge.appendChild(box);                          // add box to the sidebar
}

// 4) Call this every time the score goes up (after each finished word).
//    Most of the time it does ONE comparison and stops, so it is very cheap.
function checkUnlocks() {
  while (unlockedCount < lodgeItems.length &&
         score >= lodgeItems[unlockedCount].score) {

    const item = lodgeItems[unlockedCount];
    addLodgeItem(item);
    lodgeHint.hidden = true;
    showMessage("🎁 Unlocked: " + item.name + "!");
    unlockedCount++;
  }
}

/* ========= EDIT IN app.js =========
   In finishWord(), right after  checkLevelUp();  add:
     checkUnlocks();

   There is no resetLodge(): items you unlock stay in the lodge when you
   press Restart, and later games unlock the next items as your score
   passes them.
*/
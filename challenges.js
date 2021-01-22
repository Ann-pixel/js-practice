document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value; //i/p = a_b
  const lines = text.split("\n"); //arr of lines.
  console.log(lines);
  for (const [idx, line] of lines.entries()) {
    const tLine = line.toLowerCase().trim();
    const secondStart = tLine.indexOf("_");
    const cLine = tLine.replace("_", "");
    const capChar = cLine.charAt(secondStart).toUpperCase();
    const preSub = cLine.slice(0, secondStart);
    const postSub = cLine.slice(secondStart + 1);
    const camelResult = `${preSub}${capChar}${postSub}`;
    const paddedCamel = camelResult.padEnd(20, " ");
    const ticks = "✅".repeat(idx + 1);
    const result = paddedCamel + ticks;

    console.log(result);
  }
});
// i/p--
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// result:
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const {
  odds: { team1, x: draw, team2 },
} = game;

function printGoals(...goals) {
  console.log(goals.length);
  for (i = 0; i < goals.length; i++) {
    console.log(goals[i]);
  }
}
printGoals(...game.scored);

team1 > team2 && console.log("team2 is likely to win");
team1 < team2 && console.log("team1 is likely to win");

//challenge 2
for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${player}`);
}
// console.log(Object.values(game.odds));
let oddTotal = 0;
for (const x of Object.values(game.odds)) {
  oddTotal = oddTotal + x;
}
let oddsAvg = oddTotal / Object.values(game.odds).length;
console.log(`Avg odds : ${oddsAvg}`);

// console.log(`Odds of Bayern Munich victory : 1.33`);
console.log(Object.entries(game.odds));
for (const [key, val] of Object.entries(game.odds)) {
  console.log(`the odds of ${key === "x" ? "draw" : game[key]} are: ${val}`);
}

const scorers = {};
for (const goalee of game.scored) {
  scorers[goalee] ? scorers[goalee]++ : (scorers[goalee] = 1);
}
console.log(scorers);

//challenge 3

const uniqueGameEvents = [...new Set(gameEvents.values())];
console.log(uniqueGameEvents);

// console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

const avgEventTime = 90 / gameEvents.size;
console.log(`an event happened every ${avgEventTime} mins.`);

for (const [time, event] of gameEvents) {
  console.log(
    `${time <= 45 ? "[First Half]" : "[Second Half]"} ${time} : ${event}`
  );
}

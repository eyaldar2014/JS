
let winnerAvg = 0;

const winTeam = (teamA, teamB, teamC) => {
  if (JhonAvg > MikeAvg && JhonAvg > MaryAvg) {
    winnerAvg = JhonAvg;
    return teamA
  }
  else if (MaryAvg > MikeAvg && MikeAvg < MaryAvg) {
    winnerAvg = MaryAvg;
    return teamC
  }
  else if (JhonAvg < MikeAvg && MikeAvg > MaryAvg) {
    winnerAvg = MikeAvg;
    return teamB
  }
  else return 0
}

const avg = (a, b, c) => {
  teamAvg = (a + b + c) / 3
  return teamAvg
}


let JhonAvg = avg(89, 120, 103)
let MikeAvg = avg(116, 94, 123)
let MaryAvg = avg(97, 134, 105)

console.log(MikeAvg)
console.log(JhonAvg)
console.log(MaryAvg)

let JhonTeam = "Jhon's Team";
let MikeTeam = "Mike's Team";
let MaryTeam = "Mary's Team";

const winner = winTeam(JhonTeam, MikeTeam, MaryTeam)

console.log("the winner team is " + winner)
console.log("its average is " + winnerAvg)

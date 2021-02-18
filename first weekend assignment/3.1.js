// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 
// 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?




console.log(nb_year(1, 3, 0, 20))

function nb_year (start, grow, add, end) {

  let sum = start

  let i
  for (i = 0; end > sum; i++) {
    sum += sum * (grow / 100)
    sum += add
    // console.log(sum)
  }

  return i
}
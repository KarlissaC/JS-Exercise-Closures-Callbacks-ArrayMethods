// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

    /*Code Here*/
    
      function inning() {

      return Math.floor(Math.random() * 3);
    
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(toCall, innings){
// console.log(toCall());

if (innings <= 0) {
  return 'No innings completed.';
}

let toReturn = {
  'Home': 0,
  'Away': 0
}

for (let i = 0; i < innings; i++) {
  toReturn.Home += toCall();
  toReturn.Away += toCall();
}

return toReturn;

// return function getScore(){

//   for (let i = 0; i < innings; i++) {
//     toReturn.Home += toCall();
//     toReturn.Away += toCall();
//   }

//   return toReturn;
// }


}
  

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// const getInningScore(inningNumber,singleInning);

return function processInning() {

    
  for (let i = counter; i < inningNumber || i < 10; i++) {

    if (i === 1) {
      numEnding = 'st';
    }

    else if (i === 2) {
      numEnding = 'nd';
    }

    else if (i === 3) {
      numEnding = 'rd';
    }

    else{
      numEnding = 'th';
    }

    const curScores = getInningScore(singleInning, 1);
    awayScore += curScores.Away;
    homeScore += curScores.Home;

    const toAdd = {
      [`${i}${numEnding} inning`]: `${awayScore} - ${homeScore}`
    }

    scores.push(toAdd);
    counter = i;
  }

  
  return scores;
}



const scoreList = scoreboard(finalScore,inning,9);
console.log(scoreList());






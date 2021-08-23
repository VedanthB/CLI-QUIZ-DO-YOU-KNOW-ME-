const readlineSync = require('readline-sync')
const chalk = require('chalk')

var score = 0;

var highScore = [
  {
    name: "Elon",
    score: 10
  },
  {
    name: "Jeff",
    score: 9
  },
  {
    name: "Mark",
    score: 7
  }
]

function welcome() {
 var userName = readlineSync.question("Please enter your name: ")

 console.log(chalk.blueBright("Welcome " + userName + ",lets see if your really know me?"))

 console.log('\n');
 console.log('Rules & Instructions: ');
 console.log(chalk.bold.blueBright('1.',userName + ', There are 10 Questions and all are Compulsory.'));
 console.log(chalk.bold.blueBright('2. You will get 1 points on each Right Answer.'));

}


var questionArray = [
  {
    question: "What is my full name?",
    answer: "Vedanth Bora"
  },
  {
    question: "Which band is my favourite band?",
    answer: "Nirvana"
  },
  {
    question: "What is my favourite hobby?",
    answer: "Coding"
  },
  {
    question: "What is my favourite holiday destination?",
    answer: "Bali"
  },
  {
    question: "Who do I idolize?",
    answer: "Kurt Cobain"
  },
  {
    question: "What is the name of my hometown?",
    answer: "Delhi"
  },
  {
    question: "Where was I born?",
    answer: "Delhi"
  },
  {
    question: "Where do i live?",
    answer: "Bangalore"
  },
  {
    question: "Which is my favourite cuisine?",
    answer: "Indian"
  },
  {
    question: "Which is my favourite season?",
    answer: "Winter"
  }
]

function playGame(question, answer) {
  let userResponse = readlineSync.question(question);

  if (answer.toLowerCase() == userResponse.toLowerCase()) {
    score += 1;
    console.log(chalk.bold.bgGreenBright.blue("You are correct!!"));
    console.log(chalk.bold.bgYellow.magentaBright("Your score is " + score));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }

  else {
    console.log(chalk.bold.bgRed.blue("You are wrong!!"));
    console.log(chalk.bold.bgGreenBright.blue("Do not Worry. Stay and Play ahead"));
    console.log(chalk.magentaBright("-------------------------------------------"));
  }
}

function game(){
  for (i = 0; i < questionArray.length; i++) {
  let q = questionArray[i];
  playGame(q.question, q.answer);
 }
}


function showScores() {
  console.log(chalk.bold.bgGreenBright.blue("Well done!! YAY! You SCORED:"), score);
  console.log(chalk.bold.bgGreenBright.blue("Send the screenshot of your score, if you should be there ping me I'll update it"));
  highScore.map(score => console.log(chalk.bold.magentaBright(score.name), " : ", score.score))
}

welcome();
game();
showScores();

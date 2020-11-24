
  // pushing code to github
  var qlist = ["What is John's real name?\n",
    "What martial arts did John used the most?\n",
    "How did John wear his wrist watch?\nA)inside\nB)outside\n",
    "Name John's Car.\n",
    "How many men did John killed in the Bar?\n"
  ];

  var alist = ["Jardani",
    "Judo",
    "A",
    "Mustang",
    "Three"
  ];

  var score = 0;

  console.log("HINT - Keep the 1st letter of the word capital and the rest small.");
  console.log();

  function qnaFunction(listedquestion , listedanswer) {

    var readlineSync = require("readline-sync");
    var answerOfUser = readlineSync.question(listedquestion);

    if ( answerOfUser === listedanswer) {
      score = score + 2;
      console.log();
      console.log("you are right!");
    }
    else{
      score--;
      console.log();
      console.log("you are wrong!");
    }
    console.log("current score: "+score);
    console.log();
  }

  for(var i = 0; i < qlist.length; i++ ){
    qnaFunction(qlist[i] , alist[i]);
     console.log();
  }
  console.log();
  console.log("final score: "+score);

  var highScores = ["Animesh-7",
  "Suresh-6", 
  "Yashi-6"];

  console.log();
  console.log("High Scores -- ");
  console.log();

  for(var j = 0 ; j < highScores.length; j++){
    console.log(highScores[j]);
  }

  console.log();
 
  if (score > 7 ) {
  console.log("Congrats! You have beaten the High Score. Send me a ss to update your score as new High Score.");
  }
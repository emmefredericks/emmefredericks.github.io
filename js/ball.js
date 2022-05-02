
var answers= ["It is certain","It is decidedly so","Without a doubt", "Yes - definitely", "You may rely on it", "As i see it, yes","Most likely","Outlook good","Don't count on it", "My reply is no","My sources say no","Very doubtful","Ask again later","Concentrate and ask again"];

window.onload = function() {
  var eight = document.getElementById("eight");
  var answer = document.getElementById("answer");
  var eightball = document.getElementById("eight-ball");
  var question = document.getElementById("question");

eightball.addEventListener("click", function() {
  if (question.value.length < 1) {
    alert('Enter a question!');
  } else {
    eight.innerText = "";
    var num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
  }
});
};

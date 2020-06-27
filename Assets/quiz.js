// web api challenge
// create a timed coding quiz
// has multiple choice questions

// needs a start button
// timer starts with 1st question
// answered incorrectly timer us subtracted until reaches to 0
// save my initials or name and score

// selecting elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
// var timer = document.getElementById("timer");
var counter = document.getElementById("counter");
var timegauge = document.getElementById("timegauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("score");



// create our questions
var question = [
    {
        question : "What does JS stand for?",
        choiceA :"correct",
        choiceB :"wrong",
        choiceC :"wrong",
        correct :"A",
    },{
        question : "What does CSS stand for?",
        choiceA :"wrong",
        choiceB :"correct",
        choiceC :"wrong",
        correct :"B", 
    },{
        question : "What does HTML stand for?",
        choiceA :"wrong",
        choiceB :"wrong",
        choiceC :"correct",
        correct :"C",
    }
];

// counter render
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var timer;
var lastQuestion = question.length - 1;
var runningQuestion = 0;

// render a question
function renderQuestion(){
    var q = question[runningQuestion];
    
    question.innerHTML = "<p>"+ question.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
timer = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
for ( var qIndex = 0; qindex <= lastQuestion; qIndex++){
    progress.innerHTML += "<div class= 'prog' id="+ qindex +"></div>";
}
}


function renderCounter(){
    
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
    }
    }


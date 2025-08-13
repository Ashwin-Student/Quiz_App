

const questions = [
  {
     question:"which is the largest animal on earth?",
     answer:[
      {text:"shark", correct:false},
      {text:"Blue whale", correct:true},
      {text:"Elephant", correct:false},
      {text:"Giraffe", correct:false},
     ]
},

{
    question:"which is the largest planet on earth?",
     answer:[
      {text:"earth", correct:false},
      {text:"jupiter", correct:true},
      {text:"venus", correct:false},
      {text:"mars", correct:false},
     ]
},

{
     question:"which is the largest mountain on earth?",
     answer:[
      {text:"satpuda", correct:false},
      {text:"Himalaya", correct:true},
      {text:"mount-fuji", correct:false},
      {text:"malwan-plateau", correct:false},
     ]
},

{
    question:"which is the largest river on earth?",
     answer:[
      {text:"nile", correct:false},
      {text:"amazon", correct:true},
      {text:"ganga", correct:false},
      {text:"godavari", correct:false},
     ]
},
]


const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();

}

function showQuestion(){
  resetState();
  let currentQuestion  =  questions[currentQuestionIndex];
  let questionNo = currentQuestion + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

}


function resetState(){
  nextBtn.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if(isCorrect){
    selectedBtn.classList.add('correct');
  }
  else{
    selectedBtn.classList.add('Incorrect');
  }

  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
       }
    button.disabled = 'true';   
  });

  nextBtn.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", () =>{
     if(currentQuestionIndex < questions.length){
      handleNextButton();
     }
     else{
      startQuize();
     }
});


startQuize();
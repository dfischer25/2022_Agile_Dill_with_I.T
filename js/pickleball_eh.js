const quizData = [
  {
    question: 'What equipments do you need for pickleball?',
    answers: {
      a: 'dill pickle',
      b: 'paddle',
      c: 'pickle juice',
    },
    correct: 'b',
  },
  {
    question: 'Why is the name pickleball?',
    answers: {
      a: 'Because the ball looks like a pickle',
      b: 'Because we eat pickles while playing',
      c: 'The game inventer named it after his dog',
    },
    correct: 'c',
  },
  {
    question: 'What does kitchen mean in the pickleball court?',
    answers: {
      a: 'It means we can play in the kitchen.',
      b: 'It means you need to be a cook to play pickleball.',
      c: 'It means a restricted area to serve and receive.',
    },
    correct: 'c',
  },
];

const quizDisplay = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

let currentSlide = 0;
const resultDisplay = document.getElementById('result');

function buildQuiz() {
  let output = [];
  quizData.forEach((currentQuestion, questionNum) => {
    const answers = [];
    for (let item in currentQuestion.answers) {
      if (item !== null) {
        answers.push(`<label>
        <input type="radio" name="question${questionNum}" value="${item}">
        ${item} : ${currentQuestion.answers[item]}
        </label>`);
      }
    }
    output.push(`<div class="slide"><div class="question"> ${
      currentQuestion.question
    }</div>
      <div class="answer">${answers.join(
        '&nbsp;&nbsp;&nbsp;&nbsp;'
      )}</div></div>`);
  });
  quizDisplay.innerHTML = output.join('</br>');
}

function showResult() {
  const answerDisplays = quizDisplay.querySelectorAll('.answer');
  let numCorrect = 0;

  quizData.forEach((currentQuestion, questionNum) => {
    const answerDisplay = answerDisplays[questionNum];
    const selector = `input[name=question${questionNum}]:checked`;
    const userAnswer = (answerDisplay.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correct) {
      numCorrect++;
      answerDisplays[questionNum].style.color = 'green';
    } else {
      answerDisplays[questionNum].style.color = 'red';
    }
  });

  submitBtn.style.display = 'none';
  resultDisplay.innerHTML = `<h3 style="color:#333;">Out of ${quizData.length}, you were correct ${numCorrect} answer(s).</h3>`;
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if (currentSlide === 0) {
    previousBtn.style.display = 'none';
  } else {
    previousBtn.style.display = 'inline-block';
  }
  if (currentSlide === slides.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
    if (document.getElementById('retry')) {
      document.getElementById('retry').style.display = 'none';
    }
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}
function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

buildQuiz();
showSlide(currentSlide);
previousBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);
submitBtn.addEventListener('click', showResult);

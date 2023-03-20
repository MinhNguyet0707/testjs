let quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quizContainer = document.querySelector('.quiz-container');

quizes.forEach((quiz) => {
    quizContainer.innerHTML += `
      <h3 >${quiz.question}</h3>
      <div class = "quiz-answer">
      <input type="radio"  />
    <label for="radio1">${quiz.answers[0]}</label><br>
      <input type="radio"  />
    <label for="radio1">${quiz.answers[1]}</label><br> 
      <input type="radio"  />
    <label for="radio1">${quiz.answers[2]}</label><br>    
      <input type="radio"  />
    <label for="radio1">${quiz.answers[3]}</label><br>
    </div>
      `;
})

let btn = document.getElementById('btn')
let answers = document.getElementsByClassName('quiz-answer');
document.querySelectorAll('input').checked = false;
btn.addEventListener('click', function () {
    for (let i = 0; i < answers.length; i++) {
        let random = Math.floor(Math.random() * 4);
        answers[i].querySelectorAll('input')[random].checked = true;
    }

})





const questions = [
  {
    question: "Qual a capital do Brasil?",
    answers: [
      { id: 1, text: "São Paulo", correct: false },
      { id: 2, text: "Santa Catarina", correct: false },
      { id: 3, text: "Brasília", correct: true },
      { id: 4, text: "Rio de Janeiro", correct: false }
    ]
  },
  {
    question: "Qual é o menor país do mundo?",
    answers: [
      { id: 1, text: "Vaticano", correct: true },
      { id: 2, text: "Butão", correct: false },
      { id: 3, text: "Nepal", correct: false },
      { id: 4, text: "Rússia", correct: false }
    ]
  },
  {
    question: "Quem é a menina do petróleo?",
    answers: [
      { id: 1, text: "Maria Lays", correct: false },
      { id: 2, text: "Jéssica", correct: false },
      { id: 3, text: "Juliana", correct: true },
      { id: 4, text: "Maria", correct: false }
    ]
  }
];



const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

// Função para gerar as perguntas e respostas dinamicamente
function generateQuiz(questions) {
  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.innerText = question.question;
    questionDiv.appendChild(questionText);

    question.answers.forEach(answer => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      input.type = "radio";
      input.name = `q${index}`;  // Agrupar as opções de resposta da mesma pergunta
      input.value = answer.id;

      label.appendChild(input);
      label.appendChild(document.createTextNode(answer.text));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizForm.appendChild(questionDiv);
  });
}

// Função para verificar as respostas do usuário
submitButton.addEventListener("click", () => {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedAnswer) {
      const selectedId = parseInt(selectedAnswer.value);
      const correctAnswer = question.answers.find(answer => answer.id === selectedId);

      if (correctAnswer && correctAnswer.correct) {
        score++;
      }
    }
  });

  resultDiv.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
});

// Gerar o quiz assim que a página carregar
generateQuiz(questions);
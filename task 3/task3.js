let currentImage = 1;
function nextImage() {
  currentImage++;
  document.getElementById('carousel-img').src = `https://picsum.photos/600/300?random=${currentImage}`;
}
function prevImage() {
  currentImage--;
  if (currentImage < 1) currentImage = 5;
  document.getElementById('carousel-img').src = `https://picsum.photos/600/300?random=${currentImage}`;
}


const quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Creative Style System", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

const quizContainer = document.getElementById('quiz-container');
let quizHTML = '';
quizQuestions.forEach((q, i) => {
  quizHTML += `<p>${q.question}</p>`;
  q.options.forEach(option => {
    quizHTML += `<label><input type="radio" name="q${i}" value="${option}"> ${option}</label><br>`;
  });
});
quizContainer.innerHTML = quizHTML;

document.getElementById('submit').addEventListener('click', () => {
  let score = 0;
  quizQuestions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  document.getElementById('result').innerText = `You got ${score} / ${quizQuestions.length} correct!`;
});


function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('joke-output').innerText = data.joke;
    })
    .catch(() => {
      document.getElementById('joke-output').innerText = "Failed to load joke. Try again!";
    });
}

import { questions } from './questions.js'

// GRAB FROM THE DOM
const nextBtn = document.getElementById("next-btn")
const questionText = document.getElementById("question")
const difficultyDisplay = document.getElementById("difficulty")

// SET DIFFICULTY
let increment = function () {
  clickCount += 1
  console.log(clickCount)
}

let clickCount = 0
nextBtn.addEventListener("click", increment)

function setDifficulty() {
  if (clickCount < 3) {
    return "easy"
  } else if (3 <= clickCount && clickCount < 6) {
    console.log("medium")
    return "medium"
  } else {
    console.log("hard")
    return "hard"
  }
}

// CHANGE THE QUESTION
let renderQuestion = function () {
  questionText.innerHTML = questions[setDifficulty()][Math.floor(Math.random() * questions[setDifficulty()].length)]
  difficultyDisplay.innerHTML = `Difficulty: ${setDifficulty()}`
}

nextBtn.addEventListener("click", renderQuestion)

// DISPLAY THE QUESTION ON LOAD
renderQuestion()
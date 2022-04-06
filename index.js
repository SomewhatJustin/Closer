import { questions } from './questions.js'

// GRAB FROM THE DOM
const nextBtn = document.getElementById("next-btn")
const questionText = document.getElementById("question")

// PICKING THE QUESTION
questionText.innerHTML = questions.easy[0]
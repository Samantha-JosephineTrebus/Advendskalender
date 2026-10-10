// Quizfragen und Punkte pro Türchen hier eintragen.
// Beispiel: { question: "Frage?", options: ["Antwort A", "Antwort B"], answer: 0, points: 1 }
const QUIZZES = Array.from({ length: 24 }, (_, index) => ({
  title: `Türchen ${index + 1}`,
  questions: []
}));

const STORAGE_KEY = "adventskalender-fortschritt-v1";
const calendar = document.querySelector("#calendar");
const scoreDisplay = document.querySelector("#score");
const overlay = document.querySelector("#overlay");
const dialogDay = document.querySelector("#dialog-day");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const closeDialogButton = document.querySelector("#close-dialog");
const storageWarning = document.querySelector("#storage-warning");

let progress = loadProgress();
let openDay = null;

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return {};

    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed;
    throw new Error("Gespeicherter Fortschritt hat ein unerwartetes Format.");
  } catch (error) {
    console.error("Der gespeicherte Fortschritt konnte nicht geladen werden.", error);
    showStorageWarning("Der gespeicherte Fortschritt konnte nicht gelesen werden. Der Kalender startet mit leerem Fortschritt.");
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    storageWarning.hidden = true;
  } catch (error) {
    console.error("Der Fortschritt konnte nicht gespeichert werden.", error);
    showStorageWarning("Dein Fortschritt konnte nicht gespeichert werden. Prüfe bitte die Speicher-Einstellungen deines Browsers.");
  }
}

function showStorageWarning(message) {
  storageWarning.textContent = message;
  storageWarning.hidden = false;
}

function answersFor(dayIndex) {
  const answers = progress[dayIndex];
  return answers && typeof answers === "object" && !Array.isArray(answers) ? answers : {};
}

function pointsFor(dayIndex) {
  const quiz = QUIZZES[dayIndex];
  const answers = answersFor(dayIndex);
  return quiz.questions.reduce((total, question, questionIndex) => (
    total + (answers[questionIndex] === question.answer ? question.points : 0)
  ), 0);
}

function isComplete(dayIndex) {
  const quiz = QUIZZES[dayIndex];
  return quiz.questions.length > 0
    && quiz.questions.every((_, questionIndex) => Object.hasOwn(answersFor(dayIndex), questionIndex));
}

function renderCalendar() {
  calendar.replaceChildren();
  QUIZZES.forEach((quiz, index) => {
    const button = document.createElement("button");
    button.className = "door";
    button.type = "button";
    button.setAttribute("aria-label", `${quiz.title}${isComplete(index) ? ", abgeschlossen" : ""}`);

    if (isComplete(index)) {
      const check = document.createElement("span");
      check.className = "door-check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";
      button.append(check);
    }

    const number = document.createElement("span");
    number.className = "door-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const label = document.createElement("span");
    label.className = "door-label";
    label.textContent = isComplete(index) ? `${pointsFor(index)} Punkte` : "Öffnen";
    const content = document.createElement("span");
    content.className = "door-content";
    content.append(number, label);
    button.append(content);
    button.addEventListener("click", () => openQuiz(index));
    calendar.append(button);
  });

  const totalScore = QUIZZES.reduce((total, _, index) => total + pointsFor(index), 0);
  scoreDisplay.textContent = String(totalScore);
}

function openQuiz(dayIndex) {
  openDay = dayIndex;
  const quiz = QUIZZES[dayIndex];
  dialogDay.textContent = `Dezember ${dayIndex + 1}`;
  dialogTitle.textContent = quiz.title;
  renderQuestion();
  overlay.hidden = false;
  closeDialogButton.focus();
}

function renderQuestion() {
  const quiz = QUIZZES[openDay];
  const answers = answersFor(openDay);
  const questionIndex = quiz.questions.findIndex((_, index) => !Object.hasOwn(answers, index));
  dialogContent.replaceChildren();

  if (quiz.questions.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "Dieses Türchen wird noch mit einem Quiz befüllt. Schau bald wieder vorbei!";
    dialogContent.append(message);
    return;
  }

  if (questionIndex === -1) {
    renderResult();
    return;
  }

  const question = quiz.questions[questionIndex];
  const progressText = document.createElement("p");
  progressText.className = "question-progress";
  progressText.textContent = `Frage ${questionIndex + 1} von ${quiz.questions.length}`;
  const questionText = document.createElement("p");
  questionText.className = "question-text";
  questionText.textContent = question.question;
  const choices = document.createElement("div");
  choices.className = "answers";
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-label", "Antwortmöglichkeiten");

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => submitAnswer(questionIndex, optionIndex));
    choices.append(button);
  });

  dialogContent.append(progressText, questionText, choices);
}

function submitAnswer(questionIndex, selectedIndex) {
  const quiz = QUIZZES[openDay];
  const question = quiz.questions[questionIndex];
  const isCorrect = selectedIndex === question.answer;
  const answers = answersFor(openDay);
  answers[questionIndex] = selectedIndex;
  progress[openDay] = answers;
  saveProgress();
  renderCalendar();

  const buttons = dialogContent.querySelectorAll(".answer-button");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
  });

  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? `Richtig! +${question.points} ${question.points === 1 ? "Punkt" : "Punkte"}`
    : "Leider nicht ganz. Die richtige Antwort ist markiert.";
  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);
  dialogContent.append(feedback, nextButton);
  nextButton.focus();
}

function renderResult() {
  const result = document.createElement("div");
  result.className = "result-card";
  result.textContent = "Geschafft! Du hast dieses Quiz abgeschlossen.";
  const points = document.createElement("strong");
  points.className = "result-points";
  points.textContent = `${pointsFor(openDay)} Punkte`;
  result.append(points);
  dialogContent.append(result);
}

function closeDialog() {
  overlay.hidden = true;
  openDay = null;
}

closeDialogButton.addEventListener("click", closeDialog);
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeDialog();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.hidden) closeDialog();
});

renderCalendar();

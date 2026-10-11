const QUIZZES = [
  {
    title: "Türchen 1",
    questions: [
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "T R I W E N", answer: "WINTER", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "E S N H C E", answer: "SCHNEE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "N R E T S", answer: "STERN", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "Z E R E K", answer: "KERZE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "G E N E L", answer: "ENGEL", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "O A K A K", answer: "KAKAO", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "B E L N E", answer: "NEBEL", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "K E F O C L", answer: "FLOCKE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "Z T Ü M E", answer: "MÜTZE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "T V E N D A", answer: "ADVENT", points: 1 }
    ]
  },
  { title: "Türchen 2", questions: [{ question: "Wie nennt man die traditionelle Weihnachtsdekoration aus Tannenzweigen?", options: ["Kranz", "Girlande", "Schmuck", "Kette"], answer: 1, points: 2 }] },
  { title: "Türchen 3", questions: [{ question: "Was steckt in einer Weihnachtsbaumspitze meistens oben dran?", options: ["Stern", "Kugel", "Engel", "Lampe"], answer: 0, points: 2 }] },
  { title: "Türchen 4", questions: [{ question: "Welche Farbe passt besonders gut zu Schnee und Eis?", options: ["Grün", "Blau", "Orange", "Rot"], answer: 1, points: 2 }] },
  { title: "Türchen 5", questions: [{ question: "Wie nennt man das Lied mit dem Satz: 'Stille Nacht, heilige Nacht'?", options: ["Adventslied", "Weihnachtslied", "Winterlied", "Morgenlied"], answer: 1, points: 2 }] },
  { title: "Türchen 6", questions: [{ question: "Welches Fest beginnt am 24. Dezember?", options: ["Heiligabend", "Easter", "Halloween", "Martinstag"], answer: 0, points: 2 }] },
  { title: "Türchen 7", questions: [{ question: "Welches Gewürz ist bei Plätzchen besonders typisch?", options: ["Kardamom", "Zimt", "Paprika", "Koriander"], answer: 1, points: 2 }] },
  { title: "Türchen 8", questions: [{ question: "Was ist ein typischer Weihnachtsmann-Name in vielen Geschichten?", options: ["Nikolaus", "Gustav", "Tobias", "Marius"], answer: 0, points: 2 }] },
  { title: "Türchen 9", questions: [{ question: "Welches Getränk passt besonders zu einem kalten Winterabend?", options: ["Kakao", "Limonade", "Soda", "Eistee"], answer: 0, points: 2 }] },
  { title: "Türchen 10", questions: [{ question: "Was wird in der Weihnachtszeit oft auf dem Adventskranz gesetzt?", options: ["Kerzen", "Bilder", "Steine", "Blumen"], answer: 0, points: 2 }] },
  { title: "Türchen 11", questions: [{ question: "Welches Wort beschreibt eine besonders schöne, kalte Winterstimmung?", options: ["Frostig", "Staubig", "Vulkanisch", "Sonnig"], answer: 0, points: 2 }] },
  { title: "Türchen 12", questions: [{ question: "Welche Farbe ist in vielen Weihnachtsdekorationen besonders verbreitet?", options: ["Silber", "Lila", "Braun", "Pink"], answer: 0, points: 2 }] },
  { title: "Türchen 13", questions: [{ question: "Was ist eine klassische Weihnachtsgabe?", options: ["Buch", "Schaufel", "Hammer", "Mauer"], answer: 0, points: 3 }] },
  { title: "Türchen 14", questions: [{ question: "Wie nennt man die kleinen, süßen Kekse aus der Weihnachtszeit oft?", options: ["Plätzchen", "Brötchen", "Croissants", "Baguette"], answer: 0, points: 3 }] },
  { title: "Türchen 15", questions: [{ question: "Welche Stimmung passt am besten zu einer Schneelandschaft?", options: ["Winterlich", "Tropisch", "Wüstenscharf", "Stürmisch"], answer: 0, points: 3 }] },
  { title: "Türchen 16", questions: [{ question: "Was ist das Gegenteil von warm?", options: ["Kalt", "Nass", "Leicht", "Fett"], answer: 0, points: 3 }] },
  { title: "Türchen 17", questions: [{ question: "Wie nennt man das Klingeln von Glocken im Winter?", options: ["Festlichkeit", "Oberton", "Winterklingen", "Windschein"], answer: 0, points: 3 }] },
  { title: "Türchen 18", questions: [{ question: "Welches Wort passt zu einer verschneiten und ruhigen Nacht?", options: ["Stille", "Laut", "Wild", "Voll"], answer: 0, points: 3 }] },
  { title: "Türchen 19", questions: [{ question: "Was hängt man oft als erste Deko vor das Fenster?", options: ["Einen Kranz", "Eine Lampe", "Ein Bett", "Eine Tasche"], answer: 0, points: 3 }] },
  { title: "Türchen 20", questions: [{ question: "Welches Getränk wird oft mit Zimt und Sahne serviert?", options: ["Glühwein", "Energiegetränk", "Saft", "Mojito"], answer: 0, points: 3 }] },
  { title: "Türchen 21", questions: [{ question: "Welche Farbe eignet sich besonders für weiße Weihnachten?", options: ["Silber", "Tiefes Blau", "Schwarz", "Orange"], answer: 0, points: 3 }] },
  { title: "Türchen 22", questions: [{ question: "Wie nennt man eine kleine, festliche Leuchte im Fenster?", options: ["Lichterkette", "Kübelschrank", "Zelt", "Wolke"], answer: 0, points: 3 }] },
  { title: "Türchen 23", questions: [{ question: "Was macht man oft am Abend an Weihnachten?", options: ["Geschenke öffnen", "Sport treiben", "Klettern", "Reisen"], answer: 0, points: 4 }] },
  { title: "Türchen 24", questions: [{ question: "Welches Gefühl passt am besten zu einem perfekten Adventskalender?", options: ["Freude", "Trost", "Betrübnis", "Langeweile"], answer: 0, points: 4 }] }
];

const STORAGE_KEY = "adventskalender-fortschritt-v2";
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
let wordTimer = null;
let wordTimerKey = null;
let wordDeadline = null;

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
    total + (isCorrectAnswer(question, answers[questionIndex]) ? question.points : 0)
  ), 0);
}

function isCorrectAnswer(question, answer) {
  if (question.type === "word") {
    return typeof answer === "string"
      && answer.trim().toLocaleLowerCase("de-DE") === question.answer.toLocaleLowerCase("de-DE");
  }
  return answer === question.answer;
}

function isComplete(dayIndex) {
  const quiz = QUIZZES[dayIndex];
  return quiz.questions.length > 0
    && quiz.questions.every((_, questionIndex) => Object.hasOwn(answersFor(dayIndex), questionIndex));
}

function renderCalendar() {
  calendar.replaceChildren();
  QUIZZES.forEach((quiz, index) => {
    const completed = isComplete(index);
    const button = document.createElement("button");
    button.className = `door${completed ? " is-complete" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `${quiz.title}${completed ? ", abgeschlossen" : ""}`);

    if (completed) {
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
    label.textContent = completed ? `${pointsFor(index)} Punkte` : "Öffnen";
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
  renderIntro();
  overlay.hidden = false;
  closeDialogButton.focus();
}

function renderIntro() {
  const quiz = QUIZZES[openDay];
  const completed = isComplete(openDay);
  const answeredCount = Object.keys(answersFor(openDay)).length;
  dialogContent.replaceChildren();

  if (quiz.questions.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "Dieses Türchen wird noch mit einem Quiz befüllt. Schau bald wieder vorbei!";
    dialogContent.append(message);
    return;
  }

  const description = document.createElement("p");
  description.className = "quiz-intro";
  if (quiz.questions[0].type === "word") {
    description.textContent = `In diesem Quiz warten ${quiz.questions.length} Buchstabensalate auf dich. Entwirre die Buchstaben und gib das richtige Wort ein. Für jedes Wort hast du 30 Sekunden Zeit und für jede richtige Lösung bekommst du Punkte.`;
  } else {
    description.textContent = `In diesem Quiz warten ${quiz.questions.length} ${quiz.questions.length === 1 ? "Frage" : "Fragen"} auf dich. Wähle bei jeder Frage die passende Antwort und sammle Punkte für richtige Lösungen.`;
  }

  const progressMessage = document.createElement("p");
  progressMessage.className = "intro-progress";
  if (completed) {
    progressMessage.textContent = `Du hast dieses Quiz bereits abgeschlossen und ${pointsFor(openDay)} Punkte gesammelt.`;
  } else if (answeredCount > 0) {
    progressMessage.textContent = `Du hast bereits ${answeredCount} von ${quiz.questions.length} Fragen beantwortet.`;
  }

  const startButton = document.createElement("button");
  startButton.className = "primary-button";
  startButton.type = "button";
  startButton.textContent = completed
    ? "Zusammenfassung ansehen"
    : answeredCount > 0 ? "Quiz fortsetzen" : "Quiz starten";
  startButton.addEventListener("click", completed ? renderResult : renderQuestion);

  dialogContent.append(description);
  if (progressMessage.textContent) dialogContent.append(progressMessage);
  dialogContent.append(startButton);
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

  if (question.type === "word") {
    renderWordQuestion(question, questionIndex, progressText, questionText);
    return;
  }

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

function renderWordQuestion(question, questionIndex, progressText, questionText) {
  const scrambledWord = document.createElement("p");
  scrambledWord.className = "scramble-word";
  scrambledWord.setAttribute("aria-label", "Buchstabensalat");
  scrambledWord.textContent = question.scrambled;

  const timerDisplay = document.createElement("p");
  timerDisplay.className = "word-timer";
  timerDisplay.setAttribute("role", "timer");

  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = "word-input";
  input.type = "text";
  input.autocomplete = "off";
  input.autocapitalize = "characters";
  input.spellcheck = false;
  input.placeholder = "Deine Lösung";
  input.setAttribute("aria-label", "Lösung des Buchstabensalats");
  const submitButton = document.createElement("button");
  submitButton.className = "primary-button";
  submitButton.type = "submit";
  submitButton.textContent = "Antwort prüfen";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input.value.trim()) {
      input.focus();
      return;
    }
    submitWordAnswer(questionIndex, input.value.trim());
  });

  form.append(input, submitButton);
  dialogContent.append(progressText, questionText, scrambledWord, timerDisplay, form);
  startWordTimer(questionIndex, timerDisplay);
  input.focus();
}

function startWordTimer(questionIndex, timerDisplay) {
  const timerKey = `${openDay}:${questionIndex}`;
  if (wordTimerKey !== timerKey) {
    clearInterval(wordTimer);
    wordTimerKey = timerKey;
    wordDeadline = Date.now() + 30_000;
  }

  clearInterval(wordTimer);
  const updateTimer = () => {
    const secondsLeft = Math.max(0, Math.ceil((wordDeadline - Date.now()) / 1000));
    timerDisplay.textContent = `Noch ${secondsLeft} Sekunden`;
    timerDisplay.classList.toggle("word-timer--urgent", secondsLeft <= 10);
    if (secondsLeft === 0) {
      clearInterval(wordTimer);
      submitWordAnswer(questionIndex, "", true);
    }
  };

  updateTimer();
  if (wordTimerKey === timerKey) wordTimer = setInterval(updateTimer, 200);
}

function submitWordAnswer(questionIndex, answer, timedOut = false) {
  const answers = answersFor(openDay);
  if (Object.hasOwn(answers, questionIndex)) return;

  clearInterval(wordTimer);
  wordTimer = null;
  wordTimerKey = null;
  wordDeadline = null;

  const quiz = QUIZZES[openDay];
  const question = quiz.questions[questionIndex];
  answers[questionIndex] = answer;
  progress[openDay] = answers;
  saveProgress();
  renderCalendar();

  const isCorrect = isCorrectAnswer(question, answer);
  dialogContent.replaceChildren();
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  if (timedOut) {
    feedback.textContent = `Die Zeit ist abgelaufen. Das Wort war „${question.answer}“.`;
  } else if (isCorrect) {
    feedback.textContent = `Richtig! +${question.points} ${question.points === 1 ? "Punkt" : "Punkte"}`;
  } else {
    feedback.textContent = `Leider nicht ganz. Das Wort war „${question.answer}“.`;
  }

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);
  dialogContent.append(feedback, nextButton);
  nextButton.focus();
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
  const heading = document.createElement("p");
  heading.className = "result-heading";
  heading.textContent = "Quiz abgeschlossen!";
  const points = document.createElement("strong");
  points.className = "result-points";
  points.textContent = `${pointsFor(openDay)} Punkte`;
  const summaryHeading = document.createElement("h3");
  summaryHeading.className = "summary-heading";
  summaryHeading.textContent = "Deine Antworten";
  const summary = document.createElement("ol");
  summary.className = "answer-summary";

  const quiz = QUIZZES[openDay];
  const answers = answersFor(openDay);
  quiz.questions.forEach((question, questionIndex) => {
    const answer = answers[questionIndex];
    const isCorrect = isCorrectAnswer(question, answer);
    const item = document.createElement("li");
    item.className = `answer-summary-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    const status = document.createElement("span");
    status.className = "answer-summary-status";
    status.textContent = isCorrect ? "Richtig" : "Falsch";
    const questionLabel = document.createElement("span");
    questionLabel.className = "answer-summary-question";
    questionLabel.textContent = `Frage ${questionIndex + 1}`;

    const userAnswer = question.type === "word"
      ? (typeof answer === "string" && answer.trim() ? answer.trim() : "Keine Antwort (Zeit abgelaufen)")
      : question.options[answer] ?? "Keine Antwort";
    const answerText = document.createElement("span");
    answerText.className = "answer-summary-answer";
    answerText.textContent = `Deine Antwort: ${userAnswer}`;

    item.append(questionLabel, status, answerText);
    if (!isCorrect) {
      const correctAnswer = document.createElement("span");
      correctAnswer.className = "answer-summary-correct";
      correctAnswer.textContent = `Richtige Antwort: ${question.type === "word" ? question.answer : question.options[question.answer]}`;
      item.append(correctAnswer);
    }
    summary.append(item);
  });

  result.append(heading, points, summaryHeading, summary);
  dialogContent.append(result);
}

function closeDialog() {
  clearInterval(wordTimer);
  wordTimer = null;
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

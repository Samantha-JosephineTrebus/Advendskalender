const QUIZZES = [
  {
    title: "Türchen 1",
    questions: [
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "R E G E B A N I A T", answer: "RAGEBAITEN", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "A T A C A H R N", answer: "NACHTARA", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "Z H T S H C C R A E S F Ü", answer: "SCHARFSCHÜTZE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "A E I K T N", answer: "AKTIEN", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "E T L H R I K E P O", answer: "HELIKOPTER", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "I I T N O B C", answer: "BITCOIN", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "L S I P D E O I V E", answer: "VIDEOSPIEL", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "T S S H C E N E U N P R P", answer: "STERNSCHNUPPE", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "I P O W H L L R O", answer: "WHIRLPOOL", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "K U S Y H", answer: "HUSKY", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "C H C N U E H T S A T", answer: "TASCHENTUCH", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "E A R T H", answer: "HATER", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "N E E V T S I E N I R", answer: "INVESTIEREN", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "D U P L E R S E H", answer: "SUPERHELD", points: 1 },
      { type: "word", question: "Bilde aus den Buchstaben das richtige Wort:", scrambled: "E I G P Z U E L S", answer: "SPIELZEUG", points: 1 }
    ]
  },
  {
    title: "Türchen 2",
    questions: [
      { type: "image", image: "winter_splash_arts/nunu-winter-splash-art-zoom.jpg", revealImage: "winter_splash_arts/nunu-winter-splash-art.jpg", answer: "Nunu", points: 2 },
      { type: "image", image: "winter_splash_arts/winrer-wonder-zeri-splash-art-zoom.jpg", revealImage: "winter_splash_arts/winrer-wonder-zeri-splash-art.jpg", answer: "Zeri", points: 2 },
      { type: "image", image: "winter_splash_arts/hecarim-winter-splash-art-zoom.jpg", revealImage: "winter_splash_arts/hecarim-winter-splash-art.jpg", answer: "Hecarim", points: 2 },
      { type: "image", image: "winter_splash_arts/smolder-reindeer-splash-art-zoom.jpg", revealImage: "winter_splash_arts/smolder-reindeer-splash-art.jpg", answer: "Smolder", points: 2 },
      { type: "image", image: "winter_splash_arts/masteryi-splash-art-winter-zoom.jpg", revealImage: "winter_splash_arts/masteryi-splash-art-winter.jpg", answer: "Master Yi", acceptedAnswers: ["Masteryi"], points: 2 },
      { type: "image", image: "winter_splash_arts/mundo-splash-art-winter-zoom.jpg", revealImage: "winter_splash_arts/mundo-splash-art-winter.jpg", answer: "Mundo", acceptedAnswers: ["Dr. Mundo", "Dr Mundo"], points: 2 },
      { type: "image", image: "winter_splash_arts/soraka-winter-splash-art-zoom.jpg", revealImage: "winter_splash_arts/soraka-winter-splash-art.jpg", answer: "Soraka", points: 2 },
      { type: "image", image: "winter_splash_arts/neeko-splash-art-winter-zoom.jpg", revealImage: "winter_splash_arts/neeko-splash-art-winter.jpg", answer: "Neeko", points: 2 },
      { type: "image", image: "winter_splash_arts/diana-splash-art-winter-zoom.jpg", revealImage: "winter_splash_arts/diana-splash-art-winter.jpg", answer: "Diana", points: 2 },
      { type: "image", image: "winter_splash_arts/warwick-splash-art-winter-zoom.jpg", revealImage: "winter_splash_arts/warwick-splash-art-winter.jpg", answer: "Warwick", points: 2 }
    ]
  },
  {
    title: "Türchen 3",
    questions: [
      { type: "audio", audio: "pick_voicelane/Aatrox_Select.ogg", answer: "Aatrox", points: 2 },
      { type: "audio", audio: "pick_voicelane/Brand_Select.ogg", answer: "Brand", points: 2 },
      { type: "audio", audio: "pick_voicelane/Garen_Select.ogg", answer: "Garen", points: 2 },
      { type: "audio", audio: "pick_voicelane/Kai'Sa_Select.ogg", answer: "Kai'Sa", points: 2 },
      { type: "audio", audio: "pick_voicelane/Kayle_Select.ogg", answer: "Kayle", points: 2 },
      { type: "audio", audio: "pick_voicelane/Kindred_Select.ogg", answer: "Kindred", points: 2 },
      { type: "audio", audio: "pick_voicelane/Lux_Select.ogg", answer: "Lux", points: 2 },
      { type: "audio", audio: "pick_voicelane/Smolder_Select.ogg", answer: "Smolder", points: 2 },
      { type: "audio", audio: "pick_voicelane/Veigar_Select.ogg", answer: "Veigar", points: 2 },
      { type: "audio", audio: "pick_voicelane/Viego_Select.ogg", answer: "Viego", points: 2 },
      { type: "audio", audio: "pick_voicelane/Yunara_Select.ogg", answer: "Yunara", points: 2 }
    ]
  },
  {
    title: "Türchen 4",
    questions: [
      { type: "text", question: "Was ist mein Lieblingsgetränk?", answer: "RedBull", points: 2 },
      { type: "text", question: "Welcher Red Bull ist mein Lieblings-Red-Bull?", answer: "Weiß", acceptedAnswers: ["Kokosnuss"], points: 2 },
      { type: "text", question: "Was ist mein Lieblingsessen?", answer: "Sushi", points: 2 },
      { type: "text", question: "Was gab es bei unserem ersten Date zu essen?", answer: "Nudeln", acceptedAnswers: ["Nudeln mit Pesto"], points: 2 },
      { type: "text", question: "Welchen Film haben wir bei unserem ersten Date geschaut?", answer: "Captain Marvel", points: 2 },
      { type: "text", question: "Was ist mein Lieblingsauto?", answer: "Camaro", points: 2 },
      { type: "text", question: "Welches Pokémon haben wir aus Knete gebastelt?", answer: "Plinfa", points: 2 },
      { type: "text", question: "Was haben die Angestellten in Ägypten aus unseren Handtüchern gefaltet?", answer: "Affe", acceptedAnswers: ["Elefant", "Herz"], points: 2 },
      { type: "text", question: "In welchem Jahr sind wir zusammengekommen?", answer: "2022", points: 2 },
      { type: "text", question: "Wie heißt mein Lieblingsbuch?", answer: "Izara", points: 2 }
    ]
  },
  {
    title: "Türchen 5",
    timeLimit: false,
    questions: [
      { type: "image", image: "daten-champions/akali-daten-blured.png", revealImage: "daten-champions/akali-daten.png", answer: "Akali", points: 2 },
      { type: "image", image: "daten-champions/ashe-daten-blured.png", revealImage: "daten-champions/ashe-daten.png", answer: "Ashe", points: 2 },
      { type: "image", image: "daten-champions/ezreal-daten-blured.png", revealImage: "daten-champions/ezreal-daten.png", answer: "Ezreal", points: 2 },
      { type: "image", image: "daten-champions/jhin-daten-blured.png", revealImage: "daten-champions/jhin-daten.png", answer: "Jhin", points: 2 },
      { type: "image", image: "daten-champions/lulu-daten-blured.png", revealImage: "daten-champions/lulu-daten.png", answer: "Lulu", points: 2 },
      { type: "image", image: "daten-champions/rell-daten-blured.png", revealImage: "daten-champions/rell-daten.png", answer: "Rell", points: 2 },
      { type: "image", image: "daten-champions/smolder-daten-blured.png", revealImage: "daten-champions/smolder-daten.png", answer: "Smolder", points: 2 },
      { type: "image", image: "daten-champions/soraka-daten-blured.png", revealImage: "daten-champions/soraka-daten.png", answer: "Soraka", points: 2 },
      { type: "image", image: "daten-champions/yasuo-daten-blured.png", revealImage: "daten-champions/yasuo-daten.png", answer: "Yasuo", points: 2 },
      { type: "image", image: "daten-champions/zed-daten-blured.png", revealImage: "daten-champions/zed-daten.png", answer: "Zed", points: 2 }
    ]
  },
  { title: "Türchen 6", challenge: "Minigame-Tag", questions: [] },
  {
    title: "Türchen 7",
    type: "live",
    timeLimit: 60,
    questions: [
      { question: "Welcher Vogel kann rückwärts fliegen?", answer: "Kolibri", acceptedAnswers: ["Kolibris"], points: 2 },
      { question: "Welches Tier ist das höchste an Land?", answer: "Giraffe", points: 2 },
      { question: "Welches Tier frisst nur Bambus?", answer: "Panda", acceptedAnswers: ["Großer Panda"], points: 2 },
      { question: "Welches Tier ist das langsamste der Welt, das nur an Land lebt?", answer: "Faultier", acceptedAnswers: ["Dreifingerfaultier"], points: 2 },
      { question: "Welches Tier ist am engsten mit dem Menschen verwandt?", answer: "Schimpanse", acceptedAnswers: ["Bonobo"], points: 2 },
      { question: "Welches Säugetier legt Eier?", answer: "Schnabeltier", points: 2 },
      { question: "Welche Tierart hat acht Beine?", answer: "Spinne", acceptedAnswers: ["Spinnen"], points: 2 },
      { question: "Welches Tier ist das bekannteste von Neuseeland?", answer: "Kiwi", points: 2 },
      { question: "Welches Tier gilt als bester Freund des Menschen?", answer: "Hund", points: 2 },
      { question: "Welches ist das größte Tier bei den Bremer Stadtmusikanten?", answer: "Esel", points: 2 },
      { question: "Auch ein blindes ... findet mal ein Korn.", answer: "Huhn", points: 2 },
      { question: "Der frühe Vogel fängt den ...", answer: "Wurm", points: 2 },
      { question: "Lied von Helge Schneider: ...klo", answer: "Katzeklo", points: 2 }
    ]
  },
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

const DOOR_ORDER = [18, 3, 12, 7, 22, 1, 15, 9, 24, 5, 20, 11, 4, 17, 2, 14, 8, 21, 6, 19, 10, 23, 13, 16];
const STORAGE_KEY = "adventskalender-fortschritt-v3";
const LEGACY_STORAGE_KEY = "adventskalender-fortschritt-v2";
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
let liveQuizInterval = null;
let activeAudio = null;
const audioPlayCounts = {};

function loadProgress() {
  try {
    const currentProgress = localStorage.getItem(STORAGE_KEY);
    const saved = currentProgress ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (saved === null) return {};

    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Gespeicherter Fortschritt hat ein unerwartetes Format.");
    }

    let progressChanged = false;
    for (const dayIndex of [1, 2, 3, 4, 6]) {
      if (typeof parsed[dayIndex]?.[0] === "number") {
        delete parsed[dayIndex];
        progressChanged = true;
      }
    }
    if (currentProgress === null || progressChanged) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
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
  if (question.type === "image") {
    if (typeof answer !== "string") return false;
    const normalize = (value) => value.trim().toLocaleLowerCase("de-DE").replace(/[.\s_-]/g, "");
    const acceptedAnswers = [question.answer, ...(question.acceptedAnswers ?? [])];
    return acceptedAnswers.some((acceptedAnswer) => normalize(answer) === normalize(acceptedAnswer));
  }
  if (question.type === "audio") {
    return typeof answer === "string"
      && answer.trim().toLocaleLowerCase("de-DE") === question.answer.toLocaleLowerCase("de-DE");
  }
  if (question.type === "text" || (typeof question.answer === "string" && !question.options)) {
    if (typeof answer !== "string") return false;
    const normalize = (value) => value.trim().toLocaleLowerCase("de-DE").replace(/\s+/g, " ");
    const acceptedAnswers = [question.answer, ...(question.acceptedAnswers ?? [])];
    return acceptedAnswers.some((acceptedAnswer) => normalize(answer) === normalize(acceptedAnswer));
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
  DOOR_ORDER.forEach((dayNumber) => {
    const index = dayNumber - 1;
    const quiz = QUIZZES[index];
    const completed = isComplete(index);
    const button = document.createElement("button");
    button.className = `door${completed ? " is-complete" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Türchen ${dayNumber}${completed ? ", abgeschlossen" : ""}`);

    if (completed) {
      const check = document.createElement("span");
      check.className = "door-check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";
      button.append(check);
    }

    const number = document.createElement("span");
    number.className = "door-number";
    number.textContent = String(dayNumber).padStart(2, "0");
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
  const answers = answersFor(openDay);
  const answeredCount = quiz.questions.reduce((count, _, index) => (
    count + (Object.hasOwn(answers, index) ? 1 : 0)
  ), 0);
  dialogContent.replaceChildren();

  if (quiz.questions.length === 0) {
    if (quiz.challenge) {
      const challenge = document.createElement("p");
      challenge.className = "minigame-challenge";
      challenge.textContent = quiz.challenge;
      dialogContent.append(challenge);
      return;
    }

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
  } else if (quiz.questions[0].type === "image") {
    description.textContent = quiz.timeLimit === false
      ? `Erkenne die Champions auf den Bildern und gib ihre Namen ein. Für jede richtige Antwort bekommst du Punkte.`
      : `Erkenne die Champions auf den Bildern und gib ihre Namen ein. Pro Bild hast du 30 Sekunden Zeit. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.questions[0].type === "audio") {
    description.textContent = `Erkenne die Champions an ihrer Pick-Voiceline. Jede Audiodatei kannst du bis zu 3-mal abspielen. Gib danach den Namen des Champions ein. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.questions[0].type === "text") {
    description.textContent = `Beantworte die Fragen über uns. Gib deine Antwort jeweils ins Textfeld ein. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.type === "live") {
    description.textContent = `Beantworte so viele Fragen wie möglich. Für alle Fragen hast du zusammen 1 Minute Zeit. Falsche Antworten kannst du erneut versuchen.`;
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
    : answeredCount > 0 || Number.isFinite(answers._deadline) ? "Quiz fortsetzen" : "Quiz starten";
  startButton.addEventListener("click", completed
    ? renderResult
    : quiz.type === "live" ? startLiveQuiz : renderQuestion);

  dialogContent.append(description);
  if (progressMessage.textContent) dialogContent.append(progressMessage);
  dialogContent.append(startButton);
}

function renderQuestion() {
  const quiz = QUIZZES[openDay];
  if (quiz.type === "live") {
    renderLiveQuiz();
    return;
  }

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
  questionText.textContent = question.question
    ?? (question.type === "audio" ? "Welcher Champion ist in der Pick-Voiceline zu hören?" : "");

  if (question.type === "word") {
    renderWordQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (question.type === "image") {
    renderImageQuestion(question, questionIndex, progressText);
    return;
  }

  if (question.type === "audio") {
    renderAudioQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (question.type === "text") {
    renderTextQuestion(question, questionIndex, progressText, questionText);
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

function startLiveQuiz() {
  const quiz = QUIZZES[openDay];
  const answers = answersFor(openDay);
  if (!Number.isFinite(answers._deadline)) {
    answers._deadline = Date.now() + quiz.timeLimit * 1000;
    progress[openDay] = answers;
    saveProgress();
  }
  renderQuestion();
}

function renderLiveQuiz() {
  clearInterval(liveQuizInterval);
  liveQuizInterval = null;

  const quiz = QUIZZES[openDay];
  const answers = answersFor(openDay);
  if (quiz.questions.every((_, index) => Object.hasOwn(answers, index))) {
    delete answers._deadline;
    progress[openDay] = answers;
    saveProgress();
    renderResult();
    return;
  }

  if (!Number.isFinite(answers._deadline)) {
    answers._deadline = Date.now() + quiz.timeLimit * 1000;
    progress[openDay] = answers;
    saveProgress();
  }

  const timer = document.createElement("p");
  timer.className = "word-timer";
  timer.setAttribute("role", "timer");
  const list = document.createElement("div");
  list.className = "live-quiz-list";

  const updateTimer = () => {
    const secondsLeft = Math.max(0, Math.ceil((answers._deadline - Date.now()) / 1000));
    timer.textContent = `Noch ${secondsLeft} Sekunden`;
    timer.classList.toggle("word-timer--urgent", secondsLeft <= 10);
    if (secondsLeft === 0) finishLiveQuiz(true);
  };

  quiz.questions.forEach((question, questionIndex) => {
    const row = document.createElement("form");
    const savedAnswer = answers[questionIndex];
    row.className = `live-quiz-row${savedAnswer !== undefined ? " is-correct" : ""}`;
    const label = document.createElement("label");
    label.className = "live-quiz-question";
    label.htmlFor = `live-answer-${questionIndex}`;
    label.textContent = question.question;

    const input = document.createElement("input");
    input.className = "word-input live-quiz-input";
    input.id = `live-answer-${questionIndex}`;
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Antwort";
    input.value = savedAnswer ?? "";
    input.disabled = savedAnswer !== undefined;
    input.setAttribute("aria-label", `Antwort: ${question.question}`);

    const feedback = document.createElement("span");
    feedback.className = "live-quiz-feedback";
    feedback.setAttribute("aria-live", "polite");
    feedback.textContent = savedAnswer !== undefined ? "Richtig!" : "";

    const submit = document.createElement("button");
    submit.className = "live-quiz-submit";
    submit.type = "submit";
    submit.textContent = "Prüfen";
    submit.disabled = savedAnswer !== undefined;

    row.addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = input.value.trim();
      if (!answer || Object.hasOwn(answersFor(openDay), questionIndex)) return;

      if (!isCorrectAnswer(question, answer)) {
        input.value = "";
        feedback.textContent = "Falsch – versuch es noch einmal.";
        input.focus();
        return;
      }

      const currentAnswers = answersFor(openDay);
      currentAnswers[questionIndex] = answer;
      progress[openDay] = currentAnswers;
      input.disabled = true;
      submit.disabled = true;
      row.classList.add("is-correct");
      feedback.textContent = "Richtig!";
      saveProgress();
      renderCalendar();

      if (quiz.questions.every((_, index) => Object.hasOwn(currentAnswers, index))) {
        finishLiveQuiz(false);
      }
    });

    row.append(label, input, submit, feedback);
    list.append(row);
  });

  dialogContent.replaceChildren(timer, list);
  updateTimer();
  if (openDay !== null && answers._deadline > Date.now()) {
    liveQuizInterval = setInterval(updateTimer, 200);
  }
}

function finishLiveQuiz(timedOut) {
  clearInterval(liveQuizInterval);
  liveQuizInterval = null;

  const answers = answersFor(openDay);
  const quiz = QUIZZES[openDay];
  if (timedOut) {
    quiz.questions.forEach((_, index) => {
      if (!Object.hasOwn(answers, index)) answers[index] = "";
    });
    answers._timedOut = true;
  }
  delete answers._deadline;
  progress[openDay] = answers;
  saveProgress();
  renderCalendar();
  renderResult();
}

function renderWordQuestion(question, questionIndex, progressText, questionText) {
  const scrambledWord = document.createElement("p");
  scrambledWord.className = "scramble-word";
  scrambledWord.setAttribute("aria-label", "Buchstabensalat");
  scrambledWord.textContent = question.scrambled;

  const quiz = QUIZZES[openDay];
  const timerDisplay = quiz.timeLimit === false ? null : document.createElement("p");
  if (timerDisplay) {
    timerDisplay.className = "word-timer";
    timerDisplay.setAttribute("role", "timer");
  }

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

function renderImageQuestion(question, questionIndex, progressText) {
  const quiz = QUIZZES[openDay];
  const image = document.createElement("img");
  image.className = `image-quiz-image${quiz.timeLimit === false ? " image-quiz-image--large" : ""}`;
  image.src = question.image;
  image.alt = "Unscharfes Champion-Bild zum Erraten";

  const questionText = document.createElement("p");
  questionText.className = "question-text";
  questionText.textContent = "Welcher Champion ist auf dem Bild zu sehen?";

  const timerDisplay = quiz.timeLimit === false ? null : document.createElement("p");
  if (timerDisplay) {
    timerDisplay.className = "word-timer";
    timerDisplay.setAttribute("role", "timer");
  }

  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = "word-input";
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Name des Champions";
  input.setAttribute("aria-label", "Name des Champions");

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
  dialogContent.append(progressText, image, questionText);
  if (timerDisplay) dialogContent.append(timerDisplay);
  dialogContent.append(form);
  if (timerDisplay) startWordTimer(questionIndex, timerDisplay);
  input.focus();
}

function renderAudioQuestion(question, questionIndex, progressText, questionText) {
  const attemptKey = `${openDay}:${questionIndex}`;
  const audio = new Audio(question.audio);
  audio.preload = "none";
  activeAudio = audio;

  const player = document.createElement("div");
  player.className = "audio-quiz-player";
  const playButton = document.createElement("button");
  playButton.className = "primary-button";
  playButton.type = "button";
  const attempts = document.createElement("p");
  attempts.className = "audio-quiz-attempts";
  attempts.setAttribute("aria-live", "polite");
  const status = document.createElement("p");
  status.className = "audio-quiz-status";
  status.setAttribute("role", "status");

  const updateAttempts = () => {
    const playsLeft = 3 - (audioPlayCounts[attemptKey] ?? 0);
    playButton.textContent = audio.paused ? "Voiceline abspielen" : "Voiceline wird abgespielt …";
    playButton.disabled = playsLeft === 0 || !audio.paused;
    attempts.textContent = `Noch ${playsLeft} ${playsLeft === 1 ? "Wiedergabe" : "Wiedergaben"}`;
  };

  playButton.addEventListener("click", () => {
    if ((audioPlayCounts[attemptKey] ?? 0) >= 3 || !audio.paused) return;
    audioPlayCounts[attemptKey] = (audioPlayCounts[attemptKey] ?? 0) + 1;
    status.textContent = "";
    updateAttempts();
    audio.currentTime = 0;
    audio.load();
    audio.play().catch((error) => {
      audio.pause();
      audioPlayCounts[attemptKey] -= 1;
      updateAttempts();
      status.textContent = "Die Voiceline konnte nicht abgespielt werden. Bitte versuche es erneut.";
      console.error("Die Champion-Voiceline konnte nicht abgespielt werden.", error);
    });
  });
  audio.addEventListener("ended", updateAttempts);
  audio.addEventListener("error", () => {
    status.textContent = "Die Audiodatei konnte nicht geladen werden.";
  });
  updateAttempts();
  player.append(playButton, attempts, status);

  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = "word-input";
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Name des Champions";
  input.setAttribute("aria-label", "Name des Champions");
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
  dialogContent.append(progressText, questionText, player, form);
  input.focus();
}

function renderTextQuestion(question, questionIndex, progressText, questionText) {
  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = "word-input";
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Deine Antwort";
  input.setAttribute("aria-label", "Deine Antwort");
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
  dialogContent.append(progressText, questionText, form);
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
  activeAudio?.pause();
  activeAudio = null;

  const quiz = QUIZZES[openDay];
  const question = quiz.questions[questionIndex];
  answers[questionIndex] = answer;
  progress[openDay] = answers;
  saveProgress();
  renderCalendar();

  const isCorrect = isCorrectAnswer(question, answer);
  dialogContent.replaceChildren();
  if (question.type === "image") {
    renderImageResolution(question, answer, isCorrect, timedOut, questionIndex, quiz);
    return;
  }
  if (question.type === "audio") {
    renderAudioResolution(question, answer, isCorrect, questionIndex, quiz);
    return;
  }
  if (question.type === "text") {
    renderTextResolution(question, answer, isCorrect, questionIndex, quiz);
    return;
  }

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

function renderTextResolution(question, answer, isCorrect, questionIndex, quiz) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? `Richtig! +${question.points} ${question.points === 1 ? "Punkt" : "Punkte"}`
    : "Leider nicht richtig.";

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Richtige Antwort: ${question.answer}`;

  const submittedAnswer = document.createElement("p");
  submittedAnswer.className = "image-quiz-submitted-answer";
  submittedAnswer.textContent = `Deine Antwort: ${answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(feedback, solution, submittedAnswer, nextButton);
  nextButton.focus();
}

function renderAudioResolution(question, answer, isCorrect, questionIndex, quiz) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? `Richtig! +${question.points} ${question.points === 1 ? "Punkt" : "Punkte"}`
    : "Leider nicht richtig.";

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Der Champion war: ${question.answer}`;

  const submittedAnswer = document.createElement("p");
  submittedAnswer.className = "image-quiz-submitted-answer";
  submittedAnswer.textContent = `Deine Antwort: ${answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(feedback, solution, submittedAnswer, nextButton);
  nextButton.focus();
}

function renderImageResolution(question, answer, isCorrect, timedOut, questionIndex, quiz) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  if (timedOut) {
    feedback.textContent = "Die Zeit ist abgelaufen.";
  } else if (isCorrect) {
    feedback.textContent = `Richtig! +${question.points} Punkte`;
  } else {
    feedback.textContent = "Leider nicht richtig.";
  }

  const image = document.createElement("img");
  image.className = "image-quiz-image image-quiz-image--reveal";
  image.src = question.revealImage;
  image.alt = `${question.answer} im vollständigen Bild`;

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Lösung: ${question.answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(feedback, image, solution);
  if (!isCorrect && !timedOut && answer) {
    const submittedAnswer = document.createElement("p");
    submittedAnswer.className = "image-quiz-submitted-answer";
    submittedAnswer.textContent = `Deine Antwort: ${answer}`;
    dialogContent.append(submittedAnswer);
  }
  dialogContent.append(nextButton);
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
  const quiz = QUIZZES[openDay];
  const answers = answersFor(openDay);
  const result = document.createElement("div");
  result.className = "result-card";
  const heading = document.createElement("p");
  heading.className = "result-heading";
  heading.textContent = "Quiz abgeschlossen!";
  const points = document.createElement("strong");
  points.className = "result-points";
  points.textContent = `${pointsFor(openDay)} Punkte`;
  if (quiz.type === "live" && answers._timedOut) {
    const timeoutMessage = document.createElement("p");
    timeoutMessage.className = "feedback incorrect";
    timeoutMessage.textContent = "Die Zeit ist abgelaufen.";
    result.append(heading, points, timeoutMessage);
  } else {
    result.append(heading, points);
  }
  const summaryHeading = document.createElement("h3");
  summaryHeading.className = "summary-heading";
  summaryHeading.textContent = "Deine Antworten";
  const summary = document.createElement("ol");
  summary.className = "answer-summary";

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
    questionLabel.textContent = quiz.type === "live" ? question.question : `Frage ${questionIndex + 1}`;

    const userAnswer = question.type === "word" || question.type === "image" || question.type === "audio" || question.type === "text" || typeof question.answer === "string"
      ? (typeof answer === "string" && answer.trim() ? answer.trim() : "Keine Antwort (Zeit abgelaufen)")
      : question.options[answer] ?? "Keine Antwort";
    const answerText = document.createElement("span");
    answerText.className = "answer-summary-answer";
    answerText.textContent = `Deine Antwort: ${userAnswer}`;

    item.append(questionLabel, status, answerText);
    if (!isCorrect) {
      const correctAnswer = document.createElement("span");
      correctAnswer.className = "answer-summary-correct";
      correctAnswer.textContent = `Richtige Antwort: ${question.type === "word" || question.type === "image" || question.type === "audio" || question.type === "text" || typeof question.answer === "string" ? question.answer : question.options[question.answer]}`;
      item.append(correctAnswer);
    }
    summary.append(item);
  });

  result.append(summaryHeading, summary);
  dialogContent.append(result);
}

function closeDialog() {
  clearInterval(wordTimer);
  wordTimer = null;
  clearInterval(liveQuizInterval);
  liveQuizInterval = null;
  activeAudio?.pause();
  activeAudio = null;
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

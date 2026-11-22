const WEALTH_PEOPLE = [
  { id: "robert-pattinson", name: "Robert Pattinson", wealth: 80_000_000, image: "higher_or_lower/robert_pattinson.png", displayWealth: "80 Mio." },
  { id: "tom-hiddleston", name: "Tom Hiddleston", wealth: 40_000_000, image: "higher_or_lower/tom_hiddleston.png", displayWealth: "40 Mio." },
  { id: "zendaya", name: "Zendaya", wealth: 30_000_000, image: "higher_or_lower/zendaya.png", displayWealth: "30 Mio." },
  { id: "joseph-zada", name: "Joseph Zada", wealth: 500_000, image: "higher_or_lower/joseph_zada.png", displayWealth: "500 Tsd." },
  { id: "mckenna-grace", name: "Mckenna Grace", wealth: 2_000_000, image: "higher_or_lower/mckenna_grace.png", displayWealth: "2 Mio." },
  { id: "robert-downey-jr", name: "Robert Downey Jr.", wealth: 290_000_000, image: "higher_or_lower/robert_downey_jr.png", displayWealth: "290 Mio." },
  { id: "elizabeth-olsen", name: "Elizabeth Olsen", wealth: 11_000_000, image: "higher_or_lower/elizabeth_olsen.png", displayWealth: "11 Mio." },
  { id: "leonardo-dicaprio", name: "Leonardo DiCaprio", wealth: 250_000_000, image: "higher_or_lower/leonardo_dicaprio.png", displayWealth: "250 Mio." },
  { id: "papaplatte", name: "Papaplatte", wealth: 8_000_000, image: "higher_or_lower/papaplatte.png", displayWealth: "8 Mio." },
  { id: "eli", name: "Eli", wealth: 25_000_000, image: "higher_or_lower/eli.png", displayWealth: "25 Mio." }
];

const RELEASE_GAMES = [
  { id: "fortnite", name: "Fortnite", releaseDate: Date.UTC(2017, 6, 25), image: "higher_or_lower_2/Fortnite.png", displayDate: "25. Juli 2017" },
  { id: "league-of-legends", name: "League of Legends", releaseDate: Date.UTC(2009, 9, 27), image: "higher_or_lower_2/lol.jfif", displayDate: "27. Oktober 2009" },
  { id: "pokemon-go", name: "Pokémon Go", releaseDate: Date.UTC(2016, 6, 13), image: "higher_or_lower_2/pokemon_go.jfif", displayDate: "13. Juli 2016" },
  { id: "clash-of-clans", name: "Clash of Clans", releaseDate: Date.UTC(2012, 7, 2), image: "higher_or_lower_2/clash_of_clans.jfif", displayDate: "2. August 2012" },
  { id: "aniimo", name: "Aniimo", releaseDate: Date.UTC(2026, 8, 16), image: "higher_or_lower_2/aniimo.jfif", displayDate: "16. September 2026" },
  { id: "world-of-warcraft", name: "World of Warcraft", releaseDate: Date.UTC(2004, 10, 23), image: "higher_or_lower_2/wow.jfif", displayDate: "23. November 2004" },
  { id: "elden-ring", name: "Elden Ring", releaseDate: Date.UTC(2022, 1, 25), image: "higher_or_lower_2/elden_ring.jfif", displayDate: "25. Februar 2022" },
  { id: "super-mario-bros", name: "Super Mario Bros.", releaseDate: Date.UTC(1985, 8, 13), image: "higher_or_lower_2/super_mario_bros.jfif", displayDate: "13. September 1985" },
  { id: "wardogs", name: "Wardogs", releaseDate: Date.UTC(2026, 8, 10), image: "higher_or_lower_2/wardogs.jfif", displayDate: "10. September 2026" },
  { id: "minecraft", name: "Minecraft", releaseDate: Date.UTC(2009, 4, 1), image: "higher_or_lower_2/minecraft.jpg", displayDate: "Mai 2009" }
];

const RANKING_CONFIGS = {
  "wealth-ranking": {
    answersKey: "_wealth",
    people: WEALTH_PEOPLE,
    anchor: {
      id: "jennifer-lawrence",
      name: "Jennifer Lawrence",
      wealth: 155_000_000,
      image: "higher_or_lower/Jennifer_lawrence.png",
      displayWealth: "155 Mio."
    },
    getValue: (person) => person.wealth,
    getDisplayValue: (person) => person.displayWealth,
    intro: "Ordne zehn Personen nach ihrem geschätzten Vermögen ein.",
    timelineHeading: "Vermögens-Zeitleiste",
    completedMessage: "Du hast alle Personen richtig eingeordnet."
  },
  "release-date-ranking": {
    answersKey: "_releaseDate",
    people: RELEASE_GAMES,
    anchor: {
      id: "csgo",
      name: "CS:GO",
      releaseDate: Date.UTC(2012, 7, 21),
      image: "higher_or_lower_2/csgo.jfif",
      displayDate: "21. August 2012"
    },
    getValue: (game) => game.releaseDate,
    getDisplayValue: (game) => game.displayDate,
    intro: "Ordne zehn Spiele nach ihrem Veröffentlichungsdatum ein.",
    timelineHeading: "Veröffentlichungs-Zeitleiste",
    completedMessage: "Du hast alle Spiele richtig eingeordnet."
  }
};

const QUIZZES = [
  {
    title: "Türchen 1",
    questionTimeLimit: 90,
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
    welcomeMessage: "Ich wünsche dir heute ganz viel Glück und bin sehr stolz auf dich!",
    textDescription: "Beantworte die Fragen zu Lost Bitcoin.",
    questions: [
      { type: "text", question: "Wann hast du die Demo veröffentlicht?", answer: "11.11.2026", points: 2 },
      { type: "text", question: "Wie viel kostet es, den Staubsauger freizuschalten?", answer: "200", points: 2 },
      { type: "text", question: "Gibt es in Lost Bitcoin Fahrradräder?", answer: "Ja", points: 2 },
      { type: "text", question: "Sind alle vier Pfoten der Katze weiß?", answer: "Ja", points: 2 },
      { type: "text", question: "In welcher Farbe ist „Word Shop“ über dem Shop geschrieben?", answer: "Blau oder Türkis", acceptedAnswers: ["Blau", "Türkis", "Türkisblau"], points: 2 },
      { type: "text", question: "Wann hast du deinen Discord-Server eröffnet?", answer: "25.10.2026", points: 2 },
      { type: "text", question: "Welche Farbe hat die Drohne überwiegend?", answer: "Weiß oder Beige", acceptedAnswers: ["Weiß", "Beige"], points: 2 },
      { type: "text", question: "Wie viele Updates gibt es für das Lauftempo?", answer: "5", acceptedAnswers: ["Fünf"], points: 2 },
      { type: "text", question: "Wie hoch kann man mit allen Sprung-Updates springen?", answer: "2,8 Meter", acceptedAnswers: ["2,8 m", "2.8 Meter", "2.8 m"], points: 2 },
      { type: "song", audio: "My_Ex_-_dzern.mp3", question: "Wie heißt der Songtitel?", answer: "My Ex", acceptedAnswers: ["My ex", "my ex"], points: 2 },
      { type: "text", question: "Wie aufgeregt bist du heute auf einer Skala von 1 bis 10?", answer: "1 bis 10", scale: { min: 1, max: 10 }, points: 2 }
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
  { title: "Türchen 6", challenge: "Minigame-Tag", manualScore: true, questions: [] },
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
  {
    title: "Türchen 8",
    questions: [
      { type: "song", audio: "songs-erraten/Alles_was_ich_sein_will_-_Papaplatte.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Alles was ich sein will", points: 2 },
      { type: "song", audio: "songs-erraten/DURCHGEHEND_ONLINE_Musikvideo_YouAreHero.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Durchgehend online", points: 2 },
      { type: "song", audio: "songs-erraten/t-low_-_CRASHEN.mp3", question: "Welcher Songtitel ist zu hören?", answer: "crashen", points: 2 },
      { type: "song", audio: "songs-erraten/CRO_-_Bad_Chick.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Bad chick", points: 2 },
      { type: "song", audio: "songs-erraten/Dame_-_12_Millionen.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Wow song", points: 2 },
      { type: "song", audio: "songs-erraten/NSYNC_-_Bye_Bye_Bye.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Bye bye Bye", points: 2 },
      { type: "song", audio: "songs-erraten/Linkin_Park_-_Heavy_Is_the_Crown.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Heavy Is the Crown", points: 2 },
      { type: "song", audio: "songs-erraten/Rihanna_-_Umbrella.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Umbrella", points: 2 },
      { type: "song", audio: "songs-erraten/Shawn_Mendes_-_Mercy.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Mercy", points: 2 },
      { type: "song", audio: "songs-erraten/Bruno_Mars_-_Just_The_Way_You_Are.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Just The Way You Are", points: 2 }
    ]
  },
  {
    title: "Türchen 9",
    imagePrompt: "Welche Fähigkeit ist auf dem Bild zu sehen?",
    imageAlt: "League-of-Legends-Fähigkeit zum Erraten",
    imageAnswerPlaceholder: "Name der Fähigkeit",
    questions: [
      { type: "image", image: "abilities-einzeln/Bard-E.png", answer: "Bard E", points: 2 },
      { type: "image", image: "abilities-einzeln/Diana-E.png", answer: "Diana E", points: 2 },
      { type: "image", image: "abilities-einzeln/Draven-w.png", answer: "Draven w", points: 2 },
      { type: "image", image: "abilities-einzeln/Graves-r.png", answer: "Graves r", points: 2 },
      { type: "image", image: "abilities-einzeln/Jax-E.png", answer: "Jax E", points: 2 },
      { type: "image", image: "abilities-einzeln/KSante-W.png", answer: "KSante W", points: 2 },
      { type: "image", image: "abilities-einzeln/Kindred-Q.png", answer: "Kindred Q", points: 2 },
      { type: "image", image: "abilities-einzeln/MF-passive.png", answer: "Miss Fortune passive", points: 2 },
      { type: "image", image: "abilities-einzeln/Shyvana-E.png", answer: "Shyvana E", points: 2 },
      { type: "image", image: "abilities-einzeln/Soraka-R.png", answer: "Soraka R", points: 2 }
    ]
  },
  {
    title: "Türchen 10",
    type: "live",
    timeLimit: 300,
    liveLayout: "movie-list",
    livePrompt: "Trage die MCU-Filme in der Reihenfolge ihrer Veröffentlichung ein.",
    correctAnswerColor: "green",
    questions: [
      { year: "2008", answer: "Iron Man", points: 2 },
      { year: "2008", answer: "Der unglaubliche Hulk", points: 2 },
      { year: "2010", answer: "Iron Man 2", points: 2 },
      { year: "2011", answer: "Thor", points: 2 },
      { year: "2011", answer: "Captain America: The First Avenger", points: 2 },
      { year: "2012", answer: "Marvel's The Avengers", points: 2 },
      { year: "2013", answer: "Iron Man 3", points: 2 },
      { year: "2013", answer: "Thor – The Dark Kingdom", points: 2 },
      { year: "2014", answer: "The Return of the First Avenger", points: 2 },
      { year: "2014", answer: "Guardians of the Galaxy", points: 2 },
      { year: "2015", answer: "Avengers: Age of Ultron", points: 2 },
      { year: "2015", answer: "Ant-Man", points: 2 },
      { year: "2016", answer: "The First Avenger: Civil War", points: 2 },
      { year: "2016", answer: "Doctor Strange", points: 2 },
      { year: "2017", answer: "Guardians of the Galaxy Vol. 2", points: 2 },
      { year: "2017", answer: "Spider-Man: Homecoming", points: 2 },
      { year: "2017", answer: "Thor: Tag der Entscheidung", points: 2 },
      { year: "2018", answer: "Black Panther", points: 2 },
      { year: "2018", answer: "Avengers: Infinity War", points: 2 },
      { year: "2018", answer: "Ant-Man and the Wasp", points: 2 },
      { year: "2019", answer: "Captain Marvel", points: 2 },
      { year: "2019", answer: "Avengers: Endgame", points: 2 },
      { year: "2019", answer: "Spider-Man: Far From Home", points: 2 },
      { year: "2021", answer: "Black Widow", points: 2 },
      { year: "2021", answer: "Shang-Chi and the Legend of the Ten Rings", points: 2 },
      { year: "2021", answer: "Eternals", points: 2 },
      { year: "2021", answer: "Spider-Man: No Way Home", points: 2 },
      { year: "2022", answer: "Doctor Strange in the Multiverse of Madness", points: 2 },
      { year: "2022", answer: "Thor: Love and Thunder", points: 2 },
      { year: "2022", answer: "Black Panther: Wakanda forever", points: 2 },
      { year: "2023", answer: "Ant-Man and the Wasp: Quantumania", points: 2 },
      { year: "2023", answer: "Guardians of the Galaxy Vol. 3", points: 2 },
      { year: "2023", answer: "The Marvels", points: 2 },
      { year: "2024", answer: "Deadpool & Wolverine", points: 2 },
      { year: "2025", answer: "Captain America Brave New World", points: 2 },
      { year: "2025", answer: "Thunderbolts*", points: 2 },
      { year: "2025", answer: "The Fantastic Four: First Steps", points: 2 },
      { year: "2026", answer: "Spider-Man: Brand New Day", points: 2 },
      { year: "2026", answer: "Avengers: Doomsday", points: 2 }
    ]
  },
  { title: "Türchen 11", challenge: "Minigame-Tag", manualScore: true, questions: [] },
  {
    title: "Türchen 12",
    audioDescription: "Erkenne die Champions an ihrem Lachen.",
    audioPrompt: "Welcher Champion ist in seiner Laugh-Voiceline zu hören?",
    questions: [
      { type: "audio", audio: "champion-laugh/Bel'Veth_Original_Laugh.ogg", answer: "Bel'Veth", acceptedAnswers: ["BelVeth", "Bel Veth"], points: 2 },
      { type: "audio", audio: "champion-laugh/Cassiopeia_Original_Laugh_3.ogg", answer: "Cassiopeia", points: 2 },
      { type: "audio", audio: "champion-laugh/Fizz_Original_Laugh_0.ogg", answer: "Fizz", points: 2 },
      { type: "audio", audio: "champion-laugh/Kindred_Original_Laugh_0.ogg", answer: "Kindred", points: 2 },
      { type: "audio", audio: "champion-laugh/Malphite_Original_Laugh_1.ogg", answer: "Malphite", points: 2 },
      { type: "audio", audio: "champion-laugh/Nilah_Original_Laugh.ogg", answer: "Nilah", points: 2 },
      { type: "audio", audio: "champion-laugh/Sett_Original_Laugh_0.ogg", answer: "Sett", points: 2 },
      { type: "audio", audio: "champion-laugh/Smolder_Original_Laugh.ogg", answer: "Smolder", points: 2 },
      { type: "audio", audio: "champion-laugh/Yunara_Original_Laugh.ogg", answer: "Yunara", points: 2 },
      { type: "audio", audio: "champion-laugh/Yuumi_Original_Laugh.ogg", answer: "Yuumi", points: 2 }
    ]
  },
  {
    title: "Türchen 13",
    questionTimeLimit: 30,
    textDescription: "Erkenne Filme, Anime und Serien anhand der Emojis. Du hast pro Frage 30 Sekunden Zeit. Gib den gesuchten Titel ein.",
    questions: [
      { type: "text", question: "👹⚔️", answer: "Demon Slayer", points: 3 },
      { type: "text", question: "🎈⬆️", answer: "Up", points: 3 },
      { type: "text", question: "⚔️👑🐉", answer: "Game of Thrones", points: 3 },
      { type: "text", question: "⚡🪄", answer: "Harry Potter", points: 3 },
      { type: "text", question: "1️⃣⬆️🗡️", answer: "Solo Leveling", points: 3 },
      { type: "text", question: "☣️🌍👩🏼👦🏻", answer: "The 100", points: 3 },
      { type: "text", question: "⚫🍀", answer: "Black Clover", points: 3 },
      { type: "text", question: "🕵️🎩🔍", answer: "Sherlock", acceptedAnswers: ["Sherlock Holmes"], points: 3 },
      { type: "text", question: "🔵🔴🧑‍🦯👹", answer: "Jujutsu Kaisen", points: 3 },
      { type: "text", question: "🦸🦸‍♀️💜", answer: "Avengers Endgame", points: 3 }
    ]
  },
  {
    title: "Türchen 14",
    abilityAudioQuiz: true,
    introDescription: "Höre dir den Fähigkeitssound an und gib den Championnamen zusammen mit Q, W, E oder R ein.",
    questions: [
      { type: "ability-audio", audio: "abilities-sound/Alistar_Original_SFX_W_OnCast_0.ogg", champion: "Alistar", answer: "W", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Galio_Original_SFX_Q_OnCast.ogg", champion: "Galio", answer: "Q", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Gnar_Original_SFX_Q_OnCast_0.ogg", champion: "Gnar", answer: "Q", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Kled_Original_R_SFX_2.ogg", champion: "Kled", answer: "R", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Mordekaiser_Original_SFX_W_cast_0_0.ogg", champion: "Mordekaiser", answer: "W", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Pyke_Original_W_SFX_0.ogg", champion: "Pyke", answer: "W", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Renekton_Original_SFX_E_OnCast_0.ogg", champion: "Renekton", answer: "E", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Seraphine_Original_SFX_Q_OnCast_0.ogg", champion: "Seraphine", answer: "Q", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Smolder_Original_SFX_R_OnCast.ogg", champion: "Smolder", answer: "R", points: 3 },
      { type: "ability-audio", audio: "abilities-sound/Yasuo_Original_SFX_W_MovingWall_OnCast_0.ogg", champion: "Yasuo", answer: "W", points: 3 }
    ]
  },
  {
    title: "Türchen 15",
    type: "who-am-i",
    questions: [
      {
        answer: "Ryan Reynolds",
        clues: [
          "Obwohl man meist mein Gesicht kennt, habe ich auch ikonischen Figuren meine Stimme geliehen wie zum Beispiel einem sprechenden gelben Pokémon im Live-Action-Film „Meisterdetektiv Pikachu“.",
          "Neben der Schauspielerei bin ich ein erfolgreicher Unternehmer: Mir gehörten Anteile an Aviation Gin und 2020 habe ich zusammen mit ein paar Freunden den walisischen Fußballverein Wrexham AFC gekauft.",
          "Ich bin für meinen extrem trockenen und humorvollen Social-Media-Mock-Ton bekannt, besonders im Schlagabtausch mit meiner Ehefrau, der Schauspielerin Blake Lively."
        ]
      },
      {
        answer: "Tolkin",
        clues: [
          "Mein Pseudonym ist im Grunde ein kleiner Buchstabendreher und hat einen naheliegenden Ursprung: Es ist mein bürgerlicher Vorname rückwärts buchstabiert.",
          "Heute bin ich ein erfolgreicher Streamer.",
          "Nach meiner aktiven Spielerkarriere bin ich dem E-Sport treu geblieben und regelmäßig als offizieller Analytiker, Experte und Kommentator bei großen deutschsprachigen Turnier- und Liga-Übertragungen im Einsatz."
        ]
      },
      {
        answer: "Lucario",
        clues: [
          "Ich bin eines der bekanntesten Wesen aus der 4. Generation (Sinnoh).",
          "Laut offiziellen Daten wiege ich exakt 54,0 Kilogramm bei einer Körpergröße von 1,20 Metern. Im Nationalen Pokédex trage ich die Nummer 448 und in meiner Debüt-Region Sinnoh konnte man mich nicht wild fangen, sondern erhielt mein Ei auf der Eiseninsel.",
          "Ich bin ein blau-schwarzes, aufrecht gehendes Pokémon."
        ]
      },
      {
        answer: "Ed Sheeran",
        clues: [
          "Ich habe eine kleine Gastrolle in der 7. Staffel der Kult-Serie „Game of Thrones“ gespielt.",
          "Heute bin ich einer der erfolgreichsten Solo-Künstler der Welt mit englischen Mega-Hits.",
          "Ich bin ein rothaariger britischer Singer-Songwriter mit Gitarre."
        ]
      },
      {
        answer: "Jhin",
        clues: [
          "Ich trage eine modifizierte Schulterprothese, die nicht etwa eine körperliche Behinderung kaschiert, sondern als getarnte Halterung für vier massive Geschosse dient.",
          "In meiner düsteren Vergangenheit terrorisierte ich jahrelang als berüchtigter „Geist-Dämon“ die Provinzen von Ionia, bevor ich schließlich von einem dreiköpfigen Trupp Shen, dessen Vater Kusho und Zed. Nach jahrelanger Jagd im Tuula-Gefängnis eingekerkert wurde.",
          "Mein gesamtes Dasein, meine visuelle Ästhetik, mein Magazininhalt, meine Fähigkeiten und sogar mein Champion-Design drehen sich zwanghaft um eine einzige, perfekte Zahl."
        ]
      },
      {
        answer: "Hinata",
        acceptedAnswers: ["Shoyo Hinata", "Shōyō Hinata", "Hinata Shoyo", "Hinata Shōyō"],
        clues: [
          "Laut offiziellen Daten bin ich am 21. Juni 1996 geboren, wiege exakt 51,9 Kilogramm bei einer Körpergröße von 162,8 Zentimetern und trage die Identifikationsnummer 10 auf meiner Kleidung.",
          "An meiner Schule in der Präfektur Miyagi trage ich den ungewöhnlichen Titel des „größten Köders“, da ich durch meine extreme Antrittsgeschwindigkeit und Sprungkraft die gegnerische Aufmerksamkeit komplett auf mich ziehe.",
          "Ich spiele an der Karasuno-Oberschule, deren Symbol der Rabe ist und stehe dort in einer ständigen Rivalität mit dem genialen Zuspieler Tobio Kageyama."
        ]
      },
      {
        answer: "Goose",
        clues: [
          "Ich bin ein nicht-menschlicher Charakter im MCU. In meiner Spezies-Anatomie verbergen sich sogenannte Taschen-Dimensionen.",
          "Obwohl mächtige außerirdische Rassen vor meiner Spezies in Todesangst geraten, halten mich Erdenbewohner fälschlicherweise für eine völlig harmlose, niedliche Kreatur.",
          "Ich bin dafür verantwortlich, dass der S.H.I.E.L.D.-Direktor Nick Fury sein linkes Auge verlor, da ich ihn nach einem gemeinsamen Abenteuer unabsichtlich im Gesicht kratzte."
        ]
      },
      {
        answer: "Ohnezahn",
        acceptedAnswers: ["Toothless"],
        clues: [
          "In der literarischen Erstausgabe von 2003 war ich ein winziges, grünes Exemplar der Gattung „Common or Garden“, das problemlos auf eine Handfläche passte. Für meine filmische Adaption wurde meine Spezies-Physiologie komplett neu erfunden und massiv skaliert.",
          "Das akustische Sound-Design meines Schreis basiert auf einer gemischten Tonspur aus den Rufen eines Elefantenbabys, eines Tigerjungen, dem Gesang eines Walrosses und der Stimme des Sound-Designers Randy Thom. Mein visuelles Design wurde direkt von den Bewegungsabläufen einer Black-Footed-Cat namens „Sulky“ inspiriert.",
          "Ich besitze die anatomische Besonderheit, meine Beißwerkzeuge vollständig im eigenen Kieferknochen zu versenken, was mir bei der ersten Begegnung mit meinem Begleiter fälschlicherweise den Namen einbrachte."
        ]
      },
      {
        answer: "Jennifer Lawrence",
        clues: [
          "Ich wurde am 15. August 1990 in Indian Hills (Kentucky) geboren und bin 1,75 Meter groß. Im Alter von 22 Jahren und 193 Tagen wurde ich die zweitjüngste Person der Geschichte, die mit dem Oscar als Beste Hauptdarstellerin ausgezeichnet wurde.",
          "Für eine berühmte Filmreihe musste ich jahrelang täglich ein stundenlanges Ganzkörper-Make-up über mich ergehen lassen, um in meine Rolle zu schlüpfen.",
          "Bei der Oscar-Verleihung 2013 stolperte ich in meiner voluminösen Christian-Dior-Robe auf den Stufen zur Bühne."
        ]
      },
      {
        answer: "Robert Downey Jr.",
        acceptedAnswers: ["RDJ"],
        clues: [
          "Nach meiner Entlassung und anschließenden Rehabilitation war ich jahrelang für große Filmstudios nicht versicherbar. Erst als Mel Gibson persönlich die Kautions- und Versicherungsprämien für mich hinterlegte, konnte ich 2003 im Film „The Singing Detective“ meine erste große Hauptrolle feiern.",
          "Für meine Darstellung des Kirk Lazarus in „Tropic Thunder“ war ich für den Nebenrollen-Oscar nominiert, bevor ich 2024 für meine Rolle als Lewis Strauss in Christopher Nolans „Oppenheimer“ den Oscar als Bester Nebendarsteller gewann.",
          "Ich bin ein extrem erfolgreicher Hollywood-Star und prägte über ein Jahrzehnt lang das Marvel Cinematic Universe in einer ikonischen Rüstung."
        ]
      }
    ]
  },
  {
    title: "Türchen 16",
    introDescription: "In diesem Quiz warten 10 MCU Fragen auf dich.",
    questions: [
      { question: "In welchem Film wird die „Avengers Initiative“ zum ersten Mal erwähnt?", options: ["Iron Man", "The First Avenger", "Thor", "Iron Man 2"], answer: 0, points: 3 },
      { question: "In welchem Film taucht der Reality Stone (als Äther) zum ersten Mal auf?", options: ["Thor: The Dark World", "Avengers: Age of Ultron", "Doctor Strange", "Guardians of the Galaxy"], answer: 0, points: 3 },
      { question: "Welcher Protokoll-Befehl aktiviert in Iron Man 3 sämtliche von Tony Stark jemals gebauten Notfall-Rüstungen gleichzeitig?", options: ["House Party Protocol", "Omega Directive", "Clean Slate Protocol", "Iron Legion Protocol"], answer: 0, points: 3 },
      { question: "Welchen Stamm Wakandas führt M’Baku an?", options: ["Die Jabari", "Die Bergwerkstämme", "Die Grenzstämme", "Die Flussstämme"], answer: 0, points: 3 },
      { question: "Auf welchem Planeten wird Stormbreaker geschmiedet?", options: ["Svartalfheim", "Nidavellir", "Vormir", "Muspelheim"], answer: 1, points: 3 },
      { question: "In Spider-Man: Far From Home hinterlässt Tony Stark Peter Parker eine hochtechnisierte Brille mit einer KI. Wofür steht das Akronym E.D.I.T.H.?", options: ["Even Dead, I’m The Hero", "Every Defense Is In Total Harmony", "Electronic Data Intelligence Tactical Hub", "Early Detection In Threat Handling"], answer: 0, points: 3 },
      { question: "Welches Fach belegte Thor nach eigener Aussage auf Asgard als Wahlfach, um die Sprache einer bestimmten Spezies zu erlernen?", options: ["Sakaaranisch", "Chitauri", "Groot", "Kree"], answer: 2, points: 3 },
      { question: "Wie heißt der Heimatplanet von Thanos, bevor er durch Überbevölkerung und Ressourcenmangel zugrunde gerichtet wurde?", options: ["Xandar", "Titan", "Hala", "Sakaar"], answer: 1, points: 3 },
      { question: "Welches Lied hört Peter Quill auf seinem Walkman in der berühmten Eröffnungsszene von Guardians of the Galaxy Vol. 1 auf Morag?", options: ["Mr. Blue Sky", "Come and Get Your Love", "Hooked on a Feeling", "Fooled Around and Fell in Love"], answer: 1, points: 3 },
      { question: "Wie lautet der Name der kleinen, hochtechnisierten Aufklärungsdrohne, die Sam Wilson (Falcon) im MCU als treuen Begleiter einsetzt?", options: ["Specter", "Redwing", "Talon", "Falcon-1"], answer: 1, points: 3 }
    ]
  },
  {
    title: "Türchen 17",
    questions: [
      { type: "song", audio: "songs-erraten-2/Adele_-_Rolling_in_the_Deep.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Rolling in the Deep", points: 2 },
      { type: "song", audio: "songs-erraten-2/Imagine_Dragons_x_JID_-_Enemy.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Enemy", points: 2 },
      { type: "song", audio: "songs-erraten-2/Justin_Bieber_-_Love_Yourself.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Love Yourself", points: 2 },
      { type: "song", audio: "songs-erraten-2/Katy_Perry_-_Dark_Horse.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Dark Horse", points: 2 },
      { type: "song", audio: "songs-erraten-2/Kesha_-_TiK_ToK.mp3", question: "Welcher Songtitel ist zu hören?", answer: "TiK ToK", points: 2 },
      { type: "song", audio: "songs-erraten-2/Lady_Gaga_-_Just_Dance.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Just Dance", points: 2 },
      { type: "song", audio: "songs-erraten-2/Linkin_Park_-_Numb.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Numb", points: 2 },
      { type: "song", audio: "songs-erraten-2/Maroon_5_-_Payphone.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Payphone", points: 2 },
      { type: "song", audio: "songs-erraten-2/Olivia_Rodrigo_-_Cant_Catch_Me_Now.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Can't Catch Me Now", points: 2 },
      { type: "song", audio: "songs-erraten-2/Pitbull_-_Timber.mp3", question: "Welcher Songtitel ist zu hören?", answer: "Timber", points: 2 }
    ]
  },
  {
    title: "Türchen 18",
    questionTimeLimit: 60,
    imagePrompt: "Aus welchem Film oder welcher Serie stammt diese Karte?",
    imageAlt: "Karte aus einem Film oder einer Serie zum Erraten",
    imageAnswerPlaceholder: "Name des Films oder der Serie",
    questions: [
      { type: "image", image: "maps/asgard.jpg", answer: "Asgard", points: 2 },
      { type: "image", image: "maps/black_clover.jpg", answer: "Black Clover", points: 2 },
      { type: "image", image: "maps/der_herr_der_ringe.jpg", answer: "Der Herr der Ringe", points: 2 },
      { type: "image", image: "maps/die_tribute_von_panem.jpg", answer: "Die Tribute von Panem", points: 2 },
      { type: "image", image: "maps/drachen_zaehmen_leichtgemacht.jfif", answer: "Drachenzähmen leicht gemacht", acceptedAnswers: ["Drachen zähmen leicht gemacht"], points: 2 },
      { type: "image", image: "maps/game_of_thrones.jpg", answer: "Game of Thrones", points: 2 },
      { type: "image", image: "maps/hunter_x_hunter.jfif", answer: "Hunter x Hunter", points: 2 },
      { type: "image", image: "maps/narnia.jpg", answer: "Narnia", points: 2 },
      { type: "image", image: "maps/naruto.jfif", answer: "Naruto", points: 2 },
      { type: "image", image: "maps/one_piece.jfif", answer: "One Piece", points: 2 }
    ]
  },
  {
    title: "Türchen 19",
    questionTimeLimit: 60,
    imagePrompt: "Welche berühmte Person ist auf dem Kinderbild zu sehen?",
    imageAlt: "Kinderfoto einer berühmten Person zum Erraten",
    imageAnswerPlaceholder: "Name der Person",
    questions: [
      { type: "image", image: "kinderbilder/andrew_garfield.jfif", answer: "Andrew Garfield", points: 2 },
      { type: "image", image: "kinderbilder/chris_hemsworth.jpeg", answer: "Chris Hemsworth", points: 2 },
      { type: "image", image: "kinderbilder/dylan_obrien.jpg", answer: "Dylan O'Brien", acceptedAnswers: ["Dylan O’Brien"], points: 2 },
      { type: "image", image: "kinderbilder/elizabeth_olsen.jpg", answer: "Elizabeth Olsen", points: 2 },
      { type: "image", image: "kinderbilder/julia_beautx.jpg", answer: "Julia Beautx", points: 2 },
      { type: "image", image: "kinderbilder/mckenna_grace.jpg", answer: "Mckenna Grace", points: 2 },
      { type: "image", image: "kinderbilder/robert_downey-junior.png", answer: "Robert Downey Jr.", acceptedAnswers: ["Robert Downey Junior", "RDJ"], points: 2 },
      { type: "image", image: "kinderbilder/ronaldo.png", answer: "Ronaldo", acceptedAnswers: ["Cristiano Ronaldo", "CR7"], points: 2 },
      { type: "image", image: "kinderbilder/tom_hiddleston.png", answer: "Tom Hiddleston", points: 2 },
      { type: "image", image: "kinderbilder/trymacs.jpg", answer: "Trymacs", points: 2 }
    ]
  },
  {
    title: "Türchen 20",
    textDescription: "Beantworte die Fragen über uns/mich.",
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
  { title: "Türchen 21", type: "wealth-ranking", questions: [] },
  { title: "Türchen 22", type: "release-date-ranking", questions: [] },
  {
    title: "Türchen 23",
    welcomeMessage: "Wahr oder falsch: Tiere",
    introDescription: "Beantworte 20 Aussagen aus der Tierwelt. Wähle jeweils „Wahr“ oder „Falsch“.",
    questions: [
      { question: "Oktopusse haben drei Herzen.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Zwei Herzen pumpen Blut durch die Kiemen, ein drittes versorgt den restlichen Körper.", points: 1 },
      { question: "Goldfische haben ein Gedächtnis von nur drei Sekunden.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Das ist ein Mythos. Goldfische können sich Wochen bis Monate an Dinge wie Futterzeiten oder Personen erinnern.", points: 1 },
      { question: "Fledermäuse sind blind.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Fledermäuse können sehen. Zusätzlich orientieren sich viele Arten per Echoortung.", points: 1 },
      { question: "Wombats produzieren würfelförmigen Kot.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sie markieren damit ihr Revier, und die Würfel rollen nicht weg.", points: 1 },
      { question: "Flamingos sind von Natur aus rosa, egal was sie fressen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Ihre Farbe kommt von Karotinoiden in der Nahrung, etwa Krebstieren und Algen. Junge Flamingos sind grau.", points: 1 },
      { question: "Strauße stecken bei Gefahr den Kopf in den Sand.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Bei Gefahr legen sie sich flach auf den Boden oder rennen weg.", points: 1 },
      { question: "Kamele speichern Wasser in ihren Höckern.", options: ["Wahr", "Falsch"], answer: 1, explanation: "In den Höckern ist Fett als Energiereserve, kein Wasser.", points: 1 },
      { question: "Delfine schlafen mit nur einer Gehirnhälfte.", options: ["Wahr", "Falsch"], answer: 0, explanation: "So können sie weiter atmen und schwimmen.", points: 1 },
      { question: "Faultiere schlafen in freier Wildbahn etwa 20 Stunden am Tag.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Das stimmt nur in Gefangenschaft. In der Wildnis schlafen sie meist nur etwa 9 bis 10 Stunden.", points: 1 },
      { question: "Der Blauwal ist das größte Tier, das jemals auf der Erde gelebt hat.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Er wird bis zu etwa 30 Meter lang und ist damit größer als jeder bekannte Dinosaurier.", points: 1 },
      { question: "Honigbienen sterben, nachdem sie ein Säugetier gestochen haben.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Der Stachel hat Widerhaken und bleibt in der Haut stecken. Dabei wird er samt Giftdrüse aus dem Körper gerissen.", points: 1 },
      { question: "Haie haben ein Skelett aus Knochen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Das Skelett von Haien besteht aus Knorpel.", points: 1 },
      { question: "Giraffen haben viel mehr Halswirbel als Menschen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Beide haben sieben Halswirbel. Bei Giraffen sind sie nur sehr lang.", points: 1 },
      { question: "Pinguine leben am Nordpol.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Pinguine leben fast nur auf der Südhalbkugel. Am Nordpol gibt es keine Pinguine.", points: 1 },
      { question: "Bei Seepferdchen tragen die Männchen den Nachwuchs aus.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Die Weibchen legen die Eier in die Bruttasche des Männchens, und es bringt die Jungen zur Welt.", points: 1 },
      { question: "Kolibris können rückwärts fliegen.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sie können sogar in der Luft stehen bleiben und rückwärts fliegen.", points: 1 },
      { question: "Elefanten können nicht springen.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sie sind zu schwer und haben einen Körperbau, der Sprünge nicht zulässt.", points: 1 },
      { question: "Chamäleons ändern ihre Farbe vor allem, um sich zu tarnen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Meist dient der Farbwechsel der Kommunikation, etwa bei Stimmung oder Revierkämpfen, und der Temperaturregulierung.", points: 1 },
      { question: "Krokodile können ihre Zunge nicht herausstrecken.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Ihre Zunge ist am Gaumen festgewachsen.", points: 1 },
      { question: "Katzen schnurren nur, wenn sie glücklich sind.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Katzen schnurren auch bei Stress, Angst oder Schmerzen, vermutlich um sich zu beruhigen.", points: 1 }
    ]
  },
  {
    title: "Türchen 24",
    welcomeMessage: "Wahr oder falsch: Prominente",
    introDescription: "Beantworte 20 Aussagen über Prominente. Wähle jeweils „Wahr“ oder „Falsch“.",
    questions: [
      { question: "Dwayne „The Rock“ Johnson hat früher in der NFL gespielt.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Er spielte College-Football und wurde danach von einem Team der kanadischen CFL entlassen. In der NFL stand er nie. Danach wurde er Wrestler.", points: 1 },
      { question: "Lady Gagas bürgerlicher Name ist Stefani Germanotta.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Stefani Germanotta ist ihr bürgerlicher Name.", points: 1 },
      { question: "Keanu Reeves wurde in Beirut im Libanon geboren.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Aufgewachsen ist er unter anderem in Toronto.", points: 1 },
      { question: "Arnold Schwarzenegger war Gouverneur von Kalifornien.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Er hatte das Amt von 2003 bis 2011 inne.", points: 1 },
      { question: "Elon Musk wurde in den USA geboren.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Er kommt aus Pretoria in Südafrika.", points: 1 },
      { question: "Rihanna stammt aus Barbados.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Rihanna wurde auf Barbados geboren.", points: 1 },
      { question: "Taylor Swift wurde in Texas geboren.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Sie wurde in Pennsylvania geboren.", points: 1 },
      { question: "Cristiano Ronaldo hat die Champions League noch nie gewonnen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Er hat die Champions League fünfmal gewonnen.", points: 1 },
      { question: "Lionel Messi ist Weltmeister.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Er gewann 2022 mit Argentinien die Weltmeisterschaft.", points: 1 },
      { question: "Leonardo DiCaprio gewann seinen ersten Oscar für „The Revenant“.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Er gewann den Oscar für seine Rolle in „The Revenant“ im Jahr 2016.", points: 1 },
      { question: "Justin Bieber wurde über YouTube entdeckt.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sein späterer Manager Scooter Braun wurde durch seine Videos auf ihn aufmerksam.", points: 1 },
      { question: "Shakira stammt aus Mexiko.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Sie kommt aus Kolumbien.", points: 1 },
      { question: "Adele stammt aus London.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sie wurde im Londoner Stadtteil Tottenham geboren.", points: 1 },
      { question: "Bill Gates hat sein Studium in Harvard abgeschlossen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Er brach sein Studium ab, um Microsoft aufzubauen.", points: 1 },
      { question: "Eminem heißt bürgerlich Marshall Mathers.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sein vollständiger bürgerlicher Name ist Marshall Bruce Mathers III.", points: 1 },
      { question: "Beyoncé war Mitglied von Destiny's Child.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Beyoncé war Mitglied der Girlgroup Destiny's Child.", points: 1 },
      { question: "Zendaya hat noch nie einen Emmy gewonnen.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Sie gewann für „Euphoria“ Emmys in den Jahren 2020 und 2022.", points: 1 },
      { question: "Billie Eilish gewann mit 18 Jahren alle vier Grammy-Hauptkategorien in einem Jahr.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Das gelang ihr im Jahr 2020. Sie war die jüngste Person, die alle vier Hauptkategorien in einem Jahr gewann.", points: 1 },
      { question: "Snoop Dogg heißt bürgerlich Calvin Broadus.", options: ["Wahr", "Falsch"], answer: 0, explanation: "Sein bürgerlicher Name ist Calvin Cordozar Broadus Jr.", points: 1 },
      { question: "Ryan Reynolds ist Amerikaner.", options: ["Wahr", "Falsch"], answer: 1, explanation: "Er wurde in Vancouver geboren und ist Kanadier.", points: 1 }
    ]
  }
];

function swapQuizContents(firstDay, secondDay) {
  const firstQuiz = QUIZZES[firstDay - 1];
  const secondQuiz = QUIZZES[secondDay - 1];
  QUIZZES[firstDay - 1] = { ...secondQuiz, title: firstQuiz.title };
  QUIZZES[secondDay - 1] = { ...firstQuiz, title: secondQuiz.title };
}

swapQuizContents(3, 21);
swapQuizContents(14, 18);
swapQuizContents(10, 23);
swapQuizContents(20, 24);

const DOOR_ORDER = [18, 3, 12, 7, 22, 1, 15, 9, 24, 5, 20, 11, 4, 17, 2, 14, 8, 21, 6, 19, 10, 23, 13, 16];
const STORAGE_KEY = "adventskalender-fortschritt-v7";
const LEGACY_STORAGE_KEY = "adventskalender-fortschritt-v6";
const OLDER_STORAGE_KEY = "adventskalender-fortschritt-v5";
const OLDEST_STORAGE_KEY = "adventskalender-fortschritt-v4";
const OLDESTEST_STORAGE_KEY = "adventskalender-fortschritt-v3";
const ANCIENT_STORAGE_KEY = "adventskalender-fortschritt-v2";
const calendar = document.querySelector("#calendar");
const scoreDisplay = document.querySelector("#score");
const overlay = document.querySelector("#overlay");
const dialogDay = document.querySelector("#dialog-day");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const dialogPanel = document.querySelector(".dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const storageWarning = document.querySelector("#storage-warning");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeLightboxButton = document.querySelector("#close-lightbox");
const FIT_MIN_SCALE = 0.68;
const ZOOM_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

let progress = loadProgress();
let openDay = null;
let wordTimer = null;
let wordTimerKey = null;
let wordDeadline = null;
let liveQuizInterval = null;
let activeAudio = null;
let selectedWealthPersonId = null;
let wealthFeedback = null;
let wealthFeedbackTimer = null;
let fitFrame = 0;
let lightboxReturnFocus = null;
const audioPlayCounts = {};

// ---------- Layout-Bausteine für alle Quiz-Ansichten ----------

function setDialogView(view) {
  dialogPanel.classList.toggle("dialog--intro", view === "intro");
  dialogPanel.classList.toggle("dialog--stage", view === "stage");
  dialogContent.style.removeProperty("--quiz-progress");
  scheduleStageFit();
}

function createQuizStatus(...items) {
  const status = document.createElement("div");
  status.className = "quiz-status";
  status.append(...items.filter(Boolean));
  return status;
}

function createQuizMedia(items, modifier = "") {
  const media = document.createElement("div");
  media.className = `quiz-media${modifier ? ` quiz-media--${modifier}` : ""}`;
  media.append(...items.filter(Boolean));
  return media;
}

// Frage und Inhalt bilden eine Gruppe, die zwischen Statuszeile und Antwortbereich mittig steht.
function createQuizBody(...items) {
  const body = document.createElement("div");
  body.className = "quiz-body";
  body.append(...items.filter(Boolean));
  return body;
}

function createQuizAnswer(items) {
  const answer = document.createElement("div");
  answer.className = "quiz-answer";
  answer.append(...items.filter(Boolean));
  return answer;
}

function createSecondaryButton(text, modifier) {
  const button = document.createElement("button");
  button.className = `secondary-button secondary-button--${modifier}`;
  button.type = "button";
  button.textContent = text;
  return button;
}

function createQuizActions(...items) {
  const actions = document.createElement("div");
  actions.className = "quiz-actions";
  actions.append(...items.filter(Boolean));
  return actions;
}

// Zeitangabe für die Einleitungstexte: 30 → „30 Sekunden“, 60 → „1 Minute“, 90 → „1,5 Minuten“
function formatTimeLimit(seconds) {
  if (seconds === 60) return "1 Minute";
  if (seconds > 60 && seconds % 30 === 0) {
    return `${String(seconds / 60).replace(".", ",")} Minuten`;
  }
  return `${seconds} Sekunden`;
}

function isEmojiOnly(text) {
  return /\p{Extended_Pictographic}/u.test(text)
    && /^[\p{Extended_Pictographic}\p{Emoji_Component}‍️\s]+$/u.test(text);
}

function createZoomBadge() {
  const badge = document.createElement("span");
  badge.className = "zoom-badge";
  badge.setAttribute("aria-hidden", "true");
  badge.innerHTML = ZOOM_ICON;
  return badge;
}

function createZoomableImage({ src, alt = "", className = "", name = alt }) {
  const frame = document.createElement("button");
  frame.className = "zoom-frame";
  frame.type = "button";
  frame.setAttribute("aria-label", `${name || "Bild"} vergrößern`);
  const image = document.createElement("img");
  if (className) image.className = className;
  image.alt = alt;
  image.addEventListener("load", () => {
    if (image.naturalWidth && image.naturalHeight) {
      frame.style.setProperty("--ratio", String(image.naturalWidth / image.naturalHeight));
    }
  });
  image.src = src;
  frame.append(image, createZoomBadge());
  frame.addEventListener("click", () => openLightbox(src, name));
  return frame;
}

function openLightbox(src, alt = "") {
  lightboxReturnFocus = document.activeElement;
  lightboxImage.classList.remove("is-loaded");
  lightboxImage.style.removeProperty("--ratio");
  lightboxImage.onload = () => {
    if (lightboxImage.naturalWidth && lightboxImage.naturalHeight) {
      lightboxImage.style.setProperty("--ratio", String(lightboxImage.naturalWidth / lightboxImage.naturalHeight));
    }
    lightboxImage.classList.add("is-loaded");
  };
  lightboxImage.alt = alt;
  lightboxImage.src = src;
  lightbox.hidden = false;
  closeLightboxButton.focus();
}

function closeLightbox() {
  if (lightbox.hidden) return false;
  lightbox.hidden = true;
  lightboxImage.onload = null;
  lightboxImage.removeAttribute("src");
  const answerInput = dialogContent.querySelector(".word-input:not(:disabled)");
  const returnTarget = answerInput ?? (lightboxReturnFocus?.isConnected ? lightboxReturnFocus : null);
  returnTarget?.focus();
  lightboxReturnFocus = null;
  return true;
}

// Passt die Schriftgröße der Quiz-Ansicht so an, dass nichts gescrollt werden muss.
function scheduleStageFit() {
  if (fitFrame) return;
  fitFrame = requestAnimationFrame(() => {
    fitFrame = 0;
    fitStage();
  });
}

function stageOverflows() {
  // Auf Handys dürfen lange Listen in ihrem eigenen Bereich scrollen, damit die Schrift lesbar bleibt.
  const isSmallScreen = window.matchMedia("(max-width: 560px)").matches;
  const boxes = [
    dialogContent,
    ...dialogContent.querySelectorAll(".quiz-media, .answer-summary, .ranking-result-list, .ranking-timeline")
  ].filter((box) => !(isSmallScreen && box.matches(".quiz-media--list, .answer-summary, .ranking-result-list, .ranking-timeline")));
  return boxes.some((box) => (
    box.scrollHeight > box.clientHeight || box.scrollWidth > box.clientWidth
  ));
}

function fitStage() {
  dialogContent.classList.remove("is-overflowing");
  if (overlay.hidden || !dialogPanel.classList.contains("dialog--stage")) {
    dialogContent.style.removeProperty("--fit");
    return;
  }
  const setScale = (scale) => dialogContent.style.setProperty("--fit", scale.toFixed(3));
  setScale(1);
  if (!stageOverflows()) return;
  setScale(FIT_MIN_SCALE);
  if (stageOverflows()) {
    // Notlösung für sehr kleine Bildschirme: lange Listen scrollen dann innerhalb ihres Bereichs.
    dialogContent.classList.add("is-overflowing");
    return;
  }
  let low = FIT_MIN_SCALE;
  let high = 1;
  for (let step = 0; step < 7; step += 1) {
    const middle = (low + high) / 2;
    setScale(middle);
    if (stageOverflows()) high = middle;
    else low = middle;
  }
  setScale(low);
}

function loadProgress() {
  try {
    const currentProgress = localStorage.getItem(STORAGE_KEY);
    const legacyProgress = currentProgress === null ? localStorage.getItem(LEGACY_STORAGE_KEY) : null;
    const saved = currentProgress
      ?? legacyProgress
      ?? localStorage.getItem(OLDER_STORAGE_KEY)
      ?? localStorage.getItem(OLDEST_STORAGE_KEY)
      ?? localStorage.getItem(OLDESTEST_STORAGE_KEY)
      ?? localStorage.getItem(ANCIENT_STORAGE_KEY);
    if (saved === null) return {};

    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Gespeicherter Fortschritt hat ein unerwartetes Format.");
    }

    let progressChanged = false;
    if (currentProgress === null) {
      for (const dayIndex of [2, 9, 13, 17, 19, 20, 22, 23]) {
        if (Object.hasOwn(parsed, dayIndex)) {
          delete parsed[dayIndex];
          progressChanged = true;
        }
      }
      delete parsed[3];
      delete parsed[19];
      progressChanged = true;
      if (legacyProgress === null && typeof parsed[22]?.[0] === "number") {
        delete parsed[22];
        progressChanged = true;
      }
      for (const dayIndex of [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23]) {
        if (typeof parsed[dayIndex]?.[0] === "number") {
          delete parsed[dayIndex];
          progressChanged = true;
        }
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

function rankingStateFor(answers, quizType) {
  const config = RANKING_CONFIGS[quizType];
  const saved = answers[config.answersKey];
  const knownIds = new Set(config.people.map((person) => person.id));
  const placed = Array.isArray(saved?.placed)
    ? [...new Set(saved.placed.filter((id) => knownIds.has(id)))]
    : [];
  const lives = Number.isInteger(saved?.lives) ? Math.min(Math.max(saved.lives, 0), 5) : 5;
  return {
    placed,
    lives,
    gameOver: saved?.gameOver === true || lives === 0 || placed.length === config.people.length
  };
}

function pointsFor(dayIndex) {
  const quiz = QUIZZES[dayIndex];
  const answers = answersFor(dayIndex);
  if (RANKING_CONFIGS[quiz.type]) return rankingStateFor(answers, quiz.type).placed.length;
  if (quiz.manualScore) {
    return Number.isSafeInteger(answers._manualPoints) && answers._manualPoints >= 0
      ? answers._manualPoints
      : 0;
  }
  return quiz.questions.reduce((total, question, questionIndex) => {
    const answer = answers[questionIndex];
    if (quiz.type === "who-am-i") {
      return total + (answer?.completed && Number.isSafeInteger(answer.points) ? answer.points : 0);
    }
    return total + (isCorrectAnswer(question, answer) ? question.points : 0);
  }, 0);
}

function isQuestionComplete(question, answer) {
  return Array.isArray(question.clues)
    ? answer?.completed === true
    : answer !== undefined;
}

function isCorrectAnswer(question, answer) {
  if (Array.isArray(question.clues)) {
    if (typeof answer?.guess !== "string") return false;
    const normalize = (value) => value.toLocaleLowerCase("de-DE").replace(/\s+/g, "");
    return [question.answer, ...(question.acceptedAnswers ?? [])]
      .some((acceptedAnswer) => normalize(answer.guess) === normalize(acceptedAnswer));
  }
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
  if (question.type === "audio" || question.type === "ability-audio") {
    if (typeof answer !== "string") return false;
    if (question.type === "ability-audio") {
      const normalize = (value) => value.trim().toLocaleLowerCase("de-DE").replace(/[\s_-]+/g, "");
      return normalize(answer) === normalize(`${question.champion} ${question.answer}`);
    }
    const normalizedAnswer = answer.trim().toLocaleLowerCase("de-DE");
    const acceptedAnswers = [question.answer, ...(question.acceptedAnswers ?? [])];
    return acceptedAnswers.some((acceptedAnswer) => (
      normalizedAnswer === acceptedAnswer.toLocaleLowerCase("de-DE")
    ));
  }
  if (question.type === "song") {
    return typeof answer === "string"
      && answer.trim().toLocaleLowerCase("de-DE").replace(/\s+/g, " ")
        === question.answer.toLocaleLowerCase("de-DE").replace(/\s+/g, " ");
  }
  if (question.scale) {
    const value = Number(answer);
    return typeof answer === "string"
      && Number.isInteger(value)
      && value >= question.scale.min
      && value <= question.scale.max;
  }
  if (question.type === "text" || (typeof question.answer === "string" && !question.options)) {
    if (typeof answer !== "string") return false;
    const normalize = (value) => value.trim().toLocaleLowerCase("de-DE")
      .replace(/\*/g, "")
      .replace(/[-–—:：]/g, " ")
      .replace(/\s+/g, " ");
    const acceptedAnswers = [question.answer, ...(question.acceptedAnswers ?? [])];
    return acceptedAnswers.some((acceptedAnswer) => normalize(answer) === normalize(acceptedAnswer));
  }
  return answer === question.answer;
}

function isComplete(dayIndex) {
  const quiz = QUIZZES[dayIndex];
  if (RANKING_CONFIGS[quiz.type]) return rankingStateFor(answersFor(dayIndex), quiz.type).gameOver;
  if (quiz.manualScore) {
    return Number.isSafeInteger(answersFor(dayIndex)._manualPoints)
      && answersFor(dayIndex)._manualPoints >= 0;
  }
  return quiz.questions.length > 0
    && quiz.questions.every((question, questionIndex) => (
      isQuestionComplete(question, answersFor(dayIndex)[questionIndex])
    ));
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
  clearTimeout(wealthFeedbackTimer);
  wealthFeedbackTimer = null;
  wealthFeedback = null;
  selectedWealthPersonId = null;
  openDay = dayIndex;
  const quiz = QUIZZES[dayIndex];
  dialogPanel.classList.toggle("dialog--ranking-quiz", Boolean(RANKING_CONFIGS[quiz.type]));
  dialogPanel.classList.toggle("dialog--wide", Boolean(RANKING_CONFIGS[quiz.type]) || quiz.liveLayout === "movie-list");
  dialogDay.textContent = `Dezember ${dayIndex + 1}`;
  dialogTitle.textContent = quiz.title;
  renderIntro();
  overlay.hidden = false;
  document.body.classList.add("dialog-open");
  closeDialogButton.focus();
}

function renderIntro() {
  const quiz = QUIZZES[openDay];
  const completed = isComplete(openDay);
  const answers = answersFor(openDay);
  const answeredCount = quiz.questions.reduce((count, question, index) => (
    count + (isQuestionComplete(question, answers[index]) ? 1 : 0)
  ), 0);
  const hasProgress = quiz.questions.some((_, index) => Object.hasOwn(answers, index));
  dialogContent.replaceChildren();
  setDialogView("intro");

  const rankingConfig = RANKING_CONFIGS[quiz.type];
  if (rankingConfig) {
    const rankingState = rankingStateFor(answers, quiz.type);
    const description = document.createElement("p");
    description.className = "quiz-intro";
    description.textContent = rankingConfig.intro;
    const progressMessage = document.createElement("p");
    progressMessage.className = "intro-progress";
    progressMessage.textContent = rankingState.gameOver
      ? "Dieses Quiz ist abgeschlossen."
      : rankingState.placed.length > 0
        ? `Bereits richtig eingeordnet: ${rankingState.placed.length} von ${rankingConfig.people.length} · Leben: ${rankingState.lives}`
        : "Du hast fünf Leben.";
    const startButton = document.createElement("button");
    startButton.className = "primary-button";
    startButton.type = "button";
    startButton.textContent = rankingState.gameOver
      ? "Zusammenfassung ansehen"
      : rankingState.placed.length > 0 ? "Quiz fortsetzen" : "Quiz starten";
    startButton.addEventListener("click", rankingState.gameOver ? renderResult : renderRankingQuiz);
    dialogContent.append(description, progressMessage, startButton);
    return;
  }

  if (quiz.questions.length === 0) {
    if (quiz.challenge) {
      const challenge = document.createElement("p");
      challenge.className = "minigame-challenge";
      challenge.textContent = quiz.challenge;
      dialogContent.append(challenge);
      if (quiz.manualScore) renderManualScoreInput(answers);
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
  if (quiz.welcomeMessage) {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.className = "quiz-welcome";
    welcomeMessage.textContent = quiz.welcomeMessage;
    dialogContent.append(welcomeMessage);
  }
  if (quiz.type === "who-am-i") {
    description.textContent = "Errate die gesuchte Person anhand von bis zu drei Hinweisen. Für eine richtige Antwort beim ersten Hinweis gibt es 3 Punkte, beim zweiten 2 und beim dritten 1 Punkt.";
  } else if (quiz.questions[0].type === "word") {
    description.textContent = `In diesem Quiz warten ${quiz.questions.length} Buchstabensalate auf dich. Für jedes Wort hast du ${formatTimeLimit(quiz.questionTimeLimit ?? 30)} Zeit.`;
  } else if (quiz.questions[0].type === "image") {
    const subject = quiz.imagePrompt
      ? quiz.imagePrompt
      : "Erkenne die Champions auf den Bildern und gib ihre Namen ein.";
    description.textContent = quiz.timeLimit === false
      ? subject
      : `${subject} Pro Bild hast du ${formatTimeLimit(quiz.questionTimeLimit ?? 30)} Zeit.`;
  } else if (quiz.questions[0].type === "audio") {
    description.textContent = quiz.audioDescription
      ?? "Erkenne die Champions an ihrer Voiceline. Gib den Namen des Champions ein.";
  } else if (quiz.abilityAudioQuiz) {
    description.textContent = quiz.introDescription
      ?? "Höre dir den Fähigkeitssound an und gib den Championnamen zusammen mit Q, W, E oder R ein.";
  } else if (quiz.questions[0].type === "song") {
    description.textContent = "Höre dir den Song an und errate den Titel.";
  } else if (quiz.questions[0].type === "text") {
    description.textContent = quiz.textDescription
      ?? `Beantworte die Fragen über uns. Gib deine Antwort jeweils ins Textfeld ein. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.type === "live") {
    const minutes = Math.floor(quiz.timeLimit / 60);
    const seconds = quiz.timeLimit % 60;
    const timeLimit = seconds === 0
      ? `${minutes} ${minutes === 1 ? "Minute" : "Minuten"}`
      : `${minutes} Minute${minutes === 1 ? "" : "n"} und ${seconds} Sekunden`;
    description.textContent = `Beantworte so viele Fragen wie möglich. Für alle Fragen hast du zusammen ${timeLimit} Zeit. Falsche Antworten kannst du erneut versuchen.`;
  } else {
    description.textContent = quiz.introDescription
      ?? `In diesem Quiz warten ${quiz.questions.length} ${quiz.questions.length === 1 ? "Frage" : "Fragen"} auf dich. Wähle bei jeder Frage die passende Antwort und sammle Punkte für richtige Lösungen.`;
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
    : hasProgress || Number.isFinite(answers._deadline) ? "Quiz fortsetzen" : "Quiz starten";
  startButton.addEventListener("click", completed
    ? renderResult
    : quiz.type === "live" ? startLiveQuiz : renderQuestion);

  dialogContent.append(description);
  if (progressMessage.textContent) dialogContent.append(progressMessage);
  dialogContent.append(startButton);
}

function renderManualScoreInput(answers) {
  const form = document.createElement("form");
  form.className = "answers";

  const label = document.createElement("label");
  label.className = "live-quiz-question";
  label.htmlFor = "manual-score-input";
  label.textContent = "Wie viele Punkte hast du verdient?";

  const input = document.createElement("input");
  input.className = "word-input";
  input.id = "manual-score-input";
  input.type = "number";
  input.min = "0";
  input.max = String(Number.MAX_SAFE_INTEGER);
  input.step = "1";
  input.required = true;
  input.inputMode = "numeric";
  input.value = Number.isSafeInteger(answers._manualPoints) ? String(answers._manualPoints) : "";
  input.setAttribute("aria-label", label.textContent);

  const feedback = document.createElement("p");
  feedback.className = "feedback";
  feedback.setAttribute("aria-live", "polite");

  const submit = document.createElement("button");
  submit.className = "primary-button";
  submit.type = "submit";
  submit.textContent = "Punktzahl speichern";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const points = input.valueAsNumber;
    if (!Number.isSafeInteger(points) || points < 0) {
      feedback.className = "feedback incorrect";
      feedback.textContent = "Bitte gib eine gültige nichtnegative ganze Punktzahl ein.";
      input.focus();
      return;
    }

    const currentAnswers = answersFor(openDay);
    currentAnswers._manualPoints = points;
    progress[openDay] = currentAnswers;
    saveProgress();
    renderCalendar();
    feedback.className = "feedback correct";
    feedback.textContent = `${points} ${points === 1 ? "Punkt" : "Punkte"} gespeichert.`;
  });

  form.append(label, input, submit, feedback);
  dialogContent.append(form);
}

function renderQuestion() {
  const quiz = QUIZZES[openDay];
  if (RANKING_CONFIGS[quiz.type]) {
    renderRankingQuiz();
    return;
  }
  if (quiz.type === "live") {
    renderLiveQuiz();
    return;
  }

  const answers = answersFor(openDay);
  const questionIndex = quiz.questions.findIndex((question, index) => (
    !isQuestionComplete(question, answers[index])
  ));
  dialogContent.replaceChildren();
  setDialogView("stage");

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
  dialogContent.style.setProperty("--quiz-progress", String(questionIndex / quiz.questions.length));
  const progressText = document.createElement("p");
  progressText.className = "question-progress";
  progressText.textContent = `Frage ${questionIndex + 1} von ${quiz.questions.length}`;
  const questionText = document.createElement("p");
  questionText.className = "question-text";
  questionText.textContent = question.question
    ?? (question.type === "ability-audio"
      ? `${question.champion}: Welche Fähigkeit hörst du?`
      : question.type === "audio"
      ? quiz.audioPrompt ?? "Welcher Champion ist in der Voiceline zu hören?"
      : question.type === "song" ? "Welcher Songtitel ist zu hören?" : "");

  if (question.type === "word") {
    renderWordQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (question.type === "image") {
    renderImageQuestion(question, questionIndex, progressText);
    return;
  }

  if (question.type === "audio" || question.type === "ability-audio") {
    renderAudioQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (question.type === "song") {
    renderAudioQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (question.type === "text") {
    renderTextQuestion(question, questionIndex, progressText, questionText);
    return;
  }

  if (quiz.type === "who-am-i") {
    renderWhoAmIQuestion(question, questionIndex, progressText);
    return;
  }

  const isTrueFalse = question.options.length === 2
    && question.options[0] === "Wahr"
    && question.options[1] === "Falsch";
  const choices = document.createElement("div");
  choices.className = `answers${isTrueFalse ? " answers--true-false" : ""}`;
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-label", "Antwortmöglichkeiten");

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    // Kennzeichen vor der Antwort: A–D bei Auswahlfragen, ✓/✕ bei Wahr oder falsch
    const badge = document.createElement("span");
    badge.className = "answer-badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = isTrueFalse ? ["✓", "✕"][optionIndex] : String.fromCharCode(65 + optionIndex);
    const label = document.createElement("span");
    label.className = "answer-label";
    label.textContent = option;
    button.append(badge, label);
    button.addEventListener("click", () => submitAnswer(questionIndex, optionIndex));
    choices.append(button);
  });

  // Frage und Antworten liegen gemeinsam auf einer Quiz-Karte
  const card = document.createElement("div");
  card.className = "choice-card";
  card.append(questionText, choices);

  dialogContent.append(
    createQuizStatus(progressText),
    createQuizBody(createQuizMedia([card], "choices"))
  );
}

function renderRankingQuiz() {
  const quizType = QUIZZES[openDay].type;
  const config = RANKING_CONFIGS[quizType];
  const answers = answersFor(openDay);
  const state = rankingStateFor(answers, quizType);
  if (state.gameOver && !wealthFeedback) {
    renderResult();
    return;
  }

  dialogContent.replaceChildren();
  setDialogView("stage");
  dialogContent.style.setProperty("--quiz-progress", String(state.placed.length / config.people.length));
  const status = document.createElement("p");
  status.className = "ranking-status";
  status.textContent = `Richtig eingeordnet: ${state.placed.length} von ${config.people.length}`;
  const lives = document.createElement("p");
  lives.className = `ranking-lives${wealthFeedback && !wealthFeedback.correct ? " is-hit" : ""}`;
  lives.setAttribute("aria-label", `Leben: ${state.lives} von 5`);
  const livesLabel = document.createElement("span");
  livesLabel.className = "ranking-lives-label";
  livesLabel.textContent = "Leben:";
  const fullHearts = document.createElement("span");
  fullHearts.className = "ranking-hearts";
  fullHearts.textContent = "♥".repeat(state.lives);
  const lostHearts = document.createElement("span");
  lostHearts.className = "ranking-hearts ranking-hearts--lost";
  lostHearts.textContent = "♡".repeat(5 - state.lives);
  lives.append(livesLabel, fullHearts, lostHearts);
  dialogContent.append(createQuizStatus(status, lives));

  // Anweisung und Zeitleiste stehen mittig zwischen Statuszeile und Auswahl.
  const body = createQuizBody();
  dialogContent.append(body);

  if (wealthFeedback) {
    const feedback = document.createElement("p");
    feedback.className = `feedback ${wealthFeedback.correct ? "correct" : "incorrect"} ranking-feedback`;
    feedback.textContent = wealthFeedback.correct
      ? "Richtig eingeordnet!"
      : `Falsch eingeordnet – ${config.people.find((person) => person.id === wealthFeedback.personId).name} kommt zurück in die Auswahl.`;
    body.append(feedback);
  } else {
    const prompt = document.createElement("p");
    prompt.className = "ranking-instruction";
    prompt.textContent = `Ziehe ${quizType === "release-date-ranking" ? "ein Spiel" : "eine Person"} in die Zeitleiste oder wähle ${quizType === "release-date-ranking" ? "es" : "sie"} aus und tippe auf „Hier einordnen“.`;
    body.append(prompt);
  }

  const timelineHeading = document.createElement("h3");
  timelineHeading.className = "ranking-section-heading";
  timelineHeading.textContent = config.timelineHeading;
  body.append(timelineHeading);

  const placedPeople = config.people.filter((person) => state.placed.includes(person.id));
  const timelinePeople = [...placedPeople, config.anchor].sort((first, second) => (
    config.getValue(first) - config.getValue(second)
  ));
  const timeline = document.createElement("div");
  timeline.className = "ranking-timeline";
  timeline.classList.toggle("has-selection", Boolean(selectedWealthPersonId));
  let anchorEntry = null;

  const addPosition = (position) => {
    const slot = document.createElement("button");
    slot.className = "ranking-slot";
    slot.type = "button";
    slot.textContent = "＋";
    slot.setAttribute("aria-label", `An Position ${position + 1} einordnen`);
    slot.title = "An dieser Stelle einordnen";
    slot.disabled = Boolean(wealthFeedback);
    slot.addEventListener("click", () => placeRankingItem(selectedWealthPersonId, position, timelinePeople, config));
    slot.addEventListener("dragover", (event) => {
      if (!wealthFeedback) {
        event.preventDefault();
        slot.classList.add("is-drag-over");
      }
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("is-drag-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("is-drag-over");
      const personId = event.dataTransfer.getData("text/plain") || selectedWealthPersonId;
      placeRankingItem(personId, position, timelinePeople, config);
    });
    timeline.append(slot);
  };

  timelinePeople.forEach((person, index) => {
    addPosition(index);
    const entry = document.createElement("div");
    const isAnchor = person.id === config.anchor.id;
    const isRecent = wealthFeedback?.correct && wealthFeedback.personId === person.id;
    entry.className = `ranking-entry${isAnchor ? " is-anchor" : ""}${isRecent ? " is-correct" : ""}`;
    if (isAnchor) anchorEntry = entry;
    const image = createZoomableImage({ src: person.image, className: "ranking-image", name: person.name });
    const details = document.createElement("span");
    details.className = "ranking-details";
    const name = document.createElement("strong");
    name.textContent = person.name;
    const amount = document.createElement("span");
    amount.className = "ranking-value";
    amount.textContent = config.getDisplayValue(person);
    details.append(name);
    if (isAnchor || state.placed.includes(person.id)) details.append(amount);
    const marker = document.createElement("span");
    marker.className = "ranking-rank";
    marker.textContent = String(index + 1);
    entry.append(marker, image, details);
    timeline.append(entry);
  });
  addPosition(timelinePeople.length);
  body.append(timeline);
  // Mit natürlicher Breite messen: Passt die zentrierte Zeitleiste hinein, bleibt der Anker in der Mitte.
  // Sonst schrumpfen die Einträge, damit nichts seitlich gescrollt werden muss.
  timeline.classList.add("is-centered");
  const timelineRect = timeline.getBoundingClientRect();
  const anchorRect = anchorEntry.getBoundingClientRect();
  const leftWidth = anchorRect.left - timelineRect.left + timeline.scrollLeft;
  const rightWidth = timeline.scrollWidth - leftWidth - anchorEntry.offsetWidth;
  const balanceWidth = Math.abs(rightWidth - leftWidth);
  const fitsCentered = timeline.scrollWidth + balanceWidth <= timeline.clientWidth;
  timeline.classList.toggle("is-centered", fitsCentered);
  const timelineFontSize = parseFloat(getComputedStyle(timeline).fontSize) || 16;
  if (fitsCentered && leftWidth < rightWidth) {
    const spacer = document.createElement("span");
    spacer.className = "ranking-spacer";
    spacer.setAttribute("aria-hidden", "true");
    spacer.style.flexBasis = `${(rightWidth - leftWidth) / timelineFontSize}em`;
    timeline.prepend(spacer);
  } else if (fitsCentered && rightWidth < leftWidth) {
    const spacer = document.createElement("span");
    spacer.className = "ranking-spacer";
    spacer.setAttribute("aria-hidden", "true");
    spacer.style.flexBasis = `${(leftWidth - rightWidth) / timelineFontSize}em`;
    timeline.append(spacer);
  }
  const centeredTimelineRect = timeline.getBoundingClientRect();
  const centeredAnchorRect = anchorEntry.getBoundingClientRect();
  timeline.scrollLeft += centeredAnchorRect.left - centeredTimelineRect.left
    + centeredAnchorRect.width / 2 - timeline.clientWidth / 2;

  const poolHeading = document.createElement("h3");
  poolHeading.className = "ranking-section-heading";
  poolHeading.textContent = `Noch auszuwählen (${config.people.length - state.placed.length})`;
  const pool = document.createElement("div");
  pool.className = "ranking-pool";
  config.people.filter((person) => !state.placed.includes(person.id)).forEach((person) => {
    const card = document.createElement("button");
    const isSelected = selectedWealthPersonId === person.id;
    const isIncorrect = wealthFeedback && !wealthFeedback.correct && wealthFeedback.personId === person.id;
    card.className = `ranking-person${isSelected ? " is-selected" : ""}${isIncorrect ? " is-incorrect" : ""}`;
    card.type = "button";
    card.draggable = !wealthFeedback;
    card.disabled = Boolean(wealthFeedback);
    card.setAttribute("aria-pressed", String(isSelected));
    card.setAttribute("aria-label", `${person.name}${isSelected ? ", ausgewählt" : ", Person auswählen"}`);
    const image = document.createElement("img");
    image.src = person.image;
    image.alt = "";
    const name = document.createElement("span");
    name.textContent = person.name;
    card.append(image, name);
    card.addEventListener("click", () => {
      selectedWealthPersonId = isSelected ? null : person.id;
      renderRankingQuiz();
    });
    card.addEventListener("dragstart", (event) => {
      selectedWealthPersonId = person.id;
      event.dataTransfer.setData("text/plain", person.id);
      event.dataTransfer.effectAllowed = "move";
    });
    const zoomButton = document.createElement("button");
    zoomButton.className = "zoom-button";
    zoomButton.type = "button";
    zoomButton.setAttribute("aria-label", `${person.name} vergrößern`);
    zoomButton.innerHTML = ZOOM_ICON;
    zoomButton.addEventListener("click", () => openLightbox(person.image, person.name));
    const poolItem = document.createElement("div");
    poolItem.className = "ranking-pool-item";
    poolItem.append(card, zoomButton);
    pool.append(poolItem);
  });
  const poolSection = document.createElement("div");
  poolSection.className = "ranking-pool-section";
  poolSection.append(poolHeading, pool);
  dialogContent.append(poolSection);
}

function placeRankingItem(personId, position, timelinePeople, config) {
  const person = config.people.find((item) => item.id === personId);
  const answers = answersFor(openDay);
  const quizType = QUIZZES[openDay].type;
  const state = rankingStateFor(answers, quizType);
  if (!person || state.gameOver || wealthFeedback || state.placed.includes(personId)) return;

  const lower = timelinePeople[position - 1];
  const upper = timelinePeople[position];
  const value = config.getValue(person);
  const isCorrect = (!lower || value > config.getValue(lower))
    && (!upper || value < config.getValue(upper));
  if (isCorrect) state.placed.push(personId);
  else state.lives -= 1;
  state.gameOver = state.lives === 0 || state.placed.length === config.people.length;
  answers[config.answersKey] = state;
  progress[openDay] = answers;
  selectedWealthPersonId = null;
  wealthFeedback = { personId, correct: isCorrect };
  saveProgress();
  renderCalendar();
  renderRankingQuiz();

  clearTimeout(wealthFeedbackTimer);
  const rankingDay = openDay;
  wealthFeedbackTimer = setTimeout(() => {
    wealthFeedback = null;
    if (openDay === rankingDay) renderRankingQuiz();
  }, 3000);
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
  list.className = `live-quiz-list${quiz.liveLayout === "movie-list" ? " live-quiz-list--movie" : ""}`;
  list.style.setProperty("--rows", String(Math.ceil(quiz.questions.length / 2)));
  const movieColumnCount = 4;
  const updateLiveProgress = () => {
    const currentAnswers = answersFor(openDay);
    const answeredCount = quiz.questions.filter((_, index) => Object.hasOwn(currentAnswers, index)).length;
    dialogContent.style.setProperty("--quiz-progress", String(answeredCount / quiz.questions.length));
  };
  const movieColumns = quiz.liveLayout === "movie-list"
    ? Array.from({ length: movieColumnCount }, () => {
      const column = document.createElement("div");
      column.className = "live-quiz-column";
      const header = document.createElement("div");
      header.className = "live-quiz-column-header";
      const yearHeading = document.createElement("span");
      yearHeading.textContent = "Jahr";
      const filmHeading = document.createElement("span");
      filmHeading.textContent = "Film";
      header.append(yearHeading, filmHeading);
      column.append(header);
      return column;
    })
    : null;
  movieColumns?.forEach((column) => list.append(column));

  const updateTimer = () => {
    const secondsLeft = Math.max(0, Math.ceil((answers._deadline - Date.now()) / 1000));
    const minutesLeft = Math.floor(secondsLeft / 60);
    const remainingSeconds = String(secondsLeft % 60).padStart(2, "0");
    timer.textContent = secondsLeft >= 60
      ? `Noch ${minutesLeft}:${remainingSeconds} Minuten`
      : `Noch ${secondsLeft} Sekunden`;
    timer.classList.toggle("word-timer--urgent", secondsLeft <= 10);
    if (secondsLeft === 0) finishLiveQuiz(true);
  };

  quiz.questions.forEach((question, questionIndex) => {
    const row = document.createElement("form");
    const savedAnswer = answers[questionIndex];
    row.className = `live-quiz-row${quiz.liveLayout === "movie-list" ? " live-quiz-row--movie" : ""}${savedAnswer !== undefined ? " is-correct" : ""}`;
    const label = document.createElement("label");
    label.className = "live-quiz-question";
    label.htmlFor = `live-answer-${questionIndex}`;
    label.textContent = question.year ?? question.question;

    const input = document.createElement("input");
    input.className = "word-input live-quiz-input";
    input.id = `live-answer-${questionIndex}`;
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Antwort";
    input.value = savedAnswer ?? "";
    input.disabled = savedAnswer !== undefined;
    input.setAttribute("aria-label", `Antwort für ${question.year ?? question.question}`);
    if (savedAnswer !== undefined && quiz.correctAnswerColor === "green") {
      input.value = question.answer;
    }

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
        row.classList.remove("is-wrong");
        void row.offsetWidth;
        row.classList.add("is-wrong");
        input.focus();
        return;
      }

      const currentAnswers = answersFor(openDay);
      currentAnswers[questionIndex] = answer;
      progress[openDay] = currentAnswers;
      if (quiz.correctAnswerColor === "green") input.value = question.answer;
      input.disabled = true;
      submit.disabled = true;
      row.classList.remove("is-wrong");
      row.classList.add("is-correct");
      feedback.textContent = "Richtig!";
      saveProgress();
      renderCalendar();
      updateLiveProgress();

      if (quiz.questions.every((_, index) => Object.hasOwn(currentAnswers, index))) {
        finishLiveQuiz(false);
      }
    });

    input.addEventListener("input", () => row.classList.remove("is-wrong"));

    row.append(label, input, submit, feedback);
    if (movieColumns) {
      const columnIndex = Math.floor(questionIndex / Math.ceil(quiz.questions.length / movieColumnCount));
      movieColumns[columnIndex].append(row);
    } else {
      list.append(row);
    }
  });

  const livePrompt = quiz.livePrompt ? document.createElement("p") : null;
  if (livePrompt) {
    livePrompt.className = "question-text";
    livePrompt.textContent = quiz.livePrompt;
  }
  dialogContent.replaceChildren(createQuizStatus(timer), createQuizBody(livePrompt, createQuizMedia([list], "list")));
  setDialogView("stage");
  updateLiveProgress();
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

  form.classList.add("quiz-actions");
  form.append(input, submitButton);
  dialogContent.append(
    createQuizStatus(progressText, timerDisplay),
    createQuizBody(questionText, createQuizMedia([scrambledWord], "word")),
    form
  );
  startWordTimer(questionIndex, timerDisplay, quiz.questionTimeLimit ?? 30);
  input.focus();
}

function renderImageQuestion(question, questionIndex, progressText) {
  const quiz = QUIZZES[openDay];
  const image = createZoomableImage({
    src: question.image,
    alt: quiz.imageAlt ?? "Bild zum Erraten",
    className: `image-quiz-image${quiz.timeLimit === false ? " image-quiz-image--large" : ""}`
  });

  const questionText = document.createElement("p");
  questionText.className = "question-text";
  questionText.textContent = quiz.imagePrompt ?? "Welcher Champion ist auf dem Bild zu sehen?";

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
  input.placeholder = quiz.imageAnswerPlaceholder ?? "Name des Champions";
  input.setAttribute("aria-label", input.placeholder);

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

  form.classList.add("quiz-actions");
  form.append(input, submitButton);
  dialogContent.append(
    createQuizStatus(progressText, timerDisplay),
    createQuizBody(questionText, createQuizMedia([image], "image")),
    form
  );
  if (timerDisplay) startWordTimer(questionIndex, timerDisplay, quiz.questionTimeLimit ?? 30);
  input.focus();
}

function renderAudioQuestion(question, questionIndex, progressText, questionText) {
  const attemptKey = `${openDay}:${questionIndex}`;
  const isSong = question.type === "song";
  const audio = new Audio(question.audio);
  audio.preload = "none";
  activeAudio = audio;
  const isAbilityAudio = question.type === "ability-audio";
  const audioLabel = isAbilityAudio ? "Fähigkeitssound" : isSong ? "Song" : "Voiceline";

  const player = document.createElement("div");
  player.className = "audio-quiz-player";
  const playButton = document.createElement("button");
  playButton.className = "secondary-button secondary-button--play";
  playButton.type = "button";
  const attempts = document.createElement("p");
  attempts.className = "audio-quiz-attempts";
  attempts.setAttribute("aria-live", "polite");
  const status = document.createElement("p");
  status.className = "audio-quiz-status";
  status.setAttribute("role", "status");

  const updateAttempts = () => {
    const playsLeft = 3 - (audioPlayCounts[attemptKey] ?? 0);
    playButton.textContent = audio.paused ? `${audioLabel} abspielen` : `${audioLabel} wird abgespielt …`;
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
      status.textContent = `Die Audiodatei konnte nicht abgespielt werden. Bitte versuche es erneut.`;
      console.error(`Die Audiodatei für ${audioLabel} konnte nicht abgespielt werden.`, error);
    });
  });
  audio.addEventListener("ended", updateAttempts);
  audio.addEventListener("error", () => {
    status.textContent = `Die ${isSong ? "Songdatei" : "Audiodatei"} konnte nicht geladen werden.`;
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
  input.placeholder = isAbilityAudio
    ? "Champion und Fähigkeit (z. B. Alistar W)"
    : isSong ? "Songtitel" : "Name des Champions";
  input.setAttribute("aria-label", isAbilityAudio ? "Championname und Fähigkeitstaste" : isSong ? "Songtitel" : "Name des Champions");
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

  form.classList.add("quiz-actions");
  form.append(input, submitButton);
  dialogContent.append(
    createQuizStatus(progressText),
    createQuizBody(questionText, createQuizMedia([player], "audio")),
    form
  );
  input.focus();
}

function renderTextQuestion(question, questionIndex, progressText, questionText) {
  const quiz = QUIZZES[openDay];
  const timerDisplay = Number.isFinite(quiz.questionTimeLimit) ? document.createElement("p") : null;
  if (timerDisplay) {
    timerDisplay.className = "word-timer";
    timerDisplay.setAttribute("role", "timer");
  }

  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = question.scale ? "scale-input" : "word-input";
  input.type = question.scale ? "range" : "text";
  if (question.scale) {
    input.id = `scale-question-${questionIndex}`;
    input.min = String(question.scale.min);
    input.max = String(question.scale.max);
    input.step = "1";
    input.value = String(Math.ceil((question.scale.min + question.scale.max) / 2));
  }
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = question.scale ? "" : "Deine Antwort";
  input.setAttribute("aria-label", question.scale
    ? `Aufregung auf einer Skala von ${question.scale.min} bis ${question.scale.max}`
    : "Deine Antwort");
  let answerField = input;
  if (question.scale) {
    const scaleControl = document.createElement("div");
    scaleControl.className = "scale-control";
    const valueDisplay = document.createElement("output");
    valueDisplay.className = "scale-value";
    valueDisplay.htmlFor = input.id;
    valueDisplay.textContent = input.value;
    input.addEventListener("input", () => {
      valueDisplay.textContent = input.value;
    });
    const labels = document.createElement("div");
    labels.className = "scale-labels";
    const minimumLabel = document.createElement("span");
    minimumLabel.textContent = `${question.scale.min} – gar nicht`;
    const maximumLabel = document.createElement("span");
    maximumLabel.textContent = `${question.scale.max} – sehr`;
    labels.append(minimumLabel, maximumLabel);
    scaleControl.append(input, valueDisplay, labels);
    answerField = scaleControl;
  }
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

  form.classList.add("quiz-actions");
  form.append(answerField, submitButton);
  if (isEmojiOnly(questionText.textContent)) questionText.classList.add("question-text--emoji");
  dialogContent.append(
    createQuizStatus(progressText, timerDisplay),
    createQuizBody(createQuizMedia([questionText], "prompt")),
    form
  );
  if (timerDisplay) startWordTimer(questionIndex, timerDisplay, quiz.questionTimeLimit);
  input.focus();
}

function renderWhoAmIQuestion(question, questionIndex, progressText) {
  const answers = answersFor(openDay);
  const savedAnswer = answers[questionIndex];
  const clueIndex = Number.isInteger(savedAnswer?.clueIndex)
    ? Math.min(Math.max(savedAnswer.clueIndex, 0), question.clues.length - 1)
    : 0;

  const clues = document.createElement("ol");
  clues.className = "who-am-i-clues";
  clues.start = 1;
  question.clues.slice(0, clueIndex + 1).forEach((clue) => {
    const item = document.createElement("li");
    item.textContent = clue;
    clues.append(item);
  });

  const feedback = savedAnswer?.lastGuess
    ? document.createElement("p")
    : null;
  if (feedback) {
    feedback.className = "feedback incorrect";
    feedback.textContent = `„${savedAnswer.lastGuess}“ war leider nicht richtig. Hier kommt Hinweis ${clueIndex + 1}.`;
  }

  const form = document.createElement("form");
  form.className = "answers";
  const input = document.createElement("input");
  input.className = "word-input";
  input.type = "text";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Wer bin ich?";
  input.setAttribute("aria-label", "Gesuchte Person");

  const submitButton = document.createElement("button");
  submitButton.className = "primary-button";
  submitButton.type = "submit";
  submitButton.textContent = "Antwort prüfen";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const guess = input.value.trim();
    if (!guess) {
      input.focus();
      return;
    }

    const isCorrect = isCorrectAnswer(question, { guess });
    const nextClueIndex = isCorrect || clueIndex === question.clues.length - 1
      ? clueIndex
      : clueIndex + 1;
    const updatedAnswer = {
      clueIndex: nextClueIndex,
      guess,
      completed: isCorrect || clueIndex === question.clues.length - 1,
      points: isCorrect ? question.clues.length - clueIndex : 0
    };
    if (!updatedAnswer.completed) updatedAnswer.lastGuess = guess;
    answers[questionIndex] = updatedAnswer;
    progress[openDay] = answers;
    saveProgress();
    renderCalendar();

    if (updatedAnswer.completed) {
      dialogContent.replaceChildren();
      renderWhoAmIResolution(question, updatedAnswer, questionIndex);
    } else {
      renderQuestion();
    }
  });

  // Weiteren Hinweis aufdecken, ohne zu raten – die mögliche Punktzahl sinkt dabei wie bei einer falschen Antwort.
  const hasMoreClues = clueIndex < question.clues.length - 1;
  const hintButton = hasMoreClues ? createSecondaryButton("Weiterer Hinweis", "hint") : null;
  hintButton?.addEventListener("click", () => {
    const { lastGuess, ...currentAnswer } = answers[questionIndex] ?? {};
    answers[questionIndex] = { ...currentAnswer, clueIndex: clueIndex + 1, completed: false };
    progress[openDay] = answers;
    saveProgress();
    renderQuestion();
  });

  form.classList.add("quiz-actions");
  form.append(input, submitButton);
  dialogContent.append(
    createQuizStatus(progressText),
    createQuizBody(feedback, createQuizMedia([clues], "clues"), hintButton),
    form
  );
  input.focus();
}

function renderWhoAmIResolution(question, answer, questionIndex) {
  const quiz = QUIZZES[openDay];
  const isCorrect = isCorrectAnswer(question, answer);
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? `Richtig! +${answer.points} ${answer.points === 1 ? "Punkt" : "Punkte"}`
    : `Leider nicht ganz. Gesucht war „${question.answer}“.`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length
    ? "Ergebnis ansehen"
    : "Nächste Person";
  nextButton.addEventListener("click", renderQuestion);
  dialogContent.append(createQuizBody(createQuizAnswer([feedback])), createQuizActions(nextButton));
  nextButton.focus();
}

function startWordTimer(questionIndex, timerDisplay, durationSeconds = 30) {
  const timerKey = `${openDay}:${questionIndex}`;
  if (wordTimerKey !== timerKey) {
    clearInterval(wordTimer);
    wordTimerKey = timerKey;
    wordDeadline = Date.now() + durationSeconds * 1000;
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
  if (question.type === "audio" || question.type === "song" || question.type === "ability-audio") {
    renderAudioResolution(question, answer, isCorrect, questionIndex, quiz);
    return;
  }
  if (question.type === "text") {
    renderTextResolution(question, answer, isCorrect, timedOut, questionIndex, quiz);
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
  dialogContent.append(createQuizBody(createQuizAnswer([feedback])), createQuizActions(nextButton));
  nextButton.focus();
}

function renderTextResolution(question, answer, isCorrect, timedOut, questionIndex, quiz) {
  const feedback = document.createElement("p");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = timedOut
    ? "Die Zeit ist abgelaufen."
    : isCorrect
      ? `Richtig! +${question.points} ${question.points === 1 ? "Punkt" : "Punkte"}`
      : "Leider nicht richtig.";

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Richtige Antwort: ${question.answer}`;

  const submittedAnswer = timedOut ? null : document.createElement("p");
  if (submittedAnswer) {
    submittedAnswer.className = "image-quiz-submitted-answer";
    submittedAnswer.textContent = `Deine Antwort: ${answer}`;
  }

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(createQuizBody(createQuizAnswer([feedback, solution, submittedAnswer])), createQuizActions(nextButton));
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
  solution.textContent = question.type === "song"
    ? `Der Songtitel war: ${question.answer}`
    : question.type === "ability-audio"
      ? `Gesucht war: ${question.champion} ${question.answer}`
      : `Der Champion war: ${question.answer}`;

  const submittedAnswer = document.createElement("p");
  submittedAnswer.className = "image-quiz-submitted-answer";
  submittedAnswer.textContent = `Deine Antwort: ${answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(createQuizBody(createQuizAnswer([feedback, solution, submittedAnswer])), createQuizActions(nextButton));
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

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Lösung: ${question.answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  const submittedAnswer = !isCorrect && !timedOut && answer ? document.createElement("p") : null;
  if (submittedAnswer) {
    submittedAnswer.className = "image-quiz-submitted-answer";
    submittedAnswer.textContent = `Deine Antwort: ${answer}`;
  }
  if (question.revealImage) {
    const image = createZoomableImage({
      src: question.revealImage,
      alt: `${question.answer} im vollständigen Bild`,
      className: "image-quiz-image image-quiz-image--reveal"
    });
    dialogContent.append(createQuizBody(
      createQuizAnswer([feedback]),
      createQuizMedia([image], "image"),
      createQuizAnswer([solution, submittedAnswer])
    ));
  } else {
    dialogContent.append(createQuizBody(createQuizAnswer([feedback, solution, submittedAnswer])));
  }
  dialogContent.append(createQuizActions(nextButton));
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
  const explanation = question.explanation ? document.createElement("p") : null;
  if (explanation) {
    explanation.className = "true-false-explanation";
    explanation.textContent = question.explanation;
  }
  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);
  const answerTarget = dialogContent.querySelector(".choice-card")
    ?? dialogContent.querySelector(".quiz-body")
    ?? dialogContent;
  answerTarget.append(createQuizAnswer([feedback, explanation]));
  dialogContent.append(createQuizActions(nextButton));
  nextButton.focus();
}

function renderResult() {
  const quiz = QUIZZES[openDay];
  dialogContent.replaceChildren();
  setDialogView("stage");
  if (RANKING_CONFIGS[quiz.type]) {
    renderRankingResult();
    return;
  }
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
  summary.className = `answer-summary${quiz.questions.length > 20 ? " answer-summary--dense" : ""}`;

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
    questionLabel.textContent = quiz.type === "live"
      ? question.year ?? question.question
      : quiz.type === "who-am-i"
      ? `Person ${questionIndex + 1}`
      : `Frage ${questionIndex + 1}`;

    const userAnswer = quiz.type === "who-am-i"
      ? answer?.guess?.trim() || "Keine Antwort"
      : question.type === "word" || question.type === "image" || question.type === "audio" || question.type === "text" || typeof question.answer === "string"
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

function renderRankingResult() {
  const quizType = QUIZZES[openDay].type;
  const config = RANKING_CONFIGS[quizType];
  const state = rankingStateFor(answersFor(openDay), quizType);
  const result = document.createElement("div");
  result.className = "result-card";
  const heading = document.createElement("p");
  heading.className = "result-heading";
  heading.textContent = state.placed.length === config.people.length
    ? "Perfekt eingeordnet!"
    : "Quiz abgeschlossen!";
  const points = document.createElement("strong");
  points.className = "result-points";
  points.textContent = `${state.placed.length} von ${config.people.length} richtig · ${pointsFor(openDay)} Punkte`;
  const message = document.createElement("p");
  message.className = "ranking-result-message";
  message.textContent = state.lives === 0
    ? "Deine fünf Leben sind aufgebraucht."
    : config.completedMessage;
  const summaryHeading = document.createElement("h3");
  summaryHeading.className = "summary-heading";
  summaryHeading.textContent = "Die vollständige Reihenfolge";
  const summary = document.createElement("ol");
  summary.className = "ranking-result-list";
  [...config.people, config.anchor]
    .sort((first, second) => config.getValue(first) - config.getValue(second))
    .forEach((person) => {
    const item = document.createElement("li");
    const image = createZoomableImage({ src: person.image, name: person.name });
    const name = document.createElement("span");
    name.textContent = person.name;
    const value = document.createElement("strong");
    value.textContent = config.getDisplayValue(person);
    item.append(image, name, value);
    summary.append(item);
  });
  result.append(heading, points, message, summaryHeading, summary);
  dialogContent.replaceChildren(result);
}

function closeDialog() {
  clearTimeout(wealthFeedbackTimer);
  wealthFeedbackTimer = null;
  wealthFeedback = null;
  selectedWealthPersonId = null;
  clearInterval(wordTimer);
  wordTimer = null;
  clearInterval(liveQuizInterval);
  liveQuizInterval = null;
  activeAudio?.pause();
  activeAudio = null;
  closeLightbox();
  overlay.hidden = true;
  document.body.classList.remove("dialog-open");
  dialogPanel.classList.remove("dialog--ranking-quiz", "dialog--wide", "dialog--stage", "dialog--intro");
  dialogContent.style.removeProperty("--fit");
  openDay = null;
}

closeDialogButton.addEventListener("click", closeDialog);
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeDialog();
});
lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (closeLightbox()) return;
  if (!overlay.hidden) closeDialog();
});

new MutationObserver((mutations) => {
  const onlyTimerChanged = mutations.every((mutation) => {
    const element = mutation.target instanceof Element ? mutation.target : mutation.target.parentElement;
    return Boolean(element?.closest("[role='timer']"));
  });
  if (!onlyTimerChanged) scheduleStageFit();
}).observe(dialogContent, { childList: true, subtree: true });
new ResizeObserver(scheduleStageFit).observe(dialogPanel);
dialogContent.addEventListener("load", scheduleStageFit, true);
document.fonts?.ready.then(scheduleStageFit);

renderCalendar();

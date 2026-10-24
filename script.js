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
    audioPrompt: "Welcher Champion ist in seiner Laugh-Voiceline zu hören?",
    audioDescription: "Erkenne die Champions an ihrem Laugh. Jede Audiodatei kannst du bis zu 3-mal abspielen. Für jede richtige Antwort bekommst du Punkte.",
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
    textDescription: "Erkenne Filme, Anime und Serien anhand der Emojis. Du hast pro Frage 30 Sekunden Zeit. Gib den gesuchten Titel ein. Für jede richtige Antwort bekommst du Punkte.",
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
    for (const dayIndex of [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14]) {
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
  const answeredCount = quiz.questions.reduce((count, question, index) => (
    count + (isQuestionComplete(question, answers[index]) ? 1 : 0)
  ), 0);
  const hasProgress = quiz.questions.some((_, index) => Object.hasOwn(answers, index));
  dialogContent.replaceChildren();

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
  if (quiz.type === "who-am-i") {
    description.textContent = "Errate die gesuchte Person anhand von bis zu drei Hinweisen. Für eine richtige Antwort beim ersten Hinweis gibt es 3 Punkte, beim zweiten 2 und beim dritten 1 Punkt. Ohne richtige Antwort gibt es 0 Punkte. Es gibt kein Zeitlimit; Groß- und Kleinschreibung sowie Leerzeichen werden ignoriert.";
  } else if (quiz.questions[0].type === "word") {
    description.textContent = `In diesem Quiz warten ${quiz.questions.length} Buchstabensalate auf dich. Entwirre die Buchstaben und gib das richtige Wort ein. Für jedes Wort hast du 30 Sekunden Zeit und für jede richtige Lösung bekommst du Punkte.`;
  } else if (quiz.questions[0].type === "image") {
    const subject = quiz.imagePrompt
      ? "Erkenne die Fähigkeiten auf den Bildern und gib ihre Namen ein."
      : "Erkenne die Champions auf den Bildern und gib ihre Namen ein.";
    description.textContent = quiz.timeLimit === false
      ? `${subject} Für jede richtige Antwort bekommst du Punkte.`
      : `${subject} Pro Bild hast du 30 Sekunden Zeit. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.questions[0].type === "audio") {
    description.textContent = quiz.audioDescription
      ?? `Erkenne die Champions an ihrer Voiceline. Jede Audiodatei kannst du bis zu 3-mal abspielen. Gib danach den Namen des Champions ein. Für jede richtige Antwort bekommst du Punkte.`;
  } else if (quiz.abilityAudioQuiz) {
    description.textContent = "Höre dir den Fähigkeitssound an und gib den Championnamen zusammen mit Q, W, E oder R ein. Jede Audiodatei kannst du bis zu 3-mal abspielen. Für jede richtige Antwort bekommst du Punkte.";
  } else if (quiz.questions[0].type === "song") {
    description.textContent = `Höre dir den Song an und errate den Titel. Du kannst die Audiodatei bis zu 3-mal abspielen. Für die richtige Antwort bekommst du Punkte.`;
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
  if (quiz.type === "live") {
    renderLiveQuiz();
    return;
  }

  const answers = answersFor(openDay);
  const questionIndex = quiz.questions.findIndex((question, index) => (
    !isQuestionComplete(question, answers[index])
  ));
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
  list.className = `live-quiz-list${quiz.liveLayout === "movie-list" ? " live-quiz-list--movie" : ""}`;
  const movieColumns = quiz.liveLayout === "movie-list"
    ? Array.from({ length: 2 }, () => {
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
        input.focus();
        return;
      }

      const currentAnswers = answersFor(openDay);
      currentAnswers[questionIndex] = answer;
      progress[openDay] = currentAnswers;
      if (quiz.correctAnswerColor === "green") input.value = question.answer;
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
    if (movieColumns) {
      const columnIndex = questionIndex < Math.ceil(quiz.questions.length / 2) ? 0 : 1;
      movieColumns[columnIndex].append(row);
    } else {
      list.append(row);
    }
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
  image.alt = quiz.imageAlt ?? "Bild zum Erraten";

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

  form.append(input, submitButton);
  dialogContent.append(progressText, image, questionText);
  if (timerDisplay) dialogContent.append(timerDisplay);
  dialogContent.append(form);
  if (timerDisplay) startWordTimer(questionIndex, timerDisplay);
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

  form.append(input, submitButton);
  dialogContent.append(progressText, questionText, player, form);
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
  dialogContent.append(progressText, questionText);
  if (timerDisplay) dialogContent.append(timerDisplay);
  dialogContent.append(form);
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

  form.append(input, submitButton);
  dialogContent.append(progressText);
  if (feedback) dialogContent.append(feedback);
  dialogContent.append(clues, form);
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
  dialogContent.append(feedback, nextButton);
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
  dialogContent.append(feedback, nextButton);
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

  dialogContent.append(feedback, solution);
  if (submittedAnswer) dialogContent.append(submittedAnswer);
  dialogContent.append(nextButton);
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

  const solution = document.createElement("p");
  solution.className = "image-quiz-solution";
  solution.textContent = `Lösung: ${question.answer}`;

  const nextButton = document.createElement("button");
  nextButton.className = "primary-button";
  nextButton.type = "button";
  nextButton.textContent = questionIndex + 1 === quiz.questions.length ? "Ergebnis ansehen" : "Nächste Frage";
  nextButton.addEventListener("click", renderQuestion);

  dialogContent.append(feedback);
  if (question.revealImage) {
    const image = document.createElement("img");
    image.className = "image-quiz-image image-quiz-image--reveal";
    image.src = question.revealImage;
    image.alt = `${question.answer} im vollständigen Bild`;
    dialogContent.append(image);
  }
  dialogContent.append(solution);
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

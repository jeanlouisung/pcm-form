import { Personality, PcmQuestion } from "../models/pcm.model";

export const PCM_FORM: PcmQuestion[] = [
  // --- BLOC 1 : BASE (Questions 1 à 10) ---
  {
    id: 'base1',
    question: "Un client arrive à l'improviste avec une boîte à chaussures remplie de factures en vrac. Quelle est votre réaction intérieure ?",
    answers: [
      { id: 'base1-anal', label: "C'est inefficace, je vais devoir tout replanifier pour intégrer ce temps de saisie.", type: Personality.ANALYSEUR },
      { id: 'base1-empa', label: "Le pauvre, il a l'air dépassé par sa gestion, je vais prendre le temps de le rassurer.", type: Personality.EMPATHIQUE },
      { id: 'base1-pers', label: "C'est inadmissible, un tel manque de rigueur est un manque de respect pour notre travail.", type: Personality.PERSÉVÉRANT },
      { id: 'base1-rebe', label: "C'est un sacré bazar ! Allez, on va en rire un coup, ça fera une anecdote pour le café.", type: Personality.REBELLE },
      { id: 'base1-prom', label: "Pas de souci, on va traiter ça en urgence, lui facturer la prestation et passer au dossier suivant.", type: Personality.PROMOTEUR },
      { id: 'base1-imag', label: "Je récupère le dossier calmement, sans commentaire, et je commencerai l'analyse plus tard au calme.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'base2',
    question: "En pleine période fiscale, avec des journées de 12 heures, qu'est-ce qui vous aide vraiment à tenir ?",
    answers: [
      { id: 'base2-empa', label: "L'ambiance solidaire dans l'équipe et les moments de partage pour décompresser ensemble.", type: Personality.EMPATHIQUE },
      { id: 'base2-pers', label: "La fierté d'accomplir mon devoir et de rester fidèle à mes engagements envers les clients.", type: Personality.PERSÉVÉRANT },
      { id: 'base2-rebe', label: "Les échanges spontanés, l'humour entre collègues et la créativité pour gérer l'imprévu.", type: Personality.REBELLE },
      { id: 'base2-prom', label: "L'adrénaline des dernières minutes et le défi de boucler des dossiers complexes en un temps record.", type: Personality.PROMOTEUR },
      { id: 'base2-imag', label: "Les moments de calme absolu, tôt le matin ou tard le soir, quand je peux enfin me concentrer seul.", type: Personality.IMAGINEUR },
      { id: 'base2-anal', label: "La satisfaction de voir les liasses sortir les unes après les autres sans erreur.", type: Personality.ANALYSEUR }
    ]
  },
  {
    id: 'base3',
    question: "Lors d'un premier rendez-vous avec un prospect important, sur quoi comptez-vous pour le convaincre ?",
    answers: [
      { id: 'base3-pers', label: "La solidité de vos principes éthiques et votre réputation de sérieux dans la profession.", type: Personality.PERSÉVÉRANT },
      { id: 'base3-rebe', label: "Votre énergie, votre enthousiasme communicatif et votre approche originale du métier.", type: Personality.REBELLE },
      { id: 'base3-prom', label: "Votre réactivité, votre réseau et votre promesse d'apporter des solutions business concrètes.", type: Personality.PROMOTEUR },
      { id: 'base3-imag', label: "Votre calme olympien, votre discrétion et votre capacité à observer avant de parler.", type: Personality.IMAGINEUR },
      { id: 'base3-anal', label: "La précision de votre exposé technique, vos chiffres et votre méthodologie claire.", type: Personality.ANALYSEUR },
      { id: 'base3-empa', label: "Votre capacité d'écoute et votre chaleur humaine pour instaurer une relation de confiance.", type: Personality.EMPATHIQUE }
    ]
  },
  {
    id: 'base4',
    question: "Vous déléguez une mission importante à un collaborateur. Comment vous y prenez-vous ?",
    answers: [
      { id: 'base4-rebe', label: "En présentant le dossier comme un défi stimulant ou un 'cas d'école' un peu spécial.", type: Personality.REBELLE },
      { id: 'base4-prom', label: "En lui donnant l'objectif global et en le laissant se débrouiller pour obtenir le résultat.", type: Personality.PROMOTEUR },
      { id: 'base4-imag', label: "En lui remettant les documents nécessaires et en le laissant revenir vers moi s'il a une question.", type: Personality.IMAGINEUR },
      { id: 'base4-anal', label: "En détaillant les étapes logiques et en fixant une échéance précise pour le rendu.", type: Personality.ANALYSEUR },
      { id: 'base4-empa', label: "En m'assurant qu'il se sent à l'aise avec la tâche et en lui proposant mon aide s'il en a besoin.", type: Personality.EMPATHIQUE },
      { id: 'base4-pers', label: "En insistant sur l'importance cruciale de ce dossier pour l'image et les valeurs du cabinet.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'base5',
    question: "Si on demandait à vos anciens profils ou collègues de vous décrire enfant, ils diraient :",
    answers: [
      { id: 'base5-prom', label: "C'était un enfant débrouillard, qui n'avait peur de rien et aimait l'aventure.", type: Personality.PROMOTEUR },
      { id: 'base5-imag', label: "C'était un enfant calme, rêveur, qui aimait beaucoup être seul dans ses pensées.", type: Personality.IMAGINEUR },
      { id: 'base5-anal', label: "C'était un enfant appliqué, très organisé et déjà très logique.", type: Personality.ANALYSEUR },
      { id: 'base5-empa', label: "C'était un enfant doux, très sensible aux autres et particulièrement affectueux.", type: Personality.EMPATHIQUE },
      { id: 'base5-pers', label: "C'était un enfant sérieux, investi, qui défendait toujours ses idées.", type: Personality.PERSÉVÉRANT },
      { id: 'base5-rebe', label: "C'était un enfant vif, plein d'imagination, qui aimait surtout s'amuser.", type: Personality.REBELLE }
    ]
  },
  {
    id: 'base6',
    question: "Comment est organisé votre espace de travail personnel ?",
    answers: [
      { id: 'base6-imag', label: "C'est un espace très sobre, presque minimaliste, sans stimulations inutiles.", type: Personality.IMAGINEUR },
      { id: 'base6-anal', label: "Tout est rangé, étiqueté et fonctionnel. Rien ne dépasse.", type: Personality.ANALYSEUR },
      { id: 'base6-empa', label: "C'est un cocon avec des photos, des souvenirs et peut-être une plante verte.", type: Personality.EMPATHIQUE },
      { id: 'base6-pers', label: "C'est un lieu qui inspire la confiance avec des diplômes ou des objets de valeur.", type: Personality.PERSÉVÉRANT },
      { id: 'base6-rebe', label: "C'est un bureau vivant, un peu désordonné, avec des objets colorés ou originaux.", type: Personality.REBELLE },
      { id: 'base6-prom', label: "C'est un bureau moderne, épuré, avec les dernières technologies à portée de main.", type: Personality.PROMOTEUR }
    ]
  },
  {
    id: 'base7',
    question: "Une nouvelle loi de finances complexe vient d'être publiée. Quelle est votre attitude ?",
    answers: [
      { id: 'base7-anal', label: "Je m'isole pour en faire une synthèse logique et structurée pour le cabinet.", type: Personality.ANALYSEUR },
      { id: 'base7-pers', label: "Je m'interroge sur la justice de cette loi et son impact moral pour mes clients.", type: Personality.PERSÉVÉRANT },
      { id: 'base7-imag', label: "Je prends le temps de lire et de laisser les informations décanter tranquillement.", type: Personality.IMAGINEUR },
      { id: 'base7-prom', label: "Je cherche immédiatement l'opportunité de business ou le conseil stratégique à vendre.", type: Personality.PROMOTEUR },
      { id: 'base7-empa', label: "Je réfléchis à comment l'expliquer simplement pour ne pas inquiéter les clients.", type: Personality.EMPATHIQUE },
      { id: 'base7-rebe', label: "Je peste contre la lourdeur administrative mais je cherche un moyen fun de l'appliquer.", type: Personality.REBELLE }
    ]
  },
  {
    id: 'base8',
    question: "Pour vous, une communication réussie avec un partenaire, c'est avant tout :",
    answers: [
      { id: 'base8-empa', label: "Un moment de partage sincère, chaleureux et bienveillant.", type: Personality.EMPATHIQUE },
      { id: 'base8-rebe', label: "Un échange dynamique, réactif, rempli d'humour et de rebondissements.", type: Personality.REBELLE },
      { id: 'base8-prom', label: "Une discussion directe qui mène à une action ou une décision immédiate.", type: Personality.PROMOTEUR },
      { id: 'base8-imag', label: "Un moment de réflexion calme et posé, sans pression inutile.", type: Personality.IMAGINEUR },
      { id: 'base8-anal', label: "Un échange de faits, de données et d'informations précises.", type: Personality.ANALYSEUR },
      { id: 'base8-pers', label: "Un partage de points de vue, de convictions et de jugements de valeur.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'base9',
    question: "En réunion d'associés, qu'est-ce qui retient le plus votre attention ?",
    answers: [
      { id: 'base9-rebe', label: "Les idées neuves, les projets créatifs et l'enthousiasme général.", type: Personality.REBELLE },
      { id: 'base9-prom', label: "Les projets qui bougent et la rapidité avec laquelle on tranche les problèmes.", type: Personality.PROMOTEUR },
      { id: 'base9-imag', label: "L'observation des non-dits et l'analyse globale de la situation.", type: Personality.IMAGINEUR },
      { id: 'base9-anal', label: "Le respect de l'ordre du jour et l'efficacité des échanges.", type: Personality.ANALYSEUR },
      { id: 'base9-empa', label: "La météo intérieure de chacun et la cohésion du groupe.", type: Personality.EMPATHIQUE },
      { id: 'base9-pers', label: "La fidélité de nos décisions par rapport à la vision du cabinet.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'base10',
    question: "Comment gérez-vous votre emploi du temps au quotidien ?",
    answers: [
      { id: 'base10-prom', label: "Je gère à l'instinct, je traite ce qui est urgent et ce qui me stimule.", type: Personality.PROMOTEUR },
      { id: 'base10-rebe', label: "Je fuis la routine, j'ai besoin de changer d'activité régulièrement.", type: Personality.REBELLE },
      { id: 'base10-imag', label: "J'ai besoin de longs moments de solitude pour avancer sur mes dossiers de fond.", type: Personality.IMAGINEUR },
      { id: 'base10-anal', label: "J'utilise des outils de planification précis et je déteste les imprévus.", type: Personality.ANALYSEUR },
      { id: 'base10-empa', label: "Mon agenda est souple, je privilégie l'humain et l'aide aux autres.", type: Personality.EMPATHIQUE },
      { id: 'base10-pers', label: "Je priorise mes tâches en fonction de mes responsabilités et engagements.", type: Personality.PERSÉVÉRANT }
    ]
  },

  // --- BLOC 2 : ENERGY / ÉTAGES (Questions 11 à 20) ---
  {
    id: 'energy11',
    question: "Pour vous, quel est le profil du 'collaborateur idéal' ?",
    answers: [
      { id: 'energy11-imag', label: "Quelqu'un de calme, qui sait s'effacer et réfléchir avant d'agir.", type: Personality.IMAGINEUR },
      { id: 'energy11-anal', label: "Quelqu'un d'organisé, qui sait gérer son temps et qui est rigoureux.", type: Personality.ANALYSEUR },
      { id: 'energy11-empa', label: "Quelqu'un d'agréable, qui sait écouter et qui favorise l'entente.", type: Personality.EMPATHIQUE },
      { id: 'energy11-pers', label: "Quelqu'un de loyal, sur qui on peut compter et qui partage nos valeurs.", type: Personality.PERSÉVÉRANT },
      { id: 'energy11-rebe', label: "Quelqu'un de spontané, qui apporte de la fraîcheur et des idées neuves.", type: Personality.REBELLE },
      { id: 'energy11-prom', label: "Quelqu'un de fonceur, qui n'a pas besoin qu'on lui tienne la main.", type: Personality.PROMOTEUR }
    ]
  },
  {
    id: 'energy12',
    question: "Votre logiciel de production comptable plante. Que faites-vous ?",
    answers: [
      { id: 'energy12-rebe', label: "Je soupire bruyamment et je lance une petite pique sur l'inutilité de l'informatique.", type: Personality.REBELLE },
      { id: 'energy12-prom', label: "Je trouve une solution de contournement immédiate pour ne pas perdre ma journée.", type: Personality.PROMOTEUR },
      { id: 'energy12-imag', label: "Je reste imperturbable et j'attends tranquillement que le système redémarre.", type: Personality.IMAGINEUR },
      { id: 'energy12-anal', label: "Je cherche calmement la cause logique du bug pour essayer de le résoudre.", type: Personality.ANALYSEUR },
      { id: 'energy12-empa', label: "Je me sens un peu désolé pour l'équipe qui va subir ce retard.", type: Personality.EMPATHIQUE },
      { id: 'energy12-pers', label: "Je juge l'incompétence de l'éditeur du logiciel qui nous fait perdre du temps.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'energy13',
    question: "Qu'est-ce qui vous rend vraiment fier après une longue journée au cabinet ?",
    answers: [
      { id: 'energy13-prom', label: "Avoir conclu une affaire difficile ou avoir relevé un défi de taille.", type: Personality.PROMOTEUR },
      { id: 'energy13-imag', label: "Avoir pu avancer sereinement sur une analyse complexe sans être dérangé.", type: Personality.IMAGINEUR },
      { id: 'energy13-anal', label: "Avoir terminé tout ce que j'avais planifié avec une grande précision.", type: Personality.ANALYSEUR },
      { id: 'energy13-empa', label: "Avoir pu aider un client ou un collègue et sentir leur reconnaissance.", type: Personality.EMPATHIQUE },
      { id: 'energy13-pers', label: "Avoir agi avec intégrité et avoir été à la hauteur de mes responsabilités.", type: Personality.PERSÉVÉRANT },
      { id: 'energy13-rebe', label: "Avoir passé une journée animée, pleine de contacts et de bonne humeur.", type: Personality.REBELLE }
    ]
  },
  {
    id: 'energy14',
    question: "Face à une transformation numérique majeure du cabinet, quelle est votre réaction ?",
    answers: [
      { id: 'energy14-anal', label: "J'analyse froidement le ratio coût/bénéfice et l'impact sur l'organisation.", type: Personality.ANALYSEUR },
      { id: 'energy14-empa', label: "Je m'inquiète de savoir si tout le monde va réussir à s'adapter sans stress.", type: Personality.EMPATHIQUE },
      { id: 'energy14-pers', label: "Je m'assure que ce changement respecte l'éthique et l'image du cabinet.", type: Personality.PERSÉVÉRANT },
      { id: 'energy14-rebe', label: "Je suis impatient de tester les nouveaux outils, surtout s'ils sont ludiques.", type: Personality.REBELLE },
      { id: 'energy14-prom', label: "Je fonce, c'est l'occasion de prendre une longueur d'avance sur la concurrence.", type: Personality.PROMOTEUR },
      { id: 'energy14-imag', label: "Je regarde la transition se faire de loin et j'attends d'avoir mon propre espace.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'energy15',
    question: "Quand vous êtes vraiment fatigué, quel comportement adoptez-vous ?",
    answers: [
      { id: 'energy15-empa', label: "Je perds mes moyens, je fais des erreurs bêtes et je m'excuse tout le temps.", type: Personality.EMPATHIQUE },
      { id: 'energy15-pers', label: "Je deviens critique envers les autres et je lance des débats d'opinions sans fin.", type: Personality.PERSÉVÉRANT },
      { id: 'energy15-rebe', label: "Je râle contre tout le monde, je cherche un coupable et je me plains.", type: Personality.REBELLE },
      { id: 'energy15-prom', label: "Je commence à manipuler un peu les faits ou les gens pour arriver à mes fins.", type: Personality.PROMOTEUR },
      { id: 'energy15-imag', label: "Je me mure dans le silence, je ne réponds plus et je m'isole.", type: Personality.IMAGINEUR },
      { id: 'energy15-anal', label: "Je deviens hyper-exigeant, je pinaille sur chaque détail et je veux tout contrôler.", type: Personality.ANALYSEUR }
    ]
  },
  {
    id: 'energy16',
    question: "Quel trait de caractère vous insupporte le plus chez vos interlocuteurs ?",
    answers: [
      { id: 'energy16-pers', label: "Le manque de principes, la légèreté excessive et l'hypocrisie.", type: Personality.PERSÉVÉRANT },
      { id: 'energy16-rebe', label: "L'ennui, la rigidité d'esprit et l'absence totale de second degré.", type: Personality.REBELLE },
      { id: 'energy16-prom', label: "La lenteur de décision, la passivité et le manque d'ambition.", type: Personality.PROMOTEUR },
      { id: 'energy16-imag', label: "L'agitation permanente, le bruit inutile et l'invasion de mon espace.", type: Personality.IMAGINEUR },
      { id: 'energy16-anal', label: "Le manque de sérieux, le désordre et l'incapacité à être clair.", type: Personality.ANALYSEUR },
      { id: 'energy16-empa', label: "La froideur, l'absence de sentiments et le manque de savoir-vivre.", type: Personality.EMPATHIQUE }
    ]
  },
  {
    id: 'energy17',
    question: "Dans un conflit tendu avec un associé, quel est votre mode de défense habituel ?",
    answers: [
      { id: 'energy17-rebe', label: "J'utilise l'ironie, je provoque un peu ou je rejette la faute sur les autres.", type: Personality.REBELLE },
      { id: 'energy17-prom', label: "Je monte le ton, je montre que je suis le plus fort ou je quitte la pièce.", type: Personality.PROMOTEUR },
      { id: 'energy17-imag', label: "Je m'efface totalement de la discussion en attendant que l'orage passe.", type: Personality.IMAGINEUR },
      { id: 'energy17-anal', label: "Je deviens froid, je pose des questions fermées et je démonte sa logique.", type: Personality.ANALYSEUR },
      { id: 'energy17-empa', label: "Je me sens blessé, je me justifie maladroitement pour calmer le jeu.", type: Personality.EMPATHIQUE },
      { id: 'energy17-pers', label: "Je lui explique ses torts et j'essaie de prouver que mes valeurs sont plus justes.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'energy18',
    question: "Pour vous, quel serait le week-end idéal pour recharger les batteries ?",
    answers: [
      { id: 'energy18-prom', label: "Un week-end actif : sport intense, compétition ou aventure forte.", type: Personality.PROMOTEUR },
      { id: 'energy18-imag', label: "Un week-end de déconnexion totale, seul ou en forêt, loin de tout.", type: Personality.IMAGINEUR },
      { id: 'energy18-anal', label: "Un week-end utile où j'avance sur mes projets personnels efficacement.", type: Personality.ANALYSEUR },
      { id: 'energy18-empa', label: "Un week-end entouré de mes proches, avec douceur et partage.", type: Personality.EMPATHIQUE },
      { id: 'energy18-pers', label: "Un week-end dédié à une passion ou une cause qui me tient à cœur.", type: Personality.PERSÉVÉRANT },
      { id: 'energy18-rebe', label: "Un week-end improvisé à la dernière minute, avec des activités fun.", type: Personality.REBELLE }
    ]
  },
  {
    id: 'energy19',
    question: "Si vous deviez choisir un mantra pour votre vie professionnelle actuelle :",
    answers: [
      { id: 'energy19-anal', label: "La réussite est le fruit de la méthode et de la persévérance.", type: Personality.ANALYSEUR },
      { id: 'energy19-empa', label: "Seul on va plus vite, ensemble on va plus loin.", type: Personality.EMPATHIQUE },
      { id: 'energy19-pers', label: "La confiance est le ciment de toute relation durable.", type: Personality.PERSÉVÉRANT },
      { id: 'energy19-rebe', label: "Le travail ne doit jamais devenir une corvée.", type: Personality.REBELLE },
      { id: 'energy19-prom', label: "Il n'y a pas de problèmes, il n'y a que des solutions.", type: Personality.PROMOTEUR },
      { id: 'energy19-imag', label: "Le calme est la forme suprême de la force.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'energy20',
    question: "En un mot, qu'est-ce qui vous fait vous lever le matin en ce moment ?",
    answers: [
      { id: 'energy20-imag', label: "La Sérénité.", type: Personality.IMAGINEUR },
      { id: 'energy20-anal', label: "La Compétence.", type: Personality.ANALYSEUR },
      { id: 'energy20-empa', label: "L'Appartenance.", type: Personality.EMPATHIQUE },
      { id: 'energy20-pers', label: "La Conviction.", type: Personality.PERSÉVÉRANT },
      { id: 'energy20-rebe', label: "La Créativité.", type: Personality.REBELLE },
      { id: 'energy20-prom', label: "L'Action.", type: Personality.PROMOTEUR }
    ]
  },

  // --- BLOC 3 : PHASE (Questions 21 à 30) ---
  {
    id: 'phase21',
    question: "On vous propose de superviser la digitalisation du cabinet. Qu'est-ce qui vous attire ?",
    answers: [
      { id: 'phase21-anal', label: "Mettre en place un système logique, efficace et parfaitement ordonné.", type: Personality.ANALYSEUR },
      { id: 'phase21-pers', label: "Renforcer la qualité de notre service et nos valeurs de rigueur.", type: Personality.PERSÉVÉRANT },
      { id: 'phase21-empa', label: "Créer des outils plus simples pour soulager l'équipe et l'ambiance.", type: Personality.EMPATHIQUE },
      { id: 'phase21-prom', label: "Mener cette transition tambour battant et voir des résultats rapides.", type: Personality.PROMOTEUR },
      { id: 'phase21-rebe', label: "Découvrir de nouveaux outils innovants, fun et interactifs.", type: Personality.REBELLE },
      { id: 'phase21-imag', label: "Repenser l'architecture du travail de manière calme et approfondie.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'phase22',
    question: "Comment réagissez-vous si un client historique part sans explications ?",
    answers: [
      { id: 'phase22-pers', label: "Je suis déçu par ce manque de loyauté et de reconnaissance pour mon dévouement.", type: Personality.PERSÉVÉRANT },
      { id: 'phase22-empa', label: "Je me demande si j'ai fait une erreur et je me sens personnellement touché.", type: Personality.EMPATHIQUE },
      { id: 'phase22-anal', label: "Je cherche à comprendre rationnellement les causes pour analyser l'échec.", type: Personality.ANALYSEUR },
      { id: 'phase22-prom', label: "Je tourne vite la page et je lance une nouvelle action de prospection.", type: Personality.PROMOTEUR },
      { id: 'phase22-rebe', label: "C'est l'occasion de renouveler le portefeuille avec des clients plus sympas.", type: Personality.REBELLE },
      { id: 'phase22-imag', label: "J'accueille la nouvelle avec détachement et réfléchis à la suite en silence.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'phase23',
    question: "Lors d'une formation professionnelle, quel style préférez-vous ?",
    answers: [
      { id: 'phase23-empa', label: "Un format interactif avec beaucoup d'échanges humains et de bienveillance.", type: Personality.EMPATHIQUE },
      { id: 'phase23-anal', label: "Un exposé structuré, riche en données techniques et faits vérifiables.", type: Personality.ANALYSEUR },
      { id: 'phase23-pers', label: "Un intervenant avec des convictions fortes qui suscite le débat.", type: Personality.PERSÉVÉRANT },
      { id: 'phase23-prom', label: "Une méthode active avec des études de cas et des résultats immédiats.", type: Personality.PROMOTEUR },
      { id: 'phase23-rebe', label: "Une approche ludique, dynamique, avec beaucoup de visuels et d'énergie.", type: Personality.REBELLE },
      { id: 'phase23-imag', label: "Un format calme, qui laisse du temps à la réflexion personnelle.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'phase24',
    question: "Un collaborateur fait une erreur répétitive. Comment gérez-vous le recadrage ?",
    answers: [
      { id: 'phase24-anal', label: "Je lui montre la procédure à nouveau et fixe un point de contrôle.", type: Personality.ANALYSEUR },
      { id: 'phase24-empa', label: "Je cherche d'abord à savoir s'il a des problèmes ou s'il se sent mal.", type: Personality.EMPATHIQUE },
      { id: 'phase24-pers', label: "Je lui rappelle l'importance de son engagement envers le cabinet.", type: Personality.PERSÉVÉRANT },
      { id: 'phase24-prom', label: "Je lui demande de trouver une solution tout de suite et de régler ça.", type: Personality.PROMOTEUR },
      { id: 'phase24-rebe', label: "Je dédramatise tout en lui lançant un petit défi pour s'améliorer.", type: Personality.REBELLE },
      { id: 'phase24-imag', label: "Je lui donne un document explicatif et j'attends ses questions.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'phase25',
    question: "Quelle est votre réaction face à une période de calme (hors rush) ?",
    answers: [
      { id: 'phase25-rebe', label: "Je cherche de nouvelles idées ou j'organise un événement interne.", type: Personality.REBELLE },
      { id: 'phase25-prom', label: "J'en profite pour prospecter de nouveaux marchés ou relever des défis.", type: Personality.PROMOTEUR },
      { id: 'phase25-imag', label: "Je savoure ce temps pour réfléchir ou travailler sans aucune pression.", type: Personality.IMAGINEUR },
      { id: 'phase25-anal', label: "Je mets à jour mes dossiers, mes archives et mon organisation.", type: Personality.ANALYSEUR },
      { id: 'phase25-empa', label: "Je passe plus de temps à discuter et à soigner les relations humaines.", type: Personality.EMPATHIQUE },
      { id: 'phase25-pers', label: "Je m'investis dans des projets de fond qui ont du sens pour moi.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'phase26',
    question: "Comment réagissez-vous face à un changement brusque de direction au cabinet ?",
    answers: [
      { id: 'phase26-prom', label: "Je regarde comment je peux me positionner pour tirer profit de la situation.", type: Personality.PROMOTEUR },
      { id: 'phase26-rebe', label: "Je me dis que ça va amener de la nouveauté et du mouvement, c'est bien.", type: Personality.REBELLE },
      { id: 'phase26-imag', label: "Je reste en retrait et j'observe les mouvements avant de me prononcer.", type: Personality.IMAGINEUR },
      { id: 'phase26-anal', label: "Je demande à voir le nouveau plan d'action et les justifications logiques.", type: Personality.ANALYSEUR },
      { id: 'phase26-empa', label: "Je m'inquiète de l'impact émotionnel sur l'unité de l'équipe.", type: Personality.EMPATHIQUE },
      { id: 'phase26-pers', label: "J'analyse si cette nouvelle direction est en accord avec mes valeurs.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'phase27',
    question: "Si vous deviez choisir une activité de Team Building pour le cabinet :",
    answers: [
      { id: 'phase27-anal', label: "Un escape-game qui demande de la logique et de l'organisation.", type: Personality.ANALYSEUR },
      { id: 'phase27-empa', label: "Un repas convivial ou un atelier cuisine pour partager ensemble.", type: Personality.EMPATHIQUE },
      { id: 'phase27-pers', label: "Une conférence inspirante sur l'éthique ou une action caritative.", type: Personality.PERSÉVÉRANT },
      { id: 'phase27-rebe', label: "Une activité créative, comme une impro théâtrale ou de la peinture.", type: Personality.REBELLE },
      { id: 'phase27-prom', label: "Un challenge sportif ou une compétition de karting pour l'adrénaline.", type: Personality.PROMOTEUR },
      { id: 'phase27-imag', label: "Une retraite au calme, comme une marche en forêt ou de la méditation.", type: Personality.IMAGINEUR }
    ]
  },
  {
    id: 'phase28',
    question: "Quel est le reproche (même injuste) qui vous blesse le plus ?",
    answers: [
      { id: 'phase28-imag', label: "Tu es toujours ailleurs, on a l'impression que tu ne t'impliques jamais.", type: Personality.IMAGINEUR },
      { id: 'phase28-anal', label: "Tu es trop froid, on dirait un robot sans émotions.", type: Personality.ANALYSEUR },
      { id: 'phase28-empa', label: "Tu es trop fragile, tu te laisses trop influencer par tes sentiments.", type: Personality.EMPATHIQUE },
      { id: 'phase28-pers', label: "Tu es trop rigide, tu penses toujours avoir raison avec tes principes.", type: Personality.PERSÉVÉRANT },
      { id: 'phase28-rebe', label: "Tu n'es pas sérieux, on ne peut jamais compter sur toi.", type: Personality.REBELLE },
      { id: 'phase28-prom', label: "Tu es un manipulateur, tu ne penses qu'à tes intérêts.", type: Personality.PROMOTEUR }
    ]
  },
  {
    id: 'phase29',
    question: "Qu'est-ce qui définit, selon vous, la réussite dans votre métier ?",
    answers: [
      { id: 'phase29-prom', label: "La croissance rapide du cabinet et les défis commerciaux relevés.", type: Personality.PROMOTEUR },
      { id: 'phase29-rebe', label: "La capacité à rester enthousiaste, créatif et à ne jamais s'ennuyer.", type: Personality.REBELLE },
      { id: 'phase29-imag', label: "La liberté d'organiser son temps et la tranquillité d'esprit.", type: Personality.IMAGINEUR },
      { id: 'phase29-anal', label: "La maîtrise technique absolue et la gestion parfaite des dossiers.", type: Personality.ANALYSEUR },
      { id: 'phase29-empa', label: "La qualité des relations clients et l'harmonie avec ses collègues.", type: Personality.EMPATHIQUE },
      { id: 'phase29-pers', label: "Le respect de ses pairs, l'intégrité et la défense de ses convictions.", type: Personality.PERSÉVÉRANT }
    ]
  },
  {
    id: 'phase30',
    question: "Votre état d'esprit actuel vis-à-vis de l'avenir :",
    answers: [
      { id: 'phase30-anal', label: "Planifié et réaliste.", type: Personality.ANALYSEUR },
      { id: 'phase30-empa', label: "Optimiste et tourné vers l'humain.", type: Personality.EMPATHIQUE },
      { id: 'phase30-pers', label: "Engagé et fidèle à mes principes.", type: Personality.PERSÉVÉRANT },
      { id: 'phase30-rebe', label: "Curieux et ouvert aux surprises.", type: Personality.REBELLE },
      { id: 'phase30-prom', label: "Ambitieux et prêt à foncer.", type: Personality.PROMOTEUR },
      { id: 'phase30-imag', label: "Serein et en attente de sens.", type: Personality.IMAGINEUR }
    ]
  }
];

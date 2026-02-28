import { Personality, PcmQuestion } from '../models/pcm.model';

export const PCM_OFFICIAL_DATA: PcmQuestion[] = [
  {
    id: 'base1',
    question: "Quand vous étiez enfant, on vous aurait plutôt décrit comme :",
    answers: [
      { id: 'base1-anal', type: Personality.ANALYSEUR, label: "Curieux et méthodique — vous aimiez comprendre comment les choses fonctionnent." },
      { id: 'base1-empa', type: Personality.EMPATHIQUE, label: "Sociable et attentionné — vous aviez besoin de vous sentir aimé et intégré." },
      { id: 'base1-pers', type: Personality.PERSÉVÉRANT, label: "Déterminé et convaincu — vous aviez vos opinions et vous les défendiez." },
      { id: 'base1-ener', type: Personality.ENERGISEUR, label: "Joueur et agité — vous vous ennuyiez vite et aviez besoin de bouger." },
      { id: 'base1-prom', type: Personality.PROMOTEUR, label: "Compétiteur et audacieux — vous aimiez gagner et vous mesurer aux autres." },
      { id: 'base1-imag', type: Personality.IMAGINEUR, label: "Calme et rêveur — vous passiez du temps seul dans vos pensées." }
    ]
  },
  {
    id: 'base2',
    question: "Votre entourage dit que vous êtes :",
    answers: [
      { id: 'base2-anal', type: Personality.ANALYSEUR, label: "Quelqu'un de très organisé et logique." },
      { id: 'base2-empa', type: Personality.EMPATHIQUE, label: "Quelqu'un de très attentionné et à l'écoute." },
      { id: 'base2-pers', type: Personality.PERSÉVÉRANT, label: "Quelqu'un de très fiable et engagé." },
      { id: 'base2-ener', type: Personality.ENERGISEUR, label: "Quelqu'un de très créatif et spontané." },
      { id: 'base2-prom', type: Personality.PROMOTEUR, label: "Quelqu'un qui obtient des résultats et va au bout des choses." },
      { id: 'base2-imag', type: Personality.IMAGINEUR, label: "Quelqu'un de très calme et réfléchi." }
    ]
  },
  {
    id: 'base3',
    question: "Lors d'une réunion, ce que vous préférez :",
    answers: [
      { id: 'base3-anal', type: Personality.ANALYSEUR, label: "L'ordre du jour, les chiffres et les faits." },
      { id: 'base3-empa', type: Personality.EMPATHIQUE, label: "La cohésion et l'ambiance du groupe." },
      { id: 'base3-pers', type: Personality.PERSÉVÉRANT, label: "Le respect des engagements pris." },
      { id: 'base3-ener', type: Personality.ENERGISEUR, label: "La créativité et les échanges fun." },
      { id: 'base3-prom', type: Personality.PROMOTEUR, label: "L'efficacité et les décisions rapides." },
      { id: 'base3-imag', type: Personality.IMAGINEUR, label: "Les concepts clés et la vision d'ensemble." }
    ]
  },
  {
    id: 'base4',
    question: "Quand vous racontez quelque chose, vous :",
    answers: [
      { id: 'base4-anal', type: Personality.ANALYSEUR, label: "Structurez ce que vous dites, avec des faits et des détails précis." },
      { id: 'base4-empa', type: Personality.EMPATHIQUE, label: "Adaptez votre façon de raconter à ce que l'autre ressent et à ce qu'il comprend." },
      { id: 'base4-pers', type: Personality.PERSÉVÉRANT, label: "Glissez naturellement votre point de vue sur ce qui était bien ou mal dans la situation." },
      { id: 'base4-ener', type: Personality.ENERGISEUR, label: "Cherchez à faire réagir — vous aimez que les gens rient ou soient surpris." },
      { id: 'base4-prom', type: Personality.PROMOTEUR, label: "Racontez avec assurance, en mettant en avant ce qui impressionne ou ce qui a bien marché." },
      { id: 'base4-imag', type: Personality.IMAGINEUR, label: "Partez dans plusieurs directions avant d'en venir au fait." }
    ]
  },
  {
    id: 'base5',
    question: "Pour vous, une journée de travail réussie au cabinet, c'est :",
    answers: [
      { id: 'base5-anal', type: Personality.ANALYSEUR, label: "Avoir une bonne journée bien productive, toutes les tâches prévues sont terminées." },
      { id: 'base5-empa', type: Personality.EMPATHIQUE, label: "Avoir partagé des moments chaleureux et agréables avec mes collègues ou clients." },
      { id: 'base5-pers', type: Personality.PERSÉVÉRANT, label: "Avoir tenu mes engagements et bien fait mon travail, sans faire de compromis sur la qualité." },
      { id: 'base5-ener', type: Personality.ENERGISEUR, label: "Avoir vécu une journée fun et animée, avec des moments drôles et des anecdotes à raconter." },
      { id: 'base5-prom', type: Personality.PROMOTEUR, label: "Avoir relevé un défi ou saisi une nouvelle opportunité." },
      { id: 'base5-imag', type: Personality.IMAGINEUR, label: "Avoir pu travailler tranquillement, sans être sans cesse interrompu." }
    ]
  },
  {
    id: 'base6',
    question: "Dans une équipe, vous êtes celui ou celle qui :",
    answers: [
      { id: 'base6-anal', type: Personality.ANALYSEUR, label: "Définit le planning, les étapes et l'organisation." },
      { id: 'base6-empa', type: Personality.EMPATHIQUE, label: "Veille à ce que tout le monde se sente bien et soit écouté." },
      { id: 'base6-pers', type: Personality.PERSÉVÉRANT, label: "Celui ou celle qui s'assure que le travail est bien fait et les engagements tenus." },
      { id: 'base6-ener', type: Personality.ENERGISEUR, label: "Apporte l'énergie, les idées nouvelles et la bonne humeur." },
      { id: 'base6-prom', type: Personality.PROMOTEUR, label: "Pousse à avancer, prend les décisions et fait bouger les choses." },
      { id: 'base6-imag', type: Personality.IMAGINEUR, label: "Prend du recul, réfléchit en profondeur et apporte une vision d'ensemble." }
    ]
  },
  {
    id: 'base7',
    question: "Lorsque vous écoutez quelqu'un, vous :",
    answers: [
      { id: 'base7-anal', type: Personality.ANALYSEUR, label: "Cherchez surtout à comprendre les faits et la logique de son raisonnement." },
      { id: 'base7-empa', type: Personality.EMPATHIQUE, label: "Êtes attentif aux émotions et au ressenti exprimé." },
      { id: 'base7-pers', type: Personality.PERSÉVÉRANT, label: "Donnez votre opinion ou votre avis sur ce que vous entendez." },
      { id: 'base7-ener', type: Personality.ENERGISEUR, label: "Réagissez spontanément et interagissez facilement à son récit." },
      { id: 'base7-prom', type: Personality.PROMOTEUR, label: "Identifiez quelle action ou décision doit être faite." },
      { id: 'base7-imag', type: Personality.IMAGINEUR, label: "Prenez du temps pour intégrer les informations avant de répondre." }
    ]
  },
  {
    id: 'base8',
    question: "Pour motiver un collaborateur, vous :",
    answers: [
      { id: 'base8-anal', type: Personality.ANALYSEUR, label: "Lui donnez des objectifs chiffrés et un cadre précis et évaluez son travail." },
      { id: 'base8-empa', type: Personality.EMPATHIQUE, label: "Le félicitez pour ce qu'il est et lui témoignez votre confiance." },
      { id: 'base8-pers', type: Personality.PERSÉVÉRANT, label: "Lui montrez en quoi son travail a du sens et compte vraiment." },
      { id: 'base8-ener', type: Personality.ENERGISEUR, label: "Misez sur le jeu, une mise au défi amusante ou une mission originale." },
      { id: 'base8-prom', type: Personality.PROMOTEUR, label: "Lui proposez une récompense concrète liée à sa performance." },
      { id: 'base8-imag', type: Personality.IMAGINEUR, label: "Le laissez s'organiser à son rythme, sans le surveiller." }
    ]
  },
  {
    id: 'base9',
    question: "Quand vous êtes en désaccord avec un collègue sur une méthode, vous :",
    answers: [
      { id: 'base9-anal', type: Personality.ANALYSEUR, label: "Exposez les arguments factuels qui soutiennent votre position." },
      { id: 'base9-empa', type: Personality.EMPATHIQUE, label: "Cherchez un terrain d'entente pour préserver la relation avant tout." },
      { id: 'base9-pers', type: Personality.PERSÉVÉRANT, label: "Défendez votre point de vue avec conviction, car vous pensez avoir raison." },
      { id: 'base9-ener', type: Personality.ENERGISEUR, label: "Exprimez votre désaccord franchement, avec animation, parfois un peu fort." },
      { id: 'base9-prom', type: Personality.PROMOTEUR, label: "Tranchez rapidement pour ne pas perdre de temps." },
      { id: 'base9-imag', type: Personality.IMAGINEUR, label: "Prenez du recul et attendez d'avoir bien réfléchi avant de vous exprimer." }
    ]
  },
  {
    id: 'base10',
    question: "Face à une décision urgente, vous avez tendance à :",
    answers: [
      { id: 'base10-anal', type: Personality.ANALYSEUR, label: "Analyser les faits et les données." },
      { id: 'base10-empa', type: Personality.EMPATHIQUE, label: "Privilégier le ressenti des personnes concernées." },
      { id: 'base10-pers', type: Personality.PERSÉVÉRANT, label: "Vérifier la cohérence avec vos principes et vos valeurs." },
      { id: 'base10-ener', type: Personality.ENERGISEUR, label: "Vous reposer sur votre instinct." },
      { id: 'base10-prom', type: Personality.PROMOTEUR, label: "Vous orienter sur ce que ça va rapporter concrètement et l'opportunité que ça représente." },
      { id: 'base10-imag', type: Personality.IMAGINEUR, label: "Prendre du temps seul avant de répondre." }
    ]
  },
  {
    id: 'base11',
    question: "Ce qui vous met le plus à l’aise dans une discussion :",
    answers: [
      { id: 'base11-anal', type: Personality.ANALYSEUR, label: "Un échange structuré, précis et centré sur les faits." },
      { id: 'base11-empa', type: Personality.EMPATHIQUE, label: "Un climat bienveillant où chacun peut s’exprimer librement." },
      { id: 'base11-pers', type: Personality.PERSÉVÉRANT, label: "Un débat d’idées où l’on peut défendre ses convictions." },
      { id: 'base11-ener', type: Personality.ENERGISEUR, label: "Un échange spontané, détendu et fun." },
      { id: 'base11-prom', type: Personality.PROMOTEUR, label: "Une discussion orientée vers la décision et l’action." },
      { id: 'base11-imag', type: Personality.IMAGINEUR, label: "Un moment calme où l’on peut réfléchir avant de répondre." }
    ]
  },
  {
    id: 'base12',
    question: "Ce que vos clients apprécient le plus dans votre façon de travailler :",
    answers: [
      { id: 'base12-anal', type: Personality.ANALYSEUR, label: "Votre rigueur, votre précision et la fiabilité de vos analyses." },
      { id: 'base12-empa', type: Personality.EMPATHIQUE, label: "Votre disponibilité, votre écoute et l'attention que vous leur portez." },
      { id: 'base12-pers', type: Personality.PERSÉVÉRANT, label: "Votre honnêteté, votre transparence et le fait que vous tenez vos engagements." },
      { id: 'base12-ener', type: Personality.ENERGISEUR, label: "Votre enthousiasme et votre capacité à rendre les échanges vivants." },
      { id: 'base12-prom', type: Personality.PROMOTEUR, label: "Votre efficacité et votre capacité à livrer des résultats dans les temps." },
      { id: 'base12-imag', type: Personality.IMAGINEUR, label: "Votre recul, votre vision à long terme et la profondeur de vos conseils." }
    ]
  },
  {
    id: 'base13',
    question: "Lors d'une réunion qui s'éternise sans conclusion, vous :",
    answers: [
      { id: 'base13-anal', type: Personality.ANALYSEUR, label: "Proposez de noter les options dans un tableau pour clarifier la situation." },
      { id: 'base13-empa', type: Personality.EMPATHIQUE, label: "Vous assurez que tout le monde a pu s'exprimer avant de conclure." },
      { id: 'base13-pers', type: Personality.PERSÉVÉRANT, label: "Exprimez clairement votre opinion sur ce qui devrait être décidé." },
      { id: 'base13-ener', type: Personality.ENERGISEUR, label: "Commencez à vous agiter, faites une blague ou relancez la discussion à voix haute." },
      { id: 'base13-prom', type: Personality.PROMOTEUR, label: "Tranchez — vous proposez une décision ou proposez une action permettant de faire avancer les choses." },
      { id: 'base13-imag', type: Personality.IMAGINEUR, label: "Partez dans vos pensées en attendant que ça se termine." }
    ]
  },
  {
    id: 'base14',
    question: "Face à une nouvelle mission, votre premier réflexe est :",
    answers: [
      { id: 'base14-anal', type: Personality.ANALYSEUR, label: "Clarifier les objectifs, vérifier les données et organiser le plan d’action." },
      { id: 'base14-empa', type: Personality.EMPATHIQUE, label: "Identifier les personnes concernées et comprendre leurs attentes." },
      { id: 'base14-pers', type: Personality.PERSÉVÉRANT, label: "Vérifier si la mission est alignée avec vos valeurs ou celles du cabinet." },
      { id: 'base14-ener', type: Personality.ENERGISEUR, label: "Voir ce qui peut rendre la mission stimulante et agréable." },
      { id: 'base14-prom', type: Personality.PROMOTEUR, label: "Repérer rapidement les enjeux et les opportunités." },
      { id: 'base14-imag', type: Personality.IMAGINEUR, label: "Prendre un temps de réflexion avant de vous engager pleinement." }
    ]
  },
  {
    id: 'base15',
    question: "Quand un client vous demande un délai impossible à tenir, vous :",
    answers: [
      { id: 'base15-anal', type: Personality.ANALYSEUR, label: "Expliquez clairement pourquoi ce délai n'est pas tenable, chiffres à l'appui." },
      { id: 'base15-empa', type: Personality.EMPATHIQUE, label: "Cherchez un compromis qui satisfait le client sans mettre l'équipe sous pression." },
      { id: 'base15-pers', type: Personality.PERSÉVÉRANT, label: "Maintenez le délai raisonnable — la qualité ne se négocie pas." },
      { id: 'base15-ener', type: Personality.ENERGISEUR, label: "Réagissez franchement — vous dites ce que vous pensez sur le moment, sans vous filtrer." },
      { id: 'base15-prom', type: Personality.PROMOTEUR, label: "Acceptez le défi et trouvez un moyen d'y arriver coûte que coûte." },
      { id: 'base15-imag', type: Personality.IMAGINEUR, label: "Demandez un temps de réflexion avant de vous engager." }
    ]
  },
  {
    id: 'base16',
    question: "Quand un collaborateur fait plusieurs fois la même erreur, vous :",
    answers: [
      { id: 'base16-anal', type: Personality.ANALYSEUR, label: "Analysez les causes et proposez une méthode pour que ça ne se reproduise plus." },
      { id: 'base16-empa', type: Personality.EMPATHIQUE, label: "Mettez-vous à sa place avant tout — il y a sûrement une raison derrière ses erreurs." },
      { id: 'base16-pers', type: Personality.PERSÉVÉRANT, label: "Lui signalez clairement que ce n'est pas acceptable au regard des exigences du cabinet." },
      { id: 'base16-ener', type: Personality.ENERGISEUR, label: "Trouvez une façon légère d'aborder le sujet, avec humour si possible." },
      { id: 'base16-prom', type: Personality.PROMOTEUR, label: "Fixez des objectifs précis et un délai — vous voulez des résultats, pas des excuses." },
      { id: 'base16-imag', type: Personality.IMAGINEUR, label: "Ayez du mal à aborder le sujet directement — vous ne savez pas trop comment vous y prendre." }
    ]
  },
  {
    id: 'base17',
    question: "Quand vous devez confier une tâche à un collaborateur, vous :",
    answers: [
      { id: 'base17-anal', type: Personality.ANALYSEUR, label: "Rédigez des instructions précises avec les étapes et les critères attendus." },
      { id: 'base17-empa', type: Personality.EMPATHIQUE, label: "Prenez le temps d'expliquer en vous assurant que la personne se sent capable." },
      { id: 'base17-pers', type: Personality.PERSÉVÉRANT, label: "Insistez sur l'importance de la tâche et ce qu'on attend sur le plan de la qualité." },
      { id: 'base17-ener', type: Personality.ENERGISEUR, label: "Rendez les explications vivantes — vous mettez de l'énergie pour que la personne ait envie de s'y mettre." },
      { id: 'base17-prom', type: Personality.PROMOTEUR, label: "Fixez l'objectif final et laissez la personne se débrouiller." },
      { id: 'base17-imag', type: Personality.IMAGINEUR, label: "Déléguez en laissant beaucoup d'autonomie, sans trop superviser." }
    ]
  },
  {
    id: 'base18',
    question: "Quand un projet prend du retard à cause d'imprévus, vous :",
    answers: [
      { id: 'base18-anal', type: Personality.ANALYSEUR, label: "Révisez immédiatement le planning et cherchez l'origine du retard." },
      { id: 'base18-empa', type: Personality.EMPATHIQUE, label: "Vérifiez que l'équipe n'est pas trop sous pression et gérez les tensions." },
      { id: 'base18-pers', type: Personality.PERSÉVÉRANT, label: "Vérifiez si les engagements pris envers le client peuvent encore être honorés." },
      { id: 'base18-ener', type: Personality.ENERGISEUR, label: "Faites monter l'énergie dans l'équipe pour que tout le monde se retrousse les manches." },
      { id: 'base18-prom', type: Personality.PROMOTEUR, label: "Accélérez le rythme et mobilisez tout ce que vous avez pour avancer." },
      { id: 'base18-imag', type: Personality.IMAGINEUR, label: "Prenez du recul pour comprendre ce qui s'est passé avant d'agir." }
    ]
  },
  {
    id: 'base19',
    question: "Ce que vous ne supportez vraiment pas dans votre travail, c'est :",
    answers: [
      { id: 'base19-anal', type: Personality.ANALYSEUR, label: "L'imprécision, les données fausses ou les dossiers bâclés." },
      { id: 'base19-empa', type: Personality.EMPATHIQUE, label: "Le manque de considération ou la froideur dans les relations." },
      { id: 'base19-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on vous demande d'agir contre vos principes professionnels." },
      { id: 'base19-ener', type: Personality.ENERGISEUR, label: "La rigidité qui empêche toute flexibilité ou adaptation." },
      { id: 'base19-prom', type: Personality.PROMOTEUR, label: "L'indécision et la lenteur — certains collaborateurs ou clients qui ne décident jamais ou qui n'avancent pas suffisamment vite." },
      { id: 'base19-imag', type: Personality.IMAGINEUR, label: "Qu'on sollicite trop souvent — vous avez besoin qu'on vous laisse un peu de tranquilité." }
    ]
  },
  {
    id: 'base20',
    question: "Quand vous évaluez la performance d'un collaborateur, vous :",
    answers: [
      { id: 'base20-anal', type: Personality.ANALYSEUR, label: "Vous appuyez sur des données objectives et des critères mesurables." },
      { id: 'base20-empa', type: Personality.EMPATHIQUE, label: "Faites attention à ce que la personne vive bien cet entretien." },
      { id: 'base20-pers', type: Personality.PERSÉVÉRANT, label: "Évaluez avant tout son engagement, sa fiabilité et son sens des responsabilités." },
      { id: 'base20-ener', type: Personality.ENERGISEUR, label: "Cherchez à valoriser les initiatives originales et l'énergie qu'il apporte." },
      { id: 'base20-prom', type: Personality.PROMOTEUR, label: "Vous concentrez sur les résultats obtenus et les objectifs atteints." },
      { id: 'base20-imag', type: Personality.IMAGINEUR, label: "Préparez l'entretien seul, en profondeur, avant de rencontrer la personne." }
    ]
  },
  {
    id: 'phase21',
    question: "En ce moment, ce qui vous motive le plus dans votre travail, c'est :",
    answers: [
      { id: 'phase21-anal', type: Personality.ANALYSEUR, label: "Qu'on reconnaisse la qualité de vos dossiers et le travail." },
      { id: 'phase21-empa', type: Personality.EMPATHIQUE, label: "Qu'on vous accorde de l'attention et de la chaleur humaine." },
      { id: 'phase21-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on écoute vos opinions et respecte vos convictions." },
      { id: 'phase21-ener', type: Personality.ENERGISEUR, label: "Passer des moments légers et agréables avec vos collègues." },
      { id: 'phase21-prom', type: Personality.PROMOTEUR, label: "Vivre des situations qui vous poussent à vous dépasser." },
      { id: 'phase21-imag', type: Personality.IMAGINEUR, label: "Avoir des moments calmes pour réfléchir tranquillement." }
    ]
  },
  {
    id: 'phase22',
    question: "Quel style de management vous convient le mieux ?",
    answers: [
      { id: 'phase22-anal', type: Personality.ANALYSEUR, label: "Un manager compétent, organisé, qui s'appuie sur les faits." },
      { id: 'phase22-empa', type: Personality.EMPATHIQUE, label: "Un manager bienveillant, à l'écoute et attentif aux personnes." },
      { id: 'phase22-pers', type: Personality.PERSÉVÉRANT, label: "Un manager droit, engagé et fidèle à ses valeurs." },
      { id: 'phase22-ener', type: Personality.ENERGISEUR, label: "Un manager détendu, qui laisse de la place à la créativité et au plaisir." },
      { id: 'phase22-prom', type: Personality.PROMOTEUR, label: "Un manager qui fixe des objectifs ambitieux et pousse à aller plus loin." },
      { id: 'phase22-imag', type: Personality.IMAGINEUR, label: "Un manager qui me laisse de l'espace et ne surveille pas chaque étape." }
    ]
  },
  {
    id: 'phase23',
    question: "La relation qui vous pèse le plus en ce moment, c'est :",
    answers: [
      { id: 'phase23-anal', type: Personality.ANALYSEUR, label: "Celle où l'autre est flou, peu fiable ou approximatif." },
      { id: 'phase23-empa', type: Personality.EMPATHIQUE, label: "Celle où vous vous sentez ignoré ou pas vraiment considéré." },
      { id: 'phase23-pers', type: Personality.PERSÉVÉRANT, label: "Celle où vos valeurs ou vos principes sont remis en question." },
      { id: 'phase23-ener', type: Personality.ENERGISEUR, label: "Celle où l'ambiance est trop rigide et trop sérieuse." },
      { id: 'phase23-prom', type: Personality.PROMOTEUR, label: "Celle où l'autre freine votre élan ou bloque vos projets." },
      { id: 'phase23-imag', type: Personality.IMAGINEUR, label: "Celle où l'autre est trop présent ou trop demandeur." }
    ]
  },
  {
    id: 'phase24',
    question: "Ce dont vous avez le plus besoin en ce moment dans votre travail, c'est :",
    answers: [
      { id: 'phase24-anal', type: Personality.ANALYSEUR, label: "Qu'on reconnaisse la qualité et le sérieux de votre travail." },
      { id: 'phase24-empa', type: Personality.EMPATHIQUE, label: "Qu'on vous apprécie pour ce que vous êtes, pas seulement pour ce que vous faites." },
      { id: 'phase24-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on respecte vos convictions et ce en quoi vous croyez." },
      { id: 'phase24-ener', type: Personality.ENERGISEUR, label: "Des échanges légers, des moments de plaisir et un peu de légèreté." },
      { id: 'phase24-prom', type: Personality.PROMOTEUR, label: "Des défis concrets, de l'adrénaline et des résultats visibles." },
      { id: 'phase24-imag', type: Personality.IMAGINEUR, label: "Du calme et du temps pour réfléchir sans être sollicité." }
    ]
  },
  {
    id: 'phase25',
    question: "Quand quelqu'un remet en question votre travail, vous :",
    answers: [
      { id: 'phase25-anal', type: Personality.ANALYSEUR, label: "Expliquez pourquoi vous avez fait comme ça, point par point." },
      { id: 'phase25-empa', type: Personality.EMPATHIQUE, label: "Vous remettez en question et vous demandez si vous avez déçu." },
      { id: 'phase25-pers', type: Personality.PERSÉVÉRANT, label: "Défendez fermement votre position — vous êtes convaincu d'avoir raison." },
      { id: 'phase25-ener', type: Personality.ENERGISEUR, label: "Prenez mal la critique et montrez clairement que vous n'êtes pas d'accord." },
      { id: 'phase25-prom', type: Personality.PROMOTEUR, label: "Retournez la situation — vous trouvez rapidement quelque chose à lui reprocher." },
      { id: 'phase25-imag', type: Personality.IMAGINEUR, label: "Vous refermez sur vous-même et attendez que ça se règle sans vous." }
    ]
  },
  {
    id: 'phase26',
    question: "Ce qui vous donne le plus d'énergie en ce moment dans votre vie professionnelle :",
    answers: [
      { id: 'phase26-anal', type: Personality.ANALYSEUR, label: "Produire un travail dont vous êtes fier sur le plan de la précision et de la rigueur." },
      { id: 'phase26-empa', type: Personality.EMPATHIQUE, label: "Les moments où vous vous sentez vraiment en lien avec les autres." },
      { id: 'phase26-pers', type: Personality.PERSÉVÉRANT, label: "Le sentiment d'agir selon vos valeurs et de contribuer à quelque chose de juste." },
      { id: 'phase26-ener', type: Personality.ENERGISEUR, label: "Les situations imprévues qui vous sortent de la routine." },
      { id: 'phase26-prom', type: Personality.PROMOTEUR, label: "Gagner, réussir des défis et avancer vers vos objectifs." },
      { id: 'phase26-imag', type: Personality.IMAGINEUR, label: "Les moments de calme et de concentration profonde." }
    ]
  },
  {
    id: 'phase27',
    question: "Face à une surcharge de travail, vous allez :",
    answers: [
      { id: 'phase27-anal', type: Personality.ANALYSEUR, label: "Vérifier et revérifier votre travail et celui des autres, ne plus déléguer." },
      { id: 'phase27-empa', type: Personality.EMPATHIQUE, label: "Faire des maladresses, en faire trop pour les autres et devenir envahissant sans le vouloir." },
      { id: 'phase27-pers', type: Personality.PERSÉVÉRANT, label: "Ne plus écouter, couper la parole et tenter d'imposer votre point de vue à tout prix." },
      { id: 'phase27-ener', type: Personality.ENERGISEUR, label: "Rejeter la faute sur les autres — c'est leur problème, pas le vôtre." },
      { id: 'phase27-prom', type: Personality.PROMOTEUR, label: "Monter les gens les uns contre les autres pour avancer dans votre sens." },
      { id: 'phase27-imag', type: Personality.IMAGINEUR, label: "Vous renfermer, ne pas arriver à terminer vos tâches et attendre que quelqu'un prenne les décisions à votre place." }
    ]
  },
  {
    id: 'phase28',
    question: "Quand vous n'êtes pas reconnu à votre juste valeur, vous :",
    answers: [
      { id: 'phase28-anal', type: Personality.ANALYSEUR, label: "Redoublez d'efforts et peaufinez encore plus votre travail." },
      { id: 'phase28-empa', type: Personality.EMPATHIQUE, label: "Vous sentez rejeté." },
      { id: 'phase28-pers', type: Personality.PERSÉVÉRANT, label: "Devenez méfiant et suspicieux envers ceux qui ne vous reconnaissent pas." },
      { id: 'phase28-ener', type: Personality.ENERGISEUR, label: "Vous dites que les autres ne méritent pas votre investissement." },
      { id: 'phase28-prom', type: Personality.PROMOTEUR, label: "Cherchez à vous imposer par d'autres moyens." },
      { id: 'phase28-imag', type: Personality.IMAGINEUR, label: "Vous refermez sur vous-même et attendez que ça passe." }
    ]
  },
  {
    id: 'phase29',
    question: "Pour vous, une relation idéale avec votre manager ou votre client repose sur :",
    answers: [
      { id: 'phase29-anal', type: Personality.ANALYSEUR, label: "La reconnaissance de votre travail et de votre sérieux" },
      { id: 'phase29-empa', type: Personality.EMPATHIQUE, label: "La chaleur humaine et l'attention portée à votre ressenti" },
      { id: 'phase29-pers', type: Personality.PERSÉVÉRANT, label: "Le partage de valeurs communes et la confiance mutuelle" },
      { id: 'phase29-ener', type: Personality.ENERGISEUR, label: "La spontanéité et le plaisir de partager des moments fun" },
      { id: 'phase29-prom', type: Personality.PROMOTEUR, label: "L'excitation de relever des défis ensemble" },
      { id: 'phase29-imag', type: Personality.IMAGINEUR, label: "Le respect de votre espace personnel et de votre rythme" }
    ]
  },
  {
    id: 'phase30',
    question: "Pour moi, ce questionnaire est avant tout :",
    answers: [
      { id: 'phase30-anal', type: Personality.ANALYSEUR, label: "Un outil utile — je peux mieux comprendre pour m'améliorer." },
      { id: 'phase30-empa', type: Personality.EMPATHIQUE, label: "Une façon de voir comment je peux mieux fonctionner et m'entendre avec les autres." },
      { id: 'phase30-pers', type: Personality.PERSÉVÉRANT, label: "Une démarche qui fait sens — j'ai besoin que les choses aient du fond et de l'utilité." },
      { id: 'phase30-ener', type: Personality.ENERGISEUR, label: "Une expérience originale et plutôt amusante." },
      { id: 'phase30-prom', type: Personality.PROMOTEUR, label: "Une occasion de mieux se vendre et de tirer parti de ses points forts." },
      { id: 'phase30-imag', type: Personality.IMAGINEUR, label: "Un moment d'introspection - c'est occasion de vraiment réfléchir à qui on est, en profondeur." }
    ]
  }
];

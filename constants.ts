export interface GrammarRule {
  title: string;
  useCase: string;
  examples: { es: string; hy: string }[];
}

export interface Exercise {
  id: number;
  sentence: string; // e.g., "Este regalo es ___ ti."
  options: string[];
  correct: string;
  explanation: string;
  translation: string;
}

export const POR_RULES: GrammarRule[] = [
  {
    title: "Պատճառ / Շարժառիթ",
    useCase: "Cause / Reason (Because of)",
    examples: [
      { es: "No voy a la playa por la lluvia.", hy: "Ես չեմ գնում լողափ անձրևի պատճառով:" }
    ]
  },
  {
    title: "Տևողություն",
    useCase: "Duration of time",
    examples: [
      { es: "Estudio por dos horas.", hy: "Ես սովորում եմ երկու ժամ:" }
    ]
  },
  {
    title: "Տեղաշարժ / Անցում",
    useCase: "Movement through/along",
    examples: [
      { es: "Camino por el parque.", hy: "Ես քայլում եմ այգով (այգու միջով):" }
    ]
  },
  {
    title: "Փոխանակում",
    useCase: "Exchange / Substitution",
    examples: [
      { es: "Te doy mi manzana por tu naranja.", hy: "Ես տալիս եմ իմ խնձորը քո նարնջի դիմաց:" }
    ]
  }
];

export const PARA_RULES: GrammarRule[] = [
  {
    title: "Նպատակակետ / Ստացող",
    useCase: "Recipient",
    examples: [
      { es: "Este libro es para Gayane.", hy: "Այս գիրքը Գայանեի համար է:" }
    ]
  },
  {
    title: "Վերջնաժամկետ",
    useCase: "Deadline / Future time",
    examples: [
      { es: "La tarea es para mañana.", hy: "Տնային աշխատանքը վաղվա համար է:" }
    ]
  },
  {
    title: "Նպատակ",
    useCase: "Purpose (In order to)",
    examples: [
      { es: "Estudio para aprender.", hy: "Ես սովորում եմ, որպեսզի սովորեմ (սովորելու համար):" }
    ]
  },
  {
    title: "Ուղղություն",
    useCase: "Destination",
    examples: [
      { es: "Salgo para Madrid.", hy: "Ես մեկնում եմ Մադրիդ:" }
    ]
  }
];

export const EXERCISES: Exercise[] = [
  {
    id: 1,
    sentence: "Este regalo es ___ mi madre.",
    options: ["por", "para"],
    correct: "para",
    translation: "Այս նվերը մայրիկիս համար է:",
    explanation: "PARA-ն օգտագործվում է, երբ նշում ենք ստացողին (recipient):"
  },
  {
    id: 2,
    sentence: "Estudiamos ___ el examen.",
    options: ["por", "para"],
    correct: "para",
    translation: "Մենք սովորում ենք քննության համար:",
    explanation: "PARA-ն օգտագործվում է նպատակը կամ վերջնաժամկետը նշելու համար:"
  },
  {
    id: 3,
    sentence: "Caminamos ___ la calle.",
    options: ["por", "para"],
    correct: "por",
    translation: "Մենք քայլում ենք փողոցով:",
    explanation: "POR-ն օգտագործվում է շարժումը կամ անցումը (through/along) նշելու համար:"
  },
  {
    id: 4,
    sentence: "Gracias ___ tu ayuda.",
    options: ["por", "para"],
    correct: "por",
    translation: "Շնորհակալություն քո օգնության համար:",
    explanation: "POR-ն օգտագործվում է շնորհակալություն հայտնելիս կամ պատճառը նշելիս:"
  },
  {
    id: 5,
    sentence: "Voy a España ___ trabajar.",
    options: ["por", "para"],
    correct: "para",
    translation: "Ես գնում եմ Իսպանիա աշխատելու համար:",
    explanation: "PARA + անորոշ դերբայ (infinitive) ցույց է տալիս նպատակ:"
  },
  {
    id: 6,
    sentence: "Lo compro ___ diez euros.",
    options: ["por", "para"],
    correct: "por",
    translation: "Ես դա գնում եմ տասը եվրոյով:",
    explanation: "POR-ն օգտագործվում է փոխանակման կամ գնի դեպքում (exchange/price):"
  },
  {
    id: 7,
    sentence: "Mañana salgo ___ Valencia.",
    options: ["por", "para"],
    correct: "para",
    translation: "Վաղը ես մեկնում եմ Վալենսիա:",
    explanation: "PARA-ն ցույց է տալիս շարժման վերջնակետը (destination):"
  },
  {
    id: 8,
    sentence: "Hablo con ella ___ teléfono.",
    options: ["por", "para"],
    correct: "por",
    translation: "Ես խոսում եմ նրա հետ հեռախոսով:",
    explanation: "POR-ն օգտագործվում է կապի կամ տրանսպորտի միջոցը նշելու համար:"
  },
  {
    id: 9,
    sentence: "La tarea es ___ el lunes.",
    options: ["por", "para"],
    correct: "para",
    translation: "Տնային աշխատանքը երկուշաբթի օրվա համար է:",
    explanation: "PARA-ն օգտագործվում է վերջնաժամկետների համար (deadlines):"
  },
  {
    id: 10,
    sentence: "Vivo en Madrid ___ seis meses.",
    options: ["por", "para"],
    correct: "por",
    translation: "Ես ապրում եմ Մադրիդում վեց ամիս:",
    explanation: "POR-ն օգտագործվում է ժամանակի տևողությունը նշելու համար:"
  },
  {
    id: 11,
    sentence: "Pasa ___ el puente.",
    options: ["por", "para"],
    correct: "por",
    translation: "Անցիր կամրջի վրայով:",
    explanation: "POR-ն ցույց է տալիս տեղաշարժ ինչ-որ բանի միջով կամ վրայով:"
  },
  {
    id: 12,
    sentence: "Este café es ___ ti.",
    options: ["por", "para"],
    correct: "para",
    translation: "Այս սուրճը քեզ համար է:",
    explanation: "PARA-ն ցույց է տալիս նպատակային ստացողին:"
  },
  {
    id: 13,
    sentence: "No salimos ___ el frío.",
    options: ["por", "para"],
    correct: "por",
    translation: "Մենք դուրս չենք գալիս ցրտի պատճառով:",
    explanation: "POR-ն ցույց է տալիս պատճառը (reason/cause):"
  },
  {
    id: 14,
    sentence: "Trabajo ___ una empresa grande.",
    options: ["por", "para"],
    correct: "para",
    translation: "Ես աշխատում եմ մի մեծ ընկերության համար:",
    explanation: "PARA-ն օգտագործվում է գործատուին նշելու համար:"
  },
  {
    id: 15,
    sentence: "Cambio mis zapatos ___ los tuyos.",
    options: ["por", "para"],
    correct: "por",
    translation: "Ես փոխում եմ իմ կոշիկները քո կոշիկների հետ:",
    explanation: "POR-ն օգտագործվում է փոխանակման (exchange) դեպքում:"
  }
];

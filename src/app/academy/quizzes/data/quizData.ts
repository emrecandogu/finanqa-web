import { questions } from '../../games/finquiz/questions';

// Debug: Import edilen soruları kontrol et (geliştirme için)
if (process.env.NODE_ENV === 'development') {
  console.log('Imported questions:', questions?.length || 0);
  console.log('Unique categories:', Array.from(new Set(questions?.map(q => q.category) || [])));
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface Quiz {
  title: string;
  description: string;
  category: string;
  questionCount: number;
  difficulty: string;
  slug: string;
  imageUrl: string;
  questions: QuizQuestion[];
}

// FinQuiz sorularını kategorilere göre ayır
const basicQuestions = questions.filter(q => q.category === 'temel_kavramlar');
const investmentQuestions = questions.filter(q => q.category === 'yatirim');
const personalQuestions = questions.filter(q => q.category === 'kisisel_finans');
const bankingQuestions = questions.filter(q => q.category === 'bankacilik');

// Bankacılık soruları (geçici çözüm - import sorunu varsa)
const fallbackBankingQuestions = [
  {
    id: 301,
    question: "IBAN nedir?",
    options: [
      "Uluslararası Banka Hesap Numarası",
      "İnternet Bankacılığı Numarası",
      "İç Bankacılık Numarası",
      "İleri Bankacılık Numarası"
    ],
    correctAnswer: 0,
    explanation: "IBAN (International Bank Account Number), uluslararası banka hesap numarasıdır.",
    category: "bankacilik"
  },
  {
    id: 302,
    question: "EFT nedir?",
    options: [
      "Elektronik Fon Transferi",
      "Elektronik Fatura Transferi",
      "Elektronik Finans Transferi",
      "Elektronik Form Transferi"
    ],
    correctAnswer: 0,
    explanation: "EFT, Elektronik Fon Transferi anlamına gelir ve bankalar arası para transferi için kullanılır.",
    category: "bankacilik"
  },
  {
    id: 303,
    question: "Havale ile EFT arasındaki fark nedir?",
    options: [
      "Havale aynı banka içinde, EFT farklı bankalar arası",
      "Havale farklı bankalar arası, EFT aynı banka içinde",
      "İkisi de aynı şeydir",
      "Havale daha pahalıdır"
    ],
    correctAnswer: 0,
    explanation: "Havale aynı banka içindeki hesaplar arası transfer, EFT ise farklı bankalar arası transferdir.",
    category: "bankacilik"
  },
  {
    id: 304,
    question: "Kredi kartı ile banka kartı arasındaki temel fark nedir?",
    options: [
      "Kredi kartı borçlanma, banka kartı kendi paranızı kullanma",
      "Banka kartı borçlanma, kredi kartı kendi paranızı kullanma",
      "İkisi de aynıdır",
      "Sadece renkleri farklıdır"
    ],
    correctAnswer: 0,
    explanation: "Kredi kartı bankanın size verdiği krediyi kullanmanızı sağlar, banka kartı ise kendi hesabınızdaki parayı kullanır.",
    category: "bankacilik"
  },
  {
    id: 305,
    question: "Teminat mektubu nedir?",
    options: [
      "Bankanın müşterisi adına verdiği garanti belgesi",
      "Müşterinin bankaya verdiği teminat",
      "Kredi başvuru formu",
      "Hesap açma belgesi"
    ],
    correctAnswer: 0,
    explanation: "Teminat mektubu, bankanın müşterisi adına üçüncü kişilere verdiği garanti belgesidir.",
    category: "bankacilik"
  },
  {
    id: 306,
    question: "Çek nedir?",
    options: [
      "Yazılı ödeme emri belgesi",
      "Kredi kartı türü",
      "Banka hesabı türü",
      "Yatırım aracı"
    ],
    correctAnswer: 0,
    explanation: "Çek, hesap sahibinin bankasına yazılı olarak verdiği ödeme emri belgesidir.",
    category: "bankacilik"
  },
  {
    id: 307,
    question: "Senet nedir?",
    options: [
      "Borç senedi ve ödeme vaadi",
      "Banka hesap özeti",
      "Kredi başvuru formu",
      "Yatırım belgesi"
    ],
    correctAnswer: 0,
    explanation: "Senet, belirli bir miktar paranın belirli bir tarihte ödeneceğine dair yazılı taahhüttür.",
    category: "bankacilik"
  },
  {
    id: 308,
    question: "Akreditif nedir?",
    options: [
      "Dış ticaret ödeme yöntemi",
      "Kredi türü",
      "Yatırım fonu",
      "Sigorta türü"
    ],
    correctAnswer: 0,
    explanation: "Akreditif, dış ticarette kullanılan güvenli ödeme yöntemidir.",
    category: "bankacilik"
  },
  {
    id: 309,
    question: "Swift kodu nedir?",
    options: [
      "Uluslararası banka tanımlama kodu",
      "Kredi kartı güvenlik kodu",
      "İnternet bankacılığı şifresi",
      "ATM pin kodu"
    ],
    correctAnswer: 0,
    explanation: "Swift kodu, uluslararası para transferlerinde bankaları tanımlamak için kullanılan koddur.",
    category: "bankacilik"
  },
  {
    id: 310,
    question: "Overdraft nedir?",
    options: [
      "Hesap bakiyesini aşan çekim imkanı",
      "Kredi kartı limiti",
      "Yatırım hesabı",
      "Tasarruf hesabı"
    ],
    correctAnswer: 0,
    explanation: "Overdraft, hesap bakiyesini aşan çekim yapabilme imkanıdır.",
    category: "bankacilik"
  }
];

// Bankacılık sorularını kullan (import'tan gelen varsa onu, yoksa fallback'i)
const finalBankingQuestions = bankingQuestions.length > 0 ? bankingQuestions : fallbackBankingQuestions;

// Debug: Soru sayılarını kontrol et (geliştirme için)
if (process.env.NODE_ENV === 'development') {
  console.log('Question counts:', {
    total: questions.length,
    basic: basicQuestions.length,
    investment: investmentQuestions.length,
    personal: personalQuestions.length,
    banking: bankingQuestions.length
  });
  
  console.log('Banking questions in quizData:', {
    bankingQuestionsLength: bankingQuestions.length,
    finalBankingQuestionsLength: finalBankingQuestions.length,
    bankingQuestionSample: finalBankingQuestions.slice(0, 2).map(q => ({ id: q.id, question: q.question }))
  });
}

// Quiz formatına dönüştür ve cevapları karıştır
function convertToQuizFormat(finQuizQuestions: typeof questions): QuizQuestion[] {
  return finQuizQuestions.map(q => {
    // Seçenekleri ve doğru cevabı karıştır
    const shuffledOptions = [...q.options];
    const correctOption = shuffledOptions[q.correctAnswer];
    
    // Fisher-Yates shuffle algoritması
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Yeni doğru cevap indeksini bul
    const newCorrectAnswer = shuffledOptions.indexOf(correctOption);
    
    return {
      question: q.question,
      options: shuffledOptions,
      answer: newCorrectAnswer,
      explanation: q.explanation
    };
  });
}

export const quizzes: { [key: string]: Quiz } = {
  'temel-finans-bilgisi': {
    title: 'Temel Finans Bilgisi',
    description: 'Finans dünyasının temel kavramlarını ne kadar iyi biliyorsunuz? Enflasyon, faiz, GSYİH gibi temel konuları test edin.',
    category: 'Temel Finans',
    questionCount: basicQuestions.length,
    difficulty: 'Başlangıç',
    slug: 'temel-finans-bilgisi',
    imageUrl: '/images/quiz-basic.svg',
    questions: convertToQuizFormat(basicQuestions)
  },
  'yatirim-stratejileri': {
    title: 'Yatırım Stratejileri',
    description: 'Hisse senedi, tahvil, portföy çeşitlendirmesi ve yatırım araçları hakkında bilginizi test edin.',
    category: 'Yatırım',
    questionCount: investmentQuestions.length,
    difficulty: 'Orta',
    slug: 'yatirim-stratejileri',
    imageUrl: '/images/quiz-investment.svg',
    questions: convertToQuizFormat(investmentQuestions)
  },
  'kisisel-finans-yonetimi': {
    title: 'Kişisel Finans Yönetimi',
    description: 'Bütçe planlaması, tasarruf, kredi kartı kullanımı ve kişisel finansal planlama konularında kendinizi sınayın.',
    category: 'Kişisel Finans',
    questionCount: personalQuestions.length,
    difficulty: 'Başlangıç',
    slug: 'kisisel-finans-yonetimi',
    imageUrl: '/images/quiz-personal.svg',
    questions: convertToQuizFormat(personalQuestions)
  },
  'bankacilik-ve-odeme-sistemleri': {
    title: 'Bankacılık ve Ödeme Sistemleri',
    description: 'IBAN, EFT, çek, senet ve modern bankacılık hizmetleri hakkında bilginizi ölçün.',
    category: 'Bankacılık',
    questionCount: 10, // Sabit değer - 10 bankacılık sorusu var
    difficulty: 'Orta',
    slug: 'bankacilik-ve-odeme-sistemleri',
    imageUrl: '/images/quiz-banking.svg',
    questions: convertToQuizFormat(finalBankingQuestions)
  },
  'kapsamli-finans-testi': {
    title: 'Kapsamlı Finans Testi',
    description: 'Tüm kategorilerden sorularla finansal bilginizi kapsamlı şekilde test edin. Uzmanlar için!',
    category: 'Karma',
    questionCount: Math.min(30, questions.length),
    difficulty: 'İleri',
    slug: 'kapsamli-finans-testi',
    imageUrl: '/images/quiz-comprehensive.svg',
    questions: convertToQuizFormat(
      [...questions].sort(() => Math.random() - 0.5).slice(0, 30)
    )
  },
  'hizli-finans-quizi': {
    title: 'Hızlı Finans Quiz\'i',
    description: 'Kısa sürede finansal bilginizi test etmek isteyenler için 10 soruluk hızlı quiz.',
    category: 'Hızlı Test',
    questionCount: 10,
    difficulty: 'Başlangıç',
    slug: 'hizli-finans-quizi',
    imageUrl: '/images/quiz-quick.svg',
    questions: convertToQuizFormat(
      [...questions].sort(() => Math.random() - 0.5).slice(0, 10)
    )
  }
};

export const quizList: Quiz[] = Object.values(quizzes); 
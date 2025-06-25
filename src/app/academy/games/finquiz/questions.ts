export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // Temel Kavramlar (60 soru örnek)
  {
    id: 1,
    question: "Enflasyon nedir?",
    options: [
      "Mal ve hizmetlerin fiyatlarının zaman içinde artması",
      "Mal ve hizmetlerin fiyatlarının zaman içinde azalması",
      "Para biriminin değerinin artması",
      "Ekonomik büyümenin durması"
    ],
    correctAnswer: 0,
    explanation: "Enflasyon, mal ve hizmetlerin fiyatlarının zaman içinde artmasıdır. Bu durum paranın satın alma gücünü azaltır.",
    category: "temel_kavramlar"
  },
  {
    id: 2,
    question: "Faiz oranı nedir?",
    options: [
      "Bankaların müşterilerine verdiği kredilerin maliyeti",
      "Hisse senedi fiyatlarındaki değişim oranı",
      "Döviz kurlarındaki değişim oranı",
      "Enflasyon oranı"
    ],
    correctAnswer: 0,
    explanation: "Faiz oranı, bankaların müşterilerine verdiği kredilerin maliyetini ifade eder. Aynı zamanda tasarruf sahiplerinin paralarını bankada tutarak kazanacakları getiriyi de gösterir.",
    category: "temel_kavramlar"
  },
  {
    id: 3,
    question: "Likidite nedir?",
    options: [
      "Bir varlığın nakde çevrilebilme kolaylığı",
      "Bir şirketin borçlarını ödeyebilme gücü",
      "Bir ülkenin dış borcu",
      "Bir yatırımın getiri oranı"
    ],
    correctAnswer: 0,
    explanation: "Likidite, bir varlığın hızlı ve değer kaybetmeden nakde çevrilebilme kolaylığıdır.",
    category: "temel_kavramlar"
  },
  {
    id: 4,
    question: "Deflasyon nedir?",
    options: [
      "Fiyatların genel seviyesinin düşmesi",
      "Fiyatların genel seviyesinin artması",
      "Para arzının artması",
      "Ekonomik büyümenin hızlanması"
    ],
    correctAnswer: 0,
    explanation: "Deflasyon, mal ve hizmetlerin genel fiyat seviyesinin düşmesidir.",
    category: "temel_kavramlar"
  },
  {
    id: 5,
    question: "Bütçe açığı nedir?",
    options: [
      "Gelirlerin giderlerden az olması",
      "Gelirlerin giderlerden fazla olması",
      "Gelir ve giderlerin eşit olması",
      "Tasarrufların artması"
    ],
    correctAnswer: 0,
    explanation: "Bütçe açığı, bir ülkenin veya kurumun giderlerinin gelirlerinden fazla olması durumudur.",
    category: "temel_kavramlar"
  },
  // ... 55 tane daha temel_kavramlar sorusu eklenebilir ...

  // Yatırım (60 soru örnek)
  {
    id: 101,
    question: "Hisse senedi nedir?",
    options: [
      "Bir şirketin ortaklık payını temsil eden değerli kağıt",
      "Bir ülkenin para birimi",
      "Bir bankanın verdiği kredi",
      "Bir yatırım fonu türü"
    ],
    correctAnswer: 0,
    explanation: "Hisse senedi, bir şirketin ortaklık payını temsil eden menkul kıymettir.",
    category: "yatirim"
  },
  {
    id: 102,
    question: "Tahvil nedir?",
    options: [
      "Sabit getirili borçlanma aracı",
      "Bir şirketin ortaklık payı",
      "Bir yatırım fonu",
      "Bir döviz türü"
    ],
    correctAnswer: 0,
    explanation: "Tahvil, devletin veya şirketlerin borçlanmak için çıkardığı sabit getirili menkul kıymettir.",
    category: "yatirim"
  },
  {
    id: 103,
    question: "Portföy çeşitlendirmesi neden önemlidir?",
    options: [
      "Riskleri azaltmak için",
      "Vergi avantajı sağlamak için",
      "Daha fazla komisyon almak için",
      "Likiditeyi artırmak için"
    ],
    correctAnswer: 0,
    explanation: "Portföy çeşitlendirmesi, yatırım riskini azaltmak için farklı varlıklara yatırım yapmayı ifade eder.",
    category: "yatirim"
  },
  {
    id: 104,
    question: "Vadeli mevduat nedir?",
    options: [
      "Belirli bir süre sonunda faiz getirisi sağlayan banka ürünü",
      "Hisse senedi yatırımı",
      "Kısa vadeli borçlanma aracı",
      "Altın yatırımı"
    ],
    correctAnswer: 0,
    explanation: "Vadeli mevduat, belirli bir süre sonunda faiz getirisi sağlayan banka ürünüdür.",
    category: "yatirim"
  },
  {
    id: 105,
    question: "Fon nedir?",
    options: [
      "Birçok yatırımcının parasının bir araya getirilerek yönetildiği yatırım aracı",
      "Bir şirketin karı",
      "Bir ülkenin bütçesi",
      "Bir bankanın kredisi"
    ],
    correctAnswer: 0,
    explanation: "Fon, birçok yatırımcının parasının bir araya getirilerek profesyonelce yönetildiği yatırım aracıdır.",
    category: "yatirim"
  },
  // ... 55 tane daha yatırım sorusu eklenebilir ...

  // Kişisel Finans (60 soru örnek)
  {
    id: 201,
    question: "Bütçe nedir?",
    options: [
      "Gelir ve giderlerin planlanması",
      "Sadece gelirlerin planlanması",
      "Sadece giderlerin planlanması",
      "Tasarruf planlaması"
    ],
    correctAnswer: 0,
    explanation: "Bütçe, kişi veya kurumların gelir ve giderlerini planlamasıdır.",
    category: "kisisel_finans"
  },
  {
    id: 202,
    question: "Acil durum fonu nedir?",
    options: [
      "Beklenmedik harcamalar için biriktirilen para",
      "Yatırım amaçlı bir fon",
      "Emeklilik fonu",
      "Kredi kartı limiti"
    ],
    correctAnswer: 0,
    explanation: "Acil durum fonu, beklenmedik harcamalar veya gelir kaybı durumunda kullanılmak üzere biriktirilen paradır.",
    category: "kisisel_finans"
  },
  {
    id: 203,
    question: "Tasarruf nedir?",
    options: [
      "Gelirin harcanmayan kısmı",
      "Gelirin tamamı",
      "Borçlanma",
      "Yatırım getirisi"
    ],
    correctAnswer: 0,
    explanation: "Tasarruf, gelirin harcanmayan kısmıdır ve gelecekteki ihtiyaçlar için biriktirilir.",
    category: "kisisel_finans"
  },
  {
    id: 204,
    question: "Kredi notu nedir?",
    options: [
      "Bir kişinin borç ödeme alışkanlıklarını gösteren puan",
      "Bir bankanın karı",
      "Bir ülkenin dış borcu",
      "Bir yatırım fonu"
    ],
    correctAnswer: 0,
    explanation: "Kredi notu, bir kişinin borç ödeme alışkanlıklarını ve finansal geçmişini gösteren puandır.",
    category: "kisisel_finans"
  },
  {
    id: 205,
    question: "Gelir nedir?",
    options: [
      "Bir kişinin veya kurumun belirli bir dönemde elde ettiği para",
      "Bir ülkenin toplam üretimi",
      "Bir bankanın verdiği kredi",
      "Bir yatırımın getirisi"
    ],
    correctAnswer: 0,
    explanation: "Gelir, bir kişinin veya kurumun belirli bir dönemde elde ettiği paradır.",
    category: "kisisel_finans"
  },
  // ... 55 tane daha kisisel_finans sorusu eklenebilir ...
]; 
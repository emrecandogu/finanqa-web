import { DictionaryTerm } from './types';

export const dictionaryTerms: DictionaryTerm[] = [
  // Temel Finans
  {
    id: 'term-1',
    term: 'Aktif',
    definition: 'Ekonomik değer taşıyan ve gelir getiren varlıklar.',
    detailedDefinition: 'Aktif, bir kişi, kurum veya şirketin sahip olduğu ve ekonomik değer taşıyan tüm varlıklardır. Bunlar nakit, gayrimenkul, hisse senedi, tahvil, makine, ekipman gibi fiziksel ve finansal varlıkları içerir.',
    category: 'Temel Finans',
    difficulty: 'beginner',
    examples: [
      'Nakit para, banka mevduatları',
      'Gayrimenkul, arazi, bina',
      'Hisse senetleri, tahviller',
      'Makine, ekipman, araç'
    ],
    synonyms: ['Varlık', 'Asset'],
    relatedTerms: ['Pasif', 'Bilanço', 'Net Değer'],
    tags: ['muhasebe', 'varlık', 'yatırım'],
    popularity: 95,
    views: 1250,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-2',
    term: 'Pasif',
    definition: 'Bir kurum veya kişinin üçüncü taraflara olan yükümlülükleri.',
    detailedDefinition: 'Pasif, bilançonun sağ tarafında yer alan ve işletmenin kaynaklarını gösteren kalemlerin tümüdür. Kısa vadeli borçlar, uzun vadeli borçlar, öz sermaye gibi kalemlerden oluşur.',
    category: 'Temel Finans',
    difficulty: 'beginner',
    examples: [
      'Krediler ve borçlar',
      'Ödenecek hesaplar',
      'Tahakkuk eden giderler',
      'Öz sermaye'
    ],
    synonyms: ['Borç', 'Yükümlülük', 'Liability'],
    relatedTerms: ['Aktif', 'Bilanço', 'Öz Sermaye'],
    tags: ['muhasebe', 'borç', 'yükümlülük'],
    popularity: 88,
    views: 980,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-3',
    term: 'Faiz',
    definition: 'Borç verilen paranın kullanımı karşılığında alınan ücret.',
    detailedDefinition: 'Faiz, borç olarak verilen paranın belirli bir süre kullanılması karşılığında alınan ek ödemedir. Basit faiz ve bileşik faiz olarak iki türü vardır.',
    category: 'Temel Finans',
    difficulty: 'beginner',
    examples: [
      'Kredi faizi: %15 yıllık',
      'Mevduat faizi: %8 yıllık',
      'Gecikme faizi',
      'Kart faizi'
    ],
    synonyms: ['Interest', 'Getiri'],
    relatedTerms: ['Kredi', 'Mevduat', 'Anapara', 'Vade'],
    tags: ['kredi', 'mevduat', 'getiri'],
    popularity: 92,
    views: 1400,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-4',
    term: 'Enflasyon',
    definition: 'Genel fiyat seviyesindeki sürekli ve yaygın artış.',
    detailedDefinition: 'Enflasyon, ekonomideki mal ve hizmetlerin fiyatlarının genel seviyesinin zaman içinde artması durumudur. Paranın satın alma gücünü azaltır.',
    category: 'Makroekonomi',
    difficulty: 'intermediate',
    examples: [
      'TÜFE artışı: %12 yıllık',
      'Gıda enflasyonu',
      'Konut enflasyonu',
      'Çekirdek enflasyon'
    ],
    synonyms: ['Fiyat artışı', 'Inflation'],
    relatedTerms: ['Deflasyon', 'TÜFE', 'Merkez Bankası', 'Satın Alma Gücü'],
    tags: ['makroekonomi', 'fiyat', 'merkez bankası'],
    popularity: 96,
    views: 1850,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-5',
    term: 'Borsa',
    definition: 'Menkul değerlerin organize edilmiş şekilde alınıp satıldığı piyasa.',
    detailedDefinition: 'Borsa, hisse senetleri, tahviller ve diğer menkul değerlerin düzenli, güvenli ve şeffaf bir ortamda işlem gördüğü organize piyasadır.',
    category: 'Piyasalar',
    difficulty: 'intermediate',
    examples: [
      'Borsa İstanbul (BIST)',
      'New York Borsası (NYSE)',
      'NASDAQ',
      'Londra Borsası (LSE)'
    ],
    synonyms: ['Menkul Kıymetler Borsası', 'Stock Exchange'],
    relatedTerms: ['Hisse Senedi', 'Tahvil', 'Endeks', 'İşlem Hacmi'],
    tags: ['borsa', 'hisse senedi', 'piyasa'],
    popularity: 94,
    views: 1650,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Yatırım Terimleri
  {
    id: 'term-6',
    term: 'Portföy',
    definition: 'Bir yatırımcının sahip olduğu tüm yatırım araçlarının toplamı.',
    detailedDefinition: 'Portföy, bir yatırımcının riskleri dağıtmak ve getiri elde etmek amacıyla farklı yatırım araçlarından oluşturduğu varlık sepetini ifade eder.',
    category: 'Yatırım',
    difficulty: 'intermediate',
    examples: [
      'Hisse senedi portföyü',
      'Tahvil portföyü',
      'Karma portföy',
      'Emtia portföyü'
    ],
    synonyms: ['Portfolio', 'Varlık Sepeti'],
    relatedTerms: ['Diversifikasyon', 'Risk', 'Getiri', 'Varlık Dağılımı'],
    tags: ['yatırım', 'portföy', 'diversifikasyon'],
    popularity: 89,
    views: 1320,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-7',
    term: 'Diversifikasyon',
    definition: 'Riski azaltmak için yatırımları farklı araçlara dağıtma stratejisi.',
    detailedDefinition: 'Diversifikasyon, "tüm yumurtaları aynı sepete koymama" prensibiyle, yatırım riskini azaltmak için farklı sektör, coğrafya ve varlık türlerine yatırım yapma stratejisidir.',
    category: 'Yatırım',
    difficulty: 'intermediate',
    examples: [
      'Sektörel diversifikasyon',
      'Coğrafi diversifikasyon',
      'Varlık sınıfı diversifikasyonu',
      'Zaman diversifikasyonu'
    ],
    synonyms: ['Çeşitlendirme', 'Dağıtım'],
    relatedTerms: ['Risk Yönetimi', 'Portföy', 'Varlık Dağılımı'],
    tags: ['yatırım', 'risk', 'strateji'],
    popularity: 76,
    views: 890,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-8',
    term: 'Risk',
    definition: 'Yatırımın beklenen getiriyi vermeme veya zarar etme olasılığı.',
    detailedDefinition: 'Risk, finansal yatırımlarda belirsizlik ve kayıp potansiyelini ifade eder. Sistematik ve sistematik olmayan risk olarak ikiye ayrılır.',
    category: 'Yatırım',
    difficulty: 'beginner',
    examples: [
      'Piyasa riski',
      'Kredi riski',
      'Likidite riski',
      'Operasyonel risk'
    ],
    synonyms: ['Belirsizlik', 'Risk'],
    relatedTerms: ['Getiri', 'Volatilite', 'Beta', 'Risk Primi'],
    tags: ['yatırım', 'risk', 'belirsizlik'],
    popularity: 91,
    views: 1420,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-9',
    term: 'Getiri',
    definition: 'Bir yatırımdan elde edilen kazanç oranı.',
    detailedDefinition: 'Getiri, yatırım tutarına göre elde edilen kar veya zarar oranını ifade eder. Nominal getiri ve reel getiri olarak ikiye ayrılır.',
    category: 'Yatırım',
    difficulty: 'beginner',
    examples: [
      'Yıllık %10 getiri',
      'Temettü getirisi',
      'Sermaye kazancı',
      'Toplam getiri'
    ],
    synonyms: ['Return', 'Kazanç', 'Verim'],
    relatedTerms: ['Risk', 'ROI', 'Temettü', 'Sermaye Kazancı'],
    tags: ['yatırım', 'getiri', 'kazanç'],
    popularity: 93,
    views: 1380,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-10',
    term: 'Hisse Senedi',
    definition: 'Bir şirkete ortaklık hakkı veren menkul değer.',
    detailedDefinition: 'Hisse senedi, anonim şirketlerin sermayelerinin eşit paylara bölünmesiyle oluşan ve sahibine şirkette ortaklık hakkı veren menkul değerdir.',
    category: 'Yatırım',
    difficulty: 'beginner',
    examples: [
      'BIST 100 hisseleri',
      'Teknoloji hisseleri',
      'Banka hisseleri',
      'Halka arz hisseleri'
    ],
    synonyms: ['Stock', 'Equity', 'Pay Senedi'],
    relatedTerms: ['Temettü', 'Borsa', 'Halka Arz', 'Piyasa Değeri'],
    tags: ['yatırım', 'hisse', 'şirket'],
    popularity: 97,
    views: 2100,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },

  // Bankacılık Terimleri
  {
    id: 'term-11',
    term: 'Kredi',
    definition: 'Geri ödenmek üzere verilen para veya mal.',
    detailedDefinition: 'Kredi, bankaların veya finansal kurumların müşterilerine belirli şartlar altında geri ödenmek üzere verdikleri paradır. Faiz karşılığında verilir.',
    category: 'Bankacılık',
    difficulty: 'beginner',
    examples: [
      'İhtiyaç kredisi',
      'Konut kredisi',
      'Taşıt kredisi',
      'Ticari kredi'
    ],
    synonyms: ['Loan', 'Borç'],
    relatedTerms: ['Faiz', 'Teminat', 'Anapara', 'Vade'],
    tags: ['bankacılık', 'kredi', 'borç'],
    popularity: 95,
    views: 1750,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-12',
    term: 'Mevduat',
    definition: 'Bankalara emanet edilen para.',
    detailedDefinition: 'Mevduat, kişi ve kurumların bankalar nezdinde tuttukları para olup, belirli faiz karşılığında değerlendirilir.',
    category: 'Bankacılık',
    difficulty: 'beginner',
    examples: [
      'Vadesiz mevduat',
      'Vadeli mevduat',
      'Döviz mevduatı',
      'Altın mevduatı'
    ],
    synonyms: ['Deposit', 'Banka Hesabı'],
    relatedTerms: ['Faiz', 'Banka', 'TMSF', 'Likidite'],
    tags: ['bankacılık', 'mevduat', 'tasarruf'],
    popularity: 87,
    views: 1280,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-13',
    term: 'Teminat',
    definition: 'Bir borcun ödenmemesi durumunda karşılığında alınan güvence.',
    detailedDefinition: 'Teminat, kredi borçlusunun borcunu ödeyememesi durumunda bankanın alacağını güvence altına alan varlık veya garantilerdir.',
    category: 'Bankacılık',
    difficulty: 'intermediate',
    examples: [
      'Gayrimenkul teminatı',
      'Nakit teminat',
      'Kefalet',
      'İpotek'
    ],
    synonyms: ['Güvence', 'Collateral'],
    relatedTerms: ['Kredi', 'İpotek', 'Rehin', 'Kefalet'],
    tags: ['bankacılık', 'teminat', 'güvence'],
    popularity: 78,
    views: 920,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },

  // Kripto Para Terimleri
  {
    id: 'term-14',
    term: 'Bitcoin',
    definition: 'İlk ve en bilinen kripto para birimi.',
    detailedDefinition: 'Bitcoin, 2009 yılında Satoshi Nakamoto tarafından oluşturulan, merkezi olmayan dijital para sistemidir. Blockchain teknolojisi kullanır.',
    category: 'Kripto Para',
    difficulty: 'intermediate',
    examples: [
      'BTC sembolü',
      'Dijital altın',
      'Peer-to-peer ödemeler',
      'Sınırlı arz (21 milyon)'
    ],
    synonyms: ['BTC', 'Dijital Altın'],
    relatedTerms: ['Blockchain', 'Mining', 'Wallet', 'Altcoin'],
    tags: ['kripto', 'bitcoin', 'blockchain'],
    popularity: 98,
    views: 2850,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-15',
    term: 'Blockchain',
    definition: 'Dağıtık defter teknolojisi.',
    detailedDefinition: 'Blockchain, işlemlerin kronolojik sırayla kaydedildiği, değiştirilemez ve dağıtık bir veri tabanı teknolojisidir.',
    category: 'Kripto Para',
    difficulty: 'advanced',
    examples: [
      'Bitcoin blockchain\'i',
      'Ethereum blockchain\'i',
      'Akıllı kontratlar',
      'NFT işlemleri'
    ],
    synonyms: ['Dağıtık Defter', 'Blok Zinciri'],
    relatedTerms: ['Kripto Para', 'Mining', 'Hash', 'Node'],
    tags: ['blockchain', 'teknoloji', 'dağıtık'],
    popularity: 85,
    views: 1450,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },

  // Daha fazla terim...
  {
    id: 'term-16',
    term: 'Bütçe',
    definition: 'Belirli dönemdeki gelir ve giderlerin planlanması.',
    detailedDefinition: 'Bütçe, bir kişi, aile, kurum veya devletin belirli bir dönem için gelir ve giderlerini önceden planlayarak hazırladığı finansal plandır.',
    category: 'Temel Finans',
    difficulty: 'beginner',
    examples: [
      'Aile bütçesi',
      'Devlet bütçesi',
      'Şirket bütçesi',
      'Proje bütçesi'
    ],
    synonyms: ['Budget', 'Finansal Plan'],
    relatedTerms: ['Gelir', 'Gider', 'Tasarruf', 'Harcama'],
    tags: ['bütçe', 'planlama', 'finans'],
    popularity: 90,
    views: 1600,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-17',
    term: 'Likidite',
    definition: 'Bir varlığın nakde çevrilebilme kolaylığı.',
    detailedDefinition: 'Likidite, bir varlığın değer kaybı yaşamadan hızlı bir şekilde nakde çevrilebilme özelliğidir. Yüksek likidite, kolay nakde çevrilebilirlik anlamına gelir.',
    category: 'Temel Finans',
    difficulty: 'intermediate',
    examples: [
      'Nakit en likit varlık',
      'Hisse senedi likiditesi',
      'Gayrimenkul düşük likidite',
      'Banka mevduatı yüksek likidite'
    ],
    synonyms: ['Nakit Çevrilebilirlik', 'Liquidity'],
    relatedTerms: ['Nakit', 'Varlık', 'Piyasa Derinliği'],
    tags: ['likidite', 'varlık', 'nakit'],
    popularity: 82,
    views: 1120,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-18',
    term: 'Tahvil',
    definition: 'Borç senedi türünde menkul değer.',
    detailedDefinition: 'Tahvil, devlet veya özel şirketlerin finansman ihtiyaçlarını karşılamak için ihraç ettikleri, sahibine belirli faiz ödemesi yapan borç senedidir.',
    category: 'Yatırım',
    difficulty: 'intermediate',
    examples: [
      'Devlet tahvili',
      'Özel sektör tahvili',
      'Eurobond',
      'Sukuk'
    ],
    synonyms: ['Bond', 'Borç Senedi'],
    relatedTerms: ['Kupon', 'Vade', 'Faiz', 'İhraç'],
    tags: ['tahvil', 'yatırım', 'borç'],
    popularity: 79,
    views: 1050,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-19',
    term: 'Temettü',
    definition: 'Şirketlerin hissedarlarına dağıttığı kar payı.',
    detailedDefinition: 'Temettü, anonim şirketlerin elde ettikleri kardan hissedarlara dağıttıkları para veya hisse senedi şeklindeki ödemelerdir.',
    category: 'Yatırım',
    difficulty: 'beginner',
    examples: [
      'Nakit temettü',
      'Hisse senedi temettüsü',
      'Ara temettü',
      'Yıl sonu temettüsü'
    ],
    synonyms: ['Dividend', 'Kar Payı'],
    relatedTerms: ['Hisse Senedi', 'Kar', 'Getiri', 'Yıllık Getiri'],
    tags: ['temettü', 'hisse', 'kar'],
    popularity: 84,
    views: 1190,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-20',
    term: 'Piyasa Değeri',
    definition: 'Bir şirketin toplam değeri.',
    detailedDefinition: 'Piyasa değeri, bir şirketin borsadaki hisse fiyatı ile toplam hisse sayısının çarpımıyla hesaplanan toplam değeridir.',
    category: 'Piyasalar',
    difficulty: 'intermediate',
    examples: [
      'Apple: 3 trilyon dolar',
      'BIST 100 şirketleri',
      'Büyük-orta-küçük ölçekli şirketler',
      'Market cap hesaplama'
    ],
    synonyms: ['Market Cap', 'Şirket Değeri'],
    relatedTerms: ['Hisse Senedi', 'Borsa', 'Piyasa Fiyatı'],
    tags: ['piyasa', 'değer', 'şirket'],
    popularity: 77,
    views: 980,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Daha fazla bankacılık terimi
  {
    id: 'term-21',
    term: 'IBAN',
    definition: 'Uluslararası Banka Hesap Numarası.',
    detailedDefinition: 'IBAN (International Bank Account Number), uluslararası para transferlerinde kullanılan standart hesap numarası formatıdır. Türkiye\'de TR ile başlayan 26 haneli kod yapısına sahiptir.',
    category: 'Bankacılık',
    difficulty: 'beginner',
    examples: [
      'TR64 0001 0001 0000 0000 5058 82',
      'Havale ve EFT işlemleri',
      'SWIFT transferleri',
      'Uluslararası ödemeler'
    ],
    synonyms: ['Hesap Numarası', 'International Bank Account Number'],
    relatedTerms: ['SWIFT', 'Havale', 'EFT', 'Banka Hesabı'],
    tags: ['iban', 'banka', 'hesap', 'transfer'],
    popularity: 88,
    views: 1520,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-22',
    term: 'EFT',
    definition: 'Elektronik Fon Transferi.',
    detailedDefinition: 'EFT, aynı banka şubeleri veya farklı bankalar arasında elektronik ortamda gerçekleştirilen para transfer işlemidir. Türkiye\'de bankalar arası para transferinin en yaygın yöntemidir.',
    category: 'Bankacılık',
    difficulty: 'beginner',
    examples: [
      'Maaş ödemesi',
      'Fatura ödemesi',
      'Kira transferi',
      'Ticari ödemeler'
    ],
    synonyms: ['Elektronik Para Transferi', 'Wire Transfer'],
    relatedTerms: ['Havale', 'IBAN', 'Swift', 'Banka'],
    tags: ['eft', 'transfer', 'ödeme', 'elektronik'],
    popularity: 85,
    views: 1340,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-23',
    term: 'Anapara',
    definition: 'Kredi veya yatırımın ana tutarı.',
    detailedDefinition: 'Anapara, bir kredinin asıl tutarını veya bir yatırımın başlangıç tutarını ifade eder. Faiz hesaplamalarının temelini oluşturan ana miktardır.',
    category: 'Bankacılık',
    difficulty: 'beginner',
    examples: [
      '100.000 TL kredi anparası',
      'Mortgage ana tutarı',
      'Yatırım anaparası',
      'Borç anaparası'
    ],
    synonyms: ['Principal', 'Ana Tutar', 'Asıl Borç'],
    relatedTerms: ['Faiz', 'Kredi', 'Taksit', 'Vade'],
    tags: ['anapara', 'kredi', 'borç', 'yatırım'],
    popularity: 75,
    views: 890,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Makroekonomi terimleri
  {
    id: 'term-24',
    term: 'GSYİH',
    definition: 'Gayri Safi Yurt İçi Hasıla.',
    detailedDefinition: 'GSYİH, bir ülkenin belirli bir dönemde (genellikle bir yıl) ürettiği tüm mal ve hizmetlerin parasal değerinin toplamıdır. Ekonomik büyüklüğün en önemli göstergesidir.',
    category: 'Makroekonomi',
    difficulty: 'intermediate',
    examples: [
      'Türkiye GSYİH: 819 milyar dolar (2022)',
      'Kişi başına GSYİH',
      'GSYİH büyüme oranı',
      'Nominal ve reel GSYİH'
    ],
    synonyms: ['GDP', 'Milli Gelir', 'Yurt İçi Hasıla'],
    relatedTerms: ['Ekonomik Büyüme', 'Milli Gelir', 'Kişi Başına Gelir'],
    tags: ['gsyih', 'ekonomi', 'büyüme', 'makro'],
    popularity: 92,
    views: 1780,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-25',
    term: 'Deflasyon',
    definition: 'Genel fiyat seviyesindeki sürekli düşüş.',
    detailedDefinition: 'Deflasyon, ekonomideki mal ve hizmet fiyatlarının genel seviyesinin zaman içinde düşmesi durumudur. Enflasyonun tersi olarak düşünülebilir ve ekonomik durgunluğun işareti olabilir.',
    category: 'Makroekonomi',
    difficulty: 'intermediate',
    examples: [
      'Japonya deflasyon deneyimi',
      'Teknoloji sektörü deflasyonu',
      'Varlık fiyatları deflasyonu',
      '2008 kriz sonrası deflasyon riski'
    ],
    synonyms: ['Fiyat Düşüşü', 'Negative Inflation'],
    relatedTerms: ['Enflasyon', 'Durgunluk', 'Para Politikası'],
    tags: ['deflasyon', 'fiyat', 'ekonomi', 'durgunluk'],
    popularity: 68,
    views: 720,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Sigorta terimleri
  {
    id: 'term-26',
    term: 'Prim',
    definition: 'Sigorta poliçesi için ödenen ücret.',
    detailedDefinition: 'Prim, sigortalının sigorta şirketine sigorta koruması karşılığında ödediği para miktarıdır. Risk seviyesi, kapsam ve vade gibi faktörlere göre belirlenir.',
    category: 'Sigorta',
    difficulty: 'beginner',
    examples: [
      'Kasko primi',
      'Hayat sigortası primi',
      'Sağlık sigortası primi',
      'Yangın sigortası primi'
    ],
    synonyms: ['Sigorta Ücreti', 'Premium'],
    relatedTerms: ['Poliçe', 'Teminat', 'Risk', 'Sigorta'],
    tags: ['prim', 'sigorta', 'ödeme', 'poliçe'],
    popularity: 73,
    views: 920,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-27',
    term: 'Muafiyet',
    definition: 'Sigortalının kendisinin karşıladığı zarar tutarı.',
    detailedDefinition: 'Muafiyet, bir sigorta tazminatında sigortalının kendi üzerine aldığı miktar veya orandır. Bu tutar kadar zarar sigorta şirketi tarafından karşılanmaz.',
    category: 'Sigorta',
    difficulty: 'intermediate',
    examples: [
      'Kasko muafiyeti: 2.000 TL',
      'Sağlık sigortası muafiyeti',
      'Konut sigortası muafiyeti',
      '%10 oranında muafiyet'
    ],
    synonyms: ['Franchise', 'Deductible', 'İndirilebilir Tutar'],
    relatedTerms: ['Tazminat', 'Sigorta', 'Prim', 'Poliçe'],
    tags: ['muafiyet', 'sigorta', 'tazminat', 'zarar'],
    popularity: 65,
    views: 680,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Vergi terimleri
  {
    id: 'term-28',
    term: 'KDV',
    definition: 'Katma Değer Vergisi.',
    detailedDefinition: 'KDV, mal ve hizmet satışlarından alınan dolaylı bir vergi türüdür. Türkiye\'de genel oran %18 olup, bazı mal ve hizmetlerde indirimli oranlar uygulanır.',
    category: 'Vergi',
    difficulty: 'beginner',
    examples: [
      'Gıda ürünleri %1 KDV',
      'Genel mal ve hizmetler %18 KDV',
      'Bazı hizmetler %8 KDV',
      'KDV iadesi'
    ],
    synonyms: ['VAT', 'Value Added Tax', 'Katma Değer Vergisi'],
    relatedTerms: ['Vergi', 'ÖTV', 'Fatura', 'İade'],
    tags: ['kdv', 'vergi', 'fatura', 'ödeme'],
    popularity: 89,
    views: 1650,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  {
    id: 'term-29',
    term: 'Gelir Vergisi',
    definition: 'Gerçek kişilerin gelirlerinden alınan vergi.',
    detailedDefinition: 'Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde ettikleri gelirlerinden alınan vergidir. Artan oranlı tarife uygulanır ve 2024 yılında %15-40 arasında değişir.',
    category: 'Vergi',
    difficulty: 'intermediate',
    examples: [
      'Maaş gelir vergisi',
      'Kira gelir vergisi',
      'Serbest meslek gelir vergisi',
      'Sermaye kazancı vergisi'
    ],
    synonyms: ['Income Tax', 'Personal Income Tax'],
    relatedTerms: ['Stopaj', 'Muhtasar', 'Beyanname', 'Matrah'],
    tags: ['gelir vergisi', 'vergi', 'maaş', 'beyanname'],
    popularity: 86,
    views: 1420,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
  
  // Kripto para terimleri
  {
    id: 'term-30',
    term: 'Mining',
    definition: 'Kripto para madenciliği.',
    detailedDefinition: 'Mining, blockchain ağında işlemleri doğrulama ve yeni bloklar oluşturma sürecidir. Madenciler bu iş karşılığında kripto para ödülü alırlar.',
    category: 'Kripto Para',
    difficulty: 'advanced',
    examples: [
      'Bitcoin mining',
      'GPU mining',
      'ASIC mining',
      'Mining pool\'ları'
    ],
    synonyms: ['Madencilik', 'Crypto Mining'],
    relatedTerms: ['Blockchain', 'Hash', 'Proof of Work', 'Node'],
    tags: ['mining', 'blockchain', 'kripto', 'madencilik'],
    popularity: 78,
    views: 1240,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z'
  },
]; 
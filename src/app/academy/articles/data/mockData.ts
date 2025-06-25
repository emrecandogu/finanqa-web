import { Article, Author, ArticleCategory, ArticleTag } from './articleTypes';

// Yazarlar
export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Dr. Mehmet Yılmaz',
    title: 'Finansal Planlama Uzmanı',
    bio: '15 yıllık deneyime sahip finansal planlama uzmanı. Kişisel finans ve yatırım konularında 50+ makale yazmıştır.',
    avatar: 'https://ui-avatars.com/api/?name=Mehmet+Yilmaz&background=10b981&color=fff&size=200&bold=true',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 'author-2',
    name: 'Ayşe Demir',
    title: 'Yatırım Danışmanı',
    bio: 'SPK lisanslı yatırım danışmanı. Borsa ve kripto para konularında uzman.',
    avatar: 'https://ui-avatars.com/api/?name=Ayse+Demir&background=3b82f6&color=fff&size=200&bold=true',
    socialLinks: {
      linkedin: '#'
    }
  },
  {
    id: 'author-3',
    name: 'Can Özkan',
    title: 'Fintech Uzmanı',
    bio: 'Finansal teknolojiler ve dijital bankacılık konularında 10 yıllık deneyim.',
    avatar: 'https://ui-avatars.com/api/?name=Can+Ozkan&background=f59e0b&color=fff&size=200&bold=true',
    socialLinks: {
      website: '#',
      twitter: '#'
    }
  }
];

// Kategoriler
export const categories: ArticleCategory[] = [
  {
    id: 'cat-1',
    name: 'Kişisel Finans',
    slug: 'kisisel-finans',
    description: 'Bütçe yönetimi, tasarruf ve kişisel finansal planlama',
    color: '#10b981',
    icon: 'wallet'
  },
  {
    id: 'cat-2',
    name: 'Yatırım',
    slug: 'yatirim',
    description: 'Hisse senedi, tahvil, fon ve yatırım stratejileri',
    color: '#3b82f6',
    icon: 'trending-up'
  },
  {
    id: 'cat-3',
    name: 'Kripto Para',
    slug: 'kripto-para',
    description: 'Bitcoin, Ethereum ve kripto para dünyası',
    color: '#f59e0b',
    icon: 'bitcoin'
  }
];

// Etiketler
export const tags: ArticleTag[] = [
  { id: 'tag-1', name: 'Başlangıç', slug: 'baslangic' },
  { id: 'tag-2', name: 'İleri Seviye', slug: 'ileri-seviye' },
  { id: 'tag-3', name: 'Bütçe', slug: 'butce' },
  { id: 'tag-4', name: 'Tasarruf', slug: 'tasarruf' },
  { id: 'tag-5', name: 'Borsa', slug: 'borsa' },
  { id: 'tag-6', name: 'Bitcoin', slug: 'bitcoin' },
  { id: 'tag-7', name: 'Emeklilik', slug: 'emeklilik' },
  { id: 'tag-8', name: 'Ethereum', slug: 'ethereum' },
  { id: 'tag-9', name: 'Kredi Kartı', slug: 'kredi-karti' },
  { id: 'tag-10', name: 'Fintech', slug: 'fintech' },
  { id: 'tag-11', name: 'Dijital Bankacılık', slug: 'dijital-bankacilik' },
  { id: 'tag-12', name: 'Vergi', slug: 'vergi' },
  { id: 'tag-13', name: 'Startup', slug: 'startup' },
  { id: 'tag-14', name: 'Girişimcilik', slug: 'girisimcilik' }
];

// Makaleler
export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Finansal Okuryazarlık: 2024 Rehberi',
    slug: 'finansal-okuryazarlik-2024-rehberi',
    excerpt: 'Finansal okuryazarlığın temel kavramlarını ve 2024 yılında neden daha da önemli hale geldiğini keşfedin.',
    content: `# Finansal Okuryazarlık: 2024 Rehberi

Finansal okuryazarlık, günümüzde herkesin sahip olması gereken temel bir beceri haline gelmiştir. 2024 yılında ekonomik belirsizliklerin arttığı bir dönemde, finansal kararlarınızı bilinçli bir şekilde vermeniz daha da kritik hale gelmiştir.

## Finansal Okuryazarlık Nedir?

Finansal okuryazarlık, para yönetimi, bütçe planlaması, yatırım, tasarruf ve borç yönetimi gibi konularda temel bilgilere sahip olmaktır. Bu beceriler, günlük finansal kararlarınızı daha bilinçli vermenizi sağlar.

## 2024'te Neden Daha Önemli?

1. **Enflasyon Etkisi**: Yüksek enflasyon oranları satın alma gücünüzü etkiliyor
2. **Dijital Dönüşüm**: Finansal hizmetler hızla dijitalleşiyor
3. **Yeni Yatırım Araçları**: Kripto para, DeFi gibi yeni seçenekler ortaya çıkıyor
4. **Ekonomik Belirsizlik**: Global ekonomik dalgalanmalar artıyor

## Temel Finansal Kavramlar

### 1. Bütçe Yönetimi
- Gelir ve gider takibi
- 50/30/20 kuralı
- Acil durum fonu oluşturma

### 2. Tasarruf Stratejileri
- Otomatik tasarruf planları
- Yüksek faizli tasarruf hesapları
- Vadeli mevduat seçenekleri

### 3. Yatırım Temelleri
- Risk ve getiri ilişkisi
- Portföy çeşitlendirmesi
- Uzun vadeli yatırım stratejileri

### 4. Borç Yönetimi
- Kredi kartı kullanımı
- Kredi puanı yönetimi
- Borç konsolidasyonu

## Finansal Okuryazarlığı Geliştirme Yolları

1. **Sürekli Eğitim**: Finansal konularda kendinizi geliştirin
2. **Pratik Uygulama**: Öğrendiklerinizi hayata geçirin
3. **Uzman Desteği**: Gerektiğinde profesyonel yardım alın
4. **Teknoloji Kullanımı**: Finansal uygulamalardan faydalanın

## 2024 Trendleri

### Dijital Bankacılık
Modern bankacılık hizmetleri tamamen dijitalleşiyor. Mobil uygulamalar üzerinden tüm işlemlerinizi yapabilir, harcamalarınızı takip edebilirsiniz.

### Sürdürülebilir Yatırım
ESG (Çevresel, Sosyal, Yönetişim) kriterleri yatırım kararlarında daha önemli hale geliyor.

### Finansal Wellness
Şirketler çalışanlarına finansal eğitim ve danışmanlık hizmetleri sunmaya başlıyor.

## Sonuç

Finansal okuryazarlık, 2024 yılında finansal başarı için vazgeçilmez bir beceridir. Bu rehberdeki adımları takip ederek, finansal geleceğinizi güvence altına alabilirsiniz.

Unutmayın: Finansal okuryazarlık bir yolculuktur, hedef değil. Sürekli öğrenmeye ve gelişmeye devam edin.`,
    featuredImage: '/images/articles/financial-literacy-2024.jpg',
    author: authors[0],
    category: categories[0],
    tags: [tags[0], tags[2], tags[3]],
    metadata: {
      title: 'Finansal Okuryazarlık: 2024 Rehberi | Finanqa',
      description: 'Finansal okuryazarlığın temel kavramlarını keşfedin.',
      keywords: ['finansal okuryazarlık', 'bütçe yönetimi', 'tasarruf'],
      ogImage: '/images/articles/financial-literacy-2024-og.jpg'
    },
    stats: {
      views: 1250,
      likes: 89,
      shares: 34,
      comments: 12,
      readTime: 8,
      avgRating: 4.6
    },
    status: 'published',
    publishedAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
    createdAt: '2024-03-10T14:30:00Z',
    isFeatured: true,
    isPremium: false,
    difficulty: 'beginner'
  },
  {
    id: 'article-4',
    title: 'Borsa Yatırımı: Başlangıç Rehberi',
    slug: 'borsa-yatirimi-baslangic-rehberi',
    excerpt: 'Borsa yatırımına başlamak isteyenler için temel bilgiler ve stratejiler.',
    content: `Borsa yatırımı, uzun vadeli finansal hedeflerinize ulaşmanın etkili yollarından biridir. Bu rehberde, borsa yatırımına nasıl başlayacağınızı öğreneceksiniz.

## Borsa Nedir?

Borsa, şirketlerin hisse senetlerinin alınıp satıldığı organize piyasadır. Yatırımcılar, şirketlerin ortağı olarak gelecekteki büyümelerinden pay alabilirler.

## Borsa Yatırımının Avantajları

1. **Uzun Vadeli Büyüme**: Tarihsel olarak borsalar uzun vadede pozitif getiri sağlamıştır
2. **Enflasyona Karşı Koruma**: Hisse senetleri enflasyona karşı doğal bir koruma sağlar
3. **Likidite**: Hisse senetleri kolayca alınıp satılabilir
4. **Çeşitlendirme**: Farklı sektörlere yatırım yaparak riski dağıtabilirsiniz

## Başlamadan Önce Bilinmesi Gerekenler

### Risk Yönetimi
- Sadece kaybetmeyi göze alabileceğiniz parayı yatırın
- Portföyünüzü çeşitlendirin
- Uzun vadeli düşünün

### Temel Analiz
- Şirketlerin finansal durumlarını inceleyin
- Sektör analizleri yapın
- Makroekonomik faktörleri takip edin

## Yatırım Stratejileri

### 1. Değer Yatırımı
Gerçek değerinin altında işlem gören hisse senetlerini bulma stratejisi.

### 2. Büyüme Yatırımı
Hızlı büyüyen şirketlere odaklanma stratejisi.

### 3. Temettü Yatırımı
Düzenli temettü ödeyen şirketlere yatırım yapma.

### 4. Endeks Yatırımı
Geniş piyasa endekslerini takip eden fonlara yatırım.

## İlk Adımlar

1. **Eğitim**: Borsa ve yatırım konularında kendinizi geliştirin
2. **Aracı Kurum Seçimi**: Güvenilir bir aracı kurum seçin
3. **Yatırım Planı**: Hedeflerinizi ve stratejinizi belirleyin
4. **Küçük Başlayın**: İlk yatırımlarınızı küçük tutun

## Sonuç

Borsa yatırımı, doğru bilgi ve strateji ile uzun vadeli finansal başarı için güçlü bir araçtır. Sabırlı olun ve sürekli öğrenmeye devam edin.`,
    featuredImage: '/images/articles/stock-investment.jpg',
    author: authors[1],
    category: categories[1],
    tags: [tags[1], tags[4]],
    metadata: {
      title: 'Borsa Yatırımı: Başlangıç Rehberi | Finanqa',
      description: 'Borsa yatırımına başlamak isteyenler için temel bilgiler ve stratejiler.',
      keywords: ['borsa', 'hisse senedi', 'yatırım', 'finansal piyasalar'],
      ogImage: '/images/articles/stock-investment-og.jpg'
    },
    stats: {
      views: 1890,
      likes: 142,
      shares: 56,
      comments: 28,
      readTime: 10,
      avgRating: 4.7
    },
    status: 'published',
    publishedAt: '2024-03-12T16:00:00Z',
    updatedAt: '2024-03-12T16:00:00Z',
    createdAt: '2024-03-07T09:45:00Z',
    isFeatured: false,
    isPremium: false,
    difficulty: 'intermediate'
  },
  {
    id: 'article-5',
    title: 'Emeklilik Planlaması: Geleceğe Yatırım',
    slug: 'emeklilik-planlamasi-gelecege-yatirim',
    excerpt: 'Erken yaşta emeklilik planlaması için stratejiler ve bireysel emeklilik sistemi hakkında bilgiler.',
    content: `Emeklilik planlaması, finansal geleceğinizi güvence altına almanın en önemli adımlarından biridir. Bu makalede, etkili emeklilik planlaması stratejilerini öğreneceksiniz.

## Neden Emeklilik Planlaması Önemli?

1. **Yaşam Standardını Koruma**: Emeklilik döneminde mevcut yaşam standardınızı sürdürebilmek
2. **Enflasyon Etkisi**: Paranın satın alma gücündeki azalmaya karşı koruma
3. **Sağlık Giderleri**: Yaşlılıkta artan sağlık harcamalarına hazırlık
4. **Bağımsızlık**: Finansal bağımsızlığınızı koruma

## Emeklilik Planlaması Adımları

### 1. Hedef Belirleme
- Ne zaman emekli olmak istiyorsunuz?
- Aylık ne kadar gelire ihtiyacınız olacak?
- Hangi yaşam standardını hedefliyorsunuz?

### 2. Mevcut Durumu Değerlendirme
- Sosyal güvenlik hakları
- Mevcut birikimler
- Yatırım portföyü
- Diğer gelir kaynakları

### 3. Açığı Hesaplama
Hedeflediğiniz emeklilik geliri ile mevcut birikimleriniz arasındaki farkı belirleyin.

## Bireysel Emeklilik Sistemi (BES)

### Avantajları
- **Vergi Avantajı**: Yıllık %25 devlet katkısı
- **Esneklik**: Katkı miktarını değiştirebilme
- **Çeşitlilik**: Farklı fon seçenekleri
- **Taşınabilirlik**: Şirket değişikliğinde devam edebilme

### BES Fon Türleri
1. **Hisse Senedi Fonları**: Yüksek getiri potansiyeli, yüksek risk
2. **Tahvil Fonları**: Orta getiri, düşük risk
3. **Karma Fonları**: Dengeli risk-getiri profili
4. **Para Piyasası Fonları**: Düşük getiri, çok düşük risk

## Yatırım Stratejileri

### Yaş Bazlı Strateji
- **20-30 yaş**: %80 hisse senedi, %20 tahvil
- **30-40 yaş**: %70 hisse senedi, %30 tahvil
- **40-50 yaş**: %60 hisse senedi, %40 tahvil
- **50+ yaş**: %40 hisse senedi, %60 tahvil

### Çeşitlendirme
- Farklı varlık sınıflarına yatırım
- Coğrafi çeşitlendirme
- Sektörel dağılım

## Emeklilik Planlaması İpuçları

1. **Erken Başlayın**: Bileşik faizin gücünden yararlanın
2. **Düzenli Katkı**: Aylık düzenli katkılar yapın
3. **Otomatik Artış**: Maaş artışlarınızla katkıları artırın
4. **Gözden Geçirme**: Yılda bir planınızı gözden geçirin

## Sonuç

Emeklilik planlaması, uzun vadeli bir maraton gibidir. Erken başlamak, düzenli katkılar yapmak ve doğru yatırım stratejileri ile rahat bir emeklilik dönemi geçirebilirsiniz.`,
    featuredImage: '/images/articles/retirement-planning.jpg',
    author: authors[0],
    category: categories[0],
    tags: [tags[0], tags[3]],
    metadata: {
      title: 'Emeklilik Planlaması: Geleceğe Yatırım | Finanqa',
      description: 'Erken yaşta emeklilik planlaması için stratejiler ve bireysel emeklilik sistemi hakkında bilgiler.',
      keywords: ['emeklilik', 'BES', 'bireysel emeklilik', 'finansal planlama'],
      ogImage: '/images/articles/retirement-planning-og.jpg'
    },
    stats: {
      views: 2340,
      likes: 187,
      shares: 73,
      comments: 34,
      readTime: 11,
      avgRating: 4.9
    },
    status: 'published',
    publishedAt: '2024-03-11T11:00:00Z',
    updatedAt: '2024-03-11T11:00:00Z',
    createdAt: '2024-03-06T13:20:00Z',
    isFeatured: true,
    isPremium: false,
    difficulty: 'beginner'
  },
  {
    id: 'article-6',
    title: 'Kripto Para Yatırımı: Bitcoin ve Ethereum Rehberi',
    slug: 'kripto-para-yatirimi-bitcoin-ethereum-rehberi',
    excerpt: 'Bitcoin, Ethereum ve diğer kripto paralara yatırım yapmak isteyenler için kapsamlı rehber.',
    content: `Kripto para dünyası hızla gelişiyor ve yatırımcılar için yeni fırsatlar sunuyor. Bu rehberde kripto para yatırımının temellerini öğreneceksiniz.

## Kripto Para Nedir?

Kripto paralar, kriptografi teknolojisi kullanılarak güvence altına alınan dijital varlıklardır. Merkezi olmayan yapıları sayesinde geleneksel finansal sistemlerden bağımsız olarak çalışırlar.

## Popüler Kripto Paralar

### Bitcoin (BTC)
- İlk ve en bilinen kripto para
- Dijital altın olarak kabul edilir
- Sınırlı arz (21 milyon)
- Store of value olarak kullanılır

### Ethereum (ETH)
- Akıllı kontrat platformu
- DeFi ekosisteminin temeli
- NFT işlemlerinde yaygın kullanım
- Ethereum 2.0 ile daha verimli

### Diğer Önemli Kripto Paralar
- **Binance Coin (BNB)**: Binance borsasının tokeni
- **Cardano (ADA)**: Üçüncü nesil blockchain
- **Solana (SOL)**: Hızlı ve düşük maliyetli işlemler
- **Polkadot (DOT)**: Blockchain interoperability

## Kripto Para Yatırımı Stratejileri

### 1. HODLing
Uzun vadeli tutma stratejisi. "Hold On for Dear Life" kısaltması.

### 2. Dollar Cost Averaging (DCA)
Düzenli aralıklarla sabit miktar yatırım yapma.

### 3. Swing Trading
Kısa-orta vadeli fiyat dalgalanmalarından yararlanma.

### 4. Staking
Proof-of-Stake kripto paraları staking yaparak gelir elde etme.

## Riskler ve Dikkat Edilmesi Gerekenler

### Yüksek Volatilite
Kripto paralar çok volatil varlıklardır. Fiyatlar hızla değişebilir.

### Regülasyon Riskleri
Hükümetlerin düzenlemeleri kripto paraları etkileyebilir.

### Teknolojik Riskler
Hack saldırıları, teknik problemler ve güvenlik açıkları.

### Güvenlik Önerileri
1. **Güvenli Cüzdanlar**: Hardware wallet kullanın
2. **İki Faktörlü Doğrulama**: Tüm hesaplarınızda aktif edin
3. **Özel Anahtarları Saklayın**: Güvenli bir yerde saklayın
4. **Güvenilir Borsalar**: Lisanslı ve güvenilir borsaları tercih edin

## Kripto Para Alım-Satım Platformları

### Türkiye'deki Borsalar
- BTCTurk
- Binance TR
- Paribu
- Bitexen

### Uluslararası Borsalar
- Binance
- Coinbase
- Kraken
- KuCoin

## DeFi (Decentralized Finance)

DeFi, geleneksel finansal hizmetlerin blockchain üzerinde sunulmasıdır.

### DeFi Hizmetleri
- **Lending/Borrowing**: Borç verme/alma
- **DEX**: Merkezi olmayan borsalar
- **Yield Farming**: Likidite sağlayarak gelir elde etme
- **Liquidity Mining**: Token ödülü kazanma

## Sonuç

Kripto para yatırımı yüksek potansiyel getiri sunar ancak aynı zamanda yüksek riskler içerir. Eğitim alın, küçük miktarlarla başlayın ve asla kaybetmeyi göze alamayacağınız parayı yatırmayın.`,
    featuredImage: '/images/articles/crypto-investment.jpg',
    author: authors[2],
    category: categories[2],
    tags: [tags[5], tags[6], tags[7]],
    metadata: {
      title: 'Kripto Para Yatırımı: Bitcoin ve Ethereum Rehberi | Finanqa',
      description: 'Bitcoin, Ethereum ve diğer kripto paralara yatırım yapmak isteyenler için kapsamlı rehber.',
      keywords: ['kripto para', 'bitcoin', 'ethereum', 'blockchain', 'defi'],
      ogImage: '/images/articles/crypto-investment-og.jpg'
    },
    stats: {
      views: 3200,
      likes: 234,
      shares: 89,
      comments: 45,
      readTime: 12,
      avgRating: 4.5
    },
    status: 'published',
    publishedAt: '2024-03-10T14:00:00Z',
    updatedAt: '2024-03-10T14:00:00Z',
    createdAt: '2024-03-05T16:15:00Z',
    isFeatured: true,
    isPremium: true,
    difficulty: 'intermediate'
  },
  {
    id: 'article-7',
    title: 'Kredi Kartı Kullanımı: Avantajlar ve Dikkat Edilmesi Gerekenler',
    slug: 'kredi-karti-kullanimi-avantajlar-dikkat-edilmesi-gerekenler',
    excerpt: 'Kredi kartlarını doğru kullanarak finansal avantaj sağlama yolları ve kaçınılması gereken hatalar.',
    content: `Kredi kartları doğru kullanıldığında güçlü finansal araçlardır. Bu rehberde kredi kartı kullanımının inceliklerini öğreneceksiniz.

## Kredi Kartı Nedir?

Kredi kartı, bankanın size verdiği belirli bir limitin çerçevesinde harcama yapmanıza olanak sağlayan ödeme aracıdır. Harcadığınız tutarı belirli bir süre sonra geri ödemeniz gerekir.

## Kredi Kartının Avantajları

### 1. Nakit Akışı Yönetimi
- Acil durumlarda likidite sağlar
- Maaş günü öncesi harcamalar
- Büyük alımları taksitlendirme

### 2. Güvenlik
- Online alışverişlerde güvenli ödeme
- Dolandırıcılığa karşı koruma
- Sigorta kapsamı

### 3. Ödül ve Avantajlar
- Cashback programları
- Mil biriktirme
- İndirim ve kampanyalar
- Havalimanı lounge erişimi

### 4. Kredi Geçmişi Oluşturma
Düzenli kullanım ve ödemelerle kredi puanınızı geliştirebilirsiniz.

## Kredi Kartı Türleri

### 1. Standart Kartlar
- Temel özellikler
- Düşük yıllık ücret
- Sınırlı avantajlar

### 2. Gold/Platinum Kartlar
- Daha yüksek limitler
- Ekstra avantajlar
- Sigorta kapsamı

### 3. Premium Kartlar
- En yüksek limitler
- Lüks avantajlar
- Concierge hizmetleri

### 4. Affinity Kartlar
- Markaya özel kartlar
- Özel ödül programları
- Markanın avantajları

## Doğru Kullanım Stratejileri

### 1. Tam Ödeme Yapın
Her ay ekstrenizin tamamını ödeyin. Bu şekilde faiz ödemezsiniz.

### 2. %30 Kuralı
Kredi limitinizin %30'undan fazlasını kullanmamaya çalışın.

### 3. Otomatik Ödeme
Minimum ödemeyi kaçırmamak için otomatik ödeme talimatı verin.

### 4. Ekstreleri Takip Edin
Düzenli olarak harcamalarınızı kontrol edin.

## Kaçınılması Gereken Hatalar

### 1. Sadece Minimum Ödeme
Yüksek faiz oranları nedeniyle borcunuz sürekli artar.

### 2. Nakit Avans
Çok yüksek faiz oranları ve komisyonlar.

### 3. Çok Fazla Kart
Yönetimi zorlaşır ve harcamalar kontrolden çıkar.

### 4. Limit Aşımı
Ek ücretler ve kredi puanına zarar.

## Kredi Puanı ve Önemi

### Kredi Puanını Etkileyen Faktörler
1. **Ödeme Geçmişi** (%35)
2. **Kredi Kullanım Oranı** (%30)
3. **Kredi Geçmişi Uzunluğu** (%15)
4. **Kredi Türleri** (%10)
5. **Yeni Krediler** (%10)

### Kredi Puanını İyileştirme
- Zamanında ödeme yapın
- Kredi kullanım oranını düşük tutun
- Eski kartları kapatmayın
- Farklı kredi türleri kullanın

## Acil Durum Planı

### Ödeme Zorluğu Yaşarsanız
1. Bankayı arayın ve durumu açıklayın
2. Yapılandırma seçeneklerini değerlendirin
3. Finansal danışman desteği alın
4. Harcamalarınızı gözden geçirin

## Sonuç

Kredi kartları, doğru kullanıldığında finansal yaşamınızı kolaylaştıran güçlü araçlardır. Disiplinli kullanım ve stratejik yaklaşımla maksimum fayda sağlayabilirsiniz.`,
    featuredImage: '/images/articles/credit-card.jpg',
    author: authors[0],
    category: categories[3],
    tags: [tags[9], tags[0]],
    metadata: {
      title: 'Kredi Kartı Kullanımı: Avantajlar ve Dikkat Edilmesi Gerekenler | Finanqa',
      description: 'Kredi kartlarını doğru kullanarak finansal avantaj sağlama yolları.',
      keywords: ['kredi kartı', 'kredi puanı', 'finansal yönetim'],
      ogImage: '/images/articles/credit-card-og.jpg'
    },
    stats: {
      views: 1650,
      likes: 126,
      shares: 41,
      comments: 23,
      readTime: 9,
      avgRating: 4.4
    },
    status: 'published',
    publishedAt: '2024-03-09T09:30:00Z',
    updatedAt: '2024-03-09T09:30:00Z',
    createdAt: '2024-03-04T11:45:00Z',
    isFeatured: false,
    isPremium: false,
    difficulty: 'beginner'
  },
  {
    id: 'article-8',
    title: 'Fintech Devrimi: Dijital Bankacılığın Geleceği',
    slug: 'fintech-devrimi-dijital-bankaciliginin-gelecegi',
    excerpt: 'Finansal teknolojilerin bankacılık sektörüne etkisi ve gelecekte bizi bekleyen yenilikler.',
    content: `Fintech devrimi finansal hizmetleri köklü bir şekilde değiştiriyor. Bu makalede dijital bankacılığın geleceğini ve yeni teknolojileri keşfedeceksiniz.

## Fintech Nedir?

Fintech (Financial Technology), finansal hizmetlerin teknoloji ile yeniden tasarlanması ve geliştirilmesidir. Geleneksel bankacılığı daha hızlı, kolay ve erişilebilir hale getirir.

## Fintech'in Temel Alanları

### 1. Dijital Bankacılık
- Sadece dijital bankalar
- Mobil bankacılık uygulamaları
- Şubesiz hizmet modeli
- 7/24 erişim

### 2. Ödeme Sistemleri
- Mobil ödemeler
- Contactless teknoloji
- QR kod ödemeleri
- Kripto para ödemeleri

### 3. Yatırım Platformları
- Robo-advisors
- Mikro yatırım uygulamaları
- Sosyal yatırım platformları

## Türkiye'deki Fintech Örnekleri

### Dijital Bankalar
- **Papara**: Dijital cüzdan ve kart hizmeti
- **ininal**: Ön ödemeli kart sistemi
- **MOKA**: Mikro yatırım uygulaması

## Yapay Zeka ve Makine Öğrenmesi

### Chatbot ve Asistanlar
- 7/24 müşteri desteği
- Doğal dil işleme
- Kişiselleştirilmiş tavsiyeler

### Risk Yönetimi
- Dolandırıcılık tespiti
- Kredi risk analizi
- Gerçek zamanlı monitoring

## Geleceğin Fintech Trendleri

### 1. Embedded Finance
Finansal hizmetlerin non-finansal platformlara entegrasyonu.

### 2. Super Apps
Tek uygulamada tüm finansal hizmetler.

### 3. Green Fintech
Sürdürülebilir finans çözümleri.

## Sonuç

Fintech devrimi finansal hizmetleri demokratikleştiriyor ve herkes için daha erişilebilir hale getiriyor. Gelecekte bu teknolojiler daha da gelişerek finansal yaşamımızı kolaylaştıracak.`,
    featuredImage: '/images/articles/fintech.jpg',
    author: authors[2],
    category: categories[5],
    tags: [tags[1], tags[13]],
    metadata: {
      title: 'Fintech Devrimi: Dijital Bankacılığın Geleceği | Finanqa',
      description: 'Finansal teknolojilerin bankacılık sektörüne etkisi ve gelecekte bizi bekleyen yenilikler.',
      keywords: ['fintech', 'dijital bankacılık', 'blockchain', 'yapay zeka'],
      ogImage: '/images/articles/fintech-og.jpg'
    },
    stats: {
      views: 980,
      likes: 78,
      shares: 32,
      comments: 15,
      readTime: 13,
      avgRating: 4.3
    },
    status: 'published',
    publishedAt: '2024-03-08T13:15:00Z',
    updatedAt: '2024-03-08T13:15:00Z',
    createdAt: '2024-03-03T08:30:00Z',
    isFeatured: false,
    isPremium: false,
    difficulty: 'intermediate'
  },
  {
    id: 'article-9',
    title: 'Vergi Planlama Stratejileri: Yasal Yollarla Vergi Optimizasyonu',
    slug: 'vergi-planlama-stratejileri-yasal-yollarla-vergi-optimizasyonu',
    excerpt: 'Bireysel ve kurumsal vergi yükünüzü yasal yollarla optimize etmek için stratejiler ve ipuçları.',
    content: `Vergi planlaması, yasal çerçevede vergi yükünüzü optimize etmenin etkili yollarıdır. Bu rehberde vergi planlama stratejilerini öğreneceksiniz.

## Vergi Planlaması Nedir?

Vergi planlaması, mevcut vergi mevzuatı çerçevesinde vergi yükünüzü en aza indirmek için yapılan yasal düzenlemelerdir. Vergi kaçırma ile karıştırılmamalıdır.

## Bireysel Vergi Planlama Stratejileri

### 1. Gelir Vergisi Optimizasyonu

#### İstisna ve Muafiyetler
- **Asgari geçim indirimi**: 2024'te 110.000 TL
- **Özel indirimler**: Eğitim, sağlık, bağış
- **Maaş dışı gelirler**: Kira, faiz, temettü

#### Gider İndirimleri
- Eğitim giderleri
- Sağlık giderleri
- Bağış ve yardımlar
- Sosyal güvenlik primleri

### 2. Bireysel Emeklilik Sistemi (BES)
- Yıllık %25 devlet katkısı
- Vergi ertelemesi avantajı
- Emeklilik döneminde düşük vergi oranı

### 3. Yatırım Araçları Vergilendirmesi

#### Hisse Senedi Yatırımları
- 2 yıl tutma şartıyla muafiyet
- Temettü gelirlerinde stopaj
- Kurumsal yatırımcı avantajları

#### Gayrimenkul Yatırımları
- 5 yıl tutma şartıyla muafiyet
- Değer artış kazancı vergilendirmesi
- Takas işlemlerinde erteleme

### 4. Tasarruf Hesapları
- Vadeli mevduat vergilendirmesi
- Repo ve tahvil faizleri
- Altın hesabı avantajları

## Kurumsal Vergi Planlama

### 1. Kurumlar Vergisi Optimizasyonu

#### Gider Yönetimi
- İşletme giderlerinin doğru sınıflandırılması
- Amortisman politikaları
- Karşılık ayırma stratejileri

#### Yatırım Teşvikleri
- Ar-Ge indirimi
- Yatırım teşvik belgeleri
- Teknoloji geliştirme bölgeleri

### 2. KDV Optimizasyonu
- İndirim hakkının doğru kullanımı
- İstisna ve muafiyetlerden yararlanma
- İhracat KDV iadesi

### 3. Transfer Fiyatlandırması
- Emsallere uygunluk ilkesi
- Belgelendirme yükümlülükleri
- Önceden fiyatlandırma anlaşmaları

## Yasal Vergi Planlama Teknikleri

### 1. Gelir Zamanlaması
- Gelirlerin farklı yıllara yayılması
- Giderlerin optimal zamanlaması
- Vergi oranlarındaki değişikliklerin takibi

### 2. Yapısal Değişiklikler
- Şirket türü değişiklikleri
- Holding yapıları
- Ortaklık düzenlemeleri

### 3. Coğrafi Optimizasyon
- Farklı illerdeki vergi avantajları
- Özel bölge uygulamaları
- Uluslararası anlaşmalardan yararlanma

## Dikkat Edilmesi Gereken Noktalalar

### 1. Genel Anti-Avoidance Kuralları
Türk vergi mevzuatında "gerçek anlamın önceliği" ilkesi geçerlidir.

### 2. Belgelendirme
Tüm vergi planlaması işlemlerinin yasal belgelerle desteklenmesi gerekir.

### 3. Sürekli Takip
Vergi mevzuatındaki değişikliklerin sürekli takip edilmesi önemlidir.

## 2024 Yılı Vergi Değişiklikleri

### Yeni Düzenlemeler
- Asgari geçim indiriminde artış
- Dijital hizmet vergisi
- Kripto para vergilendirmesi
- E-fatura zorunlulukları

### Oranlar ve Limitler
- Gelir vergisi dilimleri güncellendi
- KDV oranlarında değişiklikler
- Muafiyet limitlerinde artış

## Vergi Planlama Araçları

### 1. Profesyonel Destek
- Mali müşavir danışmanlığı
- Vergi danışmanı desteği
- Uzman avukat görüşü

### 2. Teknolojik Çözümler
- Vergi hesaplama yazılımları
- E-beyanname sistemleri
- Otomatik vergi takip programları

### 3. Eğitim ve Gelişim
- Vergi seminerleri
- Online kurslar
- Mevzuat takip platformları

## Vergi Denetimi ve Uyum

### Denetim Hazırlığı
- Belgelerin düzenli saklanması
- Elektronik kayıt sistemleri
- İç kontrol mekanizmaları

### Uyum Programları
- Gönüllü açıklama
- Vergi barışı fırsatları
- Ödeme kolaylıkları

## Sonuç

Vergi planlaması, yasal çerçevede finansal verimliliği artırmanın önemli bir yoludur. Profesyonel destek alarak ve mevzuat değişikliklerini takip ederek optimal vergi stratejileri geliştirebilirsiniz.

Unutmayın: Vergi planlaması yasal olmalı ve gerçek iş amaçları ile desteklenmelidir.`,
    featuredImage: '/images/articles/tax-planning.jpg',
    author: authors[0],
    category: categories[0],
    tags: [tags[12], tags[1]],
    metadata: {
      title: 'Vergi Planlama Stratejileri: Yasal Yollarla Vergi Optimizasyonu | Finanqa',
      description: 'Bireysel ve kurumsal vergi yükünüzü yasal yollarla optimize etmek için stratejiler.',
      keywords: ['vergi planlaması', 'vergi optimizasyonu', 'gelir vergisi'],
      ogImage: '/images/articles/tax-planning-og.jpg'
    },
    stats: {
      views: 1420,
      likes: 98,
      shares: 37,
      comments: 19,
      readTime: 14,
      avgRating: 4.2
    },
    status: 'published',
    publishedAt: '2024-03-07T10:45:00Z',
    updatedAt: '2024-03-07T10:45:00Z',
    createdAt: '2024-03-02T14:20:00Z',
    isFeatured: false,
    isPremium: true,
    difficulty: 'advanced'
  },
  {
    id: 'article-10',
    title: 'Girişimcilik ve Startup Finansmanı: İlk Adımdan İleri Raundlara',
    slug: 'girisimcilik-startup-finansmani-ilk-adimdan-ileri-raundlara',
    excerpt: 'Startup kurmak isteyenler için finansman seçenekleri, yatırımcı bulma süreçleri ve büyüme stratejileri.',
    content: `Girişimcilik yolculuğunda finansman, en kritik konulardan biridir. Bu rehberde startup finansmanının tüm aşamalarını detaylıca inceleyeceğiz.

## Startup Finansman Aşamaları

### 1. Pre-Seed (Ön Tohum)
- **Miktar**: 50.000$ - 250.000$
- **Amaç**: MVP geliştirme, ilk müşteriler
- **Kaynak**: Kurucular, aile, arkadaşlar
- **Süre**: 6-12 ay runway

### 2. Seed (Tohum)
- **Miktar**: 250.000$ - 1M$
- **Amaç**: Product-market fit bulma
- **Kaynak**: Angel yatırımcılar, seed VC'ler
- **Süre**: 12-18 ay runway

### 3. Series A
- **Miktar**: 1M$ - 5M$
- **Amaç**: Ölçeklendirme, pazara giriş
- **Kaynak**: VC fonları
- **Süre**: 18-24 ay runway

## Finansman Türleri

### 1. Öz Sermaye (Bootstrapping)
#### Avantajları
- Tam kontrol
- Hisse dilution yok
- Hızlı karar alma

#### Dezavantajları
- Sınırlı kaynak
- Yavaş büyüme
- Kişisel risk

### 2. Hisse Senedi Finansmanı
#### Angel Yatırımcılar
- Sektör deneyimi
- Mentorship
- Network erişimi

#### Venture Capital
- Büyük miktarlar
- Profesyonel destek
- Exit beklentisi

## Yatırımcı Türleri

### 1. Angel Yatırımcılar
#### Profil
- Deneyimli girişimciler
- Sektör uzmanları
- Emekli executives

### 2. Venture Capital Fonları
#### Türkiye'deki VC'ler
- 212 VC
- Earlybird Digital East
- Revo Capital

## Türkiye Startup Ekosistemi

### Success Stories
- Peak Games (1.8B$ exit)
- Getir (12B$ valuation)
- Trendyol (16.5B$ valuation)
- Dream Games (1B$ valuation)

## Sonuç

Startup finansmanı karmaşık bir süreç olsa da doğru strateji ve hazırlıkla başarılı olunabilir. Erken aşamada güçlü bir foundation oluşturmak, ilerleyen raundlarda avantaj sağlar.`,
    featuredImage: '/images/articles/startup.jpg',
    author: authors[2],
    category: categories[0],
    tags: [tags[13], tags[14]],
    metadata: {
      title: 'Girişimcilik ve Startup Finansmanı: İlk Adımdan İleri Raundlara | Finanqa',
      description: 'Startup kurmak isteyenler için finansman seçenekleri, yatırımcı bulma süreçleri.',
      keywords: ['startup', 'girişimcilik', 'venture capital'],
      ogImage: '/images/articles/startup-og.jpg'
    },
    stats: {
      views: 2180,
      likes: 167,
      shares: 84,
      comments: 31,
      readTime: 16,
      avgRating: 4.8
    },
    status: 'published',
    publishedAt: '2024-03-06T15:20:00Z',
    updatedAt: '2024-03-06T15:20:00Z',
    createdAt: '2024-03-01T10:10:00Z',
    isFeatured: true,
    isPremium: false,
    difficulty: 'advanced'
  }
];

// Yardımcı fonksiyonlar
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(article => article.category.slug === categorySlug);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.isFeatured && article.status === 'published');
};

export const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
  return articles
    .filter(article => 
      article.id !== currentArticle.id && 
      article.status === 'published' &&
      (article.category?.id === currentArticle.category?.id ||
       (article.tags && currentArticle.tags && 
        article.tags.some(tag => 
          tag && currentArticle.tags.some(currentTag => 
            currentTag && currentTag.id === tag.id
          )
        )
       )
      )
    )
    .sort((a, b) => b.stats.views - a.stats.views)
    .slice(0, limit);
}; 
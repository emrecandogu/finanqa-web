# Finanqa Web

Finanqa finansal okuryazarlık platformu için modern ve duyarlı bir web sitesi. Next.js 14, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- Next.js 14 App Router ile modern ve duyarlı tasarım
- İstemci ve sunucu tarafı bileşenler
- Yerleşik görüntü optimizasyonu ile performans odaklı
- Erişilebilirlik düşünülerek tasarlanmış
- Mobil öncelikli yaklaşım
- SEO dostu
- Özel renk paleti ve marka kimliği

## Gereksinimler

- Node.js 18.x veya daha yeni
- npm 9.x veya daha yeni

### Windows Kullanıcıları (PowerShell)
Eğer npm komutlarını çalıştırırken yürütme politikası hataları alıyorsanız, PowerShell'de aşağıdaki komutlardan birini çalıştırarak çözebilirsiniz:

```powershell
# Seçenek 1: Geçici (Sadece Oturum İçin)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Seçenek 2: Kalıcı (Yönetici Gerektirir)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Başlangıç

1. Depoyu klonlayın:
```bash
git clone https://github.com/emrecandogu/finanqa-web.git
cd finanqa-web
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
finanqa-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── MobileApp.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   └── utils/
├── public/
│   └── images/
├── scripts/
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Kullanılabilir Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Üretim için derleme yapar
- `npm start` - Üretim sunucusunu başlatır
- `npm run lint` - ESLint çalıştırır
- `npm run clean` - Next.js önbelleğini ve derleme dosyalarını temizler

## Sorun Giderme

Herhangi bir sorunla karşılaşırsanız:

1. Next.js önbelleğini temizleyin:
```bash
npm run clean
```

2. node_modules klasörünü kaldırın ve yeniden yükleyin:
```bash
rm -rf node_modules
npm install
```

3. Projeyi yeniden derleyin:
```bash
npm run build
```

## Görüntü Yer Tutucuları

Aşağıdaki görüntü yer tutucuları gerçek görüntülerle değiştirilmelidir:

- `/images/hero-placeholder.jpg`
- `/images/about-placeholder.jpg`
- `/images/feature1.jpg`
- `/images/feature2.jpg`
- `/images/feature3.jpg`
- `/images/app-mockup.jpg`
- `/images/avatar1.jpg`
- `/images/avatar2.jpg`
- `/images/avatar3.jpg`
- `/images/cta-bg.jpg`
- `/images/logo.png`
- `/images/app-store.svg`
- `/images/play-store.svg`
- `/images/twitter.svg`
- `/images/linkedin.svg`
- `/images/instagram.svg`

## Renk Paleti

- Ana Yeşil: #005652
- Açık Yeşil: #17f187
- Krem: #f9f9f3
- İkincil Yeşil: #c8f567

## Katkıda Bulunma

1. Depoyu çatallayın
2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Dalınıza push yapın (`git push origin feature/amazing-feature`)
5. Bir Pull Request açın

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.

## Notlar

- Proje yayınlanmadan önce geçici şifreleme kullanımı kaldırılmalıdır. Lütfen güvenlik önlemlerini gözden geçirin ve gerekli değişiklikleri yapın.
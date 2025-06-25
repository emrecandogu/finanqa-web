# Temel Plan: Etap 2'ye Geçiş Yol Haritası

Bu belge, Finanqa projesini statik bir vitrinden, ölçeklenebilir ve dinamik bir platforma dönüştürmek için atmanız gereken somut adımları içermektedir. Her adım, bir önceki üzerine inşa edilmiştir. Bu planı bir kontrol listesi olarak kullanabilirsiniz.

## Faz 0: Temeli Sağlamlaştırma ve Profesyonel Ortamı Kurma

**Amaç:** Yeni bir özellik eklemeden önce geliştirme süreçlerini kurumsal standartlara getirmek ve projenin güvenlik ağını örmek. Bu, gelecekteki her adımı daha güvenli ve verimli hale getirecektir.

*   **[ ] 1. Git Akışını Kurumsallaştır:**
    *   `main` branch'ini korumaya al. Artık doğrudan bu branch'e kod gönderilmeyecek.
    *   `develop` adında yeni bir ana geliştirme branch'i oluştur. (`git checkout -b develop`)
    *   Bundan sonraki tüm çalışmalar için `feature/TEST_KURULUMU` gibi yeni, özel branch'ler aç. İşin bitince `develop` branch'ine "Pull Request" (PR) ile birleştir.

*   **[ ] 2. Test Altyapısını Kur:**
    *   Projeye **Jest** ve **React Testing Library**'yi entegre et. Next.js'in resmi dokümanlarında bunun için harika bir rehber bulunuyor.
    *   İlk testini yaz: `src/lib/utils.ts` dosyasındaki `cn` fonksiyonunun doğru çalıştığını doğrulayan basit bir test (`utils.test.ts`) oluştur. Bu, kurulumun çalıştığını kanıtlar.

*   **[ ] 3. Gizli Bilgileri Güvenceye Al (Secrets Management):**
    *   Projenin kök dizininde `.env.local` adında bir dosya oluştur.
    *   Bu dosyayı hemen `.gitignore` dosyana ekle. Bu çok önemli!
    *   Gelecekteki veritabanı şifresi, API anahtarları gibi tüm gizli bilgilerini bu dosyada saklayacaksın. Örneğin: `DATABASE_URL="postgresql://..."`

---

## Faz 1: Hibrit Modelin Kalbini İnşa Etmek (Veri ve Kimlik)

**Amaç:** Projenin backend'ini, Vercel'den bağımsız, taşınabilir ve ölçeklenebilir servisler üzerine kurmak.

*   **[ ] 1. Bağımsız Veritabanını Seç ve Kur:**
    *   **Neon.tech**'e gidip ücretsiz bir hesap oluştur.
    *   Yeni bir proje oluştur ve bir PostgreSQL veritabanı yarat.
    *   Veritabanı bağlantı adresini (**Connection String**) al. Bu, `postgresql://...` ile başlayan adrestir.
    *   Bu adresi, `.env.local` dosyana `DATABASE_URL` değişkeni olarak kaydet.

*   **[ ] 2. Prisma'yı Projeye Entegre Et:**
    *   `npm install prisma --save-dev` ve `npm install @prisma/client` komutlarıyla Prisma'yı kur.
    *   `npx prisma init` komutunu çalıştır. Bu, `prisma/schema.prisma` dosyasını ve `.env` dosyası için yönlendirmeyi oluşturacaktır.
    *   `schema.prisma` dosyasını aç ve `provider`'ın `"postgresql"` olduğundan emin ol.
    *   İlk modelini oluştur: `User` modelini NextAuth.js'in gereksinimlerine uygun şekilde tanımla (isim, e-posta, resim vb. alanlar).

*   **[ ] 3. Kimlik Doğrulama (Authentication) Katmanını Ekle:**
    *   **NextAuth.js**'i projeye ekle. (`npm install next-auth`)
    *   Prisma Adaptörünü ekle. (`npm install @auth/prisma-adapter`)
    *   `src/app/api/auth/[...nextauth]/route.ts` dosyasını oluştur ve NextAuth.js yapılandırmanı burada yap. Yapılandırmada Prisma adaptörünü ve seçtiğin giriş yöntemlerini (örn: "Google" ve "Email") belirt.
    *   `NEXTAUTH_SECRET` ve `GOOGLE_CLIENT_ID`/`SECRET` gibi gerekli değişkenleri `.env.local` dosyana ekle.

*   **[ ] 4. Veritabanını Senkronize Et:**
    *   `npx prisma db push` komutunu çalıştır. Bu komut, `schema.prisma` dosyasındaki modellerini okuyacak ve Neon üzerindeki veritabanında ilgili tabloları oluşturacaktır.

---

## Faz 2: İlk Dinamik Özellik (Kullanıcı Kaydı ve Girişi)

**Amaç:** İnşa ettiğimiz backend altyapısını kullanarak kullanıcıların görebileceği ilk somut özelliği hayata geçirmek.

*   **[ ] 1. Giriş/Kayıt Arayüzlerini Oluştur:**
    *   Kullanıcıların giriş yapabileceği ve kayıt olabileceği basit sayfalar veya modal pencereler tasarla.
    *   Bu formlar, NextAuth.js'in sağladığı `signIn()` fonksiyonunu çağıracak.

*   **[ ] 2. Global Oturum Yönetimini Sağla:**
    *   Ana `layout.tsx` dosyanı, NextAuth.js'in `SessionProvider`'ı ile sarmala. Bu, uygulamanın her yerinden kullanıcının oturum bilgisine (giriş yapmış mı, kim olduğu vb.) erişmeni sağlar.

*   **[ ] 3. Arayüzü Dinamik Hale Getir:**
    *   `Header` bileşenini güncelle. Eğer kullanıcı giriş yapmışsa "Giriş Yap" butonu yerine kullanıcının adını ve bir "Çıkış Yap" butonu göster. `useSession` hook'u bunun için idealdir.

---

## Faz 3: Genişleme ve Etap 1 Açıklarını Kapatma

**Amaç:** Temel altyapı hazır olduğuna göre, Etap 1'deki statik sayfaları dinamik hale getirmeye başlamak.

*   **[ ] 1. Statik Verileri Dinamik Hale Getir:**
    *   **Öncelikli Hedef:** `SSS` sayfası.
    *   `schema.prisma` dosyana bir `FaqItem` modeli ekle (soru ve cevap alanları).
    *   Neon veritabanına birkaç örnek SSS ekle.
    *   `/sss` sayfasını yeniden düzenle. Artık verileri statik olarak değil, `prisma.faqItem.findMany()` gibi bir komutla veritabanından çekecek.

*   **[ ] 2. Formları Çalışır Hale Getir:**
    *   **Öncelikli Hedef:** `İletişim` sayfası.
    *   `schema.prisma` dosyana bir `ContactMessage` modeli ekle.
    *   `src/app/api/contact/route.ts` adında bir API rotası oluştur. Bu rota, formdan gelen veriyi alıp `prisma.contactMessage.create()` ile veritabanına kaydedecek.
    *   İletişim sayfasındaki formu bu yeni API'ye istek atacak şekilde güncelle.

---

## Faz 4: Kurumsal İletişim Altyapısı (E-posta)

**Amaç:** Hem günlük kurumsal iletişimi hem de uygulama tarafından gönderilecek otomatik e-postaları profesyonel, güvenilir ve ölçeklenebilir bir şekilde yönetmek.

*   **[ ] 1. Kurumsal E-posta Kutularını Kur (Günlük İletişim):**
    *   **Servis Seçimi:** **Google Workspace** (önerilen standart) veya **Microsoft 365** gibi profesyonel bir servis seç.
    *   **Eylem:** `info@finanqa.com`, `destek@finanqa.com` gibi temel hesaplarını oluştur.
    *   **DNS Ayarı:** Alan adının DNS ayarlarına gir ve servisin sana verdiği `MX` kayıtlarını ekleyerek gelen e-postaları yönlendir.

*   **[ ] 2. Transactional E-posta Servisini Kur (Uygulama E-postaları):**
    *   **Servis Seçimi:** **Postmark** (ulaşılabilirlik odaklı, tavsiye edilen) veya **SendGrid** (cömert ücretsiz plan) gibi bir API servisi seç.
    *   **Eylem:** Bir hesap oluştur. Servisin sana verdiği API anahtarını kopyala.
    *   **Güvenlik:** API anahtarını `.env.local` dosyana `POSTMARK_API_KEY="..."` gibi bir değişken olarak kaydet.

*   **[ ] 3. Alan Adı Kimliğini Doğrula (En Kritik Adım!):**
    *   **Amaç:** E-postalarının spam'e düşmesini engellemek ve alan adı itibarını korumak.
    *   **Eylem:**
        1.  Hem **Google Workspace**'in hem de **Postmark/SendGrid**'in yönetim panellerine git.
        2.  "Alan Adı Doğrulama" (Domain Authentication/Verification) bölümlerini bul.
        3.  Servislerin sana verdiği tüm `SPF`, `DKIM` ve `DMARC` kayıtlarını, alan adının DNS yönetimine `TXT` kaydı olarak **eksiksiz** bir şekilde ekle.

*   **[ ] 4. E-posta Test Ortamını Kur (Geliştirme İçin):**
    *   **Amaç:** Geliştirme yaparken gereksiz ve spam gibi görünebilecek yüzlerce gerçek e-posta göndermeyi önlemek.
    *   **Tavsiye:** **react-email** kütüphanesini araştır ve kullan. Bu kütüphane, hem modern e-posta şablonları oluşturmanı sağlar hem de kendi lokal test sunucusuyla birlikte gelir.
    *   **Eylem:** Geliştirme ortamında (`development`), e-posta gönderme fonksiyonunu Postmark yerine `react-email`'in lokal sunucusuna yönlendir. Production ortamında (`production`) ise gerçek Postmark servisini kullanacak şekilde kodunu ayarla.

Bu planı tamamladığında, Finanqa sadece bir web sitesi olmaktan çıkmış; kullanıcıları olan, veri saklayan ve ölçeklenmeye hazır, sağlam temellere sahip gerçek bir platforma dönüşmüş olacaktır.

---
---

## İleri Seviye Yol Haritası: Temel Plan Sonrası Adımlar

**Amaç:** Temel platform çalışır hale geldikten sonra, şirketin operasyonel dayanıklılığını, teknik derinliğini ve ürün geliştirme zekasını artırmak. Bu adımlar, projenizi orta ve büyük ölçekli bir operasyona hazırlayacaktır.

### 1. Operasyonel ve Yasal Zırh

*   **[ ] Veri Yedekleme ve Felaket Kurtarma:**
    *   **Amaç:** İnsan hatası veya servis kesintisi durumunda veri kaybını önlemek.
    *   **Eylem Planı:**
        1.  Veritabanı sağlayıcınızın (örn: Neon) "Point-in-Time Recovery" (Zaman İçinde Belirli Bir Noktaya Dönme) özelliğini ve ne kadar süreyle yedek tuttuğunu öğren.
        2.  Periyodik olarak (örn: haftalık) veritabanı yedeğini manuel olarak alıp, güvenli ve farklı bir konumda (örn: özel bir AWS S3 bucket'ı) saklama stratejisini değerlendir.

*   **[ ] Kullanıcı Destek Sistemi:**
    *   **Amaç:** Kullanıcı taleplerini kaosa dönmeden, profesyonelce yönetmek.
    *   **Eylem Planı:**
        1.  **Intercom, Crisp, Zendesk** gibi servisleri araştır.
        2.  Başlangıç için bu servislerden birinin ücretsiz planını kurarak `destek@finanqa.com` adresini bu sisteme entegre et.

*   **[ ] Yasal Uyumluluk:**
    *   **Amaç:** Bir finans şirketi olarak yüksek veri sorumluluğunu karşılamak ve yasal riskleri en aza indirmek.
    *   **Eylem Planı:**
        1.  Teknoloji ve KVKK/GDPR konularında uzman bir hukuk danışmanıyla çalışmak için bütçe planlaması yap.
        2.  Mevcut "Hizmet Şartları" ve "Gizlilik Politikası" metinlerini profesyonel olarak hazırlat.

### 2. Teknik Derinlik ve Gözlemlenebilirlik

*   **[ ] Merkezi Log Yönetimi:**
    *   **Amaç:** Hataların ve olayların izini sürebileceğin, aranabilir, merkezi bir kayıt sistemi kurmak.
    *   **Eylem Planı:**
        1.  **Logtail (Better Stack)** gibi bir servisi araştır.
        2.  Uygulamanı bu servise log gönderecek şekilde yapılandır.

*   **[ ] Uptime ve Performans İzleme:**
    *   **Amaç:** Sitenin çalışıp çalışmadığını senden önce öğrenmek ve kesintilere anında müdahale etmek.
    *   **Eylem Planı:**
        1.  **UptimeRobot** veya **Better Uptime** gibi bir servise kaydol.
        2.  Ücretsiz plan dahilinde sitenin ana sayfasını (`finanqa.com`) ve önemli API rotalarını izlemeye başla.

### 3. Kullanıcı ve Ürün Geliştirme Döngüsü

*   **[ ] Ürün Analitiği:**
    *   **Amaç:** Kullanıcı davranışını veriyle anlayarak varsayımları ortadan kaldırmak ve doğru özellikleri geliştirmek.
    *   **Eylem Planı:**
        1.  **PostHog** (açık kaynak ve esnek) veya **Mixpanel** gibi bir ürün analitiği servisini araştır.
        2.  Temel olayları (event) takip etmeye başla: `user_signed_up`, `article_viewed`, `quiz_started`.

*   **[ ] Özellik Bayrakları (Feature Flags):**
    *   **Amaç:** Yeni özellikleri risk almadan, kontrollü bir şekilde belirli kullanıcı gruplarına yayınlamak.
    *   **Eylem Planı:**
        1.  **Statsig, LaunchDarkly** gibi servislerin konseptini ve nasıl çalıştığını öğren.
        2.  Gelecekteki ilk büyük ve riskli özelliğini bu tür bir sistemle yayınlamayı planla.

---
---

## Özet Kontrol Listesi

### Faz 0: Temel Sağlamlaştırma
*   [ ] Git branch yapısını kur (`develop`, `feature/*`).
*   [ ] Jest & React Testing Library ile test altyapısını kur.
*   [ ] `.env.local` dosyasını oluştur ve `.gitignore`'a ekle.

### Faz 1: Altyapı Kurulumu (Veri & Kimlik)
*   [ ] Bağımsız veritabanı (Neon) hesabı aç.
*   [ ] Veritabanı URL'ini `.env.local`'e ekle.
*   [ ] Prisma'yı projeye kur ve `User` modelini oluştur.
*   [ ] NextAuth.js'i Prisma adaptörü ile kur.
*   [ ] Gerekli API anahtarlarını `.env.local`'e ekle.
*   [ ] `prisma db push` ile veritabanını şema ile senkronize et.

### Faz 2: İlk Dinamik Özellik
*   [ ] Giriş/Kayıt arayüzlerini oluştur.
*   [ ] `SessionProvider`'ı `layout.tsx`'e ekle.
*   [ ] `Header`'ı kullanıcı oturumuna göre dinamik hale getir.

### Faz 3: Genişleme
*   [ ] `SSS` sayfasını veritabanından veri çekecek şekilde dinamik yap.
*   [ ] `İletişim` formunu API'ye bağlayarak çalışır hale getir.

### Faz 4: E-posta Altyapısı
*   [ ] Google Workspace / Microsoft 365 ile kurumsal e-posta kutularını kur.
*   [ ] Postmark / SendGrid ile transactional e-posta servisini kur.
*   [ ] Her iki servis için de **SPF, DKIM, DMARC** DNS kayıtlarını eksiksiz yap.
*   [ ] `react-email` gibi bir araçla lokal e-posta test ortamı kur.

### İleri Seviye Adımlar (Temel Plan Sonrası)
*   [ ] Veri yedekleme stratejisi belirle.
*   [ ] Kullanıcı destek yazılımı (Intercom vb.) kur.
*   [ ] Yasal metinleri profesyonelce hazırlat.
*   [ ] Merkezi log yönetimi (Logtail vb.) kur.
*   [ ] Uptime izleme (UptimeRobot vb.) kur.
*   [ ] Ürün analitiği (PostHog vb.) kur.
*   [ ] Özellik bayrakları (Feature Flags) konseptini araştır. 
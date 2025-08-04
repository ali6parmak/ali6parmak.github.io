---
title: Twitter Kalplerini Yıldıza Çevirme
description: Tweetlerdeki like butonlarını fav butonlarına çevirme
written_by: ali
date: 2025-08-04 12:49:00 +0300
categories: [Genel]
tags: [twitter, tasarım]
pin: true
math: true
mermaid: true
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
<style>
    p {
        font-family: "Quicksand", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        text-align: justify;
    }
</style>

Evet arkadaşlar uzun bir sürenin ardından şimdi de bir tutorialle karşınızdayım. Bu yazıda açık ve anlaşılır bir şekilde Twitter'daki beğeni butonlarını - kalpleri nasıl orijinal fav butonlarına çevirebileceğinizi göstermeye çalışacağım. Fakat önden birkaç not düşeyim:

\- Paylaşacağım kodlarda size zarar verecek, ayarlarınızı bozacak ya da bilgilerinizi toplayacak herhangi bir şey yok (bilgileriniz bende var zaten bi daha toplayıp napıcam).

\- Yaptığınız değişikliği sadece siz göreceksiniz.

\- Bu değişiklikler sadece bilgisayarlar için geçerli, telefonda işe yaramaz.

Şimdiii ilk olarak [Stylus](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) isimli eklentiyi tarayıcınıza kuruyorsunuz. Çok basit zaten linke girip "Chrome'a ekle" demeniz yeterli. Bu paylaştığım link Chromium tabanlı olan "Google Chrome, Opera, Vivaldi, Brave, Microsoft Edge" gibi tarayıcılarda işe yarayacaktır. Mozilla kullanıyorsanız [şu](https://addons.mozilla.org/tr/firefox/addon/styl-us/) linki kullanabilirsiniz.

Eklentiyi tarayıcınıza kurduktan sonra Twitter'ı açıyorsunuz, şimdi ana sayfadayız. Tarayıcıdaki link "https://x.com/home" şeklinde olmalı. Tarayıcınızın genelde sağ üst tarafında küçük bir "Eklentiler" butonu olur. Chrome'da ve Mozilla'da bu yapboz parçası olarak görünüyor, Opera'da küp şeklinde. Buna tıklayın ve Stylus eklentisini seçin.

Burada, "Write style for: x.com/home" şeklinde bi yazı çıkar, ona tıklayın:

![](https://lh3.googleusercontent.com/d/1padhqIMQQuDoMlQyXounhXYs4fInUYIM)


Devamında karşınıza şu şekilde bir ekran gelecek:

![](https://lh3.googleusercontent.com/d/1BSwrVhM1PSSn0_u4wZwQY5fG83ReJHcK)

_(Bi ihtimal doğrudan böyle bi ekran yerine dümdüz boş bi ekran gelirse yine sorun yok, boş yere yapıştırın kodu.)_


Şimdiii burada yapmanız gereken ilk şey "URLs starting with" kısmında yazan "https://x.com/home" ifadesinden "home" kısmını silmek, yani şöyle olması gerekiyor: "https://x.com/". Çünkü diğer türlü yazacağımız kod tüm Twitter sayfalarını değil, sadece ana sayfayı etkiler.

Sonrasında, 10 numaralı satırda gördüğünüz gibi "/* Insert code here... */" şeklinde bir yazı var. İşte aşağıda paylaşacağım kodu tam olarak buraya yapıştırmanız gerekiyor.

Kodumuz şu, kod bloğunun sağ üstündeki işarete tıklayarak kopyalayabilirsiniz:

```css
/* like button */
/* Make the like count number gold when liked */
[data-testid="unlike"] > div > div:last-child span,
[data-testid="unlike"] > div > div:last-child span span {
  color: #ffac33 !important;
  fill: #ffac33 !important;
}


@keyframes star-pop {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.5);
  }
  60% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

[data-testid="unlike"] svg {
  opacity: 0 !important;
}

[data-testid="unlike"] > div > div:first-child {
  position: relative;
}

[data-testid="unlike"] > div > div:first-child::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 20px; height: 20px;
  display: block;
  pointer-events: none;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="%23ffac33" stroke="%23ffac33" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.3 17,14.1 18.5,21 12,17.8 5.5,21 7,14.1 2,9.3 9,9"/></svg>') no-repeat center/contain;
  animation: star-pop 0.4s cubic-bezier(.36,1.56,.64,1) both;
}


/* unlike button */
[data-testid="like"] svg {
  opacity: 0 !important;
}

[data-testid="like"] > div > div:first-child {
  position: relative;
}

[data-testid="like"] > div > div:first-child::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 20px; height: 20px;
  display: block;
  pointer-events: none;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="none" stroke="%2371767b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.3 17,14.1 18.5,21 12,17.8 5.5,21 7,14.1 2,9.3 9,9"/></svg>') no-repeat center/contain;
}
```

Son durumda elinizde şöyle bir görüntü olması gerekiyor:

![](https://lh3.googleusercontent.com/d/1pOmbJo7Qhtc8LLomX5LYzQYAkSqH9VZL)

Sonrasında değişiklikleri kaydetmek için Ctrl + S yapıyorsunuz ve işlem tamam. Artık kalplerinizin yıldızlara dönüşmüş olması gerekiyor. Dönüşmediyse endişelenmeyin bi şeyi kırıp dökmemişsinizdir adımları baştan dikkatlice tekrar deneyin olmadı bana ulaşabilirsiniz.

Şimdiii ilgilenenler için kodda yazanlar hakkında biraz bilgi vereyim, belki ufak tefek değişiklikler yapmak isteyen olursa diye.

İlk olarak, /* ve */ arasına yazılan hiçbir şey Stylus tarafından çalıştırılmaz. Bunlara yorum satırı diyoruz, kodumuzla alakalı notlar düşmek için bunları kullanırız.

Kodun başındaki şu kısımda:

```css
[data-testid="unlike"] > div > div:last-child span,
[data-testid="unlike"] > div > div:last-child span span {
  color: #ffac33 !important;
  fill: #ffac33 !important;
}
```

`color` ve `fill` ifadelerini göreceksiniz. Buradaki renkler yıldızın yanındaki sayının rengini ayarlamak için, farklı bi renk isterseniz ilgili rengin hex kodunu girebilirsiniz, Google'dan bakabilirsiniz buna.

Tweeti favlarken yıldıza tıklandığı anda minik bi patlama efekti gerçekleşiyor, yıldız önce büyüyüp sonra normal haline dönüyor. Bu olayın gerçekleştiği kısım kodun şurası:

```css
@keyframes star-pop {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.5);
  }
  60% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
```

0% ve 100% ifadeleri olayın başlangıcı ve bitişi. En başta 1 ölçekle başlayıp sonra yine 1 ölçekle sona eriyor. Yıldızın patlarken ne kadar büyüdüğünü ayarlamak için örneğin aradaki `scale(1.5)` değerini `scale(5)` falan yapabilirsiniz, ya da çok daha küçük hale de getirebilirsiniz, vs.


Kodun şu kısmında:
```css
[data-testid="unlike"] > div > div:first-child::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 20px; height: 20px;
  display: block;
  pointer-events: none;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="%23ffac33" stroke="%23ffac33" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.3 17,14.1 18.5,21 12,17.8 5.5,21 7,14.1 2,9.3 9,9"/></svg>') no-repeat center/contain;
  animation: star-pop 0.4s cubic-bezier(.36,1.56,.64,1) both;
}
```

`width` ve `height` değerlerini göreceksiniz. Bu değerler tweet favlandıktan sonra ortaya çıkan yıldızın büyüklüğü için. Yukarıda scale değerleri vardı ya, işte burada aslında `scale(1)`'i, yani orijinal büyüklük değerini ayarlıyoruz. ben 20-20 yaptım ama kafanıza göre değiştirebilirsiniz.

Kodun şu anki haliyle yıldız altın renginde oluşuyor. Fakat bunu başka bi renge çevirmek isterseniz blok içerisindeki `background: url(...)` kısmına bakmanız gerekiyor. Buradaki `url` içerisinde `fill="%23ffac33"` ve `stroke="%23ffac33"` şeklinde ifadeler göreceksiniz. İşte yıldıza rengini verdiğimiz kısım burası. Buradaki değerlerde `%23` kısmına dokunmuyorsunuz, sonrasındaki 6 karakteri değiştirmeniz gerekiyor, bu 6 karakter yine ilgili rengin hex kodu. Bir örnek olarak, bu değerleri şöyle değiştirirseniz: `fill="%231d9bf2" stroke="%231d9bf2"`, mavi bir yıldız elde edersiniz. Tabii böyle bi değişiklik yaptıktan sonra yıldızın yanındaki yazının rengini de değiştirmek isteyebilirsiniz, onu da yukarıda yazdım zaten.

Yine aynı blokta, `animation: star-pop 0.4s` şeklinde bi kısım var. Burada yıldızın patlama animasyonunun süresini belirliyoruz. Daha yavaş bi patlama efekti için 0.4s'lik değeri daha yükseğe çekebilirsiniz, ya da daha hızlı için düşürebilirsiniz.

Benzer şekilde, şu kısımdaysa:

```css
[data-testid="like"] > div > div:first-child::after {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 20px; height: 20px;
  display: block;
  pointer-events: none;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" fill="none" stroke="%2371767b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.3 17,14.1 18.5,21 12,17.8 5.5,21 7,14.1 2,9.3 9,9"/></svg>') no-repeat center/contain;
}
```
Favlanılmayan bi yıldızın boyutlarıyla (width, height) alakalı değişiklikler yapabilirsiniz. Yine top - left değerleriyle falan da oynayın isterseniz ama şu anki ayarlarıyla İNSANİ şekilde görünüyo olması lazım, bakarsınız.


Başka bi not olarak da, şu an bu kod yıldıza çevirmek için fakat diyelim başka bi şekil istediniz. Ne bileyim ağaç şekli istediniz mesela. Yazdığım kodun tamamını ChatGPT'ye falan kopyalayıp şöyle bi şey diyebilirsiniz: "Aşağıdaki kod Twitter'da yıldız şeklinde bir like butonu oluşturmak için. Ama bu butonun yıldız değil ağaç olmasını istiyorum, uygun şekilde kodu değiştir". Bunu herhangi bir şekil için dileyebilirsiniz tabii, büyük ihtimalle sıkıntı olmaz ve uygun düzgün güzelce çalışan bi kod verir size.


Neyse elimden geldiğince açık ve anlaşılır şekilde anlatmaya çalıştım. Umarım halkımız bu kalplerden vazgeçer ve yeniden yıldızlara döner. Sonra vay efendim sen bana kalp yağdırdın da sen beni mi seviyosun gibi şeyler oluyo yazıktır. Gençlerimiz heba olmasın.

İyi günler diliyorum.
---
title: Basic Text Processing
description: NLP'de veriyle çalışmaya başlayabilmek için uygulanabilecek bazı yöntemler
written_by: ali
date: 2024-11-01 12:30:00 +0300
categories: [Yapay Zeka, Natural Language Processing]
tags: [natural-language-processing, nlp, machine-learning, deep-learning, artificial-intelligence, ai]
pin: true
math: true
mermaid: true
---

<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet">
<style>
    p {
        font-family: 'Lora', serif;
        text-align: justify;
    }
</style>

Bu yazıyı kod uygulamalarıyla beraber görmek için şu linke tıklayabilirsiniz (tavsiye edilir): [basic-text-processing](https://colab.research.google.com/drive/1lIcJX0CUYk916bPWyWvuyiZramCD4k6q)

Açılan notebookta bir cell'i çalıştırabilmek için ilgili cell'e tıklayıp Shift + Enter yapmanız yeterlidir. Fakat bu cell'leri sırayla çalıştırmayı unutmayın çünkü daha önceki bir satırda yazılan şey bir sonraki cell için gerekli olabilir.

Buradaysa daha çok sonradan bakmak isterseniz diye sadece teorik kısmı paylaşacağım. Fakat kodlara mutlaka bakmayı unutmayın.

---

Bir NLP projesinde kullanacağımız verinin kaynağı herhangi bir yer olabilir. Kitaplar, Twitter'daki insanların yazdığı tweetler, bir forum sitesinde paylaşılanlar... Herhangi bir yer. Bu ham haldeki; hiç işlenmemiş ve herhangi bir düzene oturtulmamış haldeki veriye, NLP özelinde genelde "corpus" (derlem/külliyat) denir. Ne tür bir NLP uygulamasıyla uğraşıyor olursak olalım, ilk olarak bu corpuslar üzerinde bir text preprocessingi yapmak genelde yapmamız gereken ilk şeydir. Text preprocessingden kasıt, elimizdeki veriyi işlenebilecek hale getirmek, veriyi hazırlamaktır. Şimdi bunlardan bahsedeceğiz, ilk olarak tokenization işlemiyle başlayalım:

## Tokenization

Tokenization işlemi, text preprocessing işlemlerinde genelde ilk olarak uygulanan işlemdir ve aslında basitçe elimizdeki veriyi kelimelere bölmektir. Yani şöyle, bir doküman alırız, bu dokümanı cümlelere böleriz, sonra bu cümleleri de kelimeler, sayılar, noktalama işaretleri haline getiririz. İşte bu parçalanmış haldeki verinin her bir parçasına token, bu işlemeyse tokenization diyoruz.

```py
"He didn't want to pay $20 for the book.".split()
```
Bu işlemin sonucu:
```py
['He', "didn't", 'want', 'to', 'pay', '$20', 'for', 'the', 'book.']
```

Görüldüğü üzere Python'da bu işlemi gerçekleştirmek oldukça kolay. Fakat tabii bazı sorunlar var, örneğin $ sembolünü sayıdan ayırmak isteyebiliriz ya da son kelimedeki nokta işaretini oradan ayırmak isteriz (çünkü oradaki noktanın birleştiği kelimeyle bir alakası yok, oradaki tek görevi cümlenin bitişini göstermek). Tek sorun bunlar olsaydı bu sorunları belki regular expressionlar (bilmiyorsanız önemli değil) kullanarak çözebilirdik ama maalesef durum böyle değil.

Yukarıdaki örnek İngilizce'den bir örnek fakat mesela şu örneğe bakalım:

![](https://lh3.googleusercontent.com/d/1joA9f8zIoGwV41OKnDWugmjGnHItvAZE)

Tokenization işlemini gerçekleştirmek için cümleyi boşluk karakterine göre parçalamak tabii ki kolay ama Çince gibi dillerde boşluk yok, dolayısıyla bunları öyle kolayca parçalayamayız. Bunun dışında yukarıda mesela noktanın da ayrılmasını istediğimizi söyledik ama bu örneğe baktığımızda N.Y.C. ifadesi bir kısaltma ve buradaki noktaların ayrılmasını istemeyiz, çünkü bu durumda noktalar kelimenin bir parçası oluyor.

Tabii bu kadarla da sınırlı kalmıyor. örneğin "full moon" ifadesindeki kelimeleri birbirinden ayırmalı mıyız ayırmamalı mıyız? Çünkü ikisi ayrı birer kelime olsalar da asıl ifade beraber olduklarında ortaya çıkıyor. Ya da "don't" gibi kısaltma ifadeleri "do not" şeklinde mi almalıyız ya da ne yapmalıyız?

Neyse bu sorulara girmeden önce ilk olarak "kelime (word)" dediğimiz şeyin ne olduğunun bir tanımını yapalım.

Kelime, bir dilde, kendi başına bir anlamı olan en küçük birimdir. Bununla alakalı 2 konsept daha vardır: Morpheme (Biçimbirim): Bir dilde, manası olan fakat kendi başına olmayan en küçük birimdir. İngilizce için -ing, re-, pre-, un- gibi. Grapheme (Yazıbirim): Bir yazı sistemindeki en küçük işlevsel birimdir. İngilizcede bunlar harflerdir. Örneğin Japoncada da heceleri görürüz. (Bu kavramları ezberlemenize falan gerek yok)

Her neyse, preprocessing işlemlerimizin ilk adımı olan tokenizationla alakalı problemlerden bahsettik ve bir şekilde bunları çözmemiz gerekiyor, daha en baştan öyle çöküp kalmamak lazım. tüm bu sorunları kapsayan ve her şeyi çözüme kavuşturan bir şeyler yazmakla uğraşabilirdik tabii ama neyse ki bu durumların üstesinden gelen spacy gibi bazı kütüphaneler var. Şimdi bu kütüphanenin bazı kullanım şekillerini göstereceğim fakat burada şu notu düşmem gerekiyor: Asıl meselemiz kütüphaneler değil, kütüphaneleri "ezberlemeye" çalışmayacağız. Çünkü "var olan her şey" için çalışan bir kütüphane yok. Elimizde bir iş olacak, bu iş için kullanılabilecek kütüphaneleri araştırıp deneyeceğiz, gerekirse biz de üstüne bir şeyler ekleyeceğiz ya da sıfırdan geliştireceğiz ve sonrasında işi tamamlayacağız. Süreç hep bu şekildedir. Kütüphaneler amaç değil araçtır.


## Basic Preprocessing

### Case Folding

Tokenization işlemiyle beraber, corpusu daha temiz hale getirme sürecindeki ilk adımı atmış olduk. şimdi birkaç yaygın olarak kullanılan temel preprocessing yöntemi daha göreceğiz. sıradaki konumuz case folding olacak.

Case folding, aslında çok basitçe bi textteki tüm karakterleri küçük ya da büyük hale getirmektir. Pekiii neden böyle bir şey yaptık şimdi göreceğiz.

Bir corpusu tokenize ederek kendimize bir vocabulary oluştururuz. Vocabulary dediğimiz şey, corpus içerisinde bulunan tüm eşsiz/özgün (unique) tokenlardır. Yani şöyle, diyelim ki tüm corpus içerisinde 10 defa "tavşan" kelimesi kullanıldı. O zaman vocabulary içerisine "tavşan" kelimesinin corpus içerisinde var olduğunu belirtmek için vocabulary'e 1 tane "tavşan" yerleştiriyoruz. Zaten "vocabulary" kelimesinin anlamı da "sözcük dağarcığı" demek. Yani işte hangi tokenlar kullanıldıysa (kaç defa kullanıldıkları fark etmeden) vocabularye kaydedilir. (Unique kelimesini her Türkçeye çevirmeye çalıştığımda böyle sıkıntı yaşıyorum anlaşılır olup olmadığına dair ama anlaşıldığını umuyorum...)

Case folding yaptığımızdaysa bu işlem hem vocabularyi, hem devamında gelecek işlemleri etkiler. Bir örnekle görmek daha iyi olur, önce cümleyi case folding yapmadan görelim:

"Aslı Hanım sadece işin aslı neyse onu bilmek istiyor."

Bu cümleyi tokenize ettiğimizde şöyle bir vocabulary elde etmeyi bekleriz:  
 ["Aslı", "Hanım", "sadece", "işin", "aslı", "neyse", "onu", "bilmek", "istiyor", "."]

Görüldüğü üzere "aslı" kelimesi "Aslı" ve "aslı" olarak iki defa geçiyor, çünkü bu iki kelime birbirleriyle tıpa tıp aynı şekilde yazılmadığı için farklı kelimeler şeklinde değerlendiriliyor - ki aslında bu örnekte bizim için de öyle.

Case folding uygulasaydık elde edeceğimiz vocabulary şu şekilde olurdu:  
["aslı", "hanım", "sadece", "işin", "neyse", "onu", "bilmek", "istiyor", "."]

Görüldüğü üzere bu noktada iki "aslı" kelimesi de birleşti ve tek bir kelime haline geldi. Yani tabii evet biraz zorlama bir örnek gibi gelmiş de olabilir ve "ne elde ettik şimdi biz?" diye sorulabilir de. Şöyle ki, case folding uyguladığımızda vocabulary daha küçük olacağı için kullanacağımız hafıza ve işlem gücünden tasarruf ediyoruz ve bu "recall"u arttırabilir. Fakat aslında genelde text preprocessing adımlarında case folding işlemi uygulanmaz. Çünkü, kaybettiğimiz/yok ettiğimiz bu kelimeler aslında bilgi kaybına yol açıyor. Yani "Aslı Hanım"daki "aslı"yla "işin aslı"ndaki "aslı" birbirinden çok ama çok farklı şeyler, cümlede bi insandan bahsedildiği bilgisi bile doğrudan yok oluyor. Dolayısıyla sonuçların daha kötü çıkmasına yol açabiliyor ve "precision"ı düşürüyor. Recall ve precision hakkında daha çok bilgi sahibi olmak isterseniz ufak bir aramayla bulabilirsiniz. Doğrudan NLP içerisindeki kavramlar olmadığı için şimdilik onları geçiyorum.


Ya da dur ya geçemedim. Hızlıca iki örnek üzerinden anlatmaya çalışacağım. Öncelikle, precision ve recall dediğimiz şeyler bir modelin performansını ölçmek için kullanılan iki metrik.

Precisionı yüksek sistemlere örnek olarak spam mailleri tespit eden modelleri verebiliriz. "Precision" anlam olarak "hassasiyet/kesinlik" demek zaten. Yani şöyle oluyor, model elinden geldiğince gerçekten ama gerçekten spam olduğuna emin olduğu mailleri spam olarak işaretliyor. Çünkü bu kadar emin olmadan bir şeyler işaretlerse, arada bizim için önemli olan mailler de kayıp gidebilir ki bu istenen bir şey değildir.

Bu örnek üzerinden gidecek olursak precision formülü şu şekilde:

$$ {\color{orange}{\text{Model tarafından spam olarak işaretlenen ve gerçekten de spam olan mail sayısı}} \over \color{orange}{\text{Model tarafından spam olarak işaretlenen ve gerçekten de spam olan mail sayısı + Spam olmadığı halde spam olarak işaretlenen mail sayısı}}} $$


Fakat elimizdeki probleme göre precisiondan ziyade recall'u daha göz önünde tutmak isteyebiliriz. Recallun olayı ise model elinden geldiğince tüm olası durumları bulmaya çalışıyor. Örneğin bir bankanın transferleri üzerinde çalışan bir model düşünelim ve bu modelin amacı "dolandırıcılık amacı taşıyan" transferleri bulmak olsun. Bu durumda elimizden geldiğince çok dolandırıcılığı tespit etmek isteriz, kesinliğine çok takılmayız. Mazallah bankamız zarar marar eder (etmez şerefsizler).


Bu örnek üzerinden gidecek olursak recall formülü şu şekilde:

$$ {\color{orange}{\text{Dolandırıcılık amacı taşıyan ve model tarafından tespit edilen transfer sayısı}} \over \color{orange}{\text{Dolandırıcılık amacı taşıyan ve model tarafından tespit edilen transfer sayısı + Model tarafından tespit edilemeyen dolandırıcılık sayısı}}} $$

### Stemming

Şimdiki yöntemimiz ise, stemming. Kelimelerin aldığı ekleri veya ön ekleri ortadan kaldırma işlemine stemming diyoruz. Örneğin "banking" ve "banks" kelimelerine stemming uyguladığımızda her ikisi de "bank" kelimesine dönüşür. Bu işlemin gerçekleştirilmesi tabii bazı kurallar dizisine bağlıdır bir algoritması vardır ve bu algoritmaların en yaygın olanı Porter stemmerdır (Porter's algorithm). Bu noktada, unutulmamalıdır ki, stemming işleminden geçen bir kelimeden elde edilen sonuç illa düzgün bir kelime olmak zorunda değildir. Örneğin, "analysis" kelimesine stemming uyguladığımızda "analysi" şeklinde bir kelime elde ederiz. Dediğimiz gibi, bunun sebebi stemming işleminin bazı önceden tanımlanmış kurallara bağlı olarak gerçekleştiriliyor olmasıdır.

Bu noktada, klasik sorumuzu soralım. "Stemming kullanmalı mıyız?" Tıpkı diğer yöntemlerde olduğu gibi stemming işlemi de vocabulary boyutunu düşürür ve modeli, aynı stem'e sahip kelimeler için aynı şekilde davranmasını sağlayacak şekilde genelleştirir. Aynı zamanda mevcuttaki vocabularyde var olmayan, yeni kelimeler için de yardımcı olabilir (bunun sebebi, yeni gelen kelimenin stemlenmiş hali daha önceden vocabularye eklenmiş olabilir). Negatif noktalarına gelecek olursak, stemmerlar kelimeyi fazladan stem edebilirler. Örneğin "university" kelimesi "universe" veya "univers" kelimelerine dönüşebilir. Ya da yeteri kadar stem edemeyebilirler, örneğin "alumnus" ve "alumni" kelimeleri, "alumnu" ve "alumni"ye dönüşür. Ki bu da iyi sonuçlar elde etmemizi engellemiş olur.

Sonuca gelecek olursak, stemming işlemi günümüzde artık oldukça nadiren kullanılıyor. Hem zaten stemming yerine kullanılabilecek daha iyi bir alternatif de var:

### Lemmatization

Lemmatization işlemi, kelimeyi "lemma"sına "düşürmeyi" sağlar - bir başka deyişle "sözlük formu"na dönüşmesini sağlar da diyebiliriz. Şimdi böyle söyleyince stemmingle aynı gibi görünebilir hani ne farkı var o zaman diye düşünebiliriz. Stemming işleminde, ekleri ve ön ekleri silmek için bazı önceden tanımlanmış kurallar katı şekilde uygulanır fakat bu sırada "eş anlam", "zaman kipi" ya da kelime bir isim mi fiil mi vs bunların hiçbiri göz önüne alınmaz. Lemmatizorlar ise bunu yapar. Örneğin "did", "done" ve "doing" kelimelerine lemmatization uyguladığımızda hepsinden de ayrı ayrı "do" sonucunu elde ederiz. Stemmerların aksine lemmatizorlar daha böyle incelikli şekilde hareket eder ve bir kelimenin isim mi fiil mi vs olduğunu da göz önüne alır. Örneğin:

"talkative" ----lemmatizer---> "talkative"  
"talkative" ----stemmer---> "talk"

Görüldüğü üzere talkative kelimesine dokunmamıştır çünkü bu kelime bir sıfat olarak var olmaktadır ve "talk" haline dönüştürülürse o sıfat özelliği kaybolacaktır. Ama görüldüğü üzere stemmer hiç acımaz.

Neyse, lemmatization işleminin avantajlarına gelecek olursak, aslında bu açıdan stemminge benzerler fakat stemmerlara göre çok daha iyi çalışırlar ve genelde daha çok tercih edilirler. spacy kütüphanesi içerisinde lemmatization desteklenirken stemming işlemi desteklenmemektedir. Olumsuz yanına gelecek olursak da, lemmatization işlemi biraz zararlı bir işlem de olabilir. Örneğin yukarıda gösterdiğimiz gibi "did"i "do"ya çevirdi ama eğer buradaki zaman kipi bilgisi işimiz için gerekli bir bilgiyse, lemmatize etmek istemeyiz. Buna ek olarak çok daha böyle incelikli çalıştığı için stemminge oranla daha fazla kaynak gerektirir.

---

Bu yazıyı kodlarıyla beraber bilgisayarınıza indirmek için şu linki kullanabilirsiniz: [02-basic-text-processing](https://github.com/ali6parmak/natural-language-processing-notlari/blob/main/02-basic-text-processing.ipynb)

Alıştırmalara bakınmanızı tekrardan öneriyorum. Hatta baktıktan sonra onunla da yetinmeyin bu konularla alakalı rastgele tutorialdır örnektir videodur bakınabilirsiniz. Böyle şeylerin linklerini toplayıp üstünüze yığmak istemiyorum ama ücretsiz kaynaklar gayet yeterli endişelenmeyin. Gidip sağdan soldan kurs satın almanıza gerek yok, o kurslar genelde bir işe yaramıyor. Daha çok "ben bunun için uğraştım ya" hissinizi bastırmaya yardımcı oluyor o kadar. Youtube'daki eğitimlerin kalitesi yeter de artar. medium veya towardsdatascience gibi sitelerde de tutorial bulabilirsiniz bol bol ama kendinizi herhangi bir şeyle de sınırlamayın işte, internet geniş.

Bir sonraki yazıda görüşmek üzere.
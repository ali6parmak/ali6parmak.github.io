---
title: Yapay Zeka, Makine Öğrenmesi ve Derin Öğrenme
description: Yapay zeka, makine ögrenmesi ve derin ögrenme kavramlarına giris seviyesinde bir bakıs.
written_by: ali
date: 2023-03-19 16:46:00 +0300
categories: [Yapay Zeka]
tags: [machine-learning, deep-learning, artificial-intelligence, ai]
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


## Giriş

Aslında bu yazı içinde kod da barındıran bir yazı olacaktı ve onunla beraber anlatacaktım fakat ilk olarak bu kavramların ne olduğundan, birbirleriyle hangi noktalarda ayrıştıklarından ve neden böyle isimlendirildiklerinden bahsetmek daha iyi olur diye düşündüm. Yazıyı elimden geldiği kadar herkesin anlayabileceği şekilde yazmaya çalıştım, baş ve son kısımları daha çok genel kültür sayılır ve orta kısmında da işin biraz tekniğine giriliyor. Ortalarda hafiften kafa yakabilir ama endişe etmeyin, keyifli olacağını düşünüyorum. En azından bunun için elimden geleni yapmaya çalıştım.

Bu yazıyı çoğunlukla François Chollet'in Deep Learning with Python kitabının 2. baskısındaki bilgilerden çıkardığım notları kendi yorumlarımla birleştirerek hazırladım.

Son yıllarda televizyonda, internette, arkadaş ve hatta aile arasında bile sürekli olarak “yapay zeka” kavramıyla karşılaşıyoruz bir şekilde. Makine öğrenmesi, derin öğrenme ve yapay zekayla alakalı onlarca yüzlerce yazılar makaleler yazılıyor ve bu yazıların çoğu aslında bu işin içerisinde olmayan kişiler tarafından ele alınıyor ve sürekli olarak şey konuşuluyor işte gelecekte arabalar kendi kendine gidecek, işlerin büyük kısmını robotlar halledecek ve insanlara gerek kalmayacak vs. Aslında tüm bu yazılıp çizilen ve konuşulan şeylerin büyük bir kısmı sadece bir hypetan ibaret ve makine öğrenmesiyle profesyonel anlamda ilgilenen/ilgilenmek isteyen biri olarak neyin hype neyin değer verilmesi gereken bir fikir olduğunu iyi anlamamız gerekiyor. Bu yüzden şu sorularla başlamak bize yardımcı olabilir: Deep learning bu zamana kadar neyi başardı? Gerçekten de önemli mi ve tüm bu hypeın bir karşılığı gerçekten olacak mı? Bu hypeı kovalamaya devam etmeli miyiz?

Adım adım gidelim. İlk olarak, “yapay zeka” denildiğinde tam olarak neyden bahsettiğimizin tanımını koymakla başlayalım ve makine öğrenmesiyle derin öğrenme arasındaki ilişkileri nasıl onu da anlayalım.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUga5oeawiw6-Ea4INVFmgafQ7JvZfd9KEK0kxhxMMXjV8Tiz1GWYsIjOvmjzuHN2pAwQCkwDEp6_h3xwvQjsGAIR8GchQ4ECFDc_7OJPOQBRPMv_MdmDaHcINbdTxK1bndJERw3aRdbz44709E6QxZmDFkoyhnkvIyflImEjBA0RCrQZxbAFQNWstsw/s437/resim_2023-03-19_163828025.png)


Yapay zeka dediğimiz “şey” ilk olarak 1950’lerde doğuyor ve bu doğum bilgisayar bilimleri alanındaki bazı öncü kişilerin “Düşünebilen bilgisayarlar yapabilir miyiz?” şeklindeki sorgulamalarıyla meydana geliyor – ki bu soruyu sormaya günümüzde de devam ediyoruz aslında.

Yapay zekayı en basit haliyle “normalde insanlar tarafından gerçekleştirilen işlerin makineler tarafından gerçekleştirilebilmesini sağlama” olarak tanımlayabiliriz. Bu tanımı itibariyle yapay zeka, makine öğrenmesi ve derin öğrenme alanlarının yol göstericisi olan çok daha genel bir alandır. Fakat onlara ek olarak içerisinde “öğrenme” barındırmayan birçok yaklaşımı da bulundurur. Kaldı ki 1980’lere kadar piyasada mevcut olan çoğu yapay zeka kitabında “öğrenme” kavramından bahsedilmiyordu bile. Örneğin ilk satranç oynama programları sadece tüm kuralları programcılar tarafından tek tek yazılan programlardı ve içerisinde makine öğrenmesine dair hiçbir şey barındırmıyordu. Dahası, oldukça hatrı sayılır bir süre boyunca uzmanların birçoğu programcıların kendi elleriyle tanımladığı binlerce kuralı bir araya getirerek insan seviyesine ulaşmış bir yapay zeka üretilebileceğini düşünüyordu. Şimdi düşündüğümüzde bu fikri saçma bulmuş olabilirsiniz, çünkü ne kadar kural tanımlarsanız tanımlayın bir “insan yaratmak” için asla yeterli olmayacaktır fakat “uzman” denilen kişilerin düşünceleri bu noktadaydı işte. Bu yaklaşım “sembolik yapay zeka” olarak bilinir ve 1950’lerden 1980’lere kadar popüler olmuş olan bir görüştür.

Her ne kadar sembolik yapay zeka iyi tanımlanmış mantıksal problemleri çözmekte gayet başarılı olsa da, örneğin satranç oynamak gibi; daha karmaşık, belirsiz ve zorlu problemleri çözmekte aynı başarı yakalanamamıştır. Örneğin bir görselde ne olduğunun bilgisayar tarafından anlaşılması, bilgisayarın sesi tanıyıp bunu yazıya çevirebilmesi, iki dil arasında çeviri yapabilmesi gibi. Böylelikle de sembolik yapay zekanın yerini yeni bir yaklaşım almıştır, buna da “makine öğrenmesi” diyoruz.

Makine öğrenmesiyle devam edelim. Bir insan bir bilgisayara bir işi yaptırmak istiyorsa, bunun adımları normal şartlarda şu şekildedir: Bir insan programcı, istenilen işle ilgili kuralları (ki bu kurallara aslında bilgisayar programları diyoruz) yazar, sonrasında da bu kurallara bazı girdiler verir (girdi dediğimiz şey bağlamdan bağlama göre çok değişebilir tabii), en başta belirlenen kurallar bu girdilere bilgisayar tarafından uygulanır ve sonuçlar elde edilir. Makine öğrenmesindeyse bu “geleneksel” yolu biraz daha değiştiriyoruz: Makineye ilk olarak girdileri gösteriyoruz, diyoruz ki “bak, işte senin girdilerin şunlar olacak”. Devamında o girdileri bilgisayara verdiğimizde çıktı olarak ne elde etmek istiyorsak onun bilgisini veriyoruz. Ufak bir örnekle daha iyi anlaşılabilir. Diyelim ki elimizdeki iş “görsellerde bulunan sayıları tanıma” işi olsun. Yani elimizde fotoğraflar olsun ve bu fotoğrafların üzerinde sayılar yazıyor olsun, bilgisayara bu görselleri gönderdiğimizde de bize görsellerde hangi sayı yazıyorsa onu söylemesini isteyelim. Özetle, girdilerimiz: görseller – çıktılarımız: bilgisayarın bize vereceği hangi sayı olduğu bilgisi. İşte bunları belirledikten sonra bilgisayardan kuralları (yani bu işi gerçekleştirecek programı) kendisinin bulmasını istiyoruz. Örnek olarak verdiğimiz işi düşündüğümüzde, bir sürü çeşitte el yazısı tipi var mesela. O yüzden bir sürü farklı stilde “3” yazılabilir. Bu yüzden bilgisayarın çok daha iyi kurallar çıkarabilmesi için bir sürü 3 sayısını içeren görsele ihtiyaç duyarız ki daha kapsamlı bir yol bulabilsin.

Bu yaklaşıma baktığımızda, aslında bunu birisine bir şey öğretmek gibi düşünebiliriz. Çocuğunuza ders çalışsın diye kitap alırsınız mesela ve o çocuk o kitapları çalışıp öğrendikçe çok daha başarılı sonuçlar üretir, bunun gibi. İşte makine öğrenmesi modelleri de bizim evladımız gibidir. Bu yüzden makine öğrenmesi modellerini oluştururken onları “programladığımızı” değil, “eğittiğimizi” (train) söyleriz.

Bu eğitme kısmı tam olarak kafada oturmamış olabilir yine de, birazcık daha açmaya çalışayım. Diyelim ki tüm rakamlarla alakalı bir sürü görsel topladık ve bilgisayarımızı eğitmek istiyoruz. Örneğin bilgisayara “5” içeren görselleri veriyoruz ve bilgisayar bakıp diyor ki “aaa demek bir görselin 5 olması için böyle olması gerekiyormuş”. Sonra başka bir sayıyla alakalı görselleri veriyoruz, diyelim “8” olsun, bilgisayar diyor ki “hmmm demek sayının 8 olması için böyle 2 tane yuvarlağı olması lazım”. Tabii bilgisayar böyle “düşünüyor” falan değil, arkasında yatan şey tamamen bir matematikten ibaret ve oralara da geleceğiz ama anlaşılabilmesi açısından bu şekilde ifade ediyorum.

Şu özet görsel biraz daha yardımcı olabilir:


![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6p4l4q4UGxBo-X2DuGZlXZ3E3dYPfRBlY7ucEsSRQP7O6Wk49rCiYRkLrsgXCxC6NqNubevm5WbrpsVYqculSVPtG72tvmiB_5DKpv8HyKFIC1b_sxCH0NYck6BBJMFHnEAgkYSAeqjST3NSLqdJPEllarpiSDXDBlILGMiv6kCn0sup4OKU7AKJqzA/s356/resim_2023-03-19_164010062.png)



Makine öğrenmesi alanının asıl ilerleme göstermeye başladığı dönem 1990’lar oluyor ve kısa zamanda yapay zeka alanının popüler alt alanlarından biri haline geliyor. Tabii ki bu ilerlemeyi sağlayan en önemli etmenlerden ikisi, daha hızlı donanımların ve daha büyük datasetlerin (veri kümeleri, yani içerisinde bir sürü veri içeren dosyalar; yüz binlerce sayı görseli içeren bir dosyalar topluluğu düşünün mesela, bunun gibi) kullanılabilir hale gelmesiydi. Çünkü makine öğrenmesi uygulamalarında iyi bir başarı elde edilmek isteniyorsa, genellikle çok büyük bir dataset ve iyi performansa sahip donanımlar gereklidir.

Makine öğrenmesi alanı istatistikle de alakalı olsa da, bazı önemli açılardan istatistikten ayrışmaktadır. İstatistiğin aksine makine öğrenmesi çok daha geniş ve karmaşık datasetler üzerinde çalışır ve Bayes analizi gibi bazı istatistiksel yöntemleri bu datasetler üzerinde kullanmak da oldukça elverişsizdir. Sonuç olarak makine öğrenmesi, özellikle de onun alt alanı olan derin öğrenme, bir parça – ki belki de çok küçük bir parça matematik teorisine ve temel olarak da mühendislik disiplinlerine bağlıdır. Teorik fizik ve matematiğin aksine, makine öğrenmesi daha çok pratiğe yöneliktir ve yazılımsal ve donanımsal alanlardaki gelişmelerden de güç almaktadır.


## Veriden Kurallar ve Tasvirler (Representation) Çıkarmak


Bu kısma gelene kadar yorulduysanız şöyle 3-5 dakika bir kafa dinlendirmek isteyebilirsiniz. Çünkü her şeyi bir anda sindirmek genelde kolay değildir ve biraz daha teknik kısma dokunacağız bu noktada.

Devam edelim.

Derin öğrenmenin tanımını yapabilmek için derin öğrenme ve makine öğrenmesi yaklaşımlarındaki farklara bakmamız gerekiyor. İlk olarak, makine öğrenmesi algoritmalarının ne yaptığı hakkında fikir sahibi olmalıyız. Daha önceki kısımda, makine öğrenmesi yaklaşımında bilgisayarın kendisine verilen veriyi kullanarak bazı kurallar öğrettiğini söylemiştik. Dolayısıyla, makine öğrenmesi için, üç adet şeye ihtiyaç duyarız:

- Input data: Örneğin, bilgisayarın sesleri tanıyıp onları yazıya dökmesini sağlamak istiyoruz. Bu noktada “girdi verisi” içerisinde insanların konuştuğu bazı ses dosyaları olabilir.

- İstenilen outputun (çıktı) örnekleri: Ses tanıma görevinde bu outputlar ilgili sese karşılık gelen metinler olabilir. Yani bir yerde bir ses dosyası vardır ve karşılığında bu ses dosyasındaki kelimeleri içeren bir metin dosyası vardır, sesle metin eşleştirilir.

- Algoritmanın iyi bir iş çıkarıp çıkarmadığını anlamak için bir yol: Algoritmanın bize verdiği (bilgisayarın kendisinin ürettiği) output değerleri ve bu değerlerin aslında olması gerektiği değerler arasındaki farkı belirlemek için bir yola sahip olmak gerekmektedir (Örneğin içinde 5 içeren bir görsele bilgisayar 3 demiştir ve bu durumda başarısız olmuştur, başarıyı ölçebilmeliyiz kısacası.). Diyelim ki bilgisayar 5 olması gereken görsele 3 dedi, modelin eğitim süreci boyunca bu yanlış yapılan tahmin bilgisi modele feedback olarak döner ve algoritma nasıl daha iyi çalışması gerektiğini anlar. Yani “haaa demek 3 değil de 5’miş ya pardon tamam” deyip ona göre kendini güncellediğini düşünebilirsiniz. İşte sürekli olarak bahsettiğimiz bu “öğrenme” işi; aslında verilerin bilgisayar tarafından alınıp, alınan veriden bir tahmin üretilip, üretilen tahminin doğruluğunun kontrol edilip, bu kontrole bağlı olarak modelin kendisini güncellemesini içeren bir süreçtir.

Makine öğrenmesi modellerinin amacının input dataları anlamlı outputlara dönüştürmek olduğunu ve bunu veriden “öğrenerek” gerçekleştirdiğini söyledik. Fakat bu noktada, makine öğrenmesi ve derin öğrenmenin içerisinde temel bir problem vardır: veriyi anlamlı bir şekle nasıl dönüştürebiliriz (transform)? Bir başka deyişle, verinin bizim için kullanışlı olan, bizi doğru outputa götürecek olan representationlarını öğrenmeyi nasıl başarırız? “Representation”dan kastın ne olduğunu açıklarsak bunu anlamak daha kolay olacak:

Representation dediğimiz şey aslında elimizdeki dataya farklı açılardan bakmak, onu farklı şekillerde “tasvir etmek”, “tanımlamak” işidir. Örneğin, bir görsel RGB (red-green-blue) formatında encode edilebilir (kodlanabilir) – ki genelde görselleri günlük hayatımızda hep bu formatta kullanıyoruz ama aynı zamanda HSV (hue-saturation-value) dediğimiz bir format da var. “Görseldeki tüm kırmızı pikselleri seç” görevi RGB formatında oldukça kolayken, “görseli daha az satüre edilmiş hale getir” görevi HSV formatında daha kolaydır. Makine öğrenmesi modellerinin yaptığı iş de aslında kendilerine verilen input data için uygun olan representationlar üretmektir. Bunu somut bir örnekle de görelim:


![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbNOxBTQVD1tXvt9ZCVZlX2rNWzg3XxNhnGAT92-HMcWI5C2_L5y5gSjwhyu99eEX_U6nbY8GPLST87yzpRANFtCIsct5f0KtKPkj1O6oOyL7Mfwrq6jSEJjonVJoI26Q7b0J4u0nLQQIeJPtJCrzOchweptu8oNI7cJUkTSKjsp8Dy71oCI2aVOV2tA/s250/resim_2023-03-19_164117267.png)


Yukarıdaki gibi x ekseni ve y ekseni üzerinde gösterilmiş olan bazı noktalar olsun. Ve görevimiz de (x, y) koordinatlarını alıp bu noktanın siyah mı beyaz mı olacağını bulmaya çalışan bir algoritma geliştirmek olsun. Bu durumda,

- Inputlar, ilgili noktaların koordinatları olacaktır.

- Outputlar, ilgili noktaların renkleri olacaktır.

- Algoritmanın iyi bir iş çıkardığını anlamak için kullanacağımız yol da örneğin doğru olarak sınıflandırılan noktaların yüzdelik oranı olabilir.

Şimdi bize burada gerekli olan şey, datamızın siyah ve beyaz noktalarını iyi şekilde ayırabileceğimiz yeni bir tasviridir. Burada gerçekleştirebileceğimiz bazı dönüşüm (transformation) işlemlerinden biri, koordinatları değiştirmek olabilir:


![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwhgcXaZtM58u05guMKBVeBcXemS0wnzgLHlXHYGd9h67PE0-8yCSvmu1hqjFflmRZ0uovdHBDIq1ugVlpzNHNFeT0LzpwyndcLCTBPzNpCvDSIxd_Be6L9ABmpDttV1q_4kB9GYXoowqAQw2yuqpbDhgP8X2gM6HGXqbZBNCE-hoDQgQtoJexhCSGRw/s758/resim_2023-03-19_164143831.png)


Yukarıda çizdiğimiz bu yeni koordinat sistemi, datamızın yeni bir representationı olacaktır ki görüldüğü üzere gayet de iyi bir tasvir. Bu tasvir sayesinde siyah/beyaz sınıflandırmasını çok basit bir kuralla gerçekleştirebiliriz: “Siyah noktalar x>0 olan bölgededir” veya “Beyaz noktalar x<0 olan bölgededir”, şeklinde. Bu yeni tasvir, belirlediğimiz bu oldukça basit kuralla birleştiğinde elimizdeki problem oldukça temiz şekilde çözülmüş olacaktır.

Bu örnekte, koordinatların değişimini kendi ellerimizle yaptık. Yani bir insan beynini kullandık ve uygun bir tasvir oluşturup çözümü bulduk. Bu kadar basit bir problem için tabii ki sorun yok yani bunu gerçekleştirebildik ama peki ya daha zor görevlerde? Mesela görsellerin sınıflandırılmasını yapmak istediğimizde ya da el yazısıyla yazılmış olan rakamları tanımak istediğimizde? Örneğin 6 ve 8 arasındaki ya da 1 ve 7 arasındaki farkın bulunulmasını sağlayacak bir görsel dönüşümleri listesini tek tek bilgisayarın çalıştırabileceği şekilde yazabilir miyiz, üstelik tüm farklı el yazıları için bunu yapabilir miyiz? Dünyada milyarlarca insan ve herkesin kendine ait bir el yazısı olduğunu düşündüğümüzde, pek de kolay değil.

Belki bir noktaya kadar gerçekleştirebiliriz. Fakat az çok hayal edebileceğiniz üzere böyle bir sistemi geliştirmek hem oldukça zahmetli hem de sürdürülebilmesi oldukça zor olacaktır. Yani şöyle ki her yeni bir el yazısıyla karşılaştığımızda daha önceden belirlemiş olduğumuz onlarca kural belki işe yaramaz hale gelecektir ve bizi yeniden düşünmek zorunda bırakacaktır.

Tüm işin bu kadar zor olduğunu göz önüne alınca da tabii ki bunu otomatik hale getirmek isteriz. Örneğin tek tek kendimiz bazı tasvirler oluşturmaya çalışmak yerine, otomatik olarak üretilmiş olan bazı tasvirler ve bunlara bağlı kurallar üzerinde güzel/iyi çalışanı aramak, iyi sonuçlar üretenleri de alıp feedback olarak kullanmak isteriz.

Sonuç olarak makine öğrenmesi şudur: Bizi doğru yola götürecek olan bir feedback kullanarak, daha önceden tanımlanmış olan bazı olasılıklar uzayında, işimize yarayabilecek olan data tasvirleri ve kurallar aramak. İşte bu basit fikir şu an etrafımızda gördüğümüz “yapay zeka uygulaması” olarak karşımıza çıkan ses tanımlamadan kendi kendini süren arabalara kadar tüm görevlerin çözülebilmesini sağlamaktadır.

Şimdi, “öğrenme”nin ne olduğunu anladığımıza göre, “derin” öğrenmenin ne olduğuna bakalım.


## Derin Öğrenmenin “Derin” Kısmı

Devam etmeden önce ufak bi soluklanmaya daha ihtiyacınız olabilir.

Derin öğrenme, makine öğrenmesinin oldukça spesifik bir alt alanıdır. Açıklamasını yapmaya çalışacağım ama ilk başta kafada çok fazla bir şey canlanmayabilir, anlaması zor olabilir ama sabredin sonu güzel olacak. Daha önceki kısımlarda data için yeni tasvirler bularak elimizdeki problemi çözmeye çalıştığımızı söyledik. İşte derin öğrenmedeyse bu yeni tasvir bulma işini ardışık olarak gerçekleştiriyoruz. Yani şu şekilde, diyelim data üzerinde bir dönüşüm gerçekleştirdik ve yeni bir tasvirini elde ettik. Sonra bu elde ettiğimiz tasvir üzerinde bir başka işlem daha gerçekleştiriyoruz ve çok daha farklı bir tasvir elde ediyoruz. Bunu katman katman (layer) ilerleyen bir iş olarak düşünebiliriz. Birinci katmanda bir şey elde ederiz, birinci katmanın sonucundan elde ettiğimiz şeyi ikinci katmana veririz ve oradan da bir şey elde ederiz ve bu böyle gider. İşte derin öğrenmenin odağı/temel amacı, input datayı alıp ardışık olarak yerleşmiş olan katmanlardan geçirerek her katmanda daha anlamlı tasvirler elde etmektir. Dolayısıyla derin öğrenmedeki “derin” kelimesi de işin içinde çok daha böyle derin manalar olduğundan değil, peş peşe layerlar kullanarak elimizdeki modeli “derinleştirdiğimiz” içindir. Model içerisinde kullanılan layer sayısına da modelin “derinliği” (depth) denilmektedir. Dolayısıyla “derin öğrenme” terimi yerine “katmanlandırılmış tasvir öğrenimi” ya da “hiyerarşik tasvir öğrenimi” gibi bir terim de kullanabilirdik ama ne gerek var yani derin öğrenme ne güzel işte.

Modern derin öğrenme uygulamalarında genellikle onlarca veya yüzlerce ardışık layerdan elde edilen representationlar kullanılır ve tüm bu representationlar modelin training (eğitim) datasına maruz kalmasıyla otomatik olarak elde edilir. Bu arada, makine öğrenmesinin derin öğrenme haricindeki diğer yaklaşımları datanın genelde bir ya da iki katmanlı tasvirini öğrenmeye odaklıdır ve dolayısıyla bu durum zaman zaman shallow learning (sığ öğrenme) olarak adlandırılır.

Bu layerlar halinde elde edilen tasvirler; “neural network”ler (sinir ağı) denilen modeller aracılığıyla öğrenilir ve bu modeller gerçekten de bazı katmanların üst üste konulmasıyla oluşturulurlar. “Neural network” terimi aslında nörobiyolojiye yapılmış olan bir referanstır. Fakat her ne kadar derin öğrenmedeki bazı temel konseptler bizim beyni anlayışımız şeklinden (özellikle de beynin görme merkezinden) esinlenilse de, derin öğrenme modelleri beynin bir modellemesi değildir. Beyinlerimizin, az önce anlatılan derin öğrenme konsepti gibi çalıştığına dair elimizde hiçbir kanıt yoktur. Sağda solda ya da böyle bilimsel popüler kültür yazılarında, makalelerinde belki denk gelirsiniz derin öğrenmenin beyinden esinlenildiği bilgisine fakat kesinlikle böyle bir durum yoktur. Bunu şu yüzden ifade etmek lazım çünkü bu alana yeni başlayan kişilerin böyle bir bilgiyle sektöre geliyor olmaları ve bir şekilde yapılan işlerin nörobiyolojiyle de alakalı olduğunu düşünmeleri, hem kafa karıştırıcı hem de üretkenliği azaltan bir duruma yol açabilir. Bir de bilirsiniz insanlar bilgili oldukları şeylerle alakalı gizem yaratmayı falan da severler, “aaabiii aynı beynimiz gibiiii” falan diye böyle mistik bir şeymiş, büyüymüş gibi lanse edebilirler fakat hiç ama hiç alakası olmadığına emin olabilirsiniz. Bizim işimize yarayacağı haliyle derin öğrenmenin tanımı şudur: Datadan bazı tasvirler elde etmek için kullanılan matematiksel bir framework (sistem/çerçeve/yapı - teknik bi kelime biraz).

Peki derin öğrenme tarafından elde edilen tasvirler nasıl görünür? Şimdi bunu inceleyelim. İnceleyeceğimiz örnekler “Görselde hangi sayı var?” görevine ait tasvirleri göstermektedir.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1G0UZLL0e-Epvz0q_Fq0lDotbcueWXrX0AAYCbGKEpJdBLO99HedB3oolT0o5xKsLXSg_xLcjnseoHVOin7_SO4YfqmeHbX2XgczLtWcW1U4aiKm_-zMq9CwczPuWOM4UGtr-PIoOZTTILa6LzTB1vTz-u7gIICTu-CzDu0W9VEW51Wb01C-W4iDigA/s532/resim_2023-03-19_164221242.png)


Yukarıdaki gösterimde de görüleceği üzere networkümüz rakam içeren görseli alıp bazı layerlardan geçirerek farklı tasvirler elde etmektedir. Her bir layerın sonucunda input hakkında edinilen bilgi daha fazla olacaktır. Bu noktada bir deep networkü çok aşamalı bir “bilgi damıtma” süreci olarak görebiliriz. Bilgi, ardışık olarak yerleştirilmiş olan filtrelerden geçer ve her seferinde daha “saf” hale gelir:

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi66PbxBHX_-iFOXDuU6S-cZlGbOgc1SnWkjiBkexFve1ONnj12ymcUsXgqpxcjpYkE5SuZAksi2tZtFSM6BeQpbGJT0ZuaNOeUZpIs2vKZaNFzVZO9t1V3HMLc1ZN-XXZeE1H0IHVfJgodaochXcyuR4reMMNzDEh5qQoRWnkM0BEzdSqxddMUudH0Nw/s800/resim_2023-03-19_164245273.png)


Sonuç olarak, deep learning teknik olarak şudur: datanın tasvirlerini öğrenmek için çok aşamalı bir yol. Oldukça basit bir fikir olarak görülebilir, ki öyle ama, işin sonunda elde edilen sistemler tıpkı bir büyüymüş gibi hissettirebilir.


## Üç Aşamada Derin Öğrenme

Geldiğimiz noktada, makine öğrenmesinin inputları hedeflere (target) eşleme (mapping) işi olduğunu ve bu işi gerçekleştirmek için de sistemin çok sayıda input ve onlara ait target örneğini görmesi gerektiğini biliyoruz. Ayrıca deep neural networklerin bu mapping işlemini gerçekleştirmek için bir dizi basit data dönüşümü (layerlar aracılığıyla) kullandığını ve yine bu dönüşümlerin de gösterilen örneklerle öğrenildiğini biliyoruz. Şimdi, bu learning sürecinin tam olarak nasıl gerçekleştiğine bakalım.

Bir layerın input data üzerinde gerçekleştirdiği işlemlerin bilgisi, layerın “weight” (ağırlık) değerleri içerisinde kaydedilir ki aslında bunlar baktığınızda hiçbir şey anlayamayacağınız bir sürü sayıdan ibarettir. Teknik olarak ifade etmek gerekirse, bir layer tarafından gerçekleştirilen transformation (dönüşüm) işlemi, bu layerın weight değerleriyle “parameterize” edilir/parametre haline getirilir (weight değerleri aynı zamanda layerların parametreleri olarak da ifade edilirler). Bu bağlamda, “learning”in manası, bir networkün tüm layerları içerisindeki uygun weight değerlerini bulmak olacaktır. Buradaki uygun değerden kasıt; yani bu weight değerleri öyle sayılar olmalıdır ki, networkümüz weight değerlerini kullanarak kendisine verilen input için doğru outputları üretebilsin. Fakat buradaki olay şudur: deep neural network içerisinde on milyonlarca parametre, weight değeri olabilir. Tüm bu weight değerleri için gerekli olan doğru değerleri bulmak da göz korkutucu görünebilir, özellikle de tek bir parametrenin değişmesinin diğer tüm parametrelerin davranışlarını da etkileyeceğini düşünürsek.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz8qmgGbg-e-mzT2dNU9OHwrxd8LOw-YhU6rvjE2tKVhTwQ71fQHT6MnGIN_iOxTfPTGKEnSENrzBFMTZ6Rj1i9OdsK5p272Z9RrVC6DIlT8tE_Bb-laPS78WCyF_sHEgPaRYGyktAueoIYY91NHS16k0ckJR0oymKs6pqLu7ii6VGJlpgza8fghztBQ/s509/resim_2023-03-19_164309405.png)


Bir şeyi kontrol edebilmek için, öncelikle o şeyi gözlemleyebiliyor olmamız gerek. Bir neural networkün outputunu kontrol edebilmek içinse, bu outputun asıl olması gereken gerçek değerden ne kadar uzakta olduğunu ölçebiliyor olmamız gerek. İşte bu görev, networkün “loss function”ına düşüyor. Loss functionın zaman zaman “objective function” veya “cost function” şeklinde isimlendirildiği de olur. Loss function, networkün tahmin değerlerini (prediction) ve gerçek target değerlerini (yani doğru/asıl/olması gereken değerleri) alıp bunlar arasındaki uzaklığa bağlı olarak bir skor üretir, bu da bize networkün ne kadar iyi iş çıkardığını söyler.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtsQQVtrrUPLJ9zA_hj--48UEfikcGsBPfoDkzP-Z_8mHa5tvCFLnPdyHH58Erxm34YWTKa4hfBH2d5FL1KtI7qeN1XXZmE6orMsw7sBsfufsFjiDAcBZckbZKrWTeAO1oMsppFErP-UNmOt6p1xbSpTG2fnXL79Ly6XnC_ojEE0taF9OFflxT2Jg23Q/s460/resim_2023-03-19_164335352.png)


Derin öğrenmedeki asıl olay üretilen bu loss skorunu bir feedback sinyali olarak kullanıp layerların weight değerlerini minik minik güncellemektir. Ve bu güncelleme işlemi mevcut olarak networkte bulunan data örneğinin loss skorunu düşürecek doğrultuda olmalıdır. Net olmadıysa biraz daha netleştirmeye çalışayım: Elimizde bir sürü data var ve bunların toplamı inputlar kümesini oluşturuyor. Bu kümeden bir datayı alıp networke sokuyoruz, data networkün layerları boyunca ilerliyor ve layerlar bu datayı görünce içlerindeki weight değerlerini dataya bağlı olarak güncelliyorlar. Mesela verilen data içerisinde “7” rakamını içeren bir görselse, networkün weight değerleri bu görselin bir “7” görseli olduğunu söyleyecek şekilde – bunu öğrenecek şekilde güncelleniyor. Sonra bir başka data geliyor ve bu böyle devam ediyor.

Tüm bu düzeltme (adjustment) işlemi “optimizer”ın görevidir ve bu optimizerın temelini “backpropagation” (geri yayılım) adı verilen bir algoritma oluşturur. Bu algoritma, deep learningin merkezindeki algoritmadır. Sonraki yazılarda daha detaylı göreceğiz.

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9oKddVR7X6ZppcZtmcWC_KWMmZRbZnfeZ8aS7aHe0xbmFZncszBUDvgwwrmT9i-5dRVNAQ-ClEtBxereLm2vqObmyIsVMejpN5xhp2Ta2VlUmeqFsv3u7GT30zhOygKk-al5b_OivpZwy72nqv-QBw0iJl89tgShzHNbHB6eZo1uj_AVgdUfgjEgJIA/s518/resim_2023-03-19_164400255.png)

Her şeyin en başında, network daha hiç data görmemişken ve daha ilk işlem henüz gerçekleştirilecekken, layerların weight değerlerine random (rastgele) sayılar atanır. Dolayısıyla en başta network yalnızca bir dizi random dönüşüm işlemini gerçekleştirir. Doğal olarak, ilk başta elde edilen outputlar olması gereken değerden oldukça uzaktadırlar ve bu yüzden loss skorları oldukça yüksektir. Fakat network üzerinden geçen her bir data örneğiyle beraber, weight değerleri doğru yönde küçük küçük güncellenir ve loss skoru düşürülür. Bu süreceyse “training loop” (eğitim döngüsü) diyoruz. Bu döngü genelde binlerce örnek üzerinden onlarca kez geçerek gerçekleştirilir. Ve tüm bu işlerin sonunda elde edilen minimal loss’a sahip networkeyse “eğitilmiş network” diyoruz. Daha önce de olduğu gibi yine, aslında oldukça basit görünen bir mekanizma olmasına rağmen bunu daha büyük sistemlere ölçeklediğimizde her şey bir sihirmiş, büyüymüş gibi görünüyor.

Deep learningin bu zamana kadar neleri başardığına gelelim biraz da. Deep learning her ne kadar makine öğrenmesinin oldukça eski sayılabilecek bir alt alanı olsa da, önemi ancak 2010’ların başında anlaşılmaya başladı. Ve sonrasında süregelen birkaç yıllık süre içerisindeyse deep learningle başarılan her şey devrimsel nitelikteydi. İnsanlara göre oldukça doğal olan ama makineler açısından “anlaşılması” güç şeyler başarıldı. İşte bazı çığır açan başarımlar şunlardı:

- Neredeyse insan seviyesinde görsel sınıflama yapabilmek.

- Neredeyse insan seviyesinde konuşmayı yazıya dökebilme.

- Neredeyse insan seviyesinde el yazısını normal yazıya çevirebilme.

- Makine dil çevirisi alanında büyük ilerleme sağlandı.

- Google Assistant ve Amazon Alexa gibi dijital asistanlar ortaya çıktı.

- Neredeyse insan seviyesinde sürüş sağlayan otonom araçlar üretildi.

- Google, Baidu veya Bing gibi arama motorlarında reklamların hedef kitleye ulaşması alanında gelişme sağlandı.

- İnternet arama sonuçları geliştirildi.

- Soru sorduğunuzda size otomatik cevaplar veren sistemler geliştirildi.

- Süper insan seviyesinde Go oyunu oynayan model geliştirildi.

Günümüzde, deep learningin neler yapabileceğiyle, sınırıyla alakalı araştırmalarımıza devam ediyoruz. Yaygın olarak kullanılmaya başlamasının aslında çok kısa bir tarihi olduğunu düşünürsek, kısa sürede çok iyi işler başarıldığını söyleyebiliriz. Vatikan’ın arşivlerinde tutulan on binlerce el yazmasının otomatik olarak yazıya geçirilmesi, bitkilerdeki hastalıkların tespit edilmesi ve sınıflandırılması, onkolojist veya radyolojistlere yardımcı olacak şekilde medikal görsel datayı yorumlayan sistemler, sel, fırtına, hatta deprem gibi doğal afetlerin önceden tahmin edilebilmesini sağlayan sistemler... Sadece birkaç yıl önce imkansız olarak görülebilecek tüm bu işleri gerçekleştirebiliyoruz. Ve her bir kilometre taşıyla beraber deep learningin hayatımızın her alanında bize yardımcı olacağı bir çağa doğru ilerliyoruz.

Buraya kadar hep deep learningin yaptığı müthiş işlerden falan bahsettik ama aslında bu biraz da dikkatli olmamız gereken bir konu. Yani evet belki gelecek on yıllarda çok daha gelişmiş otonom arabalar üretebiliriz ya da mükemmel dil çevirileri yapan sistemler geliştirebiliriz ama eğer birisi size gelip “insan seviyesinde genel bir yapay zeka”dan, yani işte filmlerde oyunlarda gördüğümüz gibi düşünüp karar verebilen makineler yapmaktan bahsediyorsa orada bir durmak lazım. Zira şöyle ki, bu tip beklentiler içerisine girince ve bu beklentiler gerçekleşmeyince, tüm bu araştırma alanlarına yapılan yatırımlar artık yapılmamaya başlanıyor, ilgi kayboluyor ve uzun bir süre için tüm ilerlemeyi yavaşlatıyor.

Geçmişe baktığımızda yapay zeka açısından bu durumun iki defa yaşandığını görüyoruz. İlki, 1960’lardaki daha önce bahsettiğimiz “sembolik yapay zeka” ile başlayan süreç. O zamanlarda yapay zeka hakkında öngörüde bulunan insanlar inanılmaz şeyler söylüyorlarmış. Hatta genel anlamda yapay zeka alanının öncü isimlerinden biri olan Marvin Minsky gibi bir isim bile 1967 yılında “Önümüzdeki nesil içerisinde genel bir yapay zeka üretme problemi büyük ölçüde çözülmüş olacaktır.” şeklinde bir öngörüde bulunmuştur. Sonrasında 1970 yılındaysa işleri biraz daha büyütüp “3-8 yıl içerisinde ortalama bir insan zekasında yapay zekaya sahip makineleri üretmiş olacağız.” demiştir. Fakat şimdi, 2023 yılında bile bunu ne zaman gerçekleştirebileceğimize dair bir şey söyleyemiyoruz, hala uzak bir hedef. Fakat o sıralarda yapılan bu açıklamaların karşılığı boş çıkınca, araştırmacılar ve hükümetler tüm yatırımlarını bu alanlardan çekmişler ve alanın ilerlemesini neredeyse durdurmuşlar.

Devamında 1980’lere geldiğimizde, bu kez de “akıllı sistemler” yaygınlaşmaya başlamış ama aslında yine bunlar da sembolik yapay zeka içeren sistemler. Birkaç başarılı olan iş ortaya çıkmış ve bunu gören yatırımcılar yeniden alana para yağdırmaya başlamış fakat ilerleyen yıllarda bu paralarının karşılığını alamayınca ve bu sistemlerin çok maliyetli olduğunu görünce yeniden paralar çekilmiş.

Şimdi diyebilirsiniz ki belki biz de şu an tüm bu döngülerin üçüncüsündeyizdir ve işler iyi gitmeyecektir, alan yeniden kuruyup kalacaktır. Önceki döngülere göre yine iyi durumda olduğumuzu söyleyebiliriz çünkü şu an sembolik yapay zekadan daha uzakta bir noktadayız ama yine de ne olur ne olmaz tabii, iyimser yaklaşmaya çalışıyoruz. O yüzden yapılabilecek en iyi şey beklentileri çok çok yüksek tutmadan, işleri kıvamında götürmek.

Neyse, umarım faydalı ve keyifli bir yazı olmuştur. Bir sonraki yazıda sıfırdan bir derin öğrenme mimarisi nasıl kurulur/geliştirilir ve kodlanır bunu anlatmayı planlıyorum. Keyifli günler dilerim.

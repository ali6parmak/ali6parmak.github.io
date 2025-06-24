---
title: Natural Language Processing'e Giriş
description: Natural Language Processing (Doğal Dil İşleme) notlarımı paylaşacağım serinin ilk yazısı
written_by: ali
date: 2024-11-01 12:00:00 +0300
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

![](https://lh3.googleusercontent.com/d/1_P9wRoUyz7ie_bV4vjRzwCUW6-r4Oa84)

Yazıya başlamadan önce önden düşmek istediğim bir not var. Bu yazıda ve sonrasında da İngilizce terimler kullanacağım. Amacım “tüm teknik bilgiyi Türkçeleştirmek” değil, bir şeyler öğretmeye (yuh) çalışmak. “Ya hani Türkçe anlatımdı bu İngilizce kelimeler ne alaka” falan diye düşünmeyin o yüzden. Önce öğrenelim anlayalım ki sonra geliştirdikçe Türkçeleştirdiğimiz günler de gelir inşallah.

Neyse başlayalım.

Teorik kısımları çok uzun tutmadan doğrudan pratiğini göstermeye çalışacağım fakat ilk olarak “Natural Language Processing (NLP)”’in neyi ifade ettiği, amacımızın ne olduğuyla alakalı bir şeyler söyleyerek başlayalım.

NLP’nin tanımı genelde  “matematiği, dil bilimini ve bilgisayar bilimlerini bir araya getiren, multi-disipliner bir alan” şeklinde yapılıyor. Çok fazla laf kalabalığı gibi olacak ama bi not daha düşmek istiyorum burada. Bu şekil bir “teknik tanım” tarzı bir şey düştüğümde bunu oturup ezberlemenizi ya da ne bileyim kağıt kalem bir yerlere not almaya çalışmanızı da istemem. Gerçekten önemi yok. Şu an amacım ön hazırlık olarak kafada bir şeyler şekillenmesini sağlamak ama pratik olarak görmedikten sonra zaten bu tanımlar bir şey ifade etmeyecek. Pratiğini gördükten sonra da ezbere zaten gerek yok. Yukarıdaki tanım özelinde bakacak olursak da mantıken düşününce bilgisayarda çalışıyoruz ve kod yazacağız, e bilgisayar varsa matematik zaten vardır, dille uğraştığımıza göre dil bilimini de zaten ilgilendirir. Neyse en azından bu yazıda böyle bi not daha düşmemeyi umarak devam ediyorum.

NLP’deki amacımızsa doğal dile ait veriyi kullanarak bazı problemleri çözmek, faydalı işler yapabilmek. “Doğal dil”den kastımız ise aslında basitçe okuduğumuz yazdığımız konuştuğumuz sürekli maruz kaldığımız dil. Bildiğimiz dil yani. NLP içerisindeki bazı görevlere örnek olarak dil çevirisi (translation), metin özetleme (summarization), soru cevaplama (question answering), konuşma tanıma (speech recognition), sınıflandırma (classification) gibi görevleri örnek verebiliriz.  Örneğin e-postamıza gelen bir mailin spam olup olmadığını belirleyen araç bir NLP aracı olabilir. Aynı şekilde telefonda mesaj yazarken telefonun bize öneri kelimeler sunmasında, ya da Alexa, Siri gibi sanal asistanlarda da yine NLP uygulamalarını görebiliriz. Chatbotları kullandıysanız da yine az çok aşinasınızdır, görmüşsünüzdür bu görevlerin gerçekleştirildiğini. Evet chatbotlar da NLP’ye dahil ve daha ileri kısımlarda onları da anlatmaya çalışacağım.

NLP, özellikle geçtiğimiz birkaç yıl içerisinde bayağı yol katedilmiş olmasına rağmen uğraşması hala çok da kolay olmayabilen bir alandır – bunun sebebi de aslında dillerin kendi doğalarıdır. Biz insanlar olarak doğal bir şekilde bir dile sahip oluruz. Sahip olduğumuz bu dil her ne kadar güçlü bir araç olsa da sabit değil canlı bir araçtır, zaman içerisinde sürekli olarak değişimlere uğrar. Dilin bu canlı ve güçlü yapısı aslında bir sorunu beraberinde getirir: Diller, kullanıldıkları bağlama ve şekle göre oldukça değişkenlik gösterebilir, çok fazla belirsizlik içerebilirler. Örneğin, “Oku adam ol baban gibi eşek olma” cümlesini mutlaka duymuşsunuzdur. Buradan çıkarılabilecek iki mana vardır:
- Kişinin babası okumamıştır ve bu yüzden o bir eşektir, bu yüzden kişiye de okuması tavsiye edilmektedir.
- Kişinin babası okuyarak eşek olmaktan kurtulmuştur ve bu yüzden kişiye de tıpkı babası gibi olup okuması tavsiye edilmektedir.

Cümleye virgül ekleyerek/eklemeyerek hangi mananın kastedildiği belki gösterilmeye çalışılabilir fakat konuşma dilini düşündüğümüzde birisi düz şekilde bu cümleyi size kurarsa iki türlü de anlayabilirsiniz. Bu durumda da tabii ki söyleyen kişinin sesinin tonlamasından söylenilen kişiyle arasındaki yakınlığa kadar her şey anlamı etkileyebilir – ki bunlar da yine oldukça muğlak şeylerdir. Konuşma dili dedik tabii ama yazım dilinde de insanların çok fazla noktalama kurallarına dikkat etmediğini de zaten biliyor ve görüyoruz.

Bunun dışında bir başka örnek olarak, “Bu gece 10’da havalanacağım.” cümlesini düşünelim. Bu cümleyi birine söylediğinizde kimse sizin saat 10’da kanatlarınızı açıp gökyüzünde süzüleceğinizi düşünmez (yapabiliyorsanız lütfen bana ulaşın ihtiyacım var). Muhtemelen saat 10’da binecek olduğunuz bir uçaktan bahsediyorsunuzdur.

Son olarak da buz gibi havada sokakta yürürken muhabirin sorduğu “Hava soğuk mu?” şeklindeki sıradışı soruya “Yoo sıcak.” diyen abiyi düşünelim. Bilgisayara sadece bu bilgiyi verdiğinizde ve bilgisayara “Hava nasılmış?” diye sorduğunuzda, bilgisayar doğal olarak havanın sıcak olduğunu söyleyecektir. Ne bilsin ironiyi falan bu çocuk daha kaçak film sitelerindeki yangın hortumlarını bulamıyor.

Bu tip durumları biz insanlar otomatik olarak anlayabiliyoruz/ayırt edebiliyoruz fakat tabii bu bilgisayarlar için o kadar da kolay olmayabiliyor. Bizim bunları ayırt edebiliyor olmamızın da altında aslında doğumumuzdan beri süregelen bir süreç etkili. Yetiştirilme şeklimizden etrafımızdaki insanlara, içinde bulunduğumuz ülkedeki düşünce yapılarına kadar her şeyden farkında olarak/olmayarak çıkarımlar yapıyoruz ve bu belirsiz ifadelerle nasıl başa çıkılacağını öğreniyoruz.

NLP’nin gelişim süreci 1950’lerdeki kural bazlı sistemlerle başlamış, 1980’lerin sonlarındaki istatistiksel modellerle devam etmiş, 2010’ların başlarından itibaren de neural networklerle beraber günümüze gelmiştir. Burada bir gelişim sürecinden bahsettik ve işte en son neural networklere geldiğimizi söyledik ama bu demek değildir ki 1950’ler ve 80’lerdeki yöntemler tamamen bırakıldı. Aslında, günümüzde kullanılan NLP uygulamalarında daha çok bu yöntemlerin kombinasyonunu görüyoruz.

Ve inşallah adım adım bu yöntemleri güzelce anlatmaya çalışacağım. Hem ben de bilgilerimin üzerinden geçmiş olurum.

Sıradaki yazıyla beraber pratik olarak göstermeye de çalışacağım.

Bu arada okumak isterseniz genel anlamda yapay zekanın, makine öğrenmesinin ve deep learningin aslında ne olduğu ve temelde nasıl çalıştığıyla alakalı şöyle bir yazı yazmıştım: [Yapay Zeka, Makine Öğrenmesi ve Derin Öğrenme](https://worldwideweeb.net/posts/yapay-zeka-makine-ogrenmesi-ve-derin-ogrenme/).


Bir sonraki kısma geçmek için de buraya tıklayabilirsiniz: [Basic Text Processing](https://worldwideweeb.net/posts/basic-text-processing/)


Notları ve notebookları bilgisayarınıza indirmek isterseniz de şöyle bir repo oluşturdum: [natural-language-processing-notlari](https://github.com/ali6parmak/natural-language-processing-notlari/)

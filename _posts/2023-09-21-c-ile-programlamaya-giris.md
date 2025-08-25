---
title: C ile Programlamaya Giriş
description: C dilinde başlangıç seviyesi için notlar
written_by: ali
date: 2023-09-21 20:02:00 +0300
categories: [Programlama]
tags: [programming, c]
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


Bu yazı boyunca C dilinin ve genel anlamda programlamanın temel özelliklerinden bahsedeceğim. Açık ve anlaşılır bir yazı olmasını umuyorum. Yine de peşinen söylemem gerekir ki aşağıdaki yazdığım notları okuyup anladıktan sonra bir anda iyi şekilde kod yazmayı beklememelisiniz (nasıl ki Türkçe okuma yazmayı öğrendikten sonra edebiyatçı olamıyorsanız). Yazdığım bu yazı daha çok hızlandırılmış kurs gibi düşünülebilir. Videodan konu dinlerken ya da kendiniz kitaptan çalışırken buradan da faydalanabilirsiniz. Ya da unuttuğunuz şeyler varsa/olduğunda buraya bakabilirsiniz. Temel meseleleri iyi şekilde açıklamaya çalışacağım tabii ama sonrasında üstüne koymak size düşüyor. Ben sadece bir başlangıç noktası sunmaya çalışacağım.

 

Daha önceden farklı programlama dilleri duymuş olanlar da olabilir aranızda. Hatta C’nin çok eski bir dil olduğunu veya çok zor bir dil olduğunu da söyleyebilirsiniz, belki duymuşsunuzdur bir yerlerden. Bunlar da doğru sayılabilir, günümüzde yaygın olarak kullanılan programlama dilleri arasında C en zor dillerden biridir diyebiliriz. Bu noktada “E peki neden en zorundan başlıyoruz?” şeklinde bir soru takılabilir kafanıza. Bunun sebebi, C her ne kadar eski ve zor bir dil olsa da genel anlamda programlama mantığının oturması açısından güzel bir dil olduğunu düşünüyorum. Örneğin Python gibi daha üst seviye dillerde (üst seviyenin manası “insana yakın” demek, C dili Python’a göre daha alt seviye bir dildir, yani makineye yakındır) arkaplanda ne olup bittiğini anlamanız çok kolay olmayabilir ve sonrasında başka bir dil kullanmak isterseniz o dile adapte olmakta çok sıkıntı yaşayabilirsiniz. Fakat programlamaya C ile başlayıp mantığını kafanızda oturttuğunuzda başka bir dile geçmekte çok daha az sıkıntı yaşayacağınızı düşünüyorum – en azından durum benim için böyleydi.

 

C’ye başlamak için kitap önerileri:

_[Programlamayı C ile Öğreniyorum - Palme](https://www.palmeyayinevi.com/programlamayi-c-Ile-ogrenIyorum)_

_[C How to Program - Deitel \[Türkçe\]](https://oku.ozturkibrahim.com/clab/booksTR/C_ve_C++_Programlama__Deitel.pdf)_

Bu kitapların ikisini de kendim kullandım. Palme’nin kitabını özellikle satın almanızı tavsiye ederim, elinizin altında durur içerisinde güzel sorular var çözer ilerlersiniz.

 

Yazdığınız kodları çalıştırmak için bir C derleyicisine (compiler – kodları makine diline çeviren programlar) ihtiyacınız olacak. Ben C öğrendiğim süreçte şu derleyiciyi kullanmıştım, linke girip yeşil butona tıklayarak indirebilirsiniz:

<https://sourceforge.net/projects/codeblocks/files/>

 

Kurulumu yaptıktan sonra sol üst menüden File -> Project -> Console Application şeklinde seçimleri yapıyorsunuz. Sonrasında karşınıza şu şekilde bir ekran gelecek:

![](https://blogger.googleusercontent.com/img/a/AVvXsEjMgRM8vWD6YvYyES-6ftwo-8Sz3MREoPI6uHPr9eqCFYYL7UcuO-RR7mv3K3gWkBh7AD4VofmIeV3D_zMqwfI5lnwbAQK7US8KDcmhWjTAC_mepyoUS5t4u3FrIWAkK2YvzZumsgR0kPFh0Sc-5lAgWQ1Eey-I6LUm_8x9akPQ9vbSOHSKN8-TFEGeNsIi=w435-h394)

“Folder to create project in” dediği kısım proje dosyasının kaydedileceği klasör. Ben tüm C program dosyaları için ayrı bir klasör oluşturmuştum oraya kaydediyordum böyle bir yol izleyebilirsiniz. “Project title” kısmına da oluşturduğunuz projenin adını yazıp Next diyorsunuz. Karşınıza şu şekilde bir ekran gelecek:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhGywgPpClN_20pu7gxkwY0xFstSEfJLXxVlBjU2t85WkcXecS5nlwlGQMk-uPL6MlTQcGh1Ou9GCsvMNYgah84la1n777Y3wHri25WGPHL60UUJRsRsrF7-f-MahxySvWVCyvc98GlOIp4esAnRkBJy-wDaqvhnCZFl7xEz5yBt9k3JyNpUhi5p2oeP8-l=w497-h265)

Bu ekranda örnek bir kodla karşılaşacaksınız. Kodu çalıştırmak için kırmızıyla işaretlediğim butona basıyorsunuz. Fakat ilk çalıştırmada şöyle bir hata alabilirsiniz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEisly8pKUNqsWzq218SzAve5pmQW6i0WCBWXDu7CgRQ304XIRy360hQjIWS8o5KukPbqWU5m9qbRaVVAu-MFK_brgI0URYHiVyK8YNP4tta_32sRRn2wHa7TcPjWb1I1J1OFE9qMaWj06WUToL7CcYMsfzzkXGYJwnYFKZ0qxPL73Tk48I4K_JpNhsJKutY=w642-h108)

Bu durumda, yukarıdaki menüden Settings -> Compiler’a tıklıyorsunuz. Sonrasında da açılan ekrandan Auto-detect’e basıyorsunuz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhxIeQaBFO5L4FB005wUQCegTLIqZ142KSju4W5ODNREs6p5hxOBJSXZT3izWuBSLag1JcYBPNAJPxZMcUfNeC0SNiYImn0DsCc7gvry0EdwK5EjNfxangskPT8yC7Bv7kT13slYptp3vgqo2ezuiCsQGF8tGg7DJ8gOcspr_t8KBjOOXIFW-LyZ24hA7N7=w445-h236)

Kodu tekrardan çalıştırmak istediğinizde sorun çözülmüş olacaktır (inşallah).

 

Bu programı kurmakla uğraşmak istemiyorsanız ya da hemen bir şeyler yazıp çalıştırmak istiyorsanız şu siteyi de kullanabilirsiniz:

<https://www.onlinegdb.com>

Siteye girdikten sonra sağ üstten dil olarak C seçmeyi de unutmayın.

Şimdi madem bir kod örneği de görmüş olduk bunun üzerinden anlatıma başlayalım.


## Hello World

![](https://blogger.googleusercontent.com/img/a/AVvXsEhFEoueK6Pw3iLM9KkVjjbw_20MrKy3QbHqfoU27YGsfvg0M0mvKSuBC478REYdj9eghGTTVowOn5mApl7JqWJ6IZUDBoVr5F2LD3vkYmQXJq7wLBAPFrlW3cHMq6UZGl5a4LMblqvkF6jDcPZoRAsaXwTBxu2YTTafpqyd8ucDbS0NDRy4ct5U9CIF2ASe=w427-h239)

Yukarıdaki kod satırları üzerinden adım adım gidelim. Fakat öncelikle uyarmak istediğim bir nokta daha var: Her şeyi doğrusal bir sırada anlamayı beklemeyin. Daha iyi açıklamak gerekirse, örneğin okuma yazma öğrenirken ilk olarak harfleri öğreniyoruz, sonra heceleri, sonra kelimeler ve cümleler geliyor. Sonrasında da daha detaylar. Fakat bizim meslekle alakalı konularda böyle doğrusal bir yol genelde olmuyor. Yukarıda gördüğünüz minik kod parçasında da hemen anlamayacağınız – daha sonra anlatmam gereken şeyler olacak. Böyle durumlarda, endişe etmeyin. Hepsinin yeri gelecek ve anlayacaksınız. Bu süreci bir puzzle yapmak gibi düşünebilirsiniz, parçalar sağdan soldan gelir ama sonuçta hepsi birleşir ve ortaya tamamlanmış bir görüntü çıkar.

Kodun 1 ve 2. satırlarından başlayalım. “include” kelimesi, C dilinde bir “kütüphane”yi dahil etmek için kullanılır. Görmüş olduğunuz “stdio” (standard input output) ve “stdlib” (standard library) kütüphaneleri de C içerisindeki temel fonksiyonları kullanabilmemizi sağlayan kütüphanelerdir. Kütüphaneler kısaca, içerilerinde fonksiyonlar, global değişkenler ve bazı arayüzler barındıran kodlardır. Kütüphaneleri kendimiz de yazıp kullanabiliriz, başkalarının yazdıklarını da alıp kullanabiliriz. Fakat kütüphaneleri #include kullanarak dahil ederken bunu sayfanın en üstünde yapmalıyız.

4\. satırda int main() ifadesini görüyoruz. “main” bir fonksiyondur. Fonksiyonları detaylı olarak biraz ileride anlatacağım ama kısaca  “bir işi gerçekleştirmek için yazılan kod parçaları” olarak tanımlayabiliriz. main fonksiyonu programın başladığı yerdir, yani derleyici kodu main’den itibaren çalıştırmaya başlar ve program yukarıdan aşağı olacak şekilde çalışır. “int”in manasını da açıklayacağım. 5 ve 9. satırlarda süslü parantezler görüyoruz. Bu “faaliyet alanı”nı (scope) temsil ediyor. Yukarıdaki kod için, main fonksiyonunun scope’unun 5 ve 9. satırlar arasında kalan her şey olduğunu anlıyoruz. Yani, bu iki parantezin arasına yazılan her şey main içerisinde dahildir. Tabii bu parantezler main’e özel değil sadece, bu şekilde farklı scopelar oluşturmak istediğimzide süslü parantezleri kullanacağız.

6\. satırda printf(“Hello World”); ifadesini görüyoruz. Aslında yukarıda gördüğünüz kod parçası, programlamaya yeni başlayan çoğu kişi tarafından çalıştırılan ilk koddur ve aslında oldukça basit bir kod olmasına rağmen gördüğünüz üzere dilin temelleriyle alakalı fazlaca bilgi de veriyor. “printf” olarak kullandığımız ifade yine bir fonksiyon ve bu fonksiyonun kullanım amacı “konsol ekranına bir şey yazdırmak”tır. Dediğim gibi, fonksiyonlar, bir işi gerçekleştirmek için yazılan kod parçalarıdır. Bu printf fonksiyonu, 1. satırda include ettiğimiz stdio kütüphanesi içinde bulunuyor. Konsola yazdırmak istediğimiz ifadeyi printf fonksiyonuna tırnak işaretleri arasında gönderiyoruz ve yazdırma işlemi printf tarafından gerçekleştiriliyor. Daha detaylı göreceğiz.

8\. satırda “return 0;” ifadesini görüyoruz. Bunu yine fonksiyonlarla alakalı kısımda detaylı anlatacağım fakat şimdilik “int main” fonksiyonunu sonlandırmak için bunu yazmamız gerektiğini düşünebilirsiniz.

Bu aşama için, printf fonksiyonu içerisine farklı şeyler yazıp çalıştırmayı deneyebilirsiniz. Türkçe karakterler çalışıyor mu diye bakabilirsiniz ya da mesela. Fakat yazıda göreceğiniz her kodu basit de olsa zor da olsa sıfırdan kendinizin de yazmasını tavsiye ederim.

 

## Veri Türleri

 

İlk olarak “bit” ve “byte” kavramlarından bahsetmek istiyorum. Bit, bir bilgisayarın saklayabileceği en küçük veridir. Yalnızca iki değerden birine sahip olabilir: 0 veya 1. 8 adet bitin yan yana gelerek oluşturduğu yapıyaysa byte diyoruz. Yan yana 8 adet 0 veya 1 değerinden meydana geldiği için, toplamda 256 adet farklı sayı değeri alabilir (2^8 = 256. Anlaşılır olmadıysa birkaç örnek daha iyi canlandırabilir belki: 00000000, 00000001, 00000010, 000000011 …).

C içerisinde kullanacağımız 4 farklı veri türü var: char, int, float ve double. Aşağıdaki yapacağım açıklamaları okuduktan sonra kafanızda tam olarak oturmayabilir, endişelenmeyin hiçbir sorun yok. Okuyun ve ilerleyin.

char (character), 1 bytelık bir veri türüdür. Yani içerisinde 1 bytelık veri taşıyabilir, yani, 256 adet farklı değer alabilir. Alacağı bu sayı değerleri [-128, 127] aralığındaki tamsayılardır.  charlar içerilerinde bir adet karakter tutarlar. Örneğin ‘a’ gibi bir karakter. Buradan her bir karakterin bir byte olduğu çıkarımını da yapabiliriz tabii ama bu durum sadece latin karakterler için geçerli. Örneğin Türkçeye özgü karakterlerde ya da Japonca Çince vs buradaki karakterleri ifade etmek için 256 adet değer yeterli olmuyor. Bir not daha düşmekte fayda var “şu tür, içerisinde bu kadar bytelık veri tutabilir” ifadesi kullandığınız derleyiciye – ortama göre değişebilir. Ben size genel olarak bilindikleri büyüklükleri söyleyeceğim. Ve endişelenmeyin bu büyüklük değerleriyle çok ilgilenmenize gerek kalmayacak.

int (integer – tamsayı), 2 bytelık bir veri türüdür. Dolayısıyla 2^16 adet farklı değer alabilir. Bu değerler, [-32,768, 32767] aralığındaki tamsayılardır.

float, 4 bytelık bir veri türüdür. Şimdi “float” (kaymak/yüzmek/gezmek) ne alaka diye düşünebilirsiniz. float veriler, noktalı sayı verileridir. Örneğin 47.3 gibi bir sayıyı float bir değişken (değişkenin de ne olduğunu birazdan söyleyeceğim) içerisinde tutabiliriz. float değerleri [3.4 * 10^-38, 3.4 * 10^38] aralığındadır, noktadan sonraki hassasiyeti de 7 adet sayıdır.

double 8 bytelık bir veri türüdür. double’ın adı float’ın iki katı büyük bir veri türü olmasından geliyor, o yüzden “double”. Dolayısıyla tutabileceği veri aralığı da [1.7 * 10^-308, 1.7 * 10^308] oluyor, hassasiyeti de noktadan sonra 15 sayı.

Uzun uzun detaylı şekilde yazdım ama pratikte bilmemiz gereken şey kısaca şu: Bir karakteri tutmak istiyorsak char, bir tamsayıyı tutmak istiyorsak int, bir noktalı sayıyı tutmak istiyorsak float veya double kullanıyoruz.



## Değişkenler

Bir önceki kısımda veri türlerinden bahsettik, bir “tür” tanımlaması yaptık. İyi hoş güzel de bu türleri nasıl kullanacağız? Değerleri nasıl saklayacağız? Aşağıdaki kod parçası üzerinden bu soruları cevaplayalım:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhYXPS4Llgce63dYFsqcC9Pch_EDHAQECpM7vJN0-vzDbkKIQeBSuyyPR2ZWUFa7_LEQa_f5pGW0JuqeoIbQFEZdZ9sE-bHq3NHjzsMUPyDMqpGC1Rq8W67T3LHSodqV-uyGbwnrfR3mb89pL5WYfsll9un6wF0N0YmjlkT_aSxk-5cE3v1K9FTPxGYe03R=w441-h336)


Programlama dillerinde, verileri değişkenler (variable) içerisinde tutarız. Değişkenler, içerisinde bulunduğu şartlara bağlı olarak veya programa verilen bilgiye bağlı olarak değişebilen değerlerdir.

Yukarıdaki kod bloğunun 6. satırında “char” tipinde, “c” isimli, değeri ‘f’ karakteri olan, yani, içerisinde ‘f’ karakterini tutan bir değişkenin tanımlanışını görüyoruz. Program içerisinde bu değişkeni bir yerde kullandığımızda, bize ‘f’ değerini veriyor olacak. “=” işaretini kullanarak gerçekleştirdiğimiz bu işleme “atama” (assign) diyoruz. Yani, ‘f’ değerini alıp “c” isimli değişkene atıyoruz.

7\. satırda “int” tipinde, “sayi” isimli, değeri 2347 olan bir değişken görüyoruz.

8\. satırda “float” tipinde, “noktali_sayi” isimli, değeri 2.47 olan bir float değişken görüyoruz. Burada dikkat ettiyseniz sayının sonuna f karakterini koyduk.  Bunun sebebi, derleyiciler noktalı sayıları otomatik olarak “double” tipindeymiş gibi değerlendirebiliyor. Dolayısıyla bir float değeri bu şekilde tanımlarken sonuna f koyarak tanımlamak daha doğru olacaktır. Aksi takdirde veri kaybı durumuyla karşı karşıya kalabiliriz. Koymak en iyisi.

9\. satırda “double” tipinde, “d” isimli, değeri 3.9999995 olan bir değişken tanımladık. Görüldüğü üzere buna fazladan bir harf eklemesi yapmadık, çünkü zaten double bir değer.

 

Diğer satırlarla devam etmeden önce, değişkenlerin isimlendirilmesiyle alakalı birkaç not düşeyim, basit birkaç kural var. Değişken isimlerinde yalnızca (küçük veya büyük) harfleri, sayıları ve alt tire (_) karakterini kullanabiliyoruz. Fakat sayıları kullanabiliyor olsak da bir değişkenin adı sayıyla başlayamaz, yani, “1a” şeklinde bir değişken tanımlayamayız. Ama “a1” olabilir tabii. Alt tireyi değişken adında birden çok kelime varsa genelde bu kelimeleri ayırmak için kullanıyoruz (8. satırda “noktalı” ve “sayı” kelimelerini ayırmak için kullandığımız gibi). Bunlara ek olarak, C içerisinde özel bir anlama sahip kelimeleri değişken isimlerinde kullanamıyoruz. Örneğin “int” isimli bir değişken tanımlayamayız, çünkü bu özel bir kelimedir (keyword). Bu özel kelimelerin ne olduğunu anlamak için kafa patlatmanıza gerek yok merak etmeyin, derleyiciler bu kelimeleri genelde farklı renkle gösterirler.

Değişkenlerin anlaşılır şekilde adlandırılması da yine fazlasıyla önemli. Özel bazı durumlar dışında tek karakterden oluşan değişken isimlerini kullanmayı tercih etmeyiz (yukarıdaki kod bloğu oldukça küçük olduğu için ben kullandım ama normalde tercih edilmemelidir). Değişkenlerin adlarının anlaşılır olması kodun okunabilirliğini arttıracaktır ve proje büyüdükçe yaşanabilecek karmaşıklığı azaltacaktır. Anlaşılmaz, iyi düşünülmemiş isimler koymak, ileride gerçekten çok ciddi sorunlara sebep olabilir ki bu problemler projenin mahvolmasına kadar gidebilir. Zira hangi değişkenin ne iş yaptığını karıştırmaya başlarsanız iş yapmak çok ama çok zorlaşır. Aynı şekilde değişken isimlerinde kısaltmalar da pek tercih edilmemelidir, açık ve anlaşılır olmalıdır. Çünkü sizin için çok bariz olan bir isim başkası için bir şey ifade etmeyebilir, yanlış anlaşılabilir ya da bu ismi projeye ara verip uzun süre sonra geri dönünce siz bile anlamayabilirsiniz.

Şimdi 11. satıra geçelim:  printf(“char degeri: %c\n”, c);

Hello world örneğinde olduğu gibi yine burada da printf fonksiyonunu kullanıyoruz fakat gördüğünüz üzere daha farklı şeyler de var. Tırnak işaretleri içerisine yazdığımız şeylerin printf tarafından ekrana yazdırıldığını söylemiştik. Bu örnekte, dikkat etmemiz gereken ilk şey, %c ifadesi. Bir char değişkeninin değerini printf içerisinde yazdırmak için bu ifadeyi kullanırız. Yani, printf fonksiyonuna diyoruz ki, “Sana bir char değişkeni vereceğim, onu bekle. Onun yeri burası olacak.” Fonksiyon bunu anlıyor ve tırnak işaretlerinin dışına çıktıktan sonra bir char değişkeniyle karşılaşmayı bekliyor. İşte tırnak işaretlerinin içini yazdıktan sonra virgül koyup devamında c değişkenini yazmamızın sebebi bu. %c’den sonra gelen \n ifadesi de yine özel bir durum. \n, printf kullanırken bir sonraki satıra geçmemizi sağlar. \n kullanmadığımız takdirde tekrardan bir şey yazdırmak istersek bir önceki yazdığımızın sonuna eklenerek yazılır, bu söylediklerimi okurken kendiniz de bir yandan denerseniz daha iyi görür anlarsınız.

Buradaki slash (\) karakteri “escape character” olarak adlandırılır ve bu tip özel durumlar için kullanılır. Örneğin printf içerisinde bir şey yazdırmak için tırnak işareti kullandığımızı söylemiştik. Fakat ya printf içerisinde tırnak işaretini yazdırmak istersek? İşte o zaman yazdırmak istediğimiz bu tırnak işaretini \” olarak yazıyoruz. Bu tip bazı başka özel durumlar da var ama üzerinde çok detaylı durmaya gerek yok, merak ederseniz kendiniz araştırabilirsiniz.

12\. satıra gelelim: printf(“tamsayi degeri %d\n”, sayi);

Burada yaptığımız şey de yine aynı. Fakat bu kez char değil de bir integer değeri yazdırmak istiyoruz. Integer değerleri yazdırmak için %d’yi kullanırız. char tipinde %c kullanmak akla yatmış olabilir çünkü char kelimesinin ilk harfi c, dolayısıyla %c, gayet mantıklı. Bundan yola çıkarak int değerler için de %i kullanmayı bekleyebilirdik. Fakat C’deki int değerleri yalnızca bizim kullandığımız onluk tabandaki sayılardan oluşmuyor. Sekizlik ve on altılık tabanlarda da sayılar tanımlayabiliyoruz ve bu tabanlardaki sayıları yazdırmak için %i’yi kullanıyoruz.

![](https://blogger.googleusercontent.com/img/a/AVvXsEj5PXeiDd-fsDFUASXaDSOj471gtCRs4tgrgWLi8eGKnuvMcHhnJ3xWlHBC3qKN8RG4en51UayuSCXRaNHvTFdq2wDoEY9r7uvNDfFDnBeJw_8AZtDftJEGX34uik_9L9ixnRQuHZMIObqD0TkzbpeENyw4vDfdkfV8c2SVaL92zLH_GTG1iTbl5Dw6Ic-6=w595-h95)

Şu yukarıdaki örneği inceleyin. a değeri onluk sistemde normal bildiğimiz 12, b değeri sekizlik tabandaki 12 değeri (C’de sekizlik tabanda sayı tanımlamak için sayıların başına 0 koyuyoruz), c değeri on altılık tabandaki 12 değeridir (C’de on altılık tabanda sayı tanımlamak için sayıların başına 0x koyuyoruz). Bunları yazdırdığımızda 12, 10, 18 değerlerini görürüz (siz de yazıp görün).

%i kullanarak normal tamsayıları da yazdırabiliyoruz fakat kullanacağımız başka bir fonksiyonda %i’yi kullanmak bize sıkıntı yaratacağı için siz int tipinde bir sayı yazdırmak istediğinizde %d’yi kullanın. %d’deki “d” de “decimal”den geliyor.

Yukarıdaki örnekte fazladan şunu da görebilirsiniz, aynı tipte birden fazla değişkeni tanımlamak için satırın başına değişkenin tipini (örnekte int) yazıp devamında değişkenleri virgülle ayırarak aynı satırda tanımlayabiliyoruz. Aynı şekilde printf içerisinde de birden fazla değeri yine virgülden sonra sırasıyla göndererek yazdırabiliyoruz.

13\. satırda float değeri yazdırıyoruz, yazdırmak için %f kullanıyoruz.

14\. satırda double değeri yazdırıyoruz, yazdırmak için %lf kullanıyoruz (lf = long float).

% işareti kullanarak printf’te değişken yazdırdığımız bu ifadelere (%c, %d, %f, %lf) “yer tutucu” (placeholder) diyoruz.

 

 

## Aritmetik İşlemler

 
Bu kadar ön giriş yeter. Artık biraz sayılarla oynamaya başlayalım.

C dilinde (ve diğer programlama dillerinde de) +, - , *, / (toplama, çıkarma, çarpma, bölme) gibi matematiksel operatörleri kullanabiliyoruz. Bunlara ek olarak belki daha önce görmemiş olabilirsiniz bir de % operatörümüz var, bu operatör de bir sayının bölümünden kalanı veriyor. Örneğin 7%3 işleminin sonucu 1’dir. Bu operatörü yalnızca iki tamsayı arasında kullanabiliyoruz.

Yine aşağıdaki kod üzerinden giderek anlatmak daha faydalı olur:


![](https://blogger.googleusercontent.com/img/a/AVvXsEjtcIxJEUxoA9_Bmpbl5mwQnw2WjG6sUKRM2e44MV2P6GlcDRUQwBNOByeACepOjG_uqyiYQAutCbb_lqBXdNrqWlG0vj03XRQ84Y2awui2evgzmLNZJrm_SHjkSkO5hnyg7_BjOMUryOWBD4UIdfhIq3zkVL4NxX1l8Ri1Lwxk9leivdNtekL2PxiHXbqR=w488-h523)


Adım adım gidelim.

13 ve 14. satırlarda daha önceki kısımlarda gösterdiğimiz şekilde değişken atamaları yapıyoruz.

16\. satırdan itibaren yapılan değişken tanımlamaları biraz daha farklı görünmüş olabilir. Fakat kodda da görüldüğü üzere, bir değişkeni tanımlarken doğrudan bir sayı değeri vermek yerine bir işlem de yazabiliriz. İlgili işlemin sonucu neyse bu sonuç tanımladığımız değişkene atanacaktır. Dolayısıyla, mesela, 16. satırdaki “x_eksi_y” değişkeninin değeri 12 olacaktır. 29. satırda bu değeri printlediğimizde de zaten çıkan sonucu aşağıda görebiliyoruz.

17 ve 18. satırda da benzer şeyler oluyor. Bildiğimiz matematikten ibaret. Sadece operatörlerin kullanımına örnek olarak göstermek için onları da o şekilde tanımladım.

20\. satıra geldiğimizde, bölme işlemiyle alakalı bazı özel durumlar var, bunlardan bahsedelim. Şimdi 20. satıra iyi bakalım, x’in değeri 5, f’in değeri -4.1. Dolayısıyla bu iki sayıyı birbirine böldüğümüzde -1.219512 şeklinde bir değer elde etmemiz gerekir. Fakat 20. satırda görüldüğü üzere tanımlanan değişken “int” tipinde tanımlanmış. Dolayısıyla, bu değişken içerisinde bir float değer tutamaz. Bunu yapamadığı için de -1.219512 sayısının noktadan sonraki kısmını kesip atıyor ve geriye kalan -1’i printliyor.

Hemen altındaki 21. satırdaysa bu değişkenin float olarak tanımlanmış halini görüyoruz. Yine x/f yapıp bu değişkene değer atadığımızdaysa bu kez -1.219512 olan float değerini elde edebiliyoruz. Çünkü float bir sonucu float bir değere atadık, kesilmesine gerek yok.

Bölme işlemiyle alakalı bir başka dikkat edilmesi gereken nokta da herhangi bir sayıyı 0’a bölmeye çalışmayın, hata alırsınız.

23\. satıra gelelim, şimdi burada bahsetmemiz gereken bir başka mesele daha var. Görüldüğü üzere z değeri 11 ve x değeri 5, yanı ikisi de birer tamsayı. Fakat z değerini x değerine böldüğümüzde, 2.2 değerini elde etmemiz gerekir ki bu bir float değerdir. 23. satırda, yine bir önceki örnekte olduğu gibi “z_bolu_x_int” değişkeni tamsayı olarak tanımlandığı için 2.2’nin noktadan sonraki kısmı kesiliyor ve değişkenin değeri 2 oluyor. Burada bir sorun yok, bunun böyle olacağını zaten söylemiştik. Şimdi gelelim 24. satıra.

“Madem sonuç kesiliyor o zaman sonuç değişkenini bir float değer yapalım” diye düşünebilirsiniz. Mantıken evet doğru olan da bu zaten fakat burada ufak bir detay daha var. Yukarıdaki görselde çıktılarda gördüğünüz “2.000000” değeri “z_bolu_x_float” değişkenine ait. Görüldüğü üzere sonuç bir float sayıya dönüştürülmüş, doğru, ama 2.2 olarak değil 2.0 olarak kaydedilmiş. Peki bunun sebebi ne? Durum şu ki, işleme giren z ve x değerlerinin ikisi de tamsayı olduğu için, derleyici sonucun bir tamsayı olması gerektiğini bekliyor. Dolayısıyla da işlemi yaptığında elde ettiği şey zaten doğrudan “2” değeri oluyor, “2.2” değil. Bir önceki örnekte f değerinin -4.1 olduğunu, bir float değeri olduğunu, dolayısıyla derleyicinin buradan bir float sonuç çıkmasını beklediğini de ekleyelim/hatırlatalım.

Bu durumu çözmek için 25. satırda “casting” dediğimiz bir yöntem uyguluyoruz ve sayılardan birinin yanına (float) yazıyoruz. Yani, z / (float) x de yazabilirdik, sorun yok. Diyelim ki görseldeki gibi (float) z / x şeklinde yazdık. Bunu yaptığımızda işlem 11/5 yerine 11.0 / 5 haline geliyor. “11 ve 11.0 birbirine eşit değil mi zaten ne fark var ki?” diye düşünebilirsiniz. Evet değer olarak eşitler, fakat biri int bir değerken, diğeri bir float değer. Casting uyguladıktan sonra da program zaten artık sonuçtan bir int değer beklemeyi bırakıyor ve floatı elde ediyor.

27\. satıra geldiğimizdeyse % operatörünün kullanımını görüyoruz.

Görselde gördüğünüz tüm kodları kendinizin yazıp çalıştırması faydalı olacak ve daha iyi anlamanızı sağlayacaktır. Farklı değerler ya da denemek istediğiniz başka şeyler de deneyebilirsiniz, korkmayın. Oturup kendiniz yazıp denemediğiniz sürece kalıcı olmaz ve bir şeyler eksik kalır hep.

Devam edelim.


## Kullanıcıdan Girdi Almak

Şimdiye kadar tanımladığımız değişkenlerin değerlerini hep kendimiz kod içerisinden atadık. Kodun içinde değer olarak ne verdiysek o çalıştı. Fakat oluşturduğumuz programın farklı kullanıcılar tarafından da kullanılabilmesini isteyebiliriz. Örneğin “x” adlı bir değişkenin sürekli olarak “15” değerine sahip olmak yerine, farklı değerler alabilmesini isteyebiliriz. İşte bu amaçla, kullanıcıdan girdi alabilmeyi sağlayan “scanf” fonksiyonunu kullanacağız. Bu fonksiyon da yine printf gibi stdio kütüphanesi içinde bulunuyor. Kullanımını gösterelim:

![](https://blogger.googleusercontent.com/img/a/AVvXsEiFNVMp7HIDvm7G9akdBuBK9_iBIOQW0aebFlgGQ6jR8XTV9RngIFTJwKBzVMeYOueQedJGTyROCt6HKGwi-W4uwDnacmeV3c141ZZioVm4hc4Gl-Ao2eGsdFu8IdkSpOMullFCYKIuomcBBoj9--aADsfcqaKi5gAzT0Yf4LsOy1O_LWpuOgkioVuw-Dp4=w623-h430)

Aslında oldukça basit, hızlıca anlatalım.

18-20-22-24. satırlardaki printflerin yazılma sebebi, kullanıcıya bilgi vermek için. Çünkü örneğin “int değerini giriniz” yazmazsak kullanıcı ne yapması gerektiğini anlamayabilir. O yüzden genelde scanf’ten önce bir printf kullanırız ki ne olduğunu görelim ama bu bir zorunluluk değildir.

Şimdi gelelim scanf’e.

19\. satırda bir int sayı ataması, 21. satırda bir float sayı ataması, 23. satırda bir char ataması, 25. satırda bir double sayı ataması görüyoruz.

Görmüş olduğunuz bu %d, %f, %c, %lf ifadeleri yine printf’te yazdırırken kullandıklarımızın aynısı, o açıdan zaten bunu gördünüz. Burada yeni olan şey & (ampersand) işareti. Bu işareti, hafızaya erişmek için kullanıyoruz. Örneğin 19. satırda &x yazdığımızda, x değişkeninin hafızada tutulduğu yere gidiyor ve kullanıcıdan bir değer girmesini bekliyoruz. Kullanıcı değeri girip enterladığında da girilen bu değeri alıp hafızadaki o noktaya koyuyoruz. Diğer değişkenler için de yine aynı şekilde scanf kullanımı yapıyoruz. Sadece burada bir ayrıntı olarak, kullanıcıdan bir char değeri almak istediğinizde % işaretinden önce bir boşluk bırakmalısınız (bu boşluk görselde de görünüyor zaten). Bunun sebebi ve iyi bir açıklaması var fakat şu noktada kafa bulandırabilir ve işinize yaramayabilir. Öyle bilin yeter, merak ederseniz internetten bakabilirsiniz. Bu arada, yukarıdaki görseldeki kodları yine kendiniz yazmayı da unutmayın. Bu gerçekten önemli.

Artık kullanıcıdan bilgi de alabildiğimize göre, ufak tefek anlamlı programlar yazmaya başlayabiliriz. Ben uzun uzun detaylı örnekler yazıp anlatmayacağım burada ama kendiniz deneyebileceğiniz birkaç soru yazayım, kodunu yazmaya çalışın. İnternetten ya da önerdiğim kitaplardan da örnekler bulabilirsiniz.

1\) Taban uzunluğu ve yükseklik değerleri girilen üçgenin alanını hesaplayan program.

Örnek çıktı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEjAwh0UN6CJZ_yAR0X5FwDHIsS6dtuUR6iJfgHGZlDgWYYN2EwXjkRURHN11tG6pGOPkPISWygZtjyS33AaUyw6i_xlGqDn-yB8mejjVoiTpuXDJkp-EnpdbXlu0KHIfb3CTENH37irokyNTd9u_y7oAfyowGVebNLWjk2HXRNohfNlifZm4NGLDqwL3Jj5=w470-h104)

2\) Girilen iki tamsayı için tüm aritmetik işlemleri yapan program.

Örnek çıktı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhfKfJCnCK8gnpLpZBlUxfvRuj93K5ojsnK7kUI9rPjjG7v71F_zAPc4xqhvKbceqhgNgbR_R0qIQ3Eyy6ZwpD4djDJcjMABR-SfuWVR8ijpCGcwPaoBXbIxni6WMC4VODRjUtXIykgrr7uIT53aRCcRLUZJIBlaH4Z-CyEDFoH24t2e6UBeAsfqubE-2jW=w408-h194)


3\) 1’den n’e kadar olan sayıların toplamını veren program (formülü bilmiyorsanız Google’dan bakabilirsiniz).

Örnek çıktı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEj0qYJj9lz_xtAYJUT_uafEM0YVB4CJfpaO03NGmNXcZn17CiMRuNqb3LXHM_EqV_ugksqyox3xv6jub1X6DpZDiu0W9Zzp-cFh7huxGhIb5jHGUE8_Ct1e43Qwpw1b9non4nmXnhOCj7Y-Dqb68xKEqMNg4QCEsjBpAH2qoP_C_4SeR4Ipw3EGg06Q4yAT=w470-h123)


4\) Klavyeden girilen 4 haneli tamsayıyı aşağıdaki gibi çözümleyen program.

Örnek çıktı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEiRfsphD04I_3VtcJVIUrJXopeVL4EBM5WFwiMrR-v_W7ER71RDgmOJAmAkxUt_cksSXDxaio3n-HLvCilb1LgxCtOCEr4uSqMczGcF_qP71rnRQXTrMYC3QDlSdUk2nThEiEB1RK8i1Rj1TGG0dThTUTB8ecgRJ5kHY0qaXdSnaXjhMI_ttVNpT0Uhqe9M=w497-h110)
 

Özellikle son soruyu düşünmek biraz zor gelebilir. Kendinizi salak gibi de hissedebilirsiniz. Korkmayın, bunlar yaşanan şeyler. Şevkinizin kırılmasına izin vermeden çözmeye çalışın. O an çözemeyeceğinizi düşünürseniz kalkıp bi yürüyüş yapın ya da duşa girin tekrar deneyin. Bilgisayar başında çıldırarak çözüme ulaşmak çok işe yaramayabiliyor.

 

## Koşullu İfadeler

Program içerisinde gerçekleştirmek istediğimiz işlemler bazı koşullara/durumlara/şartlara bağlı olabilir. Bunun için “if” ifadesini kullanacağız. Lafı uzatmadan örnekle görelim.

Kullanıcıdan girilen sayının pozitif olup olmadığının kontrolünü yapmak istediğimizi düşünelim. Sayı pozitifse program bize girilen sayının pozitif olduğunu söyleyecek:

![](https://blogger.googleusercontent.com/img/a/AVvXsEj-piZ4Qd71hgmQMiHEPxUoSFnTjopj-o6LuGeqU56Nyq7GIjeVYFM2-87NuFzI0gSSl8T3Xgc48qTePFyZgpdfb3U07CMFoncjUejiE55hjGIUVKpuyFsbJcAednFY13Tz9TORC_cYgL7JGsi4R8jnhD3Bxm7MRFSjcEmwB7_vNCcWex7BVSyOLsFo0fvj=w522-h531)

if deyiminin kullanımı aslında oldukça basit ve açık. İngilizce olarak düşündüğünüzde zaten mantıken de anlıyorsunuz, “eğer”.

7\. satırda kullanıcı girdisini alıyoruz. Sonrasında aldığımız bu girdinin 0’dan büyük olup olmadığını kontrol etmek için 9. satıra geliyoruz. if(sayi > 0), yani, “eğer sayi isimli değişken 0’dan büyükse” … Bu cümlenin devamını “o zaman aşağıdaki işlemleri gerçekleştir” şeklinde getirebiliriz. “Aşağıdaki işlemler”den kasıt if’e ait olan süslü parantezler içerisindeki işlemlerdir. 9. ve 11. satırda bu parantezleri görebilirsiniz. Bu iki süslü parantez arasına yazılan her bir kod parçası yalnızca girilen sayı değeri 0’dan büyük olduğu durumlarda çalışacaktır. Hazır konu büyüklük küçüklüğe gelmişken, eşitlik ve karşılaştırma operatörlerine de bir bakalım.

 

Bu operatörlerimiz 6 adet fakat korkmayın oldukça basit:

== operatörü: İki değerin birbirine eşit olduğunu kontrol etmek için kullanıyoruz. if(a==b) şeklinde kullanırız.

!= operatörü: İki değerin birbirine eşit olmadığını kontrol etmek için kullanıyoruz. if(a!=b) şeklinde. Yani, a değeri b değerine eşit olmadığı zaman ilgili kod çalışacaktır. Burada olay kısaca if içerisinde verilen ifadenin doğru olup olmamasıdır, hangi operatörü kullanırsak kullanalım

Diğer operatörler de > (büyüktür), < (küçüktür), >= (büyük eşittir), <= (küçük eşittir) şeklindedir. Bunların işleyişi matematikte nasılsa burada da aynı. a >= b, a < b vs.

 

Hazır karşılaştırma operatörlerinden bahsetmişken kısaca mantıksal operatörleri de yazayım. Bunlar da 3 tane, lisede mantık dersi gördüyseniz yine bilirsiniz zaten:

&& operatörü: Mantıksal VE operatörüdür. Örneğin,

if(durum1 && durum2) şeklinde yazdığımızda, sadece durum1 ve durum2’nin her ikisi de sağlandığı durumda if bloğu çalışacaktır.

|| operatörü: Mantıksal VEYA operatörüdür. Örneğin,

if(durum1 || durum2) şeklinde yazdığımızda, durum1 veya durum2’den herhangi birinin sağlanması, if bloğunun çalışması için yeterlidir.

! operatörü: Mantıksal DEĞİL operatörüdür. Örneğin,

if(!durum1) şeklinde yazdığımızda, durum1’in sağlanmadığı durumda if bloğu çalışacaktır.

 

if içerisindeki koşul sağlandığında if’e ait bloğun çalışacağından bahsettik. Peki ya koşul sağlanmazsa? Yukarıda eklediğimiz kodda bunun için bir durum eklemedik. Her zaman eklemeye ihtiyaç da duymayız zaten ama yine de onu da görelim.

Bu kez kullanacağımız anahtar kelime “else” olacak. Fakat unutulmamalı ki else kelimesini ortada bir if ifadesi olmadan tek başına kullanamıyoruz, kendinden önce gelen if’e bağlı olmak zorunda. 



![](https://blogger.googleusercontent.com/img/a/AVvXsEhCbEPZFw0AXVySJRPNfNdi7H-DLe5aHgkOPtVuoXZ2nHkSGdgJBWPFzTzqFV_jK9D5V5cg1V3HOS4idjQO5uWuKCgZ1wzOVW7jUKoU3pjzBdhsOUyjWaWWiHBISxHlAtlyZIJyKIxocVT-Ahbv8upo4ACERPgMP_wXYFTALNaXI4ZxmEtjkoYGSa_PUI40=w555-h454)


Kullanımı bu şekilde. else ifadesinin de yine kendine ait bloğu (süslü parantezler) vardır fakat bir koşula bağlı değildir. Kendinden önce gelen koşul gerçekleşmediği takdirde else’in içerisi çalışır. Zaten yine İngilizcesinden çıkarabilirsiniz: “öyle değilse”.

Son olarak bir de “else if” ifademiz var. Hemen örnekten göstereyim daha kolay olur:


![](https://blogger.googleusercontent.com/img/a/AVvXsEigoNyqz8K3HvAG0lH5UMCgG8n7UP-2XV6Jha6G2F24uIfpHzGwsjbUES7FgkfaiJ31ke6B59B-Z72E_qe2-wxKneVcLcRZt8-BjcckIP6eXgOvqY7AsclsTl4Mh1TKThJB9oH_vPnZT81CDTVx1L7v6kv7bz1nN-Xr4CoDMxVRrNZBJWX1sZ6G-LbM00y1=w500-h495)


else if ifadesini başka durumları da kontrol edebilmek, o durumlar için de ayrı kod blokları yazabilmek için kullanırız.

Şimdiii bu kısmı kavraması çok çok kolay olmayabilir ama aslında oldukça kolay. Sakin olun, derin bir nefes alın ve neyi neden öyle yaptığımızı yavaş yavaş açıklayayım.

7\. satırda kullanıcıdan girdiyi alıyoruz. Örnekte girdi olarak 7 verdik. Program 9. satıra geliyor, “sayi” değerinin 25’ten büyük olup olmadığına bakıyor. Büyük olmadığını gördüğü için 10. satırı çalıştırmıyor ve 12. satıra geçiyor. 7 değerinin 10’dan büyük olup olmadığına bakıyor, büyük olmadığı için 13. satırı çalıştırmıyor ve 15. satıra geçiyor. 7 değerinin 5’ten büyük olup olmadığına bakıyor. Büyük olduğunu görüyor, gördüğü için 16. satırı çalıştırıyor ve, önemli olan kısım burası, devamında sonraki kısımların kontrolünü hiç yapmıyor. Yani 18. satırdaki kontrolü hiç yapmadan doğrudan atlıyor. else’i de zaten çalıştırmıyor çünkü else’ten önce gelen if ifadelerinden birisi çalışmış oldu.

Şimdi, buradaki incelikli nokta şurası. “else if” yerine doğrudan “if” kullandığımızı varsayalım. Yani 12-15-18. satırların tamamı if olsun diye düşünelim, ne değişirdi? Sayı değerimiz 7, dolayısıyla yine 10. ve 13. satırlar çalışmazdı. Sonrasında 16. satır çalışırdı ve sonrasındaysa 19. satır da çalışırdı. Çünkü 7 değeri için 18. satırdaki şart sağlanmış olurdu. Fakat biz böyle bir sonuç görmek istemeyiz. Çünkü 5’ten büyük olan bir sayının 0’dan büyük olacağını da zaten biliyoruz. İşte “else if” kullanarak yaptığımız şey aslında bu ifleri birbirine “bağlamak”. Böylelikle, şartlardan bir tanesi gerçekleştiği takdirde diğer şartların içine bakılmadan doğrudan atlanıyor, çünkü gerek yok. Tabii içinde bulunduğumuz duruma göre neyi nasıl kullanacağımız değişir o bize kalmış ama else if’in olayı aslında bu, bağlamak. Ve yine İngilizcesinden yola çıkarsak aslında durum şöyle:

9\. satır -> Eğer sayı 25’ten büyükse,

12\. satır -> Öyle değilse fakat sayı 10’dan büyükse,

15\. satır -> Öyle değilse fakat sayı 5’ten büyükse,

18\. satır -> Öyle değilse fakat sayı 0’dan büyük ya da 0’a eşitse,

21\. satır -> Öyle değilse (Yukarıdaki şartların hiçbiri değilse),

 

Son olarak 21. satır için bir not daha düşeyim. Buradaki else ifadesi yerine “else if (sayi < 0)” da yazabilirdik. Programın çalışması açısından hiçbir sorun teşkil etmez ve yazımda bir hata yoktur. Fakat kendinden önceki kısımlardaki şartlar sağlanmadığından dolayı mantıken sayının kesin olarak negatif olduğunu biliyoruz. Dolayısıyla ek bir kontrole ihtiyacımız yok ve doğrudan yazdık. Fakat dediğim gibi, “else” kullanmak bir zorunluluk değildir.

Bunları yine kendinizin de yazmasını özellikle rica ediyorum. Yazın, deneyin, görün.

if-else konusunu görsel olarak da görmek için aşağıdaki akış şemasını inceleyebilirsiniz:


![](https://blogger.googleusercontent.com/img/a/AVvXsEhSXTVlcpDNiPQKlO9o11YZo3dMP8E4kLYjA_nwDve2xTbMqdt_NKXqaVdlcY3lT3QUbSDKfMbJZzeSjbbwIfvIkrcAgdiMvYXlO8o5vSN_QS8bRDC3-o2ZBzZF59Did0VNsP0WeFIba36z71KvXo0n_jrjGj96ndwNI53pc1ogpiyjWQIBI3nyyqJewHvL=w473-h333)


Yeni konuya geçmeden önce bununla alakalı da 2 adet örnek soru yazayım çözmeye çalışın.

 

1\) Vize ve final notlarına göre öğrencinin ortalamasını ve harf notunu gösteren program.

Harf notları,

80 üstü ortalama = ‘A’,

70 – 80 arası = ‘B’,

60 – 70 arası = ‘C’,

50 – 60 arası = ‘D’,

50 ve altı = ‘F’

şeklinde olsun. Vize notu ortalamanın %40’ını, final notu ortalamanın %60’ını oluştursun.

Örnek çıktı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhwuXE74a8yOdntnLrWIaOiD-__zycEILF4F2M6W7eqi8caM4BfC2ApfPkv6T9Ur0Q3jTNk5DGFY_aSPRhNFbKSJE-lt8433aAqw_ErjdDgnmjqITrC_ocJBB9buqLcAebJ8WRp_g9EGMK-y0CkKsTDNHzDSRxHbBLuttYHtiSUMMEuGzcfsB_JulDD9ZtF=w484-h123)

Gördüğünüz üzere örnek çıktıdaki ortalama değerinde noktadan sonra iki hane görünüyor, normalde altı hane görünüyordu. Bunu bu şekilde yapabilmek için printf’le sayıyı yazdırırken %f yerine %.2f yazıyoruz. Üç hane görünmesini istiyorsak %.3f vs.

 

2\) Girilen 3 adet sayıdan en büyük olanını yazdıran program.

Örnek çıktı:


![](https://blogger.googleusercontent.com/img/a/AVvXsEgRcjPHd0_TaU0cMydUKpOE0ZgxwDOEf6GxN19W0rgzOhltnX4PJptcRJwf1hzTbpR6LLL3Xl4fa-5dS0-bg4Bz7oK_YGrFCgpTS4JDqUlD4gE--O2jFrFb7eN43Fjk1bl6s4x_o-7wqjWgdPWeOb2Cj4z628HWQFniWQtq_Qf10pboBoXfciC8HrO8erm3=w467-h172)

3 adet sayıyı tek satırda okuyabilmek için scanf(“%d%d%d”, &sayi1, &sayi2, &sayi3); yapabilirsiniz. Her entera basmada bir diğer değişken için okunur.

 

3\) Girilen 3 adet sayıyı küçükten büyüğe sıralayan program. Bu çok klasik bir örnektir ve daha önce karşılaşmadıysanız hafiften kafa yakabilir yine, ama halledersiniz merak etmeyin.


![](https://blogger.googleusercontent.com/img/a/AVvXsEjq4pnS7D-7KwyNsdipMOhPz-jpAIaldDOUTHlITy6RoXnKKMmXTC5o1I6t--CMOCz3R_5uo9O-CTsLdGfz6_SPJeg-y3EK_TwVGxQ6Ah9Rwm1_zvugL_ZH8qBQUs7Eri_M2m2sS1HzjyNZKeZtaYjidMaxoSWgcs0Z1wTXLNIiaSWKJ0w0Nq4IpMWezUih=w551-h141)


Koşullu ifadeleri bitirmeden son olarak bir de switch-case’e değinelim. Bir program içerisinde çok fazla koşul kontrolü gerektiği durumlarda if-elseleri izlemek zorlaşabilir. Böyle durumlarda switch-case kullanırız. Zor bir yanı yok, mantık olarak yine if-else’te ne yapıyorsak onun gibi çalışıyor. Örnek üzerinden gösterelim.

[1, 5] aralığındaki tamsayıların okunuşlarını gösteren bir program yazdığımızı düşünelim:


![](https://blogger.googleusercontent.com/img/a/AVvXsEhIZYMwpIUr3uc40nzsFGYiT6uqaHDls02jWGk4z9OgcQzhamei6gI6p2JM8MqRwOQ4KWgeAINXlJVVTuS83714tj_971iU35NIXPPcIRvLJylfqg_TwfcvrqQ8y6-1FOr6UwJvvW1tWIxKkA1bcC_f3ZoF9bYoSXuG2-d8FvinmRzYOZXA-6FsvXXJKmvJ=w489-h515)


switch içerisine kontrolünü yapmak istediğimiz değeri gönderiyoruz. Sonrasında case’leri kullanarak olası durumların kontrolünü yapıyoruz. Her case için yazmak istediğimiz kodu yazdıktan sonra (Örnekte her case için birer satır kod yazılmış halde ama bunun bir sınırı yok) break; deyip o case’i sonlandırıyoruz ve bir sonraki case’e geçiyoruz. Tüm case’leri tamamladıktan sonra bir de geri kalan tüm durumlar için bir default: belirliyoruz ve tamamlıyoruz. Ben meslekte çalışmaya başladığımdan beri switch case’i hiç kullanma ihtiyacı duymadım ve kullanan da pek görmedim ama yine de bilginiz olsun.



## Döngüler

Şimdiii işlerin birazcık daha zorlaştığı kafaların birazcık daha yanacağı bir yere geliyoruz. Eğer peş peşe çok çalıştıysanız buraya başlamadan önce bir mola vermeyi düşünebilirsiniz.

Bir satırı ya da bir kod bloğunu bir defadan fazla çalıştırmak için tekrar tekrar yazmak yerine, döngüleri kullanırız. C içerisinde 3 adet farklı döngü şekli var. Fakat ikisi birbiriyle hemen hemen aynı. while döngüsüyle başlayalım.

 

Tüm döngüler, içlerinde koşullar bulundururlar - if’te gördüğümüz koşullar gibi. Fakat döngülerin farkı, ilgili koşul doğru olduğu sürece kendilerine ait kod bloğunu çalıştırıyor olmalarıdır. if-else kullandığımızda kod sadece bir kere kontrol edilip çalıştırılıyor ve geçiliyordu.

Her zamanki gibi yine bir örnek üzerinden gidelim:


![](https://blogger.googleusercontent.com/img/a/AVvXsEhfSa9OQoeN26CZ4fz12KKpTCa2XN1vu6-Vj8_tBdvWkYRrmvWTbj3i3SuaUjYhv-tPy30oLBV_mJTAyOo4S0ekuZBEVoO8emBhvFr0SXgHNq8jdYDA6LKAvEhbDsm0wG5w8KIN3NyYkkO4nKgUNsHlq8x9CfxbcVg600e-hUK9xpUWcQblRc6BOpKNr4Mn=w530-h307)


Yukarıdaki kod parçasında, 0’dan başlayarak 100’e kadar sayıları printliyoruz.

5\. satırda i isimli değişkeni tanımladık ve değerini 0 olarak atadık. Bu değişkeni döngünün kontrol değişkeni olarak kullanacağız (7. satırda).

7\. satıra geldik, program i değerinin 101’den küçük olup olmadığını kontrol etti, değerin 101’den küçük olduğunu gördüğü için parantezin içi doğru” oldu ve program while ait olan 8 ve 9. satırları çalıştırmak üzere bloğun içine girdi.

İlk aşamada i değerimiz 0.

8\. satıra geldiğinde program ilk olarak “0, ” yazdırdı. Sonrasında 9. satıra geçti ve i’nin değerini 1 arttırdı (++ özel bir operatördür birazdan bahsedeceğim). i’nin değeri 1 arttıktan sonra i’nin değeri artık 1 oldu. Kod bloğu içerisinde çalıştırılacak başka satır kalmadığı için program 7. satıra yeniden döner ve yeniden kontrol eder. “i’nin değeri 1, 1 değeri 101 değerinden küçük, o zaman while’a ait kod bloğunu çalıştır”. 8. satıra yeniden geldi, bu kez “1, ” yazdırdı ve sonrasında i değerini yine 1 arttırdı. i değeri artık 2. Sonra kontrolü yeniden yapar ve bu böyle devam eder.

En son i değeri 100 olduktan sonra, 100 < 101 kontrolü doğru olacağı için yine kod bloğuna girilir, 100 printlenir ve i’yi tekrar 1 arttırdığımızda değeri 101 olur. 101 < 101 ifadesi “doğru” olmayacağı için döngü kırılır ve program döngünün bittiği yerden itibaren diğer kodları çalıştırmaya devam eder.

Tüm bu döngü sürecini aşama aşama sakince kafanızda canlandırırsanız ne olup bittiğini anlayacaksınız. Döngülerde kritik olarak dikkat edilmesi gereken can alıcı bir nokta vardır ki gerçekten can alır: sonsuz döngüye girmek.

9\. satıra dikkat edin. Burada her adımda i değerini 1 arttırıyoruz. Şimdi bu satırın olmadığını düşünün, sizce çıktı nasıl olurdu? Düşünmeyi deneyin.

Şöyle ki, ilk başta i’yi 0 olarak tanımlamıştık ve ilk adımda 0 printlemişti program. Fakat 9. satırı yazmazsak, i değeri artmayıp 0 kalmaya devam edeceği için while içerisindeki koşulu sürekli olarak sağlardı ve sürekli olarak 0 printlerdi, sonsuza kadar (ya da elektrikler gidene kadar falan). Dolayısıyla döngüye verdiğimiz koşulun zaman içerisinde değişeceğinden emin olmalıyız. Bu her döngü için böyle.

Devam etmeden önce yeri gelmişken bazı özel operatörlerden de bahsedelim. Merak etmeyin çok basitler:


![](https://blogger.googleusercontent.com/img/a/AVvXsEi5htrsJx_53HSZXcDuE3HZgW__GuCLQytu4KXeG0H7HjHhyeVb6ROkQa5BE3Myz_FgBPS7pnETv9YUCSDfEU3dxXOH5ErV-uPr2EdEsmKFAEhImBWXPBy0d7PgFq0Hjz0LeqbisuvzAjxo_lHhRsfv-ij3lf4LAA2yKOYAVvNAHfWXymQ70kzoggY7jwoX=w471-h447)


C içerisinde += -= *= ve /= gibi ifadeler kullanabiliriz. 14. satıra bakalım. x += 3 yaptığımızda, bunun manası aslında “x = x+3”’tür. Yani, “x değerini al, ona 3 ekle, elde edilen sonucu x’e ata.” şeklinde. Bir çeşit kısaltma gibi düşünebilirsiniz. Mantık açısından x += 3 ve x = x+3 birbirine eş işlemler olsa da, bazı teknik sebeplerden dolayı x += 3 daha hızlı çalışır. Fakat tabii bu bizim fark edebileceğimiz bir hız değil, genel kültür olsun diye söylüyorum.

Toplama işlemi için olan durum çıkarma çarpma bölme için de geçerli. 15-16-17. satırlarda bunu görebilirsiniz.

Bu operatörlere ek olarak bir de ++ ve –- operatörleri var. ++ ifadesi yanına yazıldığı değişkeni 1 arttırmaya, -- ifadesi yanına yazıldığı sayıyı 1 azaltmaya yarar. Bunları genelde döngüler için kullanıyoruz ama herhangi bir yerde de kullanabiliriz tabii. Değişkenlerin soluna ya da sağına yazabiliriz, çok fark etmez. Fark edebileceği bazı durumlar var onun hakkında da ufak bi detay vereyim ama bunu çok aklınızda tutmanıza gerek de yok açıkçası. Başka sayıya atama yaparken kullanmazsanız kafanızı karıştıracak hiçbir şey yok:


![](https://blogger.googleusercontent.com/img/a/AVvXsEju6K9kyxl_8yZAYyoxjgqBx6ExPic9Hj3yZmKPHuZVFMq0DzV14b0EoKDs6I_1bL24xFBB3_Jl_7TXYVZHAw0fSU8bSCuHcP9fbj1w81klW3fIee-PWhXE59j7PgA-Go8HbaDulvx458XFHYoXDVBrXuNq6332yWq5sIGcf0VGoGqStsofaIKcUEqqNHNk=w532-h371)

6\. satırda i değerini 5 olarak tanımlıyoruz.

Çıktıya baktığımızda j değerinin de 5 olduğunu görüyoruz. 7. satırda olan şey şu: “i değerini al, onun değerini j’ye ata, sonrasında i’nin değerini 1 arttır ve yeni değeri i’ye ata (yani i’nin değeri 6 olsun)”.

8\. satıra gelirken i’nin değeri 6’ya dönüştü, bunu akılda tutalım.

8\. satırda olan şey ise şu: “i’nin değerini 1 arttırıp i’ye yaz ve bu yeni değeri de k’ya ata”. Dolayısıyla ilk olarak i 7 oluyor, sonrasında bu 7 değeri k’ya atanıyor. Fark bu. Bir de yine genel kültür olarak, ++i ifadesi i++’dan daha hızlıdır. Ama bu kafanıza takmanız gereken bir hız değil, ben genelde i++ kullanırım.

 

while ile devam edelim.

while konusunda aslında çok daha fazla açıklanacak bir şey yok. Bundan sonrası kafada oturması için pratik yapmak tamamen. O yüzden birkaç örnek soru ekleyeyim. 

1’den 100’e kadar sayıları toplayan program:


![](https://blogger.googleusercontent.com/img/a/AVvXsEiTa8aMAsD6nkm-QaQn49zLmq3GgPxfmH6o_pjh1TYZMqUjr_4cpvFu9PGbcl9kJdxl4SiHOtlIlizSuIuRNt2G2m5Z6Cu22wR6WL0cmfq6TS3UpdRLqKe_NTHp7HlhL_6hLYNxb_KyjfxMluzo4CySptnkIySCy3s9W1HeJleubj4MBg1as9w3R6oXI9ob=w522-h492)


1’den 100’e kadar olan çift sayıları toplayan program:


![](https://blogger.googleusercontent.com/img/a/AVvXsEjv1DcPbxPkiSCChZbTSHQuK3CP6T_U7GDajcNFoVqTtvWHNwTG8TUs_gxyu0KQgxzSgPT3egh_WkFDCJGzZeOSQyNeKQYy7l-2YeGM3Jjm8lYHZZhhNZQ9tkdxMH5RgfMyCVLGGySAGRYMjStgdCX2TvCxdKGW14D6LvVzr61A7PHdgyN_pxhwwIsC0aaA=w463-h407)


Kodları kendiniz inceleyip yazıp farklı değerler denerseniz anlayacağınızı düşünüyorum. Fakat şunu iyice anlamnız gerekiyor ki genel anlamda döngüler, 5 dakikada şak diye kafanıza oturacak bir konu olmayabilir. Biraz süreç gerektiriyor – merak etmeyin çok çok aylar yıllar değil ama biraz zaman alabilir işte. Bir sabah uyandığınızda siz ne olduğunu anlamadan her şey kafanıza oturmuş halde bulabilirsiniz kendinizi. Tek yapmanız gereken azmetmek.

Döngüler içerisinde kullanabileceğimiz iki adet komut var: break ve continue. “break”i switch-case kısmında da görmüştük, case’i sonlandırmaya yarıyordu. Benzer şekilde burada da yaptığı şey döngüyü sonlandırmak. Döngü normalde kendi kendine sonlanan bir şey evet ama bazı özel durumlar için döngüyü daha işi bitmeden ortasında sonlandırmak isteyebiliriz. Mesela aşağıdaki örneğe bakalım, döngünün 15 sayısını görürse sonlanmasını istiyoruz:


![](https://blogger.googleusercontent.com/img/a/AVvXsEgJe3zNP_eZSaD3IsyCDhnQH7rDDsEX5L3_ZP5fweSaTTUj8i-3sLvgb0RrGnw5EXGXCMk7sGX6lTTpjE9MaxO9D6rg0Lm73ws38ec4oqCU6_Baao-L4rj8Hy64P2ralI4plDx7B8_NLPKDujcZeqF9c4rNh5yU0z1K0Vjv5C_WfkvSucWBVorBXQaWsJmv=w502-h403)


Çıktıda da görüldüğü üzere 14’ten sonrası yok. Çünkü i 15 olduğu anda döngü kırılıyor.

9\. satırdaki if ifadesinin kod bloğunu belirtmek için neden süslü parantez kullanmadığımızı merak etmiş olabilirsiniz. Dikkat etmediyseniz şu an dikkat ediyor da olabilirsiniz. Bunun sebebi şu, süslü parantez kullanmadığımız takdirde if, yalnızca bir altındaki satırı kendine ait kabul eder. Bizim işimiz de yalnızca bir satırlık bir iş olduğu için süslü paranteze ihtiyaç yok burada. Ama 2 satır ve daha uzun kodlar için gerekiyor. Aynı şekilde döngülerde de bu durum geçerli, süslü parantez olmazsa yalnızca altlarındaki ilk satırı kendilerine ait kabul ederler.

continue’yu ise şu şekilde kullanıyoruz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEjp7Fy7EaXMEZsSJ2O5xXs6Uuv_sJdV-a2eDcPoz-Jx_ccZl2tm6rxm-XTrIZshUGT6z-PHkY6SJMRNx99BgDQXl55lpY3Q7zftks_3RPjFOykKuCoruczLTSZHloouG0vxa2BbbvAsHQZaqvPWsqpObQbTx_RtQXlB0Ejq8kt0UzVsSCUh7WDM1RIOcsZB=w510-h326)

continue’nun yaptığı şey ise ilgili koşul gerçekleştiğinde “devam etmek”. Yani i değeri 15 olduğunda döngü kırılmıyor ama 13 ve 14. satırlara da gitmiyor, bir sonraki adıma geçiyor. Çıktıda da “15”in olmadığını görebilirsiniz. 10. satırda continue demeden önce i++ yapmasaydık i değeri 15’te kalırdı ve sonsuz döngüye girerdik. Bu örnekleri de yine kendiniz yazıp test ettiğinizde daha iyi anlayacaksınız.

Bir diğer döngü ise “for” döngüsü. Bu döngünün kullanılışı da şu şekilde:

0’dan 100’e kadar olan sayıları yazdıran program:

![](https://blogger.googleusercontent.com/img/a/AVvXsEgdBDxdGcbsx8kZ2lenr33ECtWazkaIv2PVOIMKxWzOAKG4lY-87weZB9e8f6mlNcohhZLv7BJ3-fe-sPF6BsCzBzBdAni2UQLJv9Qw-dmHFdn8jx2iFClegnUjc6CAgpiQsuh2Va5gOn9iGscZQU9FYMrilUbGoG_cVL6TRgoifjJ7H7SNmC0mpdJHam_j=w525-h241)


for döngüsü içerisinde 3 kısım var.

for(sayaç, döngü koşulu, sayacın artış miktarı) şeklinde.

Görselde 6. satıra baktığımızda sayaç olarak kullandığımız i’nin ilk değerini 0 olarak belirliyoruz. Koşul olarak i < 101’i belirliyoruz ve artış miktarı olarak i++ yapıyoruz, yani, her adımda i değeri 1 artıyor. Bunu istersek i+=2, i*=5, i-=4 vs gibi şeyler de yapabiliriz, nasıl istersek. Ama böyle durumlarla pek karşılaşmayız.

Sayacı önceden tanımlamışsak ve değerini vermişsek for içinde yeniden ilk değer atamasını yapmaya ihtiyaç duymayabiliriz. Yani, şöyle bir kullanım yapabiliriz:

int i = 0;

for(; i < 101; i++)

Gördüğünüz üzere ilk kısım boş, doğrudan ; koyduk, bu da çalışacaktır. Fakat genelde böyle kullanıldığını görmeyiz.

Burayı geçmeden hemen ufak bir not düşeyim. i değerinin şu şekilde tanımlandığını da görebilirsiniz – ki günümüzdeki sık kullanılan programlama dillerinde de genelde döngü değişkeni böyle tanımlanır:

for(int i = 0; i < 101; i++)

C’nin eski versiyonlarında bu kullanım yoktu, sonradan eklendi. Fakat sonradan eklendiği için her derleyici bunu çalıştırmayabilir, dolayısıyla ilerleyen kısımlarda da bu şekilde yazmayacağım. Yine de bunun da olduğunu bilin, günümüzdeki yaygın kullanım bu.

6\. satırın sonundaki ve 8. satırdaki süslü parantezleri de unutmayalım tabii. Bunlar da yine diğer yapılarda olduğu gibi for’a ait kod bloğunu ifade etmek için.

“Neden farklı döngü çeşitleri var?” şeklinde bir soru gelebilir aklınıza. Çünkü bir döngüyü kullanarak gerçekleştirebildiğimiz her işi başka bir döngüyle de gerçekleştirebiliriz, hiç sorun yok. Fakat bazı durumlarda while kullanmak, bazı durumlardaysa for kullanmak elimizdeki gerçekleştirdiğimiz işe mantıken daha uygun oluyor.

Mesela kullanıcıdan “x” karakteri girilene kadar farklı farklı girdiler istediğimiz bir kod yazdığımızı düşünelim. Input olarak “x” karakterini girene kadar program yeni girdiler sormaya devam edecek ve çalışacak, yani bir sınırı yok. Bu tip durumlarda while kullanmak daha akla yatkındır. while(user_input != ‘x’) şeklinde koşulu belirleyebiliriz. Fakat bunu for’la gerçekleştirmek istersek, döngü değişkeninin artış miktarı bizim herhangi bir işimize yaramayacaktır. Çünkü ne kadar artış olduğuyla ilgilenmiyoruz, ilgilendiğimiz tek şey ‘x’ girilip girilmediği. Yine forla da yapabiliriz yani ama anlamsız olur, akla yatkın değil, estetik hiç değil. Tecrübe kazandıkça ikisi arasındaki ayırdı daha iyi yaparsınız endişelenmeyin. “Şöyle problemlerde bu kullanılmak zorunda” diye bir şey de yok zaten dediğim gibi.

3\. döngü çeşidimiz do-while döngüsü, kendisini çok da severim aslında ama anlatmayacağım. Çünkü while ve for döngülerini yaygın olarak kullanılan hemen her programlama dilinde görebilirsiniz ama do-while pek görülmez. Merak ederseniz bakabilirsiniz, while’ın üzerinde ufak bir değişiklik yapılmış hali zaten çok apayrı bir şeyi yok.

Döngüleri bitirmeden önce bir de iç içe döngülerden bahsetmek gerek.

Bu ayrı bir konu değil, yine while ve for kullanacağız. Fakat bazı sorunların çözümünde bir döngünün içerisine başka bir döngü yazmak gerekebiliyor. Hatta bazen onun için de bir başka döngüyü. Döngüler aslında program için oldukça maliyetli şeylerdir ve iç içe döngüler oluşturmak pek istenmez, karmaşıklığı arttırırlar. Fakat tabii kullanmak zorunda olduğumuz durumlar da var. Doğrudan örnek göstereyim yine:


![](https://blogger.googleusercontent.com/img/a/AVvXsEiV-eUMPkNraHIGXI8jmNmLSV17OjKyWVbF_DEv371njoFouIT1Y83SA77UdxJdPXN1h_3AlMPrJMHLJCfMAlYuGGpj6gRdk55Crx4VDQMIcrDIoNNwZPCdnA8cWkx9TRDWKiGhOsCj3J1a0TxfClEPX3FlbRg1GdMudwqCwbiOpoG6J75iojiQkqvqf24j=w515-h524)


Bu kod parçasının iç içe döngüler meselesinin özeti niteliğinde olduğunu düşünüyorum. i ve j adında iki tamsayı değişkeni tanımladık. Şimdi kodu aşama aşama kafamızda canlandırarak yürütelim:

1. satırda, i’nin ilk değerini 0’dan başlattık ve 4’e kadar gitmesini söyledik (4 dahil değil). Yani, 6. satırdaki for döngüsünün döngü değişkeni i değeri ve i değeri 4’e ulaştığı anda bu döngü kırılacak.

İlk durum için düşünelim. İlk durumda i’nin değerini 0 olarak aldık ve geldik 7. satıra, burayı çalıştırmamız gerekiyor. Fakat 7. satırda bir döngüyle daha karşılaşıyoruz ve bu döngünün döngü değişkeni de j. Bu da yine 0’dan başlayıp 4’e kadar gidiyor.

Şu an 7. satırdaki for döngüsüne ulaştık ve j’nin ilk durumu 0. Şimdi içerideki bu döngüyü j’nin 0 durumu için çalıştırıyoruz, dolayısıyla, 8. satıra geçiyoruz.

İlk adımda 8. satıra geçtiğimizde, i’nin değeri zaten 0’dı, j’nin değeri de 0, o yüzden ekrana “i = 0 degeri icin j = 0” yazılacak. Bu yazıldıktan sonra 9. satıra geliyoruz, kapanmış olan süslü parantezi gördüğümüz için oradan yeniden 7. satıra zıplıyoruz. Çünkü, i = 0 değeri için ilk olarak içteki o döngüyü tamamlamamız gerekiyor. 7. satıra zıpladığımızda j’nin artış miktarı her adımda 1 olduğu için, j değeri sıradaki adımda 1 oluyor. Fakat i değeri hala 0. Çünkü yine söylüyorum, sıranın i değerinin artışına gelebilmesi için ilk olarak içteki kodun çalışıp bitirilmesi gerekiyor. Dolayısıyla, bir sonraki çıktı “i = 0 degeri icin j = 1” şeklinde oluyor ve bu böyle devam ediyor. j değeri 4’e ulaştıktan sonra içteki döngü kırılıyor, sonrasında 10. satıra ulaşıyoruz. 10. satırda gördüğümüz şey ilk döngünün süslü kapa parantezi, dolayısıyla, 6. satıra zıplıyoruz ve i değerini 1 arttırıyoruz. Ve bu işlemler tüm gerekli değerler için yapılana kadar bu şekilde devam ediyor.

Yukarıdaki örneği anlamadan bu kısmı geçmenizi istemem. Gerekirse birkaç kere daha okuyun, kağıt kalem alın yazın çizin ama anlayın, çok zor değil yaparsınız.

Anladıktan sonra, şimdi birazcık daha zihin yorlayıcı olabilecek ama temelde aynı örnekle devam edeceğiz:


![](https://blogger.googleusercontent.com/img/a/AVvXsEiQ9ZbRDSO8MC0cP8crmNOmqIWBsk6VC0g_f5qrHYChl3ddETYUUAAehdNe6hBmnS3SaRm4FEEcEODKRDfnLaMHjfnqXrOnLSAyAfJjcH6OrCb-ilHQj8QqzIVtjHoGCcSxIgYCCj50wFM3u0wgOJATuJsIUzATf1MU6omw4mZNPCrAbFGM_rD_rzdLjljE=w426-h198)


Şöyle bir program yazmak istediğimizi düşünelim. Kullanıcının verdiği maksimum yıldız sayısı bilgisine göre yukarıdaki deseni çizdiriyor olsun. Örneğin maksimum yıldız sayısı 20 olursa, desenin tabanındaki yıldız sayısı 20 olmalı. Kodunu paylaşacağım fakat ilk olarak kendiniz denemek çabalamak isterseniz buyrun. Deneyip de yapamazsanız da canınızı sıkmayın. İlk defa karşılaşıp da şak diye yapan pek görmedim bunu, klasik bir örnektir yine.


![](https://blogger.googleusercontent.com/img/a/AVvXsEjO96qqoVqTlYbpUv5CIgI8fabbctNh7bqxlbyxBiGPTSyPMlCsCqvJIrXc6Mu1DTI7RPMTCTV2hFDTYKVXR811AqlSvEduo6KtQWjpMVLjSE11gh-1KjKtNyIuXCviBAi-HIE6dOAuaEKqbQ-TAeciEhHFRrs06kzXmeCuOkjA2LRXLPQGp5FxdV4iSBxp=w419-h439)


Şimdi burada hafiften kafanız yanabilir, tane tane anlatmaya çalışacağım.

8\. satırda maksimum yıldız sayısını aldık, sorun yok, basit iş.

Problemi düşündüğümüzde, aslında maksimum yıldız sayısının 7 olması demek, aynı zamanda bu desenin 7 katlı olacağı manasına geliyor. Çünkü her bir katta yıldız sayısı 1 artıyor.

1\. katta 1 tane yıldız yazdıracağız,

2\. katta 2 tane yıldız yazdıracağız,

3\. katta 3 tane yıldız yazdıracağız…

ve bunu kullanıcı kaç “kat sayısı” girdiyse o kadar devam ettireceğiz.

Şimdi bir önceki örnekle bunu bir arada düşünmeye çalışalım. i = 0 için j = 0, 1, 2 olabiliyordu. Sonrasında i = 1 için j yine 0, 1, 2 olabiliyordu.

7 kat çizdirmek istiyoruz, dolayısıyla 12. satırda i değerini maksimum yıldız sayısına ulaşana dek arttıracağız. Fakat tek başına 12. satırdaki bu for döngüsü yeterli olmayacak, çünkü öyle yaparsak şöyle bir sonuç elde ederiz:


![](https://blogger.googleusercontent.com/img/a/AVvXsEhJaRV7xA6PQ-edCFA8DN4TasuP2wIMMK5RCXT-DI2xlgDOjjwdvd_xmunE0Q6EjpNZ561ObSwDmCpR3M2Mwi3WivH51mlOEEgI95jzoc7MajsljqdCNxQTeBQGv4lrFCoZDvYEcBC3isA0j_EfF_-hvtPITiR482EMKN2sXiD0bs3N-bIGxJJ8tRNU5FGp=w408-h482)

Görüldüğü üzere her katta 1 yıldız var, ki beklenen de buydu zaten. Bizim istediğimiz, her katta, o katın sayısı kadar yıldız yazdırmak.

Burada “kaçıncı katta” olduğumuzun kontrolünü i değeri yapacak. 13. satır da yine kritik, dikkatlice inceleyin. j’yi de 1’den başlatıyoruz fakat bu kez onu değeri i’ye ulaşana kadar arttırıyoruz. Bu durumda i ve j değerleri şu şekilde oluyor:

i = 1 için, j = 1

i = 2 için, j = 1, 2

i = 3 için, j = 1, 2, 3

i = 4 için, j = 1, 2, 3, 4

…

İçteki döngü her çalıştığında 14. satırdaki printf çalışıyor ve bir yıldız daha yazdırılıyor. Görüldüğü üzere her yeni katta i değeri büyüdüğü için j değerinin sınırı da genişleyecek ve her adımda bir tane fazla yıldız bastıracak.

Burada geriye kalan tek şey 16. satırdaki printf’i anlamak. Burada \n eklememizin sebebi yeni kata geçtiğimizi göstermek için. Yoksa yıldızların tamamı yan yana printlenirdi. Ve bu \n’i 14. satırdaki printf’te kullanmış olsak bu kez de hiçbir yıldız yan yana gelemezdi, her bir yıldız, ucunda bir yeni satır karakteriyle beraber var olurdu ve alt alta dizilirdi hepsi.

Bu örneği gerçekten anlayabilirseniz “tamam lan cidden oldu oturdu şu an” diyebilirseniz harika diyebilirim. Dediğim gibi özellikle de ilk defa karşılaşıyorsanız kafada canlandırması gerçekten çok zor olabilir, kendinizi salak gibi hissedebilirsiniz. Herkesin başına gelen şeyler, alışırsınız merak etmeyin. Fakat bu örneği anlamanız birçok şeyi kavramanıza da yardımcı olacak, bu açıdan önemli. Her zaman olduğu gibi, tüm bu yazılanları tekrardan düşünerek kodu sıfırdan kendiniz yazmayı da deneyin, daha iyi anlayabilirsiniz. Kodun tamamını tek seferde yazıp çalıştırmak yerine parça parça yazıp çalıştırıp durdurup biraz daha yazarak devam da edebilirsiniz, anlamakta yardımı dokunabilir.

 

Böylelikle konu olarak döngüleri burada noktalıyoruz. Şimdi örnek birkaç soru yazayım. Bu sorulardan en az 2 tanesini çözmeniz çok güzel olur. 4 tane çözerseniz süper olur. Tamamını çözerseniz muhteşem olur:

1\) Kullanıcı tarafından girilecek olan 10 sayının ortalamasını bulan program (her sayı için ayrı değişken oluşturulmamalı, sayılar döngü içerisinde alınmalı).

2\) Kullanıcı -1 girene kadar girilen tüm sayıların ortalamasını bulan program, sayı adedi sınırı yok.

3\) Alfabedeki büyük harfleri döngüyle yazan program. İpucu: Casting kullanmanız gerekiyor. ASCII tablosu hakkında bilginiz yoksa onu da araştırabilirsiniz.

4\) Kullanıcının girdiği maksimum yıldız sayısına göre aşağıdaki deseni oluşturacak olan program:



![](https://blogger.googleusercontent.com/img/a/AVvXsEi3EwiZ8CqD5r52xgj2VN1Io3G41DlDtQ0cujZwTqv9NSPQz9P1UusE5r9bOV-xpQNaQRqm0SghPXFAAfN9lLxlg9gGR4jrqKtxnGn-hMpumfSEVlx_rjTYhYUyWYnCgol8mxVHkz_XhxMcjZ5D5M7XR4nzw152WkyeDNScnCKSBkBzS2Kfky4kiKM1b4A-)


5\) Kullanıcının girdiği maksimum yıldız sayısına göre aşağıdaki deseni oluşturacak olan program:


![](https://blogger.googleusercontent.com/img/a/AVvXsEh3HLjD5pNk4TOWcnYUy9Br3Lcklpo5kfKehqI_AdX2cquThuq5-LsgP90Ozlkish7eZ2Mva0rXAgVCNsQFoF1U9BurVvhelgtV3pMWOf_mmB9K3QSnPCFBaZuCvYn_kIzKXyrbLzfejBQDW_MG13dhaj4ToGfUknSe6nfpX13ce4atrm67ivdNlomr8nEp)


6\) Kullanıcının girdiği sayının asal olup olmadığının kontrolünü yapan program.

7\) Kullanıcının girdiği sayıya kadar olan Fibonacci dizisini yazdıran program (Fibonacci dizisinin ne olduğuna bakabilirsiniz).

Örnek çıktı:


![](https://blogger.googleusercontent.com/img/a/AVvXsEjoP-5r6qX8L-WP9huYWzlri3Pt4E3O1p_JBwZvqAL9Ne97WZK77A4_C1xyoefLzs7s7HqOWZFM4R_WopjL3nWPNhQfOyO9vEH32e6newx_nAiOqAxHcCXAR-XSR-e4ZImUTFfG5_WIwLx1f7juuPddX2c9nA-0E6x4hxM9izzyi7QboynELSiY5LSHskxM=w597-h75)


## Fonksiyonlar

Fonksiyonlar, özel olarak belirli bir işi gerçekleştirmek amacıyla yazılan yapılardır. İdeal olarak her fonksiyonun bir işi gerçekleştirmesi beklenir.

Aslında fonksiyonlara o kadar yabancı da değiliz. Örneğin printf ve scanf sıklıkla kullandığımız bazı fonksiyonlardı. Ayrıca bu zamana kadarki kodlarımızı da hep main fonksiyonu içerisinde yazdırdık. Fakat istersek başka fonksiyonlar da tanımlayabiliriz. Bu kısımda ayrıca “return” kelimesinin ne olduğunu da anlayacağız.

Bir fonksiyonun yapısı şu şekildedir:

 

return-değerinin-veri-türü  fonksiyon-adı  (parametreler)

{

fonksiyona ait kod bloğu

…

return değer (return olmayan durumlar da olabilir)

}

 

Kullanıcının girdiği sayının tek mi çift mi olduğunu bulan bir fonksiyon örneğiyle başlayalım:

![](https://blogger.googleusercontent.com/img/a/AVvXsEiUNl0vfCB4e6neNKyOMByWm_qEYrGmKAtDFWBboa4PTEkgcRldHFP9hWbSqxOZxq6wZIwHYx3sy9_d3_kqqXR0RgVJ8tjHHmhdTladJeCMe5CspTe697fxbAVYUbnFQ_i0uacqWojkhRGmiwpOGRGcSf98Wrmk9hFHyxXElAcHa68HjK3s-PFaijSv25eZ=w533-h455)

3, 4 ve 5. satırlarda girilen sayının tek ya da çift olduğunu bulan fonksiyonu görüyoruz.

10\. satırdan başlayalım, sayi değişkenini tanımladık.

12\. satırda kullanıcı kontrol edilecek sayıyı girdi.

Bir sayının tek ya da çift olduğunu söyleyebilmek için, bu sayının 2 ile bölümünden kalanının ne olduğuna bakmamız gerekir. Kalan değeri 0’sa sayı çift, 1’se sayı tektir. Dolayısıyla bize gerekli olan şey “sayi % 2” işleminin sonucudur.

14\. satıra geldiğimizde bir if ifadesi görüyoruz. Sonrasında bu if ifadesinin içinde fonksiyonu çağırıyoruz: “tek_cift_bul(sayi)”

Örneğin kullanıcının “sayi” değişkenine 5 girdiğini varsayalım. O zaman 14. satırda yazılan şey şu olacaktır:

if(tek_cift_bul(5) == 1) …

İşte bu noktada devreye “return” kelimesi giriyor. 5 değerini fonksiyona gönderdik, fonksiyon da bize 5 % 2 değerini “return etti”, yani, bize gönderdi. 5 % 2’nin değeri ne? 1. Dolayısıyla 14. satır şuna dönüşmüş oldu:

if(1 == 1) …

Peki “1” sayısı 1’e eşit mi? Evet. O zaman çıktımız 15. satırdaki gibi olacaktır.

Çok karışık bir şey değil, burada okumaya devam etmeden önce kendiniz hemen yazıp görürseniz daha kafanıza oturabilir.

Kısacası, return kelimesi bize fonksiyondan almak istediğimiz değeri gönderir. almak istediğimiz değer bir tam sayı değeri olduğu için de, fonksiyonun tipi “int”tir. Fonksiyonlardan gelen bu değerleri pek tabii değişkenler içinde saklayabiliriz de. Örneğin,

int kalan = tek_cift_bul(sayi);

şeklinde bir satır yazsaydık, o halde “kalan” değişkeninin değeri yukarıdaki örneğe göre 1 olmuş olacaktı.

Yukarıdaki fonksiyonu daha farklı şekilde de yazabiliriz – ve her fonksiyon bir değer returnlüyor olmak zorunda da değil:

![](https://blogger.googleusercontent.com/img/a/AVvXsEh1Fqy4OehquwkiXskP0Aby85ghqcVhnRJOtcnCpXMdozLcKabwEomaMf6rl162MOSWNVRnBOIRV5x0qI8x216iLmCI3Z7Edez9L-uePKKBteeNk2PWm08rql6zUudg3wHhHx0ORU1iODR8mVDvDUfbXiYRnOIMYE4kRDeX-l1rVEh4i-9IUGZDAFstEZfg=w529-h425)

Bir değer returnlemesini istemediğimiz fonksiyonların tipini “void” olarak belirleriz, yani, “boşluk/hiçlik” olarak. Mantıken.

Burada bir not olarak, 3. satırda fonksiyonun kabul ettiği “int sayi” değişkenine “parametre” diyoruz, fonksiyonun parametresi.

18\. satırda fonksiyonu çağırdığımızda içine verdiğimiz değişkene de “argüman” (argument) diyoruz. Bu örnekte parametrenin ve argümanın değişken isimleri aynı fakat bu böyle olmak zorunda değil. Şu şekilde yazsaydık da kod sorunsuz çalışırdı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEi9x-VMmdU2mqDLd7_x_uxq9I_2rjWN1BG3pJmYbhoHU_N10z0VEBjf9vfd7w2BgSS3G6iK5DOy9ipb1ZuDRuGlR-wpn0fpTkLD2ZCKB1Wvu25yPHsm1FSJ9bXPT7inatv2d7YM6u1yN4xwZbaxtysjMNQOYbCWvaqA3z38JEEI683DjcrH8dq8LABGOkDe=w503-h409)


Çalışacak olmasının sebebi, “kontrol_edilecek_sayi” değişkenini “tek_cift_bul” fonksiyonuna gönderdiğimizde, fonksiyon kendisine gönderilen değeri “sayi” ismiyle kullanıyor olacak. Hangi isimde bir değişkeni bu fonksiyona gönderirsek gönderelim, fonksiyon kendisine gönderilen bu değere hep “sayi” diyecek. Dolayısıyla,

int sayi1, sayi2, sayi3, sayi4; şeklinde sayılar tanımlayıp, hepsinin girdisini kullanıcıdan aldıktan sonra hepsini de fonksiyona şu şekilde ayrı ayrı gönderebiliriz:

tek_cift_bul(sayi1);

tek_cift_bul(sayi2);

tek_cift_bul(sayi3);

tek_cift_bul(sayi4);

 

Gördüğünüz gibi fonksiyonlar meselesinde aslında çok da yeni bir şey öğrenmedik. Kodun yönetimi açısından çok önemli ve temel yapılar tabii orası ayrı ama bu konu için ayrı örnek soru yazmak istemiyorum. Daha önceki kısımlardaki örnek soruları ayrı fonksiyonlara bölerek yazmayı deneyebilirsiniz. Yine internette de zaten bir sürü örnek bulabilirsiniz. Dizilerle devam edelim.

 

 

## Diziler (Arrays)

Bir dizi, aynı isme ve aynı veri tipine sahip olmaları sebebiyle birbirleriyle ilişkileri/alakaları olan bir değişkenler grubudur diyebiliriz. Bu tanım çok anlaşılır olmamış olabilir, yine hemen örneğe geçelim.


![](https://blogger.googleusercontent.com/img/a/AVvXsEhtQQMz7tfAYFYCGSktUi3MEi8oN2XLpVYNlP5VqNXEk1UqB_luHao7_ajd_kDJPl1d-OGHgz6Fnvvh5HCGaqxfBXYnf7O_j9mZ_igXK3B6dAwFinxM37Vgp7k7YoSbOXVT17SiaZKt1GSzAgS_5cGgPNwygoZqEtVPvgoky0Ohy6CYv2vInypXn2U3OvcL=w559-h410)


6\. satırdan başlayalım. Bu satırda, bir dizinin tanımlanmasını görüyoruz.

Dizinin adı “sayılar”, köşeli parantez içerisine yazdığımız “5” değeriyse bu dizinin kaç adet elemanı bulunduğunu belirtiyor. Devamında da süslü parantez içerisinde bu 5 adet elemanın değerlerini giriyoruz. Böylelikle, her bir sayı için ayrı ayrı değişken tanımlamamıza gerek kalmıyor.

10\. satıra geldiğimizde bir for döngüsü görüyoruz. for döngüsüyle dizileri sıklıkla beraber görürüz. Şimdi burada dikkat etmemiz gereken bir nokta var.

Görüldüğü üzere, i döngü değişkeninin ilk değeri 0. Dolayısıyla, 11. satırdaki printf fonksiyonu ilk kullanıldığında şu şekilde yazılmış olacak:

printf(“%d, “, sayilar[0]);

Buradaki sayilar[0] ifadesindeki 0 değerine dizinin indeks değeri diyoruz. C dilinde indeks değerleri 0’dan başlar. Bu indeks değerlerini dizi içerisindeki sayılara erişebilmek için kullanırız. Örneğin sayilar[0] yazdığımızda, dizinin ilk elemanı olan “15” değerine ulaşırız. Ya da örneğin sayilar[2] yazdığımızda, dizinin 3. elemanına, “34” değerine ulaşırız.

Burada kafa karıştırabilecek olan kısım şu: 6. satırda diziyi tanımlarken sayilar[5] olarak tanımladık. Tanım kısmında girdiğimiz bu 5 değeri bize dizide kaç adet sayı olacağını söylüyor. Fakat sonrasında sayilar[5] yazarak dizinin 5. elemanına ulaşmaya çalışırsak hata yapmış oluruz. Çünkü dizinin 5. elemanı (dolayısıyla son elemanı) 5. indekste değil, 4. indekste olacaktır. Uzun lafın kısası, n elemanlı bir dizinin son indeks değeri n-1 olur.

11\. satır diyorduk. İşte bu şekilde indeks değerini kullanarak sayıyı elde ettikten sonra normal tamsayı yazdırıyor gibi sayıyı yazdırabiliriz. Çünkü “sayilar” dediğimiz şey zaten tamsayı değişkenlerinin bir araya gelmesiyle oluşturduğu bir yapı. Dolayısıyla, yazdıracağımız her bir değer de bir tamsayı. Bu yüzden %d kullanmalıyız.

Değerleri kullanıcıdan scanf’le almak istediğimizde de yine benzer şekilde alabiliriz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEieWGEF5-Up1Po3pgJ_hWUBVRblwy26sIIQFjyW00_6hxR-AuaHxN4RdMJwBxyGdUPQa87SIiw4k5LJH2QZZXmKU1y8FyRx-45LmfnpDMXeR_5HDiAixdA9MMMyWHUQLfBPXhoG7CdOR_ZiBtmRO9baS3mEnRE8Lc0rCr_KXN9zSYcEZRqXoxkvLbeLhy-a=w567-h328)


Dizi içerisindeki sayılar, hafıza içerisinde peş peşe saklanır. Normalde, farklı değişkenler belirlediğinizde bu değişkenlerin yerleri tamamen rastgele ve birbirlerinden alakasızdır fakat bir dizi içerisindeki tüm sayılar hafızada birbirinin peşi sıra gelir. Dolayısıyla sayılardan birine ulaşabiliyorsak diğerlerine de ulaşabiliriz.

Şimdi bu bilgiyi kullanarak farklı bir yöntemle sayı değerlerini kullanıcıdan nasıl alabiliriz ona bakalım:


![](https://blogger.googleusercontent.com/img/a/AVvXsEh5Ctrk_UQ7ouXjMxDrMq_u4DZ6zDfGwgACDOL9VBQti-idruoBEjCUxq_mC_ov8ZC3HysSWZwf27hZIVCCz0zu0P7rrK-UT9VRaOl4EGMS0e-uDrnuxUxou8DtjObjYsM7etw_HCfx5ohkh1Lc8GuTwppD4r_fDi5r_n0Ag50ZPyrm2mruigA7P06lojBq=w555-h341)


Doğrudan 11. satıra geçelim, öncesi zaten bildiğimiz gibi.

11\. satır ilk çalıştığında şu şekilde olacak:

scanf(“%d”, sayilar + 0);

Bir sonraki döngü adımında ise şu şekilde:

scanf(“%d”, sayilar + 1);

Ve sonrasında sayilar + 2, sayilar + 3, sayilar + 4 olarak devam edecek.

Şimdi, dizi içerisindeki değişkenlerin hafızada birbiri ardına sıralandığını söylemiştik. Dizinin ilk elemanının adresini, yani 0. indeksteki elemanın hafızadaki yerini aynı zamanda dizinin kendisinin hafızadaki başlangıç noktası gibi düşünebiliriz. 11. satır ilk defa çalıştığında da bu 0. indeksteki hafıza değerine kullanıcının girdiği değeri yazmış oluyoruz.

Bir sonraki adımda, dizinin 2. elemanını kullanıcıdan almak istediğimizde “sayilar + 1”e ihtiyacımız olacak. Bunu şu şekilde düşünebiliriz: “sayilar isimli dizinin başlangıç noktasından itibaren 1 adım ilerle ve oradaki hafızaya eriş”.

İlk adımda başlangıç noktasından itibaren “0 adım” ilerledik, ve kullanıcının verdiği değeri başlangıca, ilk değer olarak yazdık.

İkinci adımda başlangıç noktasından itibaren “1 adım” ilerledik, ve kullanıcının verdiği değeri dizinin ikinci değeri olarak yazdık.

Sonrasında da bu şekilde devam ediyor. Bu ikinci aldığım sayı alma yöntemini ben pek kullanmıyorum bunu daha çok hafızadaki durumu açıklamak için örnek olarak gösterdim. İndeksle çalışmaya göre biraz daha karışık geldiyse endişelenmeyin yani indeks de yeter.

Kısa bir not daha düşeyim, diziyi tanımladıktan sonra içerisine bir değer yerleştirmeden printlemeye kalkarsanız genelde “0” elde edersiniz fakat bu biraz da derleyiciye kalmış bir şey. Siz en iyisi ne yaptığınızdan emin olun ve değerleri belli olmayan dizileri printlemeye kalkmayın.

Diziler oldukça kullanışlı ve sık sık kullandığımız yapılardır. Ben ilk defa öğrenirken her yeri tonlarca değişkenle doldurmak zorunda olmadığımı görünce bayağı rahatlamıştım açıkçası. Belki size de iyi gelir. Kodlarını yazdıkça daha iyi oturtacağınız yapılar tabii bunlar, diğer hepsinde olduğu gibi. İki tane de örnek soru yazayım çözmeye çalışırsınız:

 

1\) Bir dizi içerisine kullanıcıdan girilen 10 adet sayının birbirleriyle toplam ve çarpım değerlerini yazdıran program.

2\) Bir dizi içerisindeki 10 adet sayının tek ve çift olanlarının değerlerini ayrı ayrı toplayıp yazdıran program.

Bu gördüğümüz  diziler tek boyutlu dizilerdi. Bir de bunların çok boyutlu olanları da var, bunları tıpkı iç içe döngüler gibi düşünebilirsiniz. Kısaca bir örnek üzerinden göstereyim ama çok detaya inmek de istemiyorum zamanla oturacak şeyler bunlar hep.

![](https://blogger.googleusercontent.com/img/a/AVvXsEhuBgaL33WMfv3xU4hkWeR9l8e72qZRHsqiYygPZp3q4AjZ1ySJAcV1LHvv0-hkzeB8adQ8Fn-f6W_rDRemIgACpIE0JK9HOgpwR7JmNIVlLM8vjNembM5ts1SlCTD5McKMPIKAH11Dx_SS3muU-rmfhxeJcWOQTiDHxkNy7j3bbmbPc2BBah0B_wLM9HDy=w466-h600)


İki boyutlu dizileri matrixler gibi düşünebiliriz. Yukarıda bir 2x2’lik, yani, iki boyutlu bir dizi örneği görüyoruz. Kodu inceleyip kendiniz yazdığınızda daha anlaşılır olacağını düşünüyorum.

Diziler sonsuz adet boyuta sahip olabilir. Fakat genelde çok çok büyük boyutlu dizilerle çalışmıyoruz. Bir ve iki boyutlu diziler genelde işlerimizi görür.

Dizi değerlerinin hafızada nasıl saklandığını bir tablo üzerinden örnek olarak şu şekilde görebiliriz (memory adressler arasındaki farklara dikkat edin):


![](https://blogger.googleusercontent.com/img/a/AVvXsEjFEF68fBovFaPmNTVsfk1cK4Fxy8-8tQ84OgWM0F3G0qsc9eNSifCbup3iWZF9LOpSz1fhLgqFn3T0Z0cLpmbIuO9YVFiJwPWxZkKhoxNb_fdFywmGO0Gl-BVKX99QToAf7lOmOFcZd-MVxblzIvoYCtchSf_U5pZPemNrPJDpQvo5loYqUMi9D4abgfvY=w506-h264)

## Dizgiler (Strings)

Türkçesi “dizgi” olsa da, ben anlatırken string olarak kullanacağım. Çünkü dizgi denildiğine pek rastlamazsınız. Stringler, bir dizi karakterden oluşan ve \0 şeklindeki bir null karakterle sonlandırılan yapılardır. Kodda yazarken string ifadeleri çift tırnak arasına alırız.

![](https://blogger.googleusercontent.com/img/a/AVvXsEjVRb6oXLbnf1-epa-G30cen1NCxz3mXPk671FBrj0gtl6iDfUZZbKcW8lDunVxst2Rs_z3J2Arz40qt9pYimGapX4E22tuBznNMl3YyI8uLHWpM6QeC1HSgn5in1T8zg90Ud0GH8vhJJ93Z-B57jkuP63b8kpRVUMEceCvIdcrAO2IpP0Ak-SP-Cy0HoA9)


Yukarıda görüldüğü üzere, char tipinde bir dizi, aslında bir stringi oluşturmuştur.

null karakterini gözümüzle görmüyoruz fakat yukarıdaki string hafızada şu şekilde saklanır:


![](https://blogger.googleusercontent.com/img/a/AVvXsEhIn6czi_9FlEikjyyIlyx-QdAjwdU5M4rA_2NLfudYiyafzqYkiiUocVueBYTS3PyPD103PTNlsgxzAUxU3Mwaay84P8m_G97dKuVrxkU6YMe05o9YxKbToDJgEJhoVC9sIlbsS3At6e3tQwmPQCOfe9Ccs9qApySYnLp8gZblGnR6WaobWob1Xd_RZeS5=w432-h54)

Şu şekilde bir string tanımlaması yapabiliriz:


![](https://blogger.googleusercontent.com/img/a/AVvXsEjOgcQToMasyWhWwEOCnl6IgbPWO-LdSXIXNNz0YAHGtmWpjMGbP4s-VcA0vfzBBI-MkidEJr1Hvi84Pdn6mk5QG4cQOzQ9YBEdRlR_Wk-lAbsBgNyFvk3KUTJfIudQKIvTC3xeD72PX1uiSX79AB_r-_4ChmXBRZ1voOIzTf8zGkcQsdfd6mySePtNy0S7=w268-h80)

Bu string değeri içerisinde en fazla 4 adet karakter bulunabilir. Çünkü, tanımlanan string ne olursa olsun son karakter her zaman \0 için ayrılmıştır. Dolayısıyla, char s[5] = “abcde”; yazmak doğru olmayacaktır.

 

Stringleri tanımladıktan sonra, şu şekilde atamalar gerçekleştiremeyiz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEgbgohBFYKwsA5YEkJfBeT6iSQttmIWCntiXfZE-ZbjhHdj7fdoR4i1tSf78w45l3UPV66A-DVFcmNmm3Ygi99cHVja-dBypRs9zPbc5jw-AFbBi-EagWaIX1GpUz4UBE2KsKbavQpx2_kLI6IhzOiFTjtzXHEhoc8ytbnJzNvrNmyiRSElZ_bHluPZ_4Xd)


scanf kullanarak string okumak için şöyle yapabiliriz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEjAOipiru_iYObT3Hg7WeVr9Dd0Fr5IHYudbX63Y1mASSB8XvSmuYmROmv4nPGKMZv32O5lKk8ev1vd4xOMNuMNUBvKy_aDvz76wczOtY-723TE6VALYrhL-CtMc8WnLT5xaMdPjKjrrw6cS8d8N5hIEfJt7tTNjKc0WkFWxwrZqqJf5oZcoOCw0y3P72Rg=w379-h196)

Burada scanf’te dikkat etmemiz gereken şey, string değerleri okurken ampersand (&) kullanmıyoruz. Aynı zamanda yukarıdaki kod parçasını çalıştırıp “Michael Jackson” şeklinde ad soyad girmeyi denersek outputta yalnızca “Michael”ı elde ederiz. Bunun sebebi verdiğimiz inputtaki boşluk karakteridir.

Stringleri scanfle okuyup printfle yazdırmak yerine farklı iki fonksiyon daha kullanabiliriz. Aşağıdaki kodda fgets fonksiyonu kullanıcıdan girdiyi alacak, puts fonksiyonu ise outputu verecektir. Aynı zamanda boşluk karakteriyle alakalı bir sorun da çıkarmıyorlar.

![](https://blogger.googleusercontent.com/img/a/AVvXsEg_G05Kqt2Sfua-jScbP9J34XfRWC794V-qx-D-ErbgPuIUSTGJwCvA15cWs_szzvTHe9e1HvP2GZAP45stTVlfprD1RJjHU1kucUIk8VLK799bEnTQNeXjiOhjespEOeHu4oVjGNZERM_0TWjimbD9YGYRN7rjAV7ytPosXkbDh5BbWXywwjKZt5-dnrYI=w423-h207)

Bu arada, sizeof(name) ifadesinin değeri 30 olacaktır. sizeof fonksiyonu içerisine gönderilen değerin kaç byte yer tuttuğunu bize söyler. “name” stringi için de 30 bytelık yer ayrılmıştır (her bir karakterin bir byte olduğunu hatırlayalım). Kullanıcının gireceği string değeri 10 karakterlik bir değer olsa bile ayrılmış alanın geriye kalan kullanılmayan kısmı hala ayrılmış olarak kalmaya devam eder. Yani, her ne girilirse girilsin bu string değeri 30 bytelık alan kaplayacaktır.

Bu arada, stringlere özgü kullanabileceğiniz çeşitli fonksiyonlar var. Bunları kendiniz araştırabilirsiniz.

Örnekler:

1\) Kullanıcının girdiği bir string ve bir karakter için, girilen karakterin string içerisinde kaç kere geçtiğini bulan program. İpucu: Bir stringi döngüyle şu şekilde gezebilirsiniz:

![](https://blogger.googleusercontent.com/img/a/AVvXsEiSMRGxbmrzuy69eM7bnUGHQp8_MolcSkeqTijnVig2c16aRtCKZePXVrC1uxCEZOuXdFMWgFUBf2SxNJSpMf-Zj9_L7w2sNsMWkT00L0nTr46G34pJPGksTYRFttUYcAMnl3Ssv0-jvFO7nZ6bQyhv6_pny_mH_nctnVP0B-dTpclyeAtk6Udj-o8UFRJF)


2\) Girilen bir stringin uzunluğunu bulan program.

3\) Girilen stringi tersten yazdıran program.

4\) s2 değerini s1 değerinin ucuna ekleyen program:

![](https://blogger.googleusercontent.com/img/a/AVvXsEiLmmkOyGWnSvDXvRor1J9g7M7qGSxOlSsBvRyCHcK5L1F3lLsut8vsBJlWhrDUh_bJLW_pj21eorc1E4t2No2KoFHhNOlui_tzkJeqE-eREFikLez0_Nkov-2x6mp2L_AfUqLe-KEIXDjEUoil4-689gc_Ef-ThezJQ1Fd7S6zPFPiEL_Jw2udh7TmDZ5W=w578-h33)


Output şu şekilde olmalı:

![](https://blogger.googleusercontent.com/img/a/AVvXsEhre9DD1dsZxKMhIiiJsKR4JqTmd7arwWSKzdiOVAvW2YQeDw2kLJOoGsnNqMpeDUR8E1ymglhOm0VTE2YMUhCYP_3tsWOKAt3WkwwuEsLzmPVHu0GXv_lqK0OqPra1dIjZTEc2UI1hmKhebO0oqP99-UdEZrnBemmLdxIFtuSF3xPK00uDh0BLsknk9BJB)


Stringlerle beraber yazıyı burada noktalamak istiyorum, zaten yeteri kadar uzun oldu. Bu arada recursive fonksiyonlar, structlar, pointerlar gibi bazı yine temel sayılabilecek (temelden 1-2 seviye daha yukarıda) konuları daha da kafa karıştırmamak adına atladım. Recursive fonksiyonlar ve pointerları ben henüz çalışma hayatım boyunca kullanmadım. Structlar yerine de artık classları kullanıyoruz ama zaten o da artık nesne yönelimli programlamanın alanına giriyor, endişe etmenize gerek yok şimdilik. Ben elimden geldiğince temel olabilecek konuları çok yormadan anlatmaya çalıştım ama başta da dediğim gibi ne her şeyi anlatmam, ne de anlattığım her şeyi hemen anlamanız ve oturtmanız mümkün. Ve yine dediğim gibi bu işin izlenilecek tek dümdüz bir yolu yok, puzzle yapar gibi ilerlemeniz gerekiyor. Kendinizi sınırlamayın, araştırın, öğrenin.
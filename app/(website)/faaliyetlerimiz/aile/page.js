import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import FaaliyetlerCommon from "../../../../components/faaliyetlerCommon";


export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Aile";
  return <FaaliyetlerCommon title={title} subsectionData={ailelerSectionsData}/>;
}

const ailelerSectionsData = [
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "AİLE ZARAFET",
    paragraph: "Zarafet atölyesi, annelerin kendilerini zarif ve özgüvenli hissetmelerine yönelik benzersiz bir deneyim sunar. Bu atölyeler; beden dili, duruş, zarif hareketler ve iletişim konularında eğitim içerir. İslami perspektifle Peygamberimizi model alarak toplumsal uyumluluğu ve toplumsal ilişkileri güçlendirmek ve kaliteli bireyler yetiştirmektir. Katılımcılar, profesyonel eğitmenler eşliğinde günlük yaşantıda zarafetlerini arttırmak için pratik bilgiler edinirler. Eğlenceli etkinlikler ve gerçek hayattan örneklerle desteklenen atölyelerde, anneler özgüvenlerini arttırmanın yanı sıra sosyal durumlarda daha rahat ve zarif olma becerilerini geliştirirler."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "AİLE KÜLTÜR GEZİSİ",
    paragraph: "Kültür gezileri, annelere hem dinlenme hem de öğrenme fırsatı sunan benzersiz bir deneyimdir. Bu gezilerde anneler; sanat, tarih, ve kültürel zenginlikleri keşfederken ayrıca islami kültürü anlamak için yapılan kültür gezileri, tarihi islam eserlerini ziyaret etmek, islam mimarisini incelemek ve islam sanatını keşfetmek gibi aktiviteler içerir. Bu geziler, islam tarihini, değerlerini ve toplumsal dinamiklerini daha derinlemesine anlama fırsatı sunar. Bu tür aktiviteler, anneler arasında sosyal bağları güçlendirecek ve keyifli bir öğrenme ortamı oluşturacaktır."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "ANNE VE ÇOCUK",
    paragraph: "Anne ve çocuk bağını güçlendirmek amacıyla düzenlenen atölyeler, eşsiz bir deneyim sunar. Bu atölyeler, annelerle çocukları arasındaki duygusal bağı pekiştirmenin yanı sıra, birlikte geçirilen kaliteli zamanın değerini vurgular. Bu özel atölyelerde, anne ve çocuk birlikte faydalı etkinliklere katılır. El sanatları, oyunlar, hikâye anlatımı gibi etkinliklerle anne ve çocuk arasında güçlü bir etkileşim sağlanır. Aynı zamanda, paylaşılan deneyimler sayesinde anlayış ve empati gelişir. Bağ üzerine odaklanan atölyeler, annelerin çocuklarıyla daha derinlemesine iletişim kurmalarına olanak tanır. Bu deneyim, aile bağlarını güçlendirmenin yanı sıra, çocukların duygusal gelişimine olumlu bir katkı sağlar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "SANAT VE MUSİKİ",
    paragraph: "İslami Sanat, Allah'a olan derin sevgiyi ve ibadeti ifade eden bir manevi zenginliği yansıtarak bir köprü oluşturur. Örneğin; minyatür sanatı, detaylı ve incelikli tasarımlarıyla Kur'an ayetlerini, Hilye-i Saadet ve İslam kültürünü resmeder. Tezhip sanatı, kâğıt veya kitap kenarlarına yapılan zarif desenlerle İslami kitapları süsleyerek manevi bir atmosfer oluşturur. Bu sanatların aracılığıyla İslam'ın derin maneviyatını ve estetik anlayışını keşfetmeye adanmış bir alan sunar. Hat sanatı, İslami sanat geleneğinde öne çıkan bir diğer manevi ifade biçimidir. Bu atölye vasıtasıyla güzel yazı sanatı olarak bilinen hat; Arapça yazı karakterlerini estetik bir şekilde düzenleyerek, Kur'an ayetlerini veya hadisleri anlamlı bir şekilde sunar. Hat sanatı, yazının kendisiyle birlikte ruhsal bir derinlik ve estetik bir güzellik sunarak, izleyiciyi manevi bir huzura yönlendirir. Tasavvuf Musikisi, insanın duygu ve düşüncelerini melodiler, ritimler ve sesler yoluyla ifade etmesini sağlayan sanat dalıdır. Tasavvuf musikisi, Tasavvufi düşünce ve duyguları ifade eden, manevi deneyimlere odaklanan bir müzik türüdür. Bu müzik, İslam Tasavvuf geleneğinin ruhsal ve mistik boyutlarını ifade etmek amacıyla kullanılır. Bu atölyede, enstrümanlar arasında; ney, bendir ve kanun gibi eğitimler verilecektir."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "MANEVİ EĞİTİM ATÖLYESİ",
    paragraph: "Bu atölye, katılımcıları İslami ve Kurani hakikatler ışığında manevi bir yolculuğa çıkararak ruhsal derinlik kazanmaya ve kişisel gelişimlerine islamî değerlerle rehberlik etmeyi amaçlar. Bu atölye ile İslamın manevi zenginlikleri olan; Kuran-ı Kerim, tefsir, ahlak, hanım sahabeler ve siyer dersleri ile İslamın değerlerini ve manevi deneyimini derinleştirmek isteyen bireyler için etkili ve interaktif bir ortam sunar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "İLMİ ÇALIŞMALAR VE YAZIM ATÖLYESİ",
    paragraph: "Bu atölye, katılımcılara manevi ilmi ve bilimsel araştırma yapma ve bu araştırmaları etkili bir şekilde yazma konusunda beceriler kazandırmayı hedefler."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "KENDİNİ TANIMA ATÖLYESİ",
    paragraph: "Kişisel gelişim ve farkındalık üzerine odaklanan etkinliklerdir. Bu atölyelere katılarak kendi değerlerinizi, güçlü yönlerinizi ve hedeflerinizi daha iyi gözlemleyebilirsiniz. Öz farkındalık çalışmaları, duygusal zeka becerileri, etkili iletişim ve manevi rehberlik konularında size yol gösterecek çalışmalar yürütüyoruz. Grup içinde, rahat bir atmosferde deneyim paylaşımı ve interaktif uygulamalarla samimi bir öğrenme ortamı sunar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "İLETİŞİM BECERİLERİ",
    paragraph: "İletişim becerileri, düşünceleri etkili bir şekilde ifade etme, karşılıklı anlama, duyguları paylaşma ve etkileşimde bulunma yeteneklerini içerir. Bu beceriler, bireyler arasındaki ilişkileri güçlendirmeye ve anlamaya katkı sağlar. Bu atölyede sözlü, yazılı ve vücut dili gibi farklı iletişim kanallarını etkili bir biçimde kullanabilmeyi öğrenebilir."
  }
];
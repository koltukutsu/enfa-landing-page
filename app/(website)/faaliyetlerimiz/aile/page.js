import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import FaaliyetlerCommon from "../../../../components/faaliyetlerCommon";


export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Aile";
  return <FaaliyetlerCommon title={title} subsectionData={ailelerSectionsData}/>;
}

const ailelerSectionsData =  [
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "ANNE VE ÇOCUK ATÖLYESİ",
    paragraph: "Anne ve çocuk bağını güçlendirmek amacıyla düzenlenen atölyeler, eşsiz bir deneyim sunar. Bu atölyeler, annelerle çocukları arasındaki duygusal bağı pekiştirmenin yanı sıra, birlikte geçirilen kaliteli zamanın değerini vurgular. Anne ve çocuk birlikte faydalı etkinliklere katılır. El sanatları, oyunlar, hikâye anlatımı gibi etkinliklerle anne ve çocuk arasında güçlü bir etkileşim sağlanır. Aynı zamanda, paylaşılan deneyimler sayesinde anlayış ve empati gelişir. Bu atölyeler, annelerin çocuklarıyla daha derinlemesine iletişim kurmalarına olanak tanır ve çocukların duygusal gelişimine olumlu bir katkı sağlar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "MANEVİ EĞİTİM ATÖLYESİ",
    paragraph: "Bu atölye, katılımcıları İslami ve Kurani hakikatler ışığında manevi bir yolculuğa çıkararak ruhsal derinlik kazanmaya ve kişisel gelişimlerine islamî değerlerle rehberlik etmeyi amaçlar. İslamın manevi zenginlikleri olan Kuran-ı Kerim, tefsir, ahlak, hanım sahabeler ve siyer dersleri ile İslamın değerlerini ve manevi deneyimini derinleştirmek isteyen bireyler için etkileşime dayalı bir ortam sunar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "KENDİNİ TANIMA ATÖLYESİ",
    paragraph: "Kişisel gelişim ve farkındalık üzerine odaklanan etkinliklerdir. Bu atölyelere katılarak kendi değerlerinizi, güçlü yönlerinizi ve hedeflerinizi daha iyi gözlemleyebilirsiniz. Öz farkındalık çalışmaları, duygusal zeka becerileri, etkili iletişim ve manevi rehberlik konularında size yol gösterecek çalışmalar yapılmaktadır. Grup içinde, rahat bir atmosferde deneyim paylaşımı ve interaktif uygulamalarla samimi bir öğrenme ortamı sunar."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "İLMİ ÇALIŞMALAR VE YAZIM ATÖLYESİ",
    paragraph: "Bu atölye, katılımcılara manevi ilmi ve bilimsel araştırmalar yapma ve bu araştırmaları etkili bir şekilde yazma konusunda beceriler kazandırmayı hedefler."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "SANAT VE MUSİKİ",
    paragraph: "İslami Sanat, Allah'a olan derin sevgiyi ve ibadeti ifade eden manevi zenginliği yansıtarak bir köprü oluşturur. “Minyatür, Hilye-i Şerif, Tezhip ve Hat sanatı” bu sanatların aracılığı ile İslamın derin maneviyatını ve estetik anlayışını keşfetmeye dair bir alan sunar. Tasavvuf Musikisi, insanın duygu ve düşüncelerini melodiler, ritimler ve sesler yoluyla ifade etmesini sağlayan sanat dalıdır. Bu müzik, İslam Tasavvuf geleneğinin ruhsal ve mistik boyutlarını ifade etmek amacıyla kullanılır. Bu atölyede, enstrümanlar arasında; ney, bendir ve kanun gibi eğitimler verilecektir."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "ZARAFET ATÖLYESİ",
    paragraph: "Zarafet atölyesi, annelerin kendilerini zarif ve özgüvenli hissetmelerine yönelik benzersiz bir deneyim sunar. Bu atölyeler; beden dili, duruş, zarif hareketler ve iletişim konularında eğitim içerir. İslami perspektifle Peygamberimizi model alarak toplumsal uyumluluğu ve toplumsal ilişkileri güçlendirmek ve kaliteli bireyler yetiştirmektir. Katılımcılar, profesyonel eğitmenler eşliğinde günlük yaşantıda zarafetlerini arttırmak için pratik bilgiler edinirler. Eğlenceli etkinlikler ve gerçek hayattan örneklerle desteklenen atölyelerde, anneler özgüvenlerini arttırmanın yanı sıra sosyal ortamlarda daha rahat ve zarif olma becerilerini geliştirirler."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "KÜLTÜR GEZİLERİ",
    paragraph: "Kültür gezileri, annelere hem dinlenme hem de öğrenme fırsatı sunan benzersiz bir deneyimdir. Bu gezilerde anneler; sanat, tarih, ve kültürel zenginlikleri keşfederken ayrıca islami kültürü anlamak için yapılan kültür gezileri, tarihi islam eserlerini ziyaret etmek, islam mimarisini incelemek ve islam sanatını keşfetmek gibi aktiviteler içerir. Bu geziler, islam tarihini, değerlerini ve toplumsal dinamiklerini daha derinlemesine anlama fırsatı sunar. Bu tür aktiviteler, anneler arasında sosyal bağları güçlendirecek ve keyifli bir öğrenme ortamı oluşturacaktır."
  }
];
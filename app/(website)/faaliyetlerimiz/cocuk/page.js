import { getAllAuthors, getSettings } from "@/lib/sanity/client";
// import Cocuk from "./cocuk";
import FaaliyetlerCommon from "../../../../components/faaliyetlerCommon";

const cocuklarSectionsData = [
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "MANEVİ DEĞERLER ATÖLYESİ",
    paragraph: "Manevi değerler atölyesi, çocuklara karakter gelişimini destekleyen ahlaki ve dini etkinlikler sunan bir ortamdır. Bu atölyeler, manevi değerleri öğrenmeye yönelik, eğlenceli aktiviteler içerir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "SANAT VE MUSİKİ ATÖLYESİ",
    paragraph: "Çocuklar için sanat atölyesi, üretkenlik becerilerini geliştirmelerine ve ifade becerilerini keşfetmelerine olanak sağlayan bir ortamdır. Bu atölyeler, çeşitli sanat teknikleriyle tanışma, özgün eserler oluşturma ve duygusal ifadeyi sanat aracılığıyla paylaşma konularında çocukları destekler. Çocukları duygusal bir deneyime davet eden ve müziği manevi bir bağlamda kullanarak, kişisel gelişimi destekleyen bir etkinlik alanıdır. Bu atölyede, enstrümanlar arasında; ney, bendir ve kanun gibi eğitimler verilecektir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "YAŞAM BECERİLERİ",
    paragraph: "Çocukların günlük yaşamlarında başarılı olabilmek ve kişisel gelişimlerini destekleyebilmek için, ihtiyaç duydukları pratik yetenekleri ve bilgileri kapsar. Bu beceriler çocuğun bağımsızlık, özgüven ve genel yaşam kalitesini artırmaya yöneliktir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "DUYGU VE DRAMA ATÖLYESİ",
    paragraph: "Duygu ve drama atölyeleri, çocuklara hissetmeyi, anlamayı ve paylaşmayı öğreten bir sanat formudur. Atölye deneyimleri, çocukların duygusal derinliklerini keşfetmelerini ve kendi hikayelerini oluşturmalarını sağlar. Bu atölyeler, çocukların empati, dayanışma ve manevi güçlerini bulmalarına katkıda bulunur."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "TEKNOLOJİ VE BİLİM ATÖLYESİ",
    paragraph: "Çocuklar için bilim ve teknoloji, meraklarını canlı tutarak, keşif yapma arzusunu teşvik eden bir öğrenme sürecidir. Bu süreç, çocuklara gözlem yapma, deneyler gerçekleştirme ve teknolojik araçları anlama fırsatı sunarak bilimsel düşünme ve problem çözme yeteneklerini geliştirmelerine yardımcı olur. Aynı zamanda, eğlenceli ve etkileşimli bir ortamda, bilim ve teknolojiyi anlamanın keyfini çocuklara sunar."
  }
];

export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Çocuk"
  return <FaaliyetlerCommon title = {title} subsectionData={cocuklarSectionsData}/>;
}

// export const revalidate = 60;

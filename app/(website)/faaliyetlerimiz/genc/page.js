// import Genc from "./genc";
import FaaliyetlerCommon from "../../../../components/faaliyetlerCommon";
const genclerSectionsData = [
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "MANEVİ EĞİTİM",
    paragraph: "Gençlerle manevi eğitim, genç bireylerin değerlerini, ahlaki prensiplerini ve ruhsal gelişimlerini desteklemeyi amaçlayan bir öğrenme sürecidir. Modernitenin dayattığı yaşam tarzıyla manevi anlamda fakirlik yaşayan gençlerimizin manevi güçlerini keşfetmelerine, empati geliştirmelerine, toplumsal sorumluluk bilinci kazanmalarına, sağlıklı ve mutlu bir yaşam için anlam arayışlarına rehberlik eder."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "KENDİNİ TANIMA ATÖLYELERİ",
    paragraph: "Gençlerle kendini tanıma atölyeleri, genç bireylere popüler dayatmalarına karşın kendi bilen Rabbini bilir ilkesiyle değerlerini, güçlü yönlerini ve zayıf yönlerini anlama fırsatı sunar. Bu atölyeler gençlere kişisel gelişimlerine katkıda bulunmak, hedefler belirlemek, özsaygıyı artırmak ve duygusal zeka becerilerini geliştirmek için araçlar sağlar. Gençlerin kimliklerini anlamalarına ve kendi potansiyellerini keşfetmelerine yardımcı olabilir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "İLMİ ÇALIŞMALAR",
    paragraph: "Gençlerle ilmi çalışmalar, bilgiye ulaşımın fazlasıyla kolay olduğu çağımızda duygusal zekasının hayatta ne denli mutluluk getirdiği bilinci ile insanın anlam arayışını destekliyoruz. Nitelikli, farkındalıklı çalışma, teşvikle beraber sorgulama ve eleştirel düşünme becerileri kazandırmak amacıyla yapılan etkinlikleri içerir. Bu tür çalışmalar, gençlerin meraklarını artırarak öğrenmeye olan ilgilerini destekler."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "ZARAFET ATÖLYELERİ",
    paragraph: "Gençlerle zarafet atölyesi, genç bireylere sosyal beceriler, davranış kuralları ve olumlu iletişim becerileri konusunda rehberlik sağlamayı amaçlayan etkileşimli bir öğrenme etkinliğidir. Bu atölyeler, gençlerin kişisel gelişimlerine katkıda bulunarak toplum içinde daha etkili ve zarif bireyler olmalarına yardımcı olabilir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "SANAT VE MUSİKİ",
    paragraph: "İslami Sanat, Allah'a olan derin sevgiyi ve ibadeti ifade eden manevi zenginliği yansıtarak bir köprü oluşturur. “Minyatür, Hilye-i Şerif, Tezhip ve Hat sanatı” bu sanatların aracılığı ile İslamın derin maneviyatını ve estetik anlayışını keşfetmeye dair bir alan sunar. Tasavvuf Musikisi, insanın duygu ve düşüncelerini melodiler, ritimler ve sesler yoluyla ifade etmesini sağlayan sanat dalıdır. Bu müzik, İslam Tasavvuf geleneğinin ruhsal ve mistik boyutlarını ifade etmek amacıyla kullanılır. Bu atölyede, enstrümanlar arasında; ney, bendir ve kanun gibi eğitimler verilecektir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "MEDYA OKURYAZARLIK",
    paragraph: "Gençlerle medya okur yazarlık, genç bireylere medyayı anlama, eleştirel bir bakış açısıyla değerlendirme ve etkili bir şekilde iletişim kurma becerilerini kazandırmayı amaçlayan bir öğrenme sürecidir. Bu kapsamda, gençler medya içeriklerini analiz eder, medyanın nasıl çalıştığını anlar ve bilinçli tüketici ve üretici olma becerilerini geliştirirler. Medya okur yazarlık, dijital dünyada bilinçli ve sorumlu bir şekilde bilgiye erişme ve bu bilgiyi paylaşma yeteneklerini artırarak gençlerin medya ortamında etkin bir şekilde yer almalarına katkıda bulunabilir."
  },
  {
    imgUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "KÜLTÜR GEZİLERİ",
    paragraph: "Gençlerle kültür gezileri, genç bireyleri sanatsal, tarihi veya kültürel mekanlara götürerek onların geniş bir perspektif kazanmalarını amaçlar. Kültürel gezilerle gençler farklı kültürleri keşfeder, yeni bilgiler edinir ve estetik bakış açısını kazanmasına yardımcı olur."
  }
];

export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Eğitim Atölyesi";
  return <FaaliyetlerCommon title={title} subsectionData={genclerSectionsData}/>;

}

// export const revalidate = 60;

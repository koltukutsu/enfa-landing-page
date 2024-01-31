import { getAllAuthors, getSettings } from "@/lib/sanity/client";
// import Genc from "./genc";
import FaaliyetlerCommon from "../faaliyetlerCommon";
const genclerSectionsData = [
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "Gençler için İlham Verici Aile Eğitimleri",
    paragraph: "Aile Eğitimleri programımız, gençlerin aile içi ilişkilerini güçlendirmeyi, iletişim becerilerini artırmayı ve aile bağlarını sağlamlaştırmayı hedefliyor. Program kapsamında, aile içi etkileşim teknikleri, empati kurma ve duygusal zeka gelişimi gibi konular ele alınarak, gençlerin aile ortamında sağlıklı ve mutlu bir yaşam sürmeleri için gerekli beceriler kazandırılmaktadır."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "Çocukların Kişisel Gelişimi için Aile Destekli Programlar",
    paragraph: "Bu bölümde, çocukların kişisel gelişimini desteklemek için ailelerin nasıl etkin bir rol oynayabileceği üzerine odaklanılıyor. Ailelerin çocukların özgüvenini, bağımsız düşünme yeteneklerini ve yaratıcılıklarını nasıl teşvik edebilecekleri, pratik uygulamalar ve etkileşimli öğrenme yöntemleri ile ele alınmaktadır."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "Aile Ortamında Manevi ve Kültürel Değerlerin Aktarımı",
    paragraph: "Bu bölüm, ailelerin manevi ve kültürel değerleri çocuklara nasıl aktarabileceğini inceler. Dini eğitimler, aile içi ritüeller ve geleneklerin önemi, gençlerin kültürel kimliklerini ve aile bağlarını güçlendirmek için ele alınmaktadır. Bu süreçte ailelerin ve çocukların birlikte katıldığı etkinlikler ve uygulamalı öğrenme teknikleri sunulmaktadır."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "Aile ile Sanat ve Yaratıcılık Atölyeleri",
    paragraph: "Bu atölyeler, aile bireylerinin birlikte sanat ve yaratıcılık becerilerini geliştirebilecekleri ortamları sağlar. Çeşitli sanatsal faaliyetler ve el işi projeleri aracılığıyla, aile üyelerinin birlikte yaratıcı süreçlerde yer alması, aile içi iletişimi ve işbirliğini güçlendirirken, bireylerin sanatsal ifade yeteneklerini de ortaya çıkarıyor."
  },
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "Teknoloji ve İnovasyon: Aileler için Atölye Çalışmaları",
    paragraph: "Bu bölümde, ailelerin teknoloji ve inovasyon konularında bilinçlenmeleri ve bu alanlarda çocuklarıyla birlikte öğrenmeleri teşvik ediliyor. Ailelerin teknolojiyi güvenli ve etkili bir şekilde kullanmaları, çocuklarının dijital dünyada başarılı ve sorumlu bireyler olmaları için gereken becerileri kazanmaları amaçlanmaktadır."
  }
];

export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Enfa Cafe";
  return <FaaliyetlerCommon title={title} subsectionData={genclerSectionsData}/>;

}

// export const revalidate = 60;

import { getAllAuthors, getSettings } from "@/lib/sanity/client";
// import Genc from "./genc";
import FaaliyetlerCommon from "../../../../components/faaliyetlerCommon";
const genclerSectionsData = [
  {
    imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
    title: "ENFA CAFE Hizmetleri",
    paragraph: "Enfa cafe olarak, sıcak ve samimi bir atmosferde sağlıklı ve helal ikramlarımızla,  her fincan kahvemizde bir hikâye ve her sohbetimizde bir anlam var. \n" +
        "Aynı zamanda samimi bağlantıların izini sürdüğümüz bir yolculuğa sizleri davet ediyoruz. Hanımlara mahsus olarak misafirlerimize huzurlu bir deneyim sunuyoruz. "
  }
];

export default async function AboutPage() {
  // const authors = await getAllAuthors();
  // const settings = await getSettings();
  const title = "Enfa Cafe";
  return <FaaliyetlerCommon title={title} subsectionData={genclerSectionsData}/>;

}

// export const revalidate = 60;

// "use client";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import Container from "@/components/container";
// import { urlForImage } from "@/lib/sanity/image";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";
//
// const subSectionData = [
//   {
//     imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
//     title: "Aile Eğitimleri",
//     paragraph: "Aile Eğitimleri"
//   },
//   {
//     imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
//     title: "Aile Eğitimleri",
//     paragraph: "Aile Eğitimleri"
//   },
//   {
//     imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
//     title: "Aile Eğitimleri",
//     paragraph: "Aile Eğitimleri"
//   },
//   {
//     imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
//     title: "Aile Eğitimleri",
//     paragraph: "Aile Eğitimleri"
//   },
//   {
//     imageUrl: "/pictures/faaliyetlerimiz/aile/family.jpg",
//     title: "Aile Eğitimleri",
//     paragraph: "Aile Eğitimleri"
//   }
// ];
//
//
// export default function FaaliyetlerCommon({subsectionData}) {
//   return (
//     <Container>
//       <h1
//         className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
//         Faailiyetlerimiz
//         <span className="text-gray-500 text-brand"> / Aile</span>
//       </h1>
//       <div className="text-center">
//         <p className="text-sm text-gray-500">ENFA Eğitim ve Kültür Merkezi</p>
//       </div>
//       {
//         subSectionData.map((data, index) => {
//           return (
//             <SubSection
//               key={index}
//               imageUrl={data.imageUrl}
//               title={data.title}
//               paragraph={data.paragraph}
//               choice={index % 3}
//             />
//           );
//         })
//       }
//       <div className="prose mx-auto mt-14 text-center dark:prose-invert">
//         <p>
//           <Link href="/iletisim">
//             <button
//               className="prose dark:prose-invert bg-black text-white hover:text-gray-500 rounded-lg px-4 py-2 mt-4">Bizimle
//               İletişime Geçin
//             </button>
//           </Link>
//         </p>
//       </div>
//     </Container>
//   );
// }
//
// const SubSection = ({ imageUrl, title, paragraph, choice }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//
//   const variants = {
//     visible: { scale: 1.04 },
//     hidden: { scale: 0.97 }
//   };
//
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);
//
//   const imageSection = (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       transition={{ duration: 0.5 }}
//       variants={variants}
//       className={`w-full ${choice !== 1 ? "lg:w-2/3" : ""} p-4`}
//     >
//       <Image
//         className="rounded-lg shadow-md"
//         src={imageUrl}
//         alt="Description of the image"
//         width={500}
//         height={300}
//         layout="responsive"
//         priority
//       />
//     </motion.div>
//   );
//
//   const textSection = (
//     <div className={`w-full ${choice !== 1 ? "lg:w-1/3 " : ""} text-left px-4`}>
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       <p>{paragraph}</p>
//     </div>
//   );
//
//   return (
//     <div className={`flex ${choice === 1 ? "flex-col" : "flex-row"} items-center justify-around mt-16`}>
//       {choice === 0 ? (
//         <>
//           {imageSection}
//           {textSection}
//         </>
//       ) : choice === 1 ? (
//         <>
//           <div className="text-center">
//             {imageSection}
//             {textSection}
//           </div>
//         </>
//
//       ) : (
//         <>
//           {textSection}
//           {imageSection}
//         </>
//       )}
//     </div>
//   );
// };
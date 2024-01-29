import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Hakkımızda
      </h1>
      <div className="text-center">
        <p className="text-lg">ENFA Eğitim ve Kültür Merkezi</p>
      </div>

      <h2
        className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Ekibimiz
      </h2>
      <div className="mb-16 mt-6 grid grid-cols-2 lg:grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {/*{authors.slice(0, 3).map(author => {*/}
        {authors.map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 odd:translate-y-10 odd:md:translate-y-16"
            >
              {/* Image */}
              {imageProps && (
                <Image
                  src={imageProps?.src}
                  alt={author?.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              )}

              {/* Author Name Overlay */}
              <div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2">
                <p className="text-black text-center font-normal">{author?.name}</p>
              </div>
            </div>
          );

        })}
      </div>

      {/* <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div> */}
    </Container>
  );
}

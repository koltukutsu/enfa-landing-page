import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Cocuk() {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Faailiyetlerimiz
        <span className="text-gray-500 text-brand"> / Aile</span>
      </h1>
      <div className="text-center">
        <p className="text-sm text-gray-500">ENFA Eğitim ve Kültür Merkezi</p>
      </div>

      {/*<div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">*/}
      {/*  {authors.slice(0, 3).map(author => {*/}
      {/*    const imageProps = urlForImage(author?.image) || null;*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        key={author._id}*/}
      {/*        className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">*/}
      {/*        <Link href={`/author/${author?.slug}`}>*/}
      {/*          {imageProps && (*/}
      {/*            <Image*/}
      {/*              src={imageProps?.src}*/}
      {/*              alt={author?.name || " "}*/}
      {/*              fill*/}
      {/*              sizes="(max-width: 320px) 100vw, 320px"*/}
      {/*              className="object-cover"*/}
      {/*            />*/}
      {/*          )}*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
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
        {/*add a button*/}
        <p>
          <Link href="/iletisim">
            <button
              className="prose dark:prose-invert bg-black text-white hover:text-gray-500 rounded-lg px-4 py-2 mt-4">Bizimle
              İletişime Geçin
            </button>
          </Link>
        </p>
      </div>
    </Container>
  );
}

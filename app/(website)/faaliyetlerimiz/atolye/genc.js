import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function Genc() {
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
        {/*<p>*/}
        {/*  <Link href="/contact">Get in touch</Link>*/}
        {/*</p>*/}
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

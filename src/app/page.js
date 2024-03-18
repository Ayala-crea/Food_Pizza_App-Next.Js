import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Homemenu from "@/components/layouts/HomeMenu";
import SectionHeaders from "@/components/layouts/SectionHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Homemenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex-col gap-4">
          <p>
            Pizza kami memiliki ciri khas sendiri dan memiliki cita rasa yang
            sangat enak dan memiliki ciri khas yang tidak ditemukan di toko lain
          </p>
          <p>
            pizza yang nikmat dan sehat baik dimakan kapanpun dan dimana pun
            mari kesini makan pizza kami
          </p>
          <p>
            pizza yang nikmat dan sehat baik dimakan kapanpun dan dimana pun
            mari kesini makan pizza kami
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hasitate"}
          mainHeader={"contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-400" href="tel:+6282184952582">
            +62 821-8495-2582
          </a>
        </div>
      </section>

    </>
  );
}

import Image from "next/image";
import { Container } from "./Container";

import Arrow from "@/assets/arrow-explorer.svg";
import ImageAppleStore from "@/assets/btn-apple-store.svg";
import ImageGooglePlay from "@/assets/btn-google-play.svg";
import Woman from "@/assets/woman.png";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] md:h-[553px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 lg:max-w-[500px]">
          <h1 className="text-white md:text-4xl  lg:text-7xl font-bold mb-4">
            Tenha seu banco na palma da sua mão.
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImageAppleStore} alt="AppleStore" />
            </button>
            <button>
              <Image src={ImageGooglePlay} alt="GoogleStore" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Arrow down" />
            <span className="text-white text-sm font-bold">
              Continue explorando
            </span>
          </button>
        </div>
        <Image
          className="md:max-w-[550px] md:mr-[-61px] lg:mr-[-41px]"
          src={Woman}
          alt="Woman"
        />
      </Container>
    </section>
  );
}

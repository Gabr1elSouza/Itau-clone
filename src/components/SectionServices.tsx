import Image from "next/image";
import { Container } from "./Container";

import Card from "@/assets/icon-card.svg";
import Option from "@/assets/icon-options.svg";
import PhoneIcon from "@/assets/icon-phone.svg";
import Soluction from "@/assets/icon-solutions.svg";
import Phone from "@/assets/phone.png";

export function SectionService() {
  return (
    <section className=" relative w-full h-[965px] ">
      <Container>
        <div className="flex-1 md:max-w-[450px] lg:max-w-[594px] md:pt-10 pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            Serviços exclusivos
          </span>
          <h1 className="text-primary-gray md:text-4xl text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h1>
          <p className="text-lg max-w-[554px] mb-16 text-sencond-gray">
            Veja como você pode cuidar as suas Finanças pelo app Itaú de forma
            segura, rápida e o mlehor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li
              className="flex items-center gap-9 pb-9 border-b-[1px]
            border-opacity-gray"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="Phone Icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferência e pagamentos de onde
                estiver
              </p>
            </li>
            <li
              className="flex items-center gap-9 pb-9 border-b-[1px]
            border-opacity-gray"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={Soluction} alt="solutions Icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Soluções de empréstimos e renegociação para organizar suas
                finanças.
              </p>
            </li>
            <li
              className="flex items-center gap-9 pb-9 border-b-[1px]
            border-opacity-gray"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={Option} alt="Option Icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Diversas opções de investimentos, de acordo com o seu perfil de
                investidor.
              </p>
            </li>
            <li className="flex items-center gap-9 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={Card} alt="Card Icon" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhe a fatura do seu cartão de crédito e faça compras
                online com seu cartão.
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className=" flex items-center absolute top-0 right-0 md:w- w-[32%] h-full bg-gray-phone">
        <Image
          src={Phone}
          alt="Phone"
          className=" md:translate-x-[-20%] lg:translate-x-[-50%]"
        />
      </div>
    </section>
  );
}

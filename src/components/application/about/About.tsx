import { useInView } from "react-intersection-observer";
import Navbar from "../navbar/Navbar";

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <section
            className="flex flex-col gap-40 min-h-screen"
            id="sectionAbout"
        >
            <Navbar />
            <div
                className={`flex md:items-center md:justify-around  ${
                    inView ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-sm translate-x-[-100%]"
                } transform transition-all duration-1000`}
                ref={ref}
            >
                <div className="md:w-2/4">
                    <h1 className="text-2xl md:text-4xl mb-8 text-center">
                        Desenvolvedora <span className="font-bold text-green-500">Web</span>
                    </h1>
                    <p className="indent-8 text-justify text-sm md:text-base">
                        Olá! Sou desenvolvedora com foco em web, há mais de dois anos. Atuei em grandes empresas do ramo
                        e em segmentos diversos, como soluções ERP, mobile e web. Nesse período tive a oportunidade
                        atuar sempre como full stack, com diversas tecnologias como Javascript, Typescript, NodeJS, C#,
                        NET, React e outras. Acredito que programação vai além do código, é entregar produtos que façam
                        a diferença para o cliente, auxiliem em suas conquistas e tragam inovação ao mercado. No dia a
                        dia, gosto de explorar novos aprendizados, buscar novas referencias de projetos e praticar.
                        Referente a soft skills, tenho autonomia, disciplina na atuação remota, boa comunicação e fácil
                        adaptabilidade. Estou sempre em busca de novos desafios e oportunidades de crescimento.
                    </p>
                </div>

                <img
                    src="src/assets/images/about-image.png"
                    alt="imagem abstrata e notebook"
                    className="w-2/6 max-w-md hidden md:block"
                />
            </div>
        </section>
    );
}

import {Roboto_Mono} from "next/font/google";

const roboto = Roboto_Mono({
    subsets: ['latin'],
    preload: true,
});

export default function Footer() {
    return (
        <>
            <div className={`bg-[#26211C] w-full md:absolute md:text-base text-xs bottom-0 h-fit py-4 text-[#CAD7D8] text-justify md:px-8 px-2 leading-6 ${roboto.className}`}>
                <p>DOVE IL SUONO PRENDE FORMA. UN LUOGO TRA TECNICA E INTUITO. NON SOLO UNO STUDIO, MA UNO SPAZIO PER ASCOLTARE, CONDIVIDERE, CREARE. DAK E&apos; UN LABORATORIO CREATIVO. UN RIFUGIO PER CHI CERCA UNA VISIONE, UNA IDENTITA&apos; SONORA. QUI OGNI IDEA TROVA LA SUA FREQUENZA.</p>
            </div>
        </>
    )
}
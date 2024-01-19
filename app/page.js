import Contact from "./components/Contact";
import Image from "next/image";
import logo from "@/app/img/logo_corsi.svg";
/*
const cargarImagen = require.context("./img", true);
<Image
 src={cargarImagen(`./logo_corsi.svg`)}
 style={{ width: "120px" }}
/> 
*/

const fondo0 = "https://corsialminuto.it/img/logo.svg";
const fondo1 = "https://corsialminuto.it/img/full-img/img.png";
const fondo2 =
  "https://c0.wallpaperflare.com/preview/847/634/542/black-business-camera-designer.jpg";
const fondo3 = "https://corsialminuto.it/img/partners/iqnet-b.webp";
const fondo4 = "https://corsialminuto.it/img/partners/efqm500-b.webp";
const fondo5 = "https://corsialminuto.it/img/icon4.svg";

export default function Home() {
  return (
    <main className="text-base">
      <section className="w-full flex justify-center">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1200px] p-4 py-6 flex flex-row justify-between items-center">
          <a href="https://www.google.com" target="_blank">
            <Image
              src={logo}
              alt="Vercel Logo"
              width={120}
              height={120}
              priority
            />
          </a>
          <select className="text-white text-lg p-2 rounded-md bg-[#ff5709b6] border-2 border-orange-500 hover:bg-gray-50 hover:text-black ">
            <option value="">Altri Corsi</option>
            <option value="">Option 2</option>
            <option value="">Alternativa</option>
          </select>
        </div>
      </section>

      <section
        id="?"
        className="w-full flex justify-center lgGG:h-[calc(85vh)] bg-[#1A2035]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondo2})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full md:w-[720px] lg:w-[960px] xl:w-[1200px] flex flex-col md:flex-row  md:justify-between ">
          <div className="w-full py-10 flex justify-center items-center">
            <div className="p-5 text-white text-3xl text-center md:text-left">
              <h1 className="mb-2">Corso</h1>
              <h1 className="mb-6">
                <span className="px-4 py-2 lg:text-4xl bg-gradient-to-b from-blue-600  to-blue-800">
                  Full Stack
                </span>
              </h1>
              <h1 className="mb-8">
                <span className="px-4 py-2 lg:text-4xl bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800">
                  Web Developer
                </span>
              </h1>
              <h1 className="text-base">
                Richiedi informazioni gratis e senza impegno!
              </h1>
            </div>
          </div>

          <div className="w-full flex justify-center items-center md:justify-end lg:-mb-10">
            <Contact />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-black text-white">
        <div className="w-full lg:w-[960px] xl:w-[1200px] flex justify-center lg:justify-start ">
          <div className="w-[150px] md:w-[600px] py-5 md:py-0 flex flex-col md:flex-row md:justify-evenly ">
            <h1 className="my-3">Ore: 800+</h1>
            <h1 className="my-3">100% online</h1>
            <h1 className="my-3">Masterclass con esperti</h1>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-white mt-3">
        <div className="w-full sm:w-[540px] lg:w-[720px] xl:w-[760px] p-8 flex flex-col items-center text-sm lg:text-base">
          <p className="mb-3">
            Impara a creare applicazioni e siti web con il corso di Full Stack
            Web Developer di MasterD e diventa un programmatore web esperto. La
            figura professionale dello sviluppatore Full Stack è un punto di
            riferimento per tutto il team che lavora su un progetto; infatti,
            deve necessariamente possedere la conoscenza di tutta una serie di
            linguaggi di programmazione, come, ad esempio, Java, Python, PHP e
            HTML, CSS e JavaScript.
          </p>
          <p className="mb-6">
            Il Full Stack Developer si occupa dello sviluppo e della
            programmazione di applica zioni e siti web a partire dalla
            progettazione back-end (data processing e storage) fino allo
            sviluppo dell’interfaccia front-end. È{" "}
            <strong> una figura completa con competenze trasversali</strong>{" "}
            anche nel campo del web design e del database management.
          </p>
          <select name="" id="" className="w-full border-b border-gray-500 p-4">
            <option value="">Casa appenderai durante il corso</option>
            <option value="">hola</option>
          </select>
        </div>
      </section>

      <section className="w-full flex justify-center py-10">
        <div className="w-full sm:w-[540px] lg:w-[800px] xl:w-[960px] p-12 rounded-xl lg:rounded-3xl bg-gray-100 flex flex-col lg:flex-row">
          <div className="basis-1/2">
            <div className="text-3xl lg:text-xl mb-4 text-center lg:text-left">
              Sbocchi professionali per un programmatore Full Stack
            </div>
            <div className="w-2/3 bg-cyan-500 h-1 mb-2"> {""}</div>
            <p className="mb-8">
              Il Full Stack Web Developer è uno dei profili più ricercati
              nell’industria della programma- zione. Questo corso ti permetterà
              di inserirti nel mondo del lavoro con il ruolo di:
            </p>
            <ul className="text-sm list-disc list-inside grid gap-4 mb-8">
              <li>Front-End Developer</li>
              <li>Back-End Developer</li>
              <li>Java Full Stack Developer</li>
              <li>Web Developer</li>
              <li>Test Automation Engineer</li>
              <li>DevOps Specialist</li>
              <li>Java Developer</li>
              <li>Cybersecurity Specialist</li>
            </ul>
          </div>
          <div className="mb-6 basis-1/2 flex items-center">
            <img src={fondo1} alt="" />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-white p-12 ">
        <div className="w-full sm:w-[320px]">
          <div className="text-4xl mb-4 text-center">
            I plus del <br /> corso
          </div>
          <div className="w-full flex justify-center ">
            <div className="w-2/3 bg-cyan-500 h-1 mb-10"> {""}</div>
          </div>
          <div className="bg-cyan-500 flex flex-col items-center rounded-lg py-8">
            <img src={fondo5} width={"100px"} alt="" />
            <h1 className="mt-4 text-3xl text-center text-white">
              Lezioni live streaming
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-gray-100 py-12">
        <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] px-12 flex flex-col md:flex-row items-center md:justify-between">
          <h1 className="md:basis-2/3 text-2xl lg:text-3xl text-center md:text-left mb-6 md:mb-0">
            Scopri tutti i dettagli e i vantaggi di questo corso
          </h1>
          <div className="flex items-center">
            <button className=" text-white text-xl lg:text-2xl py-2 px-8 rounded-md bg-orange-500 border border-orange-300">
              Chiedi info!
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white p-12 flex flex-col items-center">
        <h1 className="text-2xl py-2  mb-6 border-b-2 border-gray-50">
          Certificazioni
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <img src={fondo3} alt="" style={{ width: "64px" }} />
          <img src={fondo4} alt="" style={{ width: "50px" }} />
        </div>
      </section>
    </main>
  );
}

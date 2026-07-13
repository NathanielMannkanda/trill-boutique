import { useState } from "react";
import DvdSlider from "../componenets/DvdSlider";
import MusicPlayer from "../componenets/MusicPlayer";
import AlchemyAngle from "../assets/images/AlchemyAngle.png";
import HeaderFrame from "../assets/images/TitleCard.png"
import Coffin from "../assets/images/Coffin.png"

function HomePage () {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem("introPlayed") === "true";
  });
  return(
    <>

      {!introFinished && (
        <DvdSlider 
          onFinish={() => {
            sessionStorage.setItem("introPlayed", "true");
            setIntroFinished(true);
          }}
        />
      
      )}

      <main
        className={`
          relative min-h-screen transition-opacity duration-1000 overflow-hidden
          ${introFinished ? "opacity-100" : "opacity-0"}
          `}
      >
        <img
          src={AlchemyAngle}
          alt=""
          className="absolute top-0 left-0 w-56 opacity-20 pointer-events-none select-none"
        />
        
        <img
          src={AlchemyAngle}
          alt=""
          className="absolute top-0 right-0 w-56 opacity-20 pointer-events-none select-none rotate-90"
        />

        <img
          src={AlchemyAngle}
          alt=""
          className="absolute bottom-0 left-0 w-56 opacity-20 pointer-events-none select-none rotate-270"
        />


        <img
          src={AlchemyAngle}
          alt=""
          className="absolute bottom-0 right-0 w-56 opacity-20 pointer-events-none select-none rotate-180"
        />
        <MusicPlayer />
        {/*website here*/}
        <header className="relative flex justify-center pt-10">
          <div className="relative">
            <img 
              src={HeaderFrame}
              alt=""
              className="w-162.5 select-none pointer-events-none opacity-80 invert"
            />

            <h1 className="absolute top-28 left-60 text-3xl  font-serif italic tracking-[0.3em] text-white">
              Trill Boutique
            </h1>
          </div>
        </header>

        <section className="flex justify-center items-center mt-20">
          <img 
            src={Coffin} 
            alt="Coffin" 
            className="w-56 opacity-90 select-none pointer-events-none"
          />
        </section>
      </main>
    </>
  )
}

export default HomePage
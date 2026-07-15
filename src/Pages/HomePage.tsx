import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import DvdSlider from "../componenets/DvdSlider";
import MusicPlayer from "../componenets/MusicPlayer";
import AlchemyAngle from "../assets/images/AlchemyAngle.png";
import HeaderFrame from "../assets/images/TitleCard.png"
import HeroArtWork from "../componenets/HeroArtwork";


function HomePage () {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem("introPlayed") === "true";
  });
  const modelsRef = useRef<HTMLAnchorElement>(null);
  const clothesRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!introFinished) return;

    gsap.set([modelsRef.current, clothesRef.current], {
      opacity: 0,
      y: 10,
    });

    gsap.to([modelsRef.current, clothesRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out",
      delay: 5.8,
    });
  }, [introFinished]);
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

        <section className="flex justify-center items-center ">
          <HeroArtWork startAnimation={introFinished}/>
        </section>

        <div className="flex justify-center text-white gap-16 mt-10 text-2xl font-serif tracking-widest">
          <Link
            ref={modelsRef}
            to="/models"
            className="transition hover:scale-110"
          >
            Models
          </Link>

          <Link 
            ref={clothesRef}
            to="/clothing"
            className="transition hover:scale-110"
          >
            Clothes
          </Link>
        </div>

        <MusicPlayer />
      
      </main>
    </>
  )
}

export default HomePage
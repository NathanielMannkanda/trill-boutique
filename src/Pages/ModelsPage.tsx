import MusicPlayer from "../componenets/MusicPlayer";
import HediModel from "../assets/gifs/model.gif"
import ScaryModel from "../assets/gifs/scaryModel.gif"
import SmileyFaces from "../assets/images/show-faces.png"
import i6w9 from "../assets/gifs/i6w9.gif"
import KarlLgLogo from "../assets/icons/karl-largerfeld.webp"
import Dior from "../assets/icons/dior-homme.jpg"
import ifSixWasNineLogo from "../assets/icons/ifsixwasnine-logo.png" 
import { Link } from "react-router-dom";

const ModelsPage: React.FC = () => {
  return(
    <>
      <main className="min-h-screen bg-black text-white p-5">
        <header  className="flex justify-center text-5xl font-serif italic border-b pb-5">
          Models
        </header>

        <div className="flex justify-center flex-col items-center mb-10">
        <img 
            src={SmileyFaces} 
            alt=""
            className="w-30" 
          />
        
        <h1 className="flex gap-4">
        <Link 
        to="/"
        className="italic text-lg">
          Return Home
        </Link>
        <Link
        to="/clothing"
        className="italic text-lg"
        >
          Clothing
        </Link>
        </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <section className="grid grid-cols-2 gap-2 mb-5">
            <p className="min-w-93.75 max-w-200 w-full max-h-167.5 h-ful overflow-hidden">
              <div className=" ">
                <div className="text-2xl mb-3 flex gap-3 items-center">
                  <img 
                    src={Dior} 
                    alt="" 
                    className="w-25"
                  />
                  <p className="font-bold">
                    Hedi Slimane
                  </p>
                </div>

                <p className="text-xl">
                  Hedi Slimane is a French photographer and creative director. Born in Paris to an Italian mother and Tunisian father, Slimane grew up with fashion around him. After starting his career in photography, PR and as an assistant designer, Slimane was surprisingly appointed as the ready-to-wear director of men's collections at Yves Saint Laurent in 1996 by Pierre Bergé. Despite not having formal fashion schooling, Slimane had massive successes at YSL. His "Black Tie" collection for Fall/Winter 2000 caused a revolution in the fashion world, reintroducing skinny men's silhouettes. After a fallout with Gucci's Tom Ford, Slimane left YSL for Dior, where he continued his slim signature and helped popularize the skinny jeans. Slimane rejoined Yves Saint Laurent in 2012 as creative director, where he was part of the controversial decision to drop the "Yves" part of the Saint Laurent branding. Slimane joined Celine in 2018 and introduced the brand's first menswear collection in 2019.
                </p>
              </div>
            </p>

            <img 
              src={HediModel} 
              alt="" 
              className="min-w-93.75 max-w-200 w-full max-h-167.5 h-full"
            />
          </section>

          <section  className="grid grid-cols-2 gap-2 mb-5">
            <img 
              src={ScaryModel} 
              alt=""
              className="min-w-93.75 max-w-200 w-full max-h-167.5 h-full"
              />
            <p className="min-w-93.75 max-w-200 w-full max-h-167.5 h-ful overflow-hidden">
              <div className=" ">
                <div className="text-2xl mb-3 flex gap-3 items-center">
                  <img src={KarlLgLogo} alt="" />
                  <p className="font-bold">
                    Karl Lagerfeld
                  </p>
                </div>

                <p className="text-xl">
                  With his signature gothic style, world-famous cat and larger-than-life personality, Karl Lagerfeld became one of the most iconic personas in fashion history. Lagerfeld left an unmistakable mark on luxury fashion as the creative director of his namesake label, Fendi and Chanel (a position he held from 1984 until he passed in 2019). Born in Hamburg in 1933, Lagerfeld started his fashion career as Pierre Balmain's apprentice. After stints with Valentino, Chloé and Fendi (where he introduced the Double F logo), Lagerfeld was hired by Chanel in the 1980s, completely revolutionizing the French house with his self-proclaimed "intellectual sexiness." While his eponymous label was bought by Tommy Hilfiger in 2005, Karl Lagerfeld fashion still remains a popular brand, making shoes, bags and accessories.
                </p>
              </div>
            </p>
          </section>

          <section className="grid grid-cols-2 gap-2 mb-5">
            <p className="min-w-93.75 max-w-200 w-full max-h-167.5 h-ful overflow-hidden">
              <div className=" ">
                <div className="text-2xl mb-3 flex gap-3 items-center">
                  <img 
                    src={ifSixWasNineLogo} 
                    alt="" 
                    className="w-25 h-25"
                  />
                  <p className="font-bold">
                    Nabuhiko Satoh
                  </p>
                </div>

                <p className="text-xl">
                  If Six Was Nine is a Japanese fashion brand founded in Tokyo, Japan, by Nabuhiko Satoh in 1997. The brand is known for its distressed, vintage-looking items, creating unique shirts, denim and jewelry with a rebellious spirit. Named after the Jimi Hendrix song If 6 Was 9, the brand incorporates many similarities to Jimi Hendrix's iconic bohemian rocker style and makes clothing for men and women. Owned by the Maniac Corporation, the brand is affiliated with another Satoh-founded brand, Le Grand Blue, which follows the same ethos and focuses more on denim. While the brand has become world-renowned, If Six Was Nine clothing is hard to find outside of Japan, with only select boutiques that stock it and no advertising or campaigning on major platforms.
                </p>
              </div>
            </p>

            <img 
              src={i6w9} 
              alt="" 
              className="min-w-93.75 max-w-200 w-full max-h-167.5 h-full"
            />
          </section>

        </div>
      </main>

      <MusicPlayer />
    </>
  )
}

export default ModelsPage;
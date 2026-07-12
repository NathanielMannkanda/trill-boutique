import { useState } from "react";
import DvdSlider from "../componenets/DvdSlider";
import MusicPlayer from "../componenets/MusicPlayer";

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
          min-h-screen transition-opacity duration-1000
          ${introFinished ? "opacity-100" : "opacity-0"}
          `}
      >
        <MusicPlayer />
        {/*website here*/}
      </main>
    </>
  )
}

export default HomePage
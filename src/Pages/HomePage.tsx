import { useState } from "react";
import DvdSlider from "../componenets/DvdSlider";

function HomePage () {
  const [introFinished, setIntroFinished] = useState(false);
  return(
    <>

      {!introFinished && (
        <DvdSlider 
          onFinish={() => setIntroFinished(true)}
        />
      
      )}

      <main
        className={`
          min-h-screen transition-opacity duration-1000
          ${introFinished ? "opacity-100" : "opacity-0"}
          `}
      >
        {/*website here*/}
      </main>
    </>
  )
}

export default HomePage
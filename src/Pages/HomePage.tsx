import { useState } from "react";
import DvdSlider from "../componenets/DvdSlider";

function HomePage () {
  const [showIntro, setShowIntro] = useState(true);
  return(
    <>

      {showIntro && (
        <DvdSlider 
          onFinish={() => setShowIntro(false)}
        />
        
      )}
    </>
  )
}

export default HomePage
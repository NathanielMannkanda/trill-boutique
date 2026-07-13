import { useEffect, useRef } from "react";
import gsap from "gsap";

import Coffin from "../assets/images/coffin-animation/Coffin.png";
import Flower1 from "../assets/images/coffin-animation/1st-flowers.png";
import Flower2 from "../assets/images/coffin-animation/2nd-flowers.png";
import Flower3 from "../assets/images/coffin-animation/3rd-flowers.png";
import Flower4 from "../assets/images/coffin-animation/4th-flowers.png";
import Finale from "../assets/images/coffin-animation/finale-flowers.png";
import Heart from "../assets/images/coffin-animation/heart.png"

type HeroArtWorkProps = {
  startAnimation: boolean;
}

const HeroArtWork: React.FC<HeroArtWorkProps> = ({
  startAnimation,
}) => {
  const coffinRef = useRef<HTMLImageElement>(null);
  const flower1Ref = useRef<HTMLImageElement>(null);
  const flower2Ref = useRef<HTMLImageElement>(null);
  const flower3Ref = useRef<HTMLImageElement>(null);
  const flower4Ref = useRef<HTMLImageElement>(null);
  const finaleRef = useRef<HTMLImageElement>(null);
  const heartRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    if (!startAnimation) return;

    gsap.set(coffinRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    gsap.set([
      flower1Ref.current,
      flower2Ref.current,
      flower3Ref.current,
      flower4Ref.current,
      finaleRef.current,
      heartRef.current,

    ], {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.add("intro")

    //animations

    tl.to(coffinRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.4,
      ease: "power3.out",
    },
    "intro"
  );

    tl.to(
      flower1Ref.current,
      {
        opacity: 1,
        duration: 0.8,
      },
      "introt+=1"
    );

    tl.to(
      flower2Ref.current,
      {
        opacity: 1,
        duration: 0.9,
      },
      "intro+=1.8"
    );

    tl.to(
      flower3Ref.current,
      {
        opacity: 1,
        duration: 1,
      },
      "intro+=2.5"
    );

    tl.to(
      flower4Ref.current,
      {
        opacity: 1,
        duration: 0.9,
      },
      "intro+=3.2"
    );

    tl.to(
      finaleRef.current,
      {
        opacity: 1,
        duration: 1.2,
      },
      "intro+=4"
    );


    tl.to(
      heartRef.current,
      {
        opacity: 1,
        duration: 1.6,
      },
      "start+=5"
    );

    tl.to({}, {duration: 0.2});

    tl.call(() =>{
      gsap.to(heartRef.current,{
        y: -6,
        scale: 1.015,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, [startAnimation]);

  
  return(
    <div className="relative w-120 aspect-square mx-auto mt-20">
      <img
        ref={coffinRef}
        src={Coffin}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={flower1Ref}
        src={Flower1}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={flower2Ref}
        src={Flower2}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={flower3Ref}
        src={Flower3}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={flower4Ref}
        src={Flower4}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={finaleRef}
        src={Finale}
        className="absolute inset-0 w-full h-full object-contain"
      />

      <img
        ref={heartRef}
        src={Heart}
        className="absolute inset-0 w-full h-full object-contain"
      />

    </div>
  );
}

export default HeroArtWork
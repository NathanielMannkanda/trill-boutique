import { useEffect, useRef} from "react";
import gsap from "gsap";
import { useMusic } from "../hooks/useMusic";

type DvdSliderProps = {
  onFinish: () => void
}

const DvdSlider: React.FC<DvdSliderProps> = ({ onFinish }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isMoving = useRef(true);
  const isRotating = useRef(true);

  const music = useMusic();

  const position = useRef({
    x: 100,
    y: 100,
  });

  const velocity = useRef({
    x: 4,
    y: 4,
  });

  const rotation = useRef(0);

  useEffect(() => {
    let frameId: number;

    const animate = () => {

      const wrapper = wrapperRef.current;
      const image = imageRef.current;

      if (!wrapper || !image){
        frameId = requestAnimationFrame(animate);
        return;
      }

      if (isMoving.current) {
        position.current.x += velocity.current.x;
        position.current.y += velocity.current.y;

        //to get items width
        const screenWidth = window.innerWidth;
        const imageWidth = image.offsetWidth;

        const screenHeight = window.innerHeight;
        const imageHeight = image.offsetHeight;

        //bounce off left and right ends
        if (position.current.x <= 0) {
          velocity.current.x *= -1;
        }

        if (position.current.x >= screenWidth - imageWidth){
          velocity.current.x *= -1
        }

        //Bounce off bottom and top
        if (position.current.y <= 0){
          velocity.current.y *= -1;
        }

        if (position.current.y >= screenHeight - imageHeight){
          velocity.current.y *= -1
        }
      }

      if (isRotating.current){
        rotation.current += 0.5;
      }

      if(isMoving.current) {
        gsap.set(wrapper, {
          x: position.current.x,
          y: position.current.y,
        });
      }

      if(isRotating.current){
        gsap.set(image, {
          rotation: rotation.current,
        });
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleClick = () => {
    isMoving.current = false;
    isRotating.current = false;

    const spinTween = gsap.to(imageRef.current, {
      rotate: "+=360",
      duration: 1.5,
      ease: "none",
      repeat: -1,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onFinish();
        music.fadeIn();
        
      },
    });

    tl.add("reveal");

    tl.to(
      spinTween,
      {
        timeScale: 4,
        duration: 1.4,
        ease: "power2.in",
      },
      0
    );

    //get the center of the screen
      const centerX = 
        (window.innerWidth - wrapperRef.current!.offsetWidth) / 2;
      const centerY = 
        (window.innerHeight - wrapperRef.current!.offsetHeight) / 2;

    tl.to(
      imageRef.current,
      {
        rotation: "+=720",
        duration: 2,
        ease: "none",
      },
      "reveal"
    )

    tl.to(
      wrapperRef.current, 
      {
        x:centerX,
        y:centerY,
        duration:0.8,
        ease:"power2.inOut"
      },
      "reveal"
    )

    tl.to(
      wrapperRef.current, 
      {
      scale: 20,
      duration: 1.6,
      ease: "power4.inOut",
      },
      0.25
    );

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.4"
    );


  };

  return(
    <div 
      ref={containerRef}
      onClick={handleClick}
      className="fixed inset-0 z-50 overflow-hidden bg-black">
      <div
        ref={wrapperRef}
        className="absolute"
      >
        <img
          ref={imageRef}
          src="/roy-mustang-alchemy.png"
          alt="Alchemy Circle"
          className="w-40 select-none invert"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default DvdSlider
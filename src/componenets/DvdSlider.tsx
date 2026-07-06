import { useEffect, useRef} from "react";
import gsap from "gsap";

type DvdSliderProps = {
  onFinish: () => void
}

const DvdSlider: React.FC<DvdSliderProps> = ({ onFinish }) => {
  const imageRef = useRef<HTMLImageElement>(null)

  const containerRef = useRef<HTMLDivElement>(null);

  const isAnimating = useRef(true);

  const position = useRef({
    x: 100,
    y: 100,
  });

  const velocity = useRef({
    x: 4,
    y: 4,
  });

  useEffect(() => {
    let frameId: number;

    const animate = () => {

      if(!isAnimating.current) {
        return;
      }

      const image = imageRef.current;

      if(!image) {
        frameId = requestAnimationFrame(animate);
        return;
      }

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

      image.style.transform = `
        translate(${position.current.x}px, ${position.current.y}px)
      `;

      frameId = requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleClick = () => {
    isAnimating.current =false;

    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.to(imageRef.current, {
      scale: 6,
      duration: 1.2,
      ease: "power3.inOut",
    });

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
      <img 
        ref={imageRef}
        src="/roy-mustang-alchemy.png"
        alt="Alchemy Circle"
        className="absolute w-40 select-none invert"
        draggable={false}
      />
    </div>
  );
};

export default DvdSlider
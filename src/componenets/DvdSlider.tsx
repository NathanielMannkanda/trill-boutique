import { useEffect, useRef } from "react";

const DvdSlider: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)

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
      const image = imageRef.current;

      if(!image) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      position.current.x += velocity.current.x;
      position.current.y += velocity.current.y;

      image.style.transform = `
        translate(${position.current.x}px, ${position.current.y}px)
      `;

      frameId = requestAnimationFrame(animate);
    };

    animate();
    
    return () => cancelAnimationFrame(frameId);
  }, []);

  return(
    <div className="fixed inset-0 z-50 overflow-hidden bg-black">
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
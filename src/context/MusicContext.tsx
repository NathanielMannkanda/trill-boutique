import { 
  createContext,
  //useContext,
  useRef,
  type ReactNode
 } from "react";

import Nothing_Can_Be_Explained from "../assets/music/Nothing_Can_Be_Explained.mp3"

import gsap from "gsap";

  type MusicContextType = {
    play: () => void;

    pause: () => void;

    next: () => void;

    previous: () => void;

    fadeIn: () => void;

    fadeOut: () => void;
  };

  //eslint-disable-next-line
  export const MusicContext = createContext<MusicContextType | null>(null);

  type MusicContextProps = {
    children: ReactNode;
  };



 export function MusicProvider({
  children,
 }: MusicContextProps) {

  const audioRef = useRef(new Audio());

  const playlist = [
    {
      title: "Nothing can be Explained",
      src: Nothing_Can_Be_Explained,
    },
  ];

  const currentSong = useRef(0)

  //to play
  const play = async () => {
    const audio = audioRef.current;

    audio.src = playlist[currentSong.current].src;
    //audio.volume = 1;

    try{
      await audio.play();
    }catch(error){
      console.error("Playback failed:", error);
    }
  };

  //to go to next song
  const next = () => {
    currentSong.current++;

    if (currentSong.current >= playlist.length){
      currentSong.current = 0;
    }

    play();
  };

  //to go to next song
  const previous = () => {
    currentSong.current--;

    if (currentSong.current < 0){
      currentSong.current = playlist.length - 1;
    }

    play();
  };

  //to pause
 const pause = () => {
    audioRef.current.pause();
  };

  const fadeIn = async () => {
    const audio = audioRef.current;

    audio.volume = 0;

      await play();

      gsap.to(audio, {
        volume: 1,
        duration: 6,
        ease: "power2.out",
      });
  };

   const  fadeOut = () => {
    const audio = audioRef.current;

    gsap.to(audio, {
      volume: 0,
      duration: 3,
      ease: "power2.out",
      onComplete: () => {
        audio.pause();
      },
    });
   };

  
  
  return (
    <MusicContext.Provider value={
      {
        play,
        pause,
        next,
        previous,
        fadeIn,
        fadeOut,
      }
    }>
      {children}
    </MusicContext.Provider>
  );
 }
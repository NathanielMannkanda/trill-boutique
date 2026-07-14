import { 
  createContext,
  useRef,
  useState,
  useEffect,
  type ReactNode
 } from "react";

import Nothing_Can_Be_Explained from "../assets/music/Nothing_Can_Be_Explained.mp3"
import korg_funk_5 from "../assets/music/korg_funk_5.mp3"
import additional_cause_for_sorrow from "../assets/music/additional_cause_for_sorrow.mp3"

import gsap from "gsap";

  type MusicContextType = {
    play: () => void;
    pause: () => void;
    next: () => void;
    previous: () => void;
    fadeIn: () => void;
    fadeOut: () => void;

    currentSong: number;
    isPlaying: boolean;
    playlist: {
      title: string;
      artist: string;
      src: string;
    }[];
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
      artist: "Shiro Sagisu",
      src: Nothing_Can_Be_Explained,
    },
    {
      title: "Korg Funk 5",
      artist: "Aphex Twins",
      src: korg_funk_5,
    },
    {
      title: "Additional Cause for Sorrow",
      artist: "Shiro Sagisu",
      src: additional_cause_for_sorrow,
    },
  ];

  const playSong = async (index: number) => {
    const audio = audioRef.current;

    //Update Reacts state
    setCurrentSong(index);

    //load the correct file
    audio.src = playlist[index].src;

    try{
      await audio.play();
      setIsPlaying(true);
    }catch(error){
      console.error("Playback failed:", error)
    }
  }

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //to play
  const play = async () => {
    const audio = audioRef.current;

    audio.src = playlist[currentSong].src;

    try{
      await audio.play();
      setIsPlaying(true);
    }catch(error){
      console.error("Playback failed:", error);
    }
  };

  //to go to next song
  const next = () => {
    const nextSong = (currentSong + 1) % playlist.length;

    playSong(nextSong)
  };

  //to go to previous song
  const previous = () => {
    const previousSong = 
      currentSong === 0
      ? playlist.length - 1
      : currentSong - 1;

    playSong(previousSong);
  };

  //to pause
 const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const fadeIn = async () => {
    const audio = audioRef.current;

    audio.volume = 0;

      await play();
      setIsPlaying(true);

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
        setIsPlaying(false);
      },
    });
   };

   useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      next();
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };

    // eslint-disable-next-line
   }, [currentSong]);
  
  
  return (
    <MusicContext.Provider value={
      {
        play,
        pause,
        next,
        previous,
        fadeIn,
        fadeOut,

        currentSong,
        isPlaying,
        playlist,
      }
    }>
      {children}
    </MusicContext.Provider>
  );
 }
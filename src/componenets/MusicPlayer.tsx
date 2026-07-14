import { useMusic } from "../hooks/useMusic";
import nextSongButton from "../assets/icons/next-song-button.png";
import PauseSongButton from "../assets/icons/pause-button.png"
import PlaySongButton from "../assets/icons/play-button.png"
import RewindButton from "../assets/icons/rewind-button.png";

const MusicPlayer: React.FC = () => {

  const music = useMusic();

  return(
    <div className="fixed bottom-18 right-18 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-80 text-white shadow-2xl">
      <h2 className="text-lg font-semibold">
        {music.playlist[music.currentSong].title}
      </h2>

      <p className="text-sm text-gray-400">
        {music.playlist[music.currentSong].artist}
      </p>

      <div className="flex justify-center gap-6 mt-5">
        <button
          onClick={music.previous} 
          className="text-3xl hover:scale-110 transition"
        >
          <img 
            src={RewindButton} 
            alt="rewind button" 
            className="invert h-8 cursor-pointer"
          />
        </button>

        <button 
          onClick={
            music.isPlaying
             ? music.pause
             : music.play
          }
          className="text-4xl hover:scale-110 transition">
          {music.isPlaying ? 
            <img src={PauseSongButton} className="invert h-8 cursor-pointer" />
            : 
            <img src={PlaySongButton} className="invert h-8 cursor-pointer" />
          }
        </button>

        <button
          onClick={music.next} 
          className="text-3xl hover:scale-110 transition"
        >
          <img 
            src={nextSongButton}    
            alt="next=song-button"
            className="invert h-8 cursor-pointer"
            />
        </button>

      </div>
    </div>
  );
};

export default MusicPlayer;
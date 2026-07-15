import MusicPlayer from "../componenets/MusicPlayer";

const ModelsPage: React.FC = () => {
  return(
    <>
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1  className="text-5xl">
          Models
        </h1>
      </main>

      <MusicPlayer />
    </>
  )
}

export default ModelsPage;
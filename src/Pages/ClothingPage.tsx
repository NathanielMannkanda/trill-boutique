import MusicPlayer from "../componenets/MusicPlayer";

const ClothingPage: React.FC = () => {
  return(
    <>
      <main className="min-h-screen bg-black text-white p-5">
        <h1  className="flex justify-center text-5xl font-serif italic border-b pb-5">
          Clothing
        </h1>
      </main>

      <MusicPlayer />
    </>
  )
}

export default ClothingPage;
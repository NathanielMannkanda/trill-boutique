import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import { MusicProvider } from './context/MusicContext'
import ModelsPage from './Pages/ModelsPage'
import ClothingPage from './Pages/ClothingPage'

function App() {

  return (
    <BrowserRouter>
      <MusicProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/clothing" element={<ClothingPage />} />
        </Routes>
      </MusicProvider>
    </BrowserRouter>
  )
}

export default App

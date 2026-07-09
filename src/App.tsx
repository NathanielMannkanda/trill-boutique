import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import { MusicProvider } from './context/MusicContext'

function App() {

  return (
    <BrowserRouter>
      <MusicProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MusicProvider>
    </BrowserRouter>
  )
}

export default App

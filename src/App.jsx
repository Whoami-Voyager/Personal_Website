import { BrowserRouter, Routes, Route } from 'react-router-dom'
import State from './Components/State'
import Photos from './Components/Photos'
import About from './Components/About'
import Coding from './Components/Coding'
import ErrorPage from './Components/ErrorPage'
import Render from './Components/3d'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/photography' element={<Photos />} />
        <Route path='/coding' element={<Coding />} />
        <Route path='/easter-egg' element={<State />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

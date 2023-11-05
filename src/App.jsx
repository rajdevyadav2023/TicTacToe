import { Route, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'
import Start from './components/Start'
import Game from './components/Game'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/start' element={<Start/>}/>
        <Route path='/play' element={<Game/>}/>
      </Routes>
    </>
  )
}

export default App


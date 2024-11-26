import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import Service from './Pages/Service'
import ProjectPage from './Pages/ProjectPage'
import AboutMe from './Pages/AboutMe'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
        <Route path='/service' element={<MainLayout><Service /></MainLayout>} />
        {/* <Route path='/myproject' element={<MainLayout><ProjectPage /></MainLayout>} /> */}
        <Route path='/aboutme' element={<MainLayout><AboutMe /></MainLayout>} />


      </Routes>


    </>
  )
}

export default App

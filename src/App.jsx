import CursorEffect from './components/ui/cursorEffect';
import Home from './components/pages/home';
import Navbar from './components/layout/navbar';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Work from './components/pages/work';
import Contact from './components/pages/contact';
import Footer from './components/layout/footer';
import './App.css'

function App() {

  return (
    <>
    <CursorEffect/>
    <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WorkExperience from './components/WorkExperience/WorkExperience'


function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

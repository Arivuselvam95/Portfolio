import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <WorkExperience/>
      <Projects/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default App

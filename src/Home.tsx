import { GitProvider } from './context/GitContext'
import AboutMe from './pages/about-me/MainPage'
import ContactMe from './pages/contact-me/MainPage'
import Experience from './pages/experience/MainPage'
import Formation from './pages/formation/MainPage'
import Projects from './pages/projects/MainPage'
import Welcome from './pages/welcome-page/MainPage'

const Home = () => {
  return (
    <GitProvider>
      <div className=" flex flex-col gap-36 overflow-hidden ">
        <Welcome />
        <AboutMe />
        <Experience />
        <Projects />
        <Formation />
        <ContactMe />
      </div>
    </GitProvider>
  )
}

export default Home

import './assets/css/reset.css'
import './assets/css/style.css'

import Navbar from './components/Navbar'
import ProfilePicture from './components/ProfilePicture'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'

function App() {
  return (
    <body>
      <header>
        <ProfilePicture />
        <Navbar />
      </header>

      <section className='content'>
        <AboutMe />
        <Work />
        <ContactMe />
        <Resume />
      </section>

    </body>
  )
}

export default App

import '../styles/components/maincontent.sass'

import AboutMeSection from './AboutMeSection'
import ContactSection from './ContactSection'
import CurriculumSection from './CurriculumSection'
import Footer from './Footer'
import MainProjects from './MainProjects'
import SecundaryProjects from './SecundaryProjects'

const MainContent = () => {
  return (
    <div id="main-content">
      <MainProjects />
      <SecundaryProjects />
      <AboutMeSection />
      <CurriculumSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default MainContent
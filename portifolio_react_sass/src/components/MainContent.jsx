import MainProjects from './MainProjects'
import SecundaryProjects from './SecundaryProjects'

import '../styles/components/maincontent.sass'
import AboutMeSection from './AboutMeSection'

const MainContent = () => {
  return (
    <div id="main-content">
      <MainProjects />
      <SecundaryProjects />
      <AboutMeSection />
    </div>
  )
}

export default MainContent
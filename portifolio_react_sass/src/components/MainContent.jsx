import '../styles/components/maincontent.sass'

import AboutMeSection from './AboutMeSection'
import CurriculumSection from './CurriculumSection'
import MainProjects from './MainProjects'
import SecundaryProjects from './SecundaryProjects'

const MainContent = () => {
  return (
    <div id="main-content">
      <MainProjects />
      <SecundaryProjects />
      <AboutMeSection />
      <CurriculumSection />
    </div>
  )
}

export default MainContent
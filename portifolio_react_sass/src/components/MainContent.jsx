import MainProjects from './MainProjects'
import SecundaryProjects from './SecundaryProjects'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <div id="main-content">
      <MainProjects />
      <SecundaryProjects />
    </div>
  )
}

export default MainContent
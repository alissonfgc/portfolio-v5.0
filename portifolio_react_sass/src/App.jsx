import BGNoise from './components/BGNoise';
import HomeSection from './components/HomeSection';
import MainContent from './components/MainContent';
import MainTitle from './components/MainTitle';
import SectionProjects from './components/SectionProjects';
import TopMenu from './components/TopMenu';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <BGNoise />
      <HomeSection />
      <TopMenu />
      <MainTitle />
      <SectionProjects />
      <MainContent />
    </div>
  )
}

export default App

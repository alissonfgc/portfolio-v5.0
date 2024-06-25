import './styles/components/app.sass';

import BGNoise from './components/BGNoise';
import HomeSection from './components/HomeSection';
import MainContent from './components/MainContent';
import MainTitle from './components/MainTitle';
import Gradient from './components/Gradient';
import TopMenu from './components/TopMenu';

alert('O site ainda está em desenvolvimento');

function App() {
  return (
    <div id="portfolio">
      <BGNoise />
      <HomeSection />
      <TopMenu />
      <MainTitle />
      <MainContent />
      <Gradient />
    </div>
  )
}

export default App

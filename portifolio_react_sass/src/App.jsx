import MainContent from './components/MainContent';
import MainTitle from './components/MainTitle';
import TopMenu from './components/TopMenu';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <TopMenu />
      <MainTitle />
      <MainContent />
    </div>
  )
}

export default App

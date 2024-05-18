import MainContent from './components/MainContent';

import './styles/components/app.sass';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div id="portfolio">
      <h1>Full-Stack Java Developer</h1>
      <TopMenu />
      <MainContent />
    </div>
  )
}

export default App

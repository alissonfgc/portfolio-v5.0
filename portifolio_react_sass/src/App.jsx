import MainContent from './components/MainContent';
import TopMenu from './components/TopMenu';

import './styles/components/app.sass';

function App() {
  return (
    <div id="portfolio">
      <h2>Olá 👋 eu sou o Alisson</h2>
      <h1>Full-Stack <br />Java Developer</h1>
      <h2>Tenho (var) anos de idade <br /> Conheça meus projetos!</h2>
      <TopMenu />
      <MainContent />
    </div>
  )
}

export default App

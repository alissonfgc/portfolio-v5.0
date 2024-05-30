import Logo from "../img/Logo.png";

import "../styles/components/topmenu.sass";

const TopMenu = () => {
  return (
    <nav id="top-menu">
      <img src={Logo} alt="Alissonfgc" />
      <div id='link-list'>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Curriculo</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
      <p>botao idioma</p>
    </nav>
  )
}

export default TopMenu
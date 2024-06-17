import "../styles/components/topmenu.scss";

import Logo from "../img/Logo.png";

const TopMenu = () => {
    return (
        <div id="nav-space">
            <nav>
                <input type="checkbox" id="sidebar-active"></input>
                <label for="sidebar-active" class="open-sidebar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </label>
                <label id="overlay" for="sidebar-active"></label>
                <div class="links-container">
                    <label for="sidebar-active" class="close-sidebar-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </label>

                    <a class="home-link" href="">
                        <img src={Logo} alt="Alissonfgc"></img>
                    </a>
                    <a href="">Projetos</a>
                    <a href="">Habilidades</a>
                    <a href="">Curriculo</a>
                    <a href="">Contato</a>
                </div>
            </nav>
        </div>
    );
}

export default TopMenu
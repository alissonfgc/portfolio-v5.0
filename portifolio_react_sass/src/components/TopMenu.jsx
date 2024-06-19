import "../styles/components/topmenu.scss";

import { Link } from "react-scroll"
import Logo from "../img/Logo.png";
import { useState } from "react";

const TopMenu = () => {
    const [click, setClick] = useState(false)
    const handClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

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

                    <a href="/" class="home-link">
                        <img src={Logo} alt="Alissonfgc"></img>
                    </a>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="main-projects" spy={true} smooth={true} offset={-60} duration={500}>Projetos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about-me-section" spy={true} smooth={true} offset={-100} duration={500}>Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="curriculum-section" spy={true} smooth={true} offset={-100} duration={500}>Curriculo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact-section" spy={true} smooth={true} offset={-100} duration={500}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default TopMenu
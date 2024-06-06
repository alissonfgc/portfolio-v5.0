import '../styles/components/footer.sass'

import { FaBalanceScale, FaWhatsapp, FaGithub  } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer'>
            <div id="midle-content">
                <p>Por alissonfgc  <a href="https://github.com/alissonfgc" className="link-button">GitHub <FaGithub /></a> | <FaBalanceScale /> MIT License | <a href="https://wa.me/5561981145073" className="link-button" id='wpp-button'>WhatsApp <FaWhatsapp /></a></p>
            </div>
            <div id="side-menu">
                <a href="" className="link-button">Inicio</a>
                <a href="#main-projects" className="link-button">Projetos</a>
                <a href="#about-me-section" className="link-button">Sobre</a>
                <a href="#curriculum-section" className="link-button">Curriculo</a>
                <a href="#contact-section" className="link-button">Contato</a>
            </div>
        </div>
    )
}

export default Footer
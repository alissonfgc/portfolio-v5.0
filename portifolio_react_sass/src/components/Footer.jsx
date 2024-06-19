import '../styles/components/footer.sass'

import { Link } from "react-scroll"
import { FaBalanceScale, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (
        <div id='footer'>
            <div id="midle-content">
                <p>Por alissonfgc  <a href="https://github.com/alissonfgc" className="link-button">GitHub <FaGithub /></a> | <FaBalanceScale /> MIT License | <a href="https://wa.me/5561981145073" className="link-button" id='wpp-button'>WhatsApp <FaWhatsapp /></a></p>
            </div>
            <div id="side-menu">
                <Link className="link-button" to="home-section-noise" spy={true} smooth={true} offset={-60} duration={500}>Inicio</Link>
                <Link className="link-button" to="main-projects" spy={true} smooth={true} offset={-60} duration={500}>Projetos</Link>
                <Link className="link-button" to="about-me-section" spy={true} smooth={true} offset={-100} duration={500}>Sobre</Link>
                <Link className="link-button" to="curriculum-section" spy={true} smooth={true} offset={-100} duration={500}>Curriculo</Link>
                <Link className="link-button" to="contact-section" spy={true} smooth={true} offset={-100} duration={500}>Contato</Link>
            </div>
        </div>
    )
}

export default Footer
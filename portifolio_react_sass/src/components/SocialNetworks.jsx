import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PDFFile from "../pdf-files/Curriculo-DEV-Java-Alisson_Fernandes.pdf"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin /> , link: "https://www.linkedin.com/in/alissonfgc"},
    { name: "github", icon: <FaGithub /> , link: "https://github.com/alissonfgc"},
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
            <a href={PDFFile} class="link-button" target="_blank" className="social-btn" id="pdf"><FaFilePdf /></a>
        </section>
    );
};

export default SocialNetworks
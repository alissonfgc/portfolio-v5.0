import '../styles/components/curriculumsection.scss'

import PDFFile from "../pdf-files/curriculo-dev-ALISSON_FERNANDES.pdf"
import CurriculumImage from "../img/curriculum-img.jpg"
import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const socialNetworks = [
    { name: "Linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/alissonfgc" },
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/alissonfgc" },
];

const CurriculumSection = () => {
    return (
        <sction id="curriculum-section">
            <div id="curriculum-title">
                <h2>Curriculo</h2>
            </div>
            <div id="curriculum-content">
                <div id="div-curriculum-img">
                    <img id="curriculum-img" src={CurriculumImage} alt="Curriculum" />
                    <a id="link-button" href={PDFFile} target="_blank" >Visualizar curriculo <FaFilePdf /></a>
                </div>
                <div id="secundary-content">
                    {socialNetworks.map((network) => (
                        <a href={network.link} class="link-button" id={network.name} key={network.name}>
                            {network.name} {network.icon}
                        </a>
                    ))}
                    <a href={PDFFile} class="link-button" download="Curriculo-Alisson-Fernandes"> Download curriculo <FaFileDownload /></a>
                </div>
            </div>
        </sction>
    )
}

// rel="noopener noreferrer"

export default CurriculumSection
import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin /> , link: "https://www.linkedin.com/in/alissonfgc"},
    { name: "github", icon: <FaGithub /> , link: "https://github.com/alissonfgc"},
    { name: "pdf", icon: <FaFilePdf /> , link: "#Curriculo"},
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks
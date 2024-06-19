import '../styles/components/aboutmesection.scss'

import Avatar from '../img/avatar-alissonfgc.png'
import LogoEducation from '../img/logo-faculdade.png'
import { IoSchool } from "react-icons/io5";

const AboutMeSection = () => {
    return (
        <section id="about-me-section">
            <div id='content'>
                <div id="text-area">
                    <h2>Sobre mim</h2>
                    <p>
                        Sempre me interessei pela área da programação, antes de começar na faculdade já estudava Python,
                        mesmo que tenha concluído o curso, continuo estudando diariamente. Atualmente estou estudando 
                        <b> JavaScript, Java, Spring Boot (Framework de Java), React (Framework de JavaScript)</b>, entre outras tecnologias.
                        Pretendo realizar a certificação Java da Oracle até o fim deste ano.

                    </p>
                    <br/>
                    <p>
                        Procuro sempre me aperfeiçoar e estudar algumas Skills necessárias para um desenvolvedor,
                        como o entendimento do documentos de requisitos, UML, metodologias de desenvolvimento de software ágeis,
                        entre outros, tenho muito interesse em atuar como <b>Desenvolvedor Full Stack Java </b>ou<b> Desenvolvedor Back-end Java.</b>

                    </p>
                </div>
                <div id="secundary-area">
                    <img id='logo-avatar' src={Avatar} alt="avatar" />
                    <div id="education">
                        <div id="icon-education">
                            <IoSchool />
                        </div>
                        <h3>Formação academica</h3>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                        <img id='logo-education' src={LogoEducation} alt="" />
                    </div>
                </div>
            </div>
            <div id="skills-section">
                <h2>Habilidades</h2>
                <div id="skills-card">
                    <div className="skills-description">
                        <div className="title-skill">
                            <h3>Front-end</h3>
                        </div>
                        <div className="skill-logo">HTML</div>
                        <div className="skill-logo">CSS</div>
                        <div className="skill-logo">JavaScript</div>
                    </div>
                    <div className="skills-description">
                        <div className="title-skill">
                            <h3>Back-end</h3>
                        </div>
                        <div className="skill-logo">Java</div>
                        <div className="skill-logo">MySQL</div>
                        <div className="skill-logo">MongoDB</div>
                        <div className="skill-logo">PostgreSQL</div>
                        <div className="skill-logo">Docker</div>
                        <div className="skill-logo">AWS</div>
                    </div>
                    <div className="skills-description">
                        <div className="title-skill">
                            <h3>Framework</h3>
                        </div>
                        <div className="skill-logo">Java Spring</div>
                        <div className="skill-logo">Spring Boot</div>
                        <div className="skill-logo">Hibernate</div>
                        <div className="skill-logo">React</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
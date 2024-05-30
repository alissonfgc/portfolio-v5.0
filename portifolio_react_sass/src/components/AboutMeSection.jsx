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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dolorem architecto ea cupiditate non voluptate velit libero. Veniam excepturi magnam eligendi accusamus ullam dolore aliquid voluptas explicabo, ea quam vel!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sequi illum at nostrum omnis inventore laudantium odit laborum, esse consequatur error vero ab iste est provident sed dicta, fugiat quaerat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae fuga eligendi placeat. Voluptates asperiores voluptas, iusto esse ipsa totam odit ipsam molestiae? Nihil est quas, praesentium cupiditate quia exercitationem.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aliquam vitae suscipit, obcaecati dolore illo esse sequi nam ea facilis numquam quas fugit praesentium adipisci porro expedita, nostrum deserunt laboriosam?
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
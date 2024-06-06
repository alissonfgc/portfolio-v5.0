import '../styles/components/contactsection.scss'

import animationData from "../assets/AnimationPhoneNotification.json"
import Lottie from "lottie-react"
import { FaMapLocationDot } from "react-icons/fa6";
import ContactTable from './ContactTable';

const defaultOptions = {

    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const interactivity = {
    mode: "scroll",
    actions: [
        {
            visibility: [0, 0.2],
            type: "stop",
            frames: [1],
        },
        {
            visibility: [0.2, 1],
            type: "seek",
            frames: [25, 45],
        }
    ],
};

const ContactSection = () => {
    return (
        <section id="contact-section" >
            <div id="content">
                <div id="main-area">
                    <h2>Entre em contato comigo!</h2>
                    <ContactTable />
                    <div id="secundary-info-area">
                        <p><FaMapLocationDot id="icon" /> Moro em Brasilia, DF</p>
                    </div>
                </div>
                <div id="secundary-area">
                    <Lottie interactivity={interactivity} animationData={animationData} />
                </div>
            </div>
        </section >
    )
}

export default ContactSection
import '../styles/components/contacttable.scss'

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const ContactTable = () => {
    return (
        <div id="#table-space">
            <table>
                <tbody>
                    <tr>
                        <th>Whatsapp</th>
                        <td data-title="Whatsapp">(61) 9 8114-5073</td>
                        <td>
                            <a href="https://wa.me/5561981145073" target="_blank">
                                <button id='wpp-button'>WhatsApp <FaWhatsapp/></button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th>Gmail</th>
                        <td data-title="Gmail">alissonfgcdev@gmail.com</td>
                        <td>
                            <a href="mailto:alissonfgcdev@gmail.com">
                                <button>Email <BiLogoGmail /></button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th>LinkedIn</th>
                        <td data-title="LinkedIn">https://www.linkedin.com/in/alissonfgc</td>
                        <td>
                            <a href="https://www.linkedin.com/in/alissonfgc" target="_blank">
                                <button>LinkedIn <FaLinkedin /></button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ContactTable
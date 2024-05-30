import SocialNetworks from "./SocialNetworks"

import "../styles/components/maintitle.sass"

const MainTitle = () => {
    return (
        <div id="main-title">
            <div id="center-title">
                <div id="order-1"><h2>Olá 👋 eu sou o Alisson</h2></div>
                <div id="order-2">
                    <h1>Full-Stack <br />Java Developer</h1>
                    <SocialNetworks />
                </div>
                <div id="order-3"><h2>Tenho (var) anos de idade <br /> Conheça meus projetos!</h2></div>
            </div>
        </div>
    )
}

export default MainTitle
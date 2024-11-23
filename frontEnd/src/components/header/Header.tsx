import Search from "../../assets/search.svg"
import Bell from "../../assets/bell.svg"
import PerfilImg from "../../assets/Ellipse 757.svg"
import './Header.css'

function Header() {

    return(
        <header className="header">

            <div className="types">
                <a href="/">Type Enem</a>
                <a href="/">Type Grammar</a>
            </div>

            <div className="icons">
                <img src={Search} alt="Icone de persquisar"/>
                <img src={Bell} alt="Icone de notificação"/>
                <img src={PerfilImg} alt="Icone de perfil"/>
                Gustavo
            </div>
        
        </header>

    )
    
}

export default Header;
import Search from "../../assets/search.svg"
import Bell from "../../assets/bell.svg"
import PerfilImg from "../../assets/Ellipse 757.svg"
import './Header.css'

interface HeaderProps{
    choiceEnem: ()=>void;
    choiceGrammar: ()=>void; 
    isChoiceEnem: boolean;
    isChoiceGrammar: boolean;
}

export function Header({choiceEnem, choiceGrammar, isChoiceEnem, isChoiceGrammar}: HeaderProps) {
    return(
        <header className="header">

            <div className="types">
                <section  className = { isChoiceEnem ? "activechoiceEnem" : "choiceEnem" } onClick={choiceEnem} >Type Enem</section>
                <section  className = { isChoiceGrammar ? "activechoiceGrammar" : "choiceGrammar" } onClick={choiceGrammar} >Type Grammar</section>
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

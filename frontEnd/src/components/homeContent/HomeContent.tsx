import "./HomeContent.css"
import BackgroundImg from "../../assets/imgBackground.svg"
import {Button} from "../button/Button"
export function HomeContent(){
    return(
        <div className="content">

                <div className="imageContainer">
                    <img src={BackgroundImg} alt="imagem de fundo" />
                </div>

                <div className="contentText">
                    <p>Select the type of question you'd like to practice and click "Draw Question" to receive a random challenge. Get ready to test your skills and improve your English knowledge!</p>
                    <Button>
                        Draw Question
                    </Button>
                </div>

        </div>
    )
}
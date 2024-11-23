import Navibar from "../components/navibar/Navibar"
import BackgroundImg from "../assets/imgBackground.svg"
import Header from "../components/header/Header"
import './HomePage.css'

function HomePage() {

  return (
    <div className=" contentTotal ">

        <Navibar/>

        <section className="mainContent">

           <Header/>

            <div className="content">

                <div className="imageContainer">
                    <img src={BackgroundImg} alt="imagem de fundo" />
                </div>

                <div className="contentText">
                    <p>Select the type of question you'd like to practice and click "Draw Question" to receive a random challenge. Get ready to test your skills and improve your English knowledge!</p>
                    <button className="button">Draw Question</button>
                </div>

            </div>

        </section>

    </div>
    
    
  )
}

export default HomePage
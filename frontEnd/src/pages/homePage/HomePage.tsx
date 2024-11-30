import {Navibar} from "../../components/navibar/Navibar"
import {Header} from "../../components/header/Header"
import  {HomeContent}  from "../../components/homeContent/HomeContent"
import './HomePage.css'
import { useState } from "react"
import { QuestionContainer } from "../../components/questionContainer/QuestionContainer"


export function HomePage() {

  const[showQuestionClick, setShowQuestion] = useState(false);

  function showQuestion(){
    setShowQuestion(true);
  }

  return (

    <div className=" contentTotal ">

        <Navibar/>

        <section className="mainContent">

            <Header/>

            {showQuestionClick ? <QuestionContainer/> : <HomeContent showQuestion = {showQuestion} />}
            
            
        </section>

    </div>
  )
}
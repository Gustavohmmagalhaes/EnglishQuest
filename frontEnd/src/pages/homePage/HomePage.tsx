import {Navibar} from "../../components/navibar/Navibar"
import {Header} from "../../components/header/Header"
import  {HomeContentEnem}  from "../../components/homeContent/HomeContent"
import './HomePage.css'
import { useState } from "react"
import { QuestionContainer } from "../../components/questionContainer/QuestionContainer"
// import { Question } from "../../components/question/questionContent"


export function HomePage() {

  const[showQuestionClick, setShowQuestion] = useState(false);

  function showQuestion(){
    setShowQuestion(true);
  }

  const[isChoiceEnem, setChoiceEnem] = useState(false);

  function choiceEnem(){
    setChoiceEnem((prev) => !prev);
    setShowQuestion(false);
    setChoiceGrammar(false);

    const section = document.getElementById("choiceEnem") as HTMLElement;

    if(isChoiceEnem){
      section.style.fontWeight = "normal"; 

    }else{
      section.style.fontWeight = "600"; 
    }
    
  }

  const[isChoiceGrammar, setChoiceGrammar] = useState(false);

  function choiceGrammar(){
    setChoiceGrammar((prev) => !prev);
    setShowQuestion(false);
    setChoiceEnem(false);

    const section = document.getElementById("choiceGrammar") as HTMLElement;

    if(isChoiceGrammar){
      section.style.fontWeight = "normal"; 

    }else{
      section.style.fontWeight = "600"; 
    }
    
  }


  return (

    <div className=" contentTotal ">

        <Navibar/>

        <section className="mainContent">

            <Header 
            
            choiceEnem = {choiceEnem}
            choiceGrammar = {choiceGrammar}
            isChoiceEnem = {isChoiceEnem}
            isChoiceGrammar = {isChoiceGrammar}
        />

        {
          isChoiceEnem && showQuestionClick && !isChoiceGrammar ? (
            <QuestionContainer questionType="Enem" />
          ) : isChoiceGrammar && showQuestionClick && !isChoiceEnem ? (
            <QuestionContainer questionType="Grammar" />
          ) : <HomeContentEnem showQuestion={showQuestion} />
        }

        </section>

    </div>
  )
}
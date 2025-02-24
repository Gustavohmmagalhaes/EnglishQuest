import "./ProgressPage.css"
import { Navibar } from "../../components/navibar/Navibar"
import { Header } from "../../components/header/Header"
import { ProgressDiv } from "../../components/progressDiv/ProgressDiv"
import { useEffect, useState } from "react";
import { useDashbord } from "../../context/dashbordContext";

export function ProgressPage() {

    const [isChoiceEnem, setChoiceEnem] = useState(false);
    const [isChoiceGrammar, setChoiceGrammar] = useState(false);
    const {correctAnswerEnem, correctAnswerGrammar, wrongAnswerEnem, wrongAnswerGrammar, totalQuestions} = useDashbord();
    const [ritTotalEnem, setRitTotalEnem] = useState(0);
    const [ritTotalGrammar, setRitTotalGrammar] = useState(0);
    const [errorRateEnem, setErrorRateEnem] = useState(0);
    const [ritRateGrammar, setRitRateGrammar] = useState(0);
    const [errorRateGrammar, setErrorRateGrammar] = useState(0);
    const [ritRateEnem, setRitRateEnem] = useState(0);

    function handleChoice(choiceType: "Enem" | "Grammar") {

        if (choiceType === "Enem") {
            setChoiceEnem(true);
            setChoiceGrammar(false);
        } else {
            setChoiceEnem(false);
            setChoiceGrammar(true);
        }
    }

    const calcRitRateEnem = (RitRateEnem:number, totalQuestion:number) =>{
        console.log(RitRateEnem)
        console.log(totalQuestion)
        let porcentRitEnem = (RitRateEnem/totalQuestion)*100;
        setRitRateEnem(porcentRitEnem);
    }

    useEffect(()=>{
        calcRitRateEnem(correctAnswerEnem,totalQuestions);
    },[correctAnswerEnem,totalQuestions])

    const calcErrorRateEnem = (ErrorRateEnem:number, totalQuestion:number) =>{
        let porcentErrorEnem = (ErrorRateEnem/totalQuestion)*100;
        setErrorRateEnem(porcentErrorEnem);
    }

    useEffect(()=>{
        calcErrorRateEnem(wrongAnswerEnem,totalQuestions);
    },[wrongAnswerEnem,totalQuestions])

    const calcRitRateGrammar = (RitRateGrammar:number, totalQuestion:number) =>{
        let porcentRitGrammar = (RitRateGrammar/totalQuestion)*100;
        setRitRateGrammar(porcentRitGrammar);
    }

    useEffect(()=>{
        calcRitRateGrammar(correctAnswerGrammar,totalQuestions);
    },[correctAnswerGrammar,totalQuestions])

    const calcErrorRateGrammar = (ErrorRateGrammar:number, totalQuestion:number) =>{
        let porcentErrorGrammar = (ErrorRateGrammar/totalQuestion)*100;
        setErrorRateGrammar(porcentErrorGrammar);
    }

    useEffect(()=>{
        calcErrorRateGrammar(wrongAnswerGrammar,totalQuestions);
    },[wrongAnswerGrammar,totalQuestions])

    const calcRateTotalEnem = (correctAnswerEnem:number, wrongAnswerEnem:number) =>{
        let porcentRateTotalEnem = ((correctAnswerEnem+wrongAnswerEnem)/totalQuestions)*100;
        setRitTotalEnem(porcentRateTotalEnem);
    }

    useEffect(()=>{
        calcRateTotalEnem(correctAnswerEnem,wrongAnswerEnem);
    },[correctAnswerEnem,wrongAnswerEnem,totalQuestions])

    const calcRateTotalGrammar = (correctAnswerGrammar:number, wrongAnswerGrammar:number) =>{
        let porcentRateTotalGrammar = ((correctAnswerGrammar+wrongAnswerGrammar)/totalQuestions)*100;
        setRitTotalGrammar(porcentRateTotalGrammar);
    }

    useEffect(()=>{
        calcRateTotalGrammar(correctAnswerGrammar,wrongAnswerGrammar);
    },[correctAnswerGrammar,wrongAnswerGrammar,totalQuestions])

    console.log("Acertos Enem:"+ritRateEnem)
    console.log("Errors Enem"+errorRateEnem)
    console.log("Acertos Grammar:"+ritRateGrammar)
    console.log("Erros Grammar"+errorRateGrammar) 
    console.log("total enem"+ritTotalEnem) 
    console.log("total Grammar"+ritTotalGrammar) 


    return (
        <div className=" contentTotal ">

            <Navibar />

            <section className="mainContentProgress">

                <Header
                    choiceEnem={() => handleChoice("Enem")}
                    choiceGrammar={() => handleChoice("Grammar")}
                    isChoiceEnem={isChoiceEnem}
                    isChoiceGrammar={isChoiceGrammar}

                />

                <section className="contentProgress">


                    {isChoiceEnem ? (
                        <>
                            <ProgressDiv
                                title="WRONG QUESTIONS ENEM"
                                number={wrongAnswerEnem}
                                descriptionRate="ERROR RATE"
                                percentCompleted = {errorRateEnem}
                            />

                            <ProgressDiv
                                title="TOTAL QUESTIONS ENEM"
                                number={totalQuestions}
                                descriptionRate="COMPLETION RATE"
                                percentCompleted = {ritTotalEnem}
                            />

                            <ProgressDiv
                                title="CORRECT QUESTIONS ENEM"
                                number={correctAnswerEnem}
                                descriptionRate="HIT RATE"
                                percentCompleted = {ritRateEnem}
                            />
                        </>

                    ) : (

                        <>

                            <ProgressDiv
                                title="WRONG QUESTIONS GRAMMAR"
                                number={wrongAnswerGrammar}
                                descriptionRate="ERROR RATE"
                                percentCompleted = {errorRateGrammar}
                            />

                            <ProgressDiv
                                title="TOTAL QUESTIONS GRAMMAR"
                                number={totalQuestions}
                                descriptionRate="COMPLETION RATE"
                                percentCompleted = {ritTotalGrammar}
                            />

                            <ProgressDiv
                                title="CORRECT QUESTIONS GRAMMAR"
                                number={correctAnswerGrammar}
                                descriptionRate="HIT RATE"
                                percentCompleted  = {ritRateGrammar}
                            />
                        </>
                    )}



                </section>

            </section>

        </div>
    )
}
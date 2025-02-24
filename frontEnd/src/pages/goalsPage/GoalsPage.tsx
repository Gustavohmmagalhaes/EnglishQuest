import { Navibar } from "../../components/navibar/Navibar"
import { Header } from "../../components/header/Header"
import { GoalsContent } from "../../components/goalsContent/GoalsContent"
import "./GoalsPage.css"
import { useState } from "react"




export function GoalsPage() {

    const [isChoiceEnem, setChoiceEnem] = useState(false);
    const [isChoiceGrammar, setChoiceGrammar] = useState(false);
    const [totalGoalEnem, setTotalGoalEnem] = useState(0);
    const [totalGoalGrammar, setTotalGoalGrammar] = useState(0);

    function handleChoice(choiceType: "Enem" | "Grammar") {

        if (choiceType === "Enem") {
            setChoiceEnem(true);
            setChoiceGrammar(false);
        } else {
            setChoiceEnem(false);
            setChoiceGrammar(true);
        }
    }

    return (
        <div className="contentTotal">

            <Navibar />

            <section className="mainContent">

                <Header
                    choiceEnem={() => handleChoice("Enem")}
                    choiceGrammar={() => handleChoice("Grammar")}
                    isChoiceEnem={isChoiceEnem}
                    isChoiceGrammar={isChoiceGrammar}
                />

                <GoalsContent 
                    isChoiceEnem = {isChoiceEnem}
                    isChoiceGrammar={isChoiceGrammar}
                    totalGoalEnem = {totalGoalEnem}
                    setTotalGoalEnem = {setTotalGoalEnem}
                    totalGoalGrammar = {totalGoalGrammar}
                    setTotalGoalGrammar = {setTotalGoalGrammar}
                
                />

                

            </section>

        </div>
    )
}
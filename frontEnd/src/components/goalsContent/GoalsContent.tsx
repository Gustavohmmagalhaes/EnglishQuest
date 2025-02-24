import { useEffect, useState } from "react";
import { useDashbord } from "../../context/dashbordContext";
import { Button } from "../button/Button";
import "./GoalsContent.css";

interface GoalsContentProps {
    isChoiceEnem: boolean;
    isChoiceGrammar: boolean;
    totalGoalEnem: number;
    totalGoalGrammar: number;
    setTotalGoalEnem: (value: number) => void;
    setTotalGoalGrammar: (value: number) => void;
}

export function GoalsContent({ 
    isChoiceEnem, 
    isChoiceGrammar, 
    totalGoalEnem, 
    totalGoalGrammar, 
    setTotalGoalEnem, 
    setTotalGoalGrammar 
}: GoalsContentProps) {
    
    const { correctAnswerEnem, correctAnswerGrammar, wrongAnswerEnem, wrongAnswerGrammar } = useDashbord();
    const [percentCompleted, setPercentCompleted] = useState<number>(0);

    function handleSetPercentGoals(correctAnswer: number, wrongAnswer: number, totalGoal: number) {
        if (totalGoal <= 0) {
            setPercentCompleted(0);
            return;
        }
        const totalQuestionsAnswered = correctAnswer + wrongAnswer;
        const percentCompleted = Math.min((totalQuestionsAnswered / totalGoal) * 100, 100);
        setPercentCompleted(percentCompleted);
    }

    useEffect(() => {
        handleSetPercentGoals(
            isChoiceEnem ? correctAnswerEnem : correctAnswerGrammar,
            isChoiceEnem ? wrongAnswerEnem : wrongAnswerGrammar,
            isChoiceEnem ? totalGoalEnem : totalGoalGrammar
        );
    }, [isChoiceEnem]);

    const getProgressStyle = (): React.CSSProperties => ({
        ["--progress" as string]: `${percentCompleted ?? 0}%`,
    }); // <-- Ponto e vírgula adicionado aqui

    const getValue = () => {
        if (isChoiceEnem) return totalGoalEnem || "";
        if (isChoiceGrammar) return totalGoalGrammar || "";
        return ""; // Retorna vazio ao invés de disparar alertas desnecessários
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value ? Number(e.target.value) : 0;

        if (isChoiceEnem) {
            setTotalGoalEnem(newValue);
        } else if (isChoiceGrammar) {
            setTotalGoalGrammar(newValue);
        }
    };

    return (
        <>
            <section className="contentGoals">
                <div className="GoalsDivs">
                    <section className="topGoals">
                        <p>Here you can create a weekly question goal, select the question type and enter the desired number of questions!</p>
                        
                        <input
                            className="inputNumber"
                            type="number"
                            value={getValue()}
                            onChange={handleChange}
                            disabled={!isChoiceEnem && !isChoiceGrammar} // Desabilita o input caso nenhuma opção esteja selecionada
                        />
                    </section>

                    <section className="downGoals">
                        <div className="percentGoals" style={getProgressStyle()}></div>
                        <p>COMPLETION RATE</p>
                    </section>
                </div>
            </section>

            <div className="startButton">
                <Button onClick={() =>
                    handleSetPercentGoals(
                        isChoiceEnem ? correctAnswerEnem : correctAnswerGrammar,
                        isChoiceEnem ? wrongAnswerEnem : wrongAnswerGrammar,
                        isChoiceEnem ? totalGoalEnem : totalGoalGrammar
                    )
                }>
                    START
                </Button>

                <Button>
                    Choose new goal
                </Button>
            </div>
        </>
    );
}

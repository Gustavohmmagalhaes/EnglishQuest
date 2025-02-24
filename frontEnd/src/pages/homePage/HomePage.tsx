import { Navibar } from "../../components/navibar/Navibar";
import { Header } from "../../components/header/Header";
import { HomeContentEnem } from "../../components/homeContent/HomeContent";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { QuestionContainer } from "../../components/questionContainer/QuestionContainer";
import { fetchQuestionsEnem, fetchQuestionGrammar } from "../../service/QuestService";

interface Question {
    id: number;
    year: number;
    test: string;
    statement: string;
    options: { id: string; text: string; correct: boolean }[];
    optionCorrect: string;
}

export function HomePage() {
    const [showQuestionClick, setShowQuestion] = useState(false);
    const [questionsEnem, setQuestionsEnem] = useState<Question[]>([]);
    const [questionsGrammar, setQuestionsGrammar] = useState<Question[]>([]);
    const [isChoiceEnem, setChoiceEnem] = useState(false);
    const [isChoiceGrammar, setChoiceGrammar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const questions = await fetchQuestionsEnem();
                setQuestionsEnem(questions);
            } catch (error) {
                console.error("Erro ao buscar as questões Enem:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const questions = await fetchQuestionGrammar();
                setQuestionsGrammar(questions);
            } catch (error) {
                console.error("Erro ao buscar as questões de Gramática:", error);
            }
        };
        fetchData();
    }, []);

    function showQuestion() {
        setShowQuestion(true);
    }

    function handleChoice(choiceType: "Enem" | "Grammar") {
        setShowQuestion(false);
        setChoiceEnem(choiceType === "Enem");
        setChoiceGrammar(choiceType === "Grammar");
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
                {showQuestionClick ? (
                    isChoiceEnem ? (
                        <QuestionContainer      
                            questionsArray={questionsEnem}
                            choiceType="Enem"
                        />
                    ) : isChoiceGrammar ? (
                        <QuestionContainer  
                            questionsArray={questionsGrammar}
                            choiceType="Grammar"
                        />
                    ) : null
                ) : (
                    <HomeContentEnem showQuestion={showQuestion} />
                )}
            </section>
        </div>
    );
}

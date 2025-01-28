import { Navibar } from "../../components/navibar/Navibar";
import { Header } from "../../components/header/Header";
import { HomeContentEnem } from "../../components/homeContent/HomeContent";
import './HomePage.css';
import { useState, useEffect } from "react";
import { QuestionContainer, drawQuestion as drawQuestionFuncEnem, drawQuestion as drawQuestionFuncGrammar } from "../../components/questionContainer/QuestionContainer";
import { fetchQuestionsEnem, fetchQuestionGrammar } from "../../service/QuestService";


interface QuestionEnem {
    id: number;
    year: number;
    test: string;
    statement: string;
    options: { id: string; text: string; correct: boolean }[];
}


interface QuestionGrammar {
    id: number;
    year: number;
    test: string;
    statement: string;
    options: { id: string; text: string; correct: boolean }[];
}


export function HomePage() {
    const [showQuestionClick, setShowQuestion] = useState(false);
    const [questionsEnem, setQuestionsEnem] = useState<QuestionEnem[]>([]);
    const [questionsGrammar, setQuestionsGrammar] = useState<QuestionGrammar[]>([]);
    const [sortQuestionEnem, setSortQuestionEnem] = useState<QuestionEnem | null>(null);
    const [sortQuestionGrammar, setSortQuestionGrammar] = useState<QuestionGrammar | null>(null);
    const [isChoiceEnem, setChoiceEnem] = useState(false);
    const [isChoiceGrammar, setChoiceGrammar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const questionsEnem = await fetchQuestionsEnem(); // tenho que trocar isso para a parte de gramatica 
                setQuestionsEnem(questionsEnem); // vou precisar de outro setquestion
            } catch (error) {
                console.error('Erro ao buscar as questões Enem:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const questionGrammar = await fetchQuestionGrammar();
                setQuestionsGrammar(questionGrammar);
            }catch(error){
                console.error('Erro ao buscar as questões Gramaticas:', error)
            }
        };
        fetchData();
    },[])


    function showQuestion() {
        setShowQuestion(true);
        drawQuestionFuncEnem(questionsEnem, setSortQuestionEnem);
        drawQuestionFuncGrammar(questionsGrammar, setSortQuestionGrammar);
    }

    function handleChoice(choiceType: "Enem" | "Grammar") {
        setShowQuestion(false);
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
                {isChoiceEnem && showQuestionClick && !isChoiceGrammar ? (
                    <QuestionContainer  drawQuestion={drawQuestionFuncEnem} sortQuestion={sortQuestionEnem} setSortQuestion={setSortQuestionEnem} questionsArray={questionsEnem} />
                ) : isChoiceGrammar && showQuestionClick && !isChoiceEnem ? (
                    <QuestionContainer  drawQuestion={drawQuestionFuncGrammar} sortQuestion={sortQuestionGrammar} setSortQuestion={setSortQuestionGrammar} questionsArray={questionsGrammar}/>
                ) : (
                    <HomeContentEnem showQuestion={showQuestion} />
                )}
            </section>
        </div>
    );
}

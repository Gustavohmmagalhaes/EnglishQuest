import { useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import "./QuestionContainer.css";


interface QuestionContainerProps {
    drawQuestion: (questions: Question[], setSortQuestion: (question: Question | null) => void) => void;
    sortQuestion: Question | null; 
    setSortQuestion: (question: Question | null) => void;
    questionsArray: Question[];
}

interface Question {
    id: number;
    year: number;
    test: string;
    statement: string;
    options: { id: string; text: string; correct: boolean }[];
}

export const drawQuestion = (questions: (Question[] | null), setSortQuestion: (question: Question | null) => void) => {
    if (questions && questions.length > 0) {
        const index = Math.floor(Math.random() * questions.length);
        setSortQuestion(questions[index]);
    
    } else {
        console.error("void array");
    }
};

export function QuestionContainer({ drawQuestion, sortQuestion, setSortQuestion, questionsArray }: QuestionContainerProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [showParagraph, setShowParagraph] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const optionsList = document.querySelector('li');
            if (optionsList && !optionsList.contains(event.target as Node)) {
                setShowParagraph(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(()=>{
        if(selectedOption)
        checkAnswer(selectedOption);
    },[selectedOption])

    const handleOptionClick = (optionID: string) => {
        setSelectedOption(optionID);
        
    };

    const checkAnswer = (selectedOption:string) => {
       
        const select = sortQuestion?.options.find(option => option.id === selectedOption);
        if (select) {
            setIsAnswerCorrect(select.correct);
            setShowParagraph(true);
        } else {
            setIsAnswerCorrect(false);
            setShowParagraph(true);
        }
        console.log( selectedOption)
    };

    return (
        <div className="questionContainer" ref={containerRef}>
            <div className="question">
                <div className="enem">
                    {sortQuestion && (
                        <div className="options">
                            <p>{sortQuestion.test}</p>
                            <p className="statement">{sortQuestion.statement}</p>
                            <ul>
                                {sortQuestion.options.map(option => (
                                    <li key={option.id} onClick={() => handleOptionClick(option.id)}>
                                        {option.text}
                                        
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="commandArea">
                <div className="answer">
                    {showParagraph ? (
                        isAnswerCorrect  ? (
                            <p>Você acertou a questão!</p>
                        ) : (
                            <p>Resposta errada, tente de novo!</p>
                        )
                    ) : null}
                </div>
                <div>
                    <Button onClick={() => drawQuestion(questionsArray, setSortQuestion)}>
                        Draw new question
                    </Button>
                </div>
            </div>
        </div>
    );
}

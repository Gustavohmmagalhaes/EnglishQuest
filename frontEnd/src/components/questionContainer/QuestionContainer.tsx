import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import "./QuestionContainer.css";
import { useDashbord } from "../../context/dashbordContext";
import { FaTerminal } from "react-icons/fa";

interface Option {
    id: string;
    text: string;
    correct: boolean;
}

interface Question {
    id: number;
    year: number;
    test: string;
    statement: string;
    options: Option[];
    optionCorrect: string;
}

interface QuestionContainerProps {
    questionsArray: Question[];
    choiceType: "Enem" | "Grammar";
}

export function QuestionContainer({
    questionsArray,
    choiceType
}: QuestionContainerProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [showParagraph, setShowParagraph] = useState<boolean>(false);
    const [sortQuestion, setSortQuestion] = useState<Question | null>(null);
    const [isAnswered, setIsAnswered] = useState<boolean>(false); // Estado para bloquear novas respostas
    const [arrayEnemIndexUsed, setArrayEnemIndexUsed] = useState<number[]>([]);
    const [arrayGrammarIndexUsed, setArrayGrammarIndexUsed] = useState<number[]>([]);

    const {
        correctAnswerEnem,
        correctAnswerGrammar,
        wrongAnswerEnem,
        wrongAnswerGrammar,
        setCorrectAnswerEnem,
        setCorrectAnswerGrammar,
        setWrongAnswerEnem,
        setWrongAnswerGrammar,
        setTotalQuestions
    } = useDashbord();

    useEffect(() => {
        setTotalQuestions(questionsArray.length);
    }, [questionsArray]);

    useEffect(() => {
        drawNewQuestion();
    }, []);

    const handleOptionClick = (optionID: string) => {
        if (isAnswered) return; // Se já respondeu, não permite clicar novamente
        setSelectedOption(optionID);
        setIsAnswered(true); // Marca a questão como respondida
    };

    useEffect(() => {
        if (selectedOption)
            checkAnswer(selectedOption);
    }, [selectedOption]);

    const checkAnswer = (selectedOption: string) => {
        const selected = sortQuestion?.options.find(option => option.id === selectedOption);
        const isCorrect = selected ? selected.correct : false;

        setIsAnswerCorrect(isCorrect);
        setShowParagraph(true);

        if (isCorrect) {
            if (choiceType === "Enem") {
                setCorrectAnswerEnem(correctAnswerEnem + 1);
            } else {
                setCorrectAnswerGrammar(correctAnswerGrammar + 1);
            }
        } else {
            if (choiceType === "Enem") {
                setWrongAnswerEnem(wrongAnswerEnem + 1);
            } else {
                setWrongAnswerGrammar(wrongAnswerGrammar + 1);
            }
        }
    };

    const [showAlertQuestions, setShowAlertQuestions] = useState(false);

    const drawNewQuestion = () => {
        if (!questionsArray || questionsArray.length == 0) {
            console.log("Array vazio !");
            return;
        }

        let arrayIndexUsed = choiceType === "Enem" ? arrayEnemIndexUsed : arrayGrammarIndexUsed;

        if (arrayIndexUsed.length === questionsArray.length) {
            arrayIndexUsed = [];
            setCorrectAnswerEnem(0);
            setCorrectAnswerGrammar(0);
            setWrongAnswerEnem(0);
            setWrongAnswerGrammar(0);
            setShowAlertQuestions(true);
        }

        let arrayIndexable = questionsArray.filter((_, i) => !arrayIndexUsed.includes(i));

        let index = Math.floor(Math.random() * arrayIndexable.length);

        let selectedQuestion = arrayIndexable[index];

        let realIndex = questionsArray.indexOf(selectedQuestion);

        // Atualiza o estado
        if (choiceType === "Enem") {
            setArrayEnemIndexUsed([...arrayIndexUsed, realIndex]);
        } else {
            setArrayGrammarIndexUsed([...arrayIndexUsed, realIndex]);
        }

        setSortQuestion(selectedQuestion);
        setIsAnswered(false); // Permite responder a nova questão
        setShowParagraph(false);
        setSelectedOption(null);


    };

    return (
        <>
        <div className={showAlertQuestions ? "blur" : "questionContainer"}>
            <div className="question">
                <div className="enem">
                    {sortQuestion && (
                        <div className="options">
                            <p>{sortQuestion.test}</p>
                            <p className="statement">{sortQuestion.statement}</p>
                            <ul>
                                {sortQuestion.options.map(option => (
                                    <li
                                        key={option.id}
                                        onClick={() => handleOptionClick(option.id)}
                                        className={isAnswered ? "disabled" : ""} // Adiciona uma classe para estilização
                                    >
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
                    {showParagraph && (
                        <p>{isAnswerCorrect ? "Você acertou a questão, alternativa correta: " + sortQuestion?.optionCorrect : "Resposta errada, alternativa correta: " + sortQuestion?.optionCorrect}</p>
                    )}
                    
                </div>
                <div>
                    <Button onClick={drawNewQuestion}>
                        Draw new Question
                    </Button>
                </div>
            </div>
                    

        </div>
        <div>
        {showAlertQuestions && (
            <>
            <div className="alert">
                <FaTerminal className="alert-icon" />
                <div className="alert-content">
                    <h3 className="alert-title">Questões Concluidas !</h3>
                    <p className="alert-description">Parabéns, você respondeu todas as questôes.</p>
                </div>
            </div>
            </>
        )}
        </div>
        </>     
    );
}

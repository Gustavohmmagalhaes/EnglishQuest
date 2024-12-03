import { Button } from "../button/Button"
import "./QuestionContainer.css"
// import { Question } from "../question/questionContent";

interface QuestionContainerprops {
    questionType: "Enem" | "Grammar";
}

export function QuestionContainer({ questionType }: QuestionContainerprops) {

    return (
        <div className="questionContainer">

            <div className="question">

                {questionType === "Enem" ? (
                    <div className="enem">Questão ENEM</div>
                ) : (
                    <div className="grammar">Questão Gramática</div>
                )}

            </div>

            <div className="commandArea">

                <div className="inputAndButton">
                    <input className="answer" type="text" />
                    <div>
                        <Button>
                            Check
                        </Button>
                    </div>
                </div>

                <div>
                    <Button>
                        Draw new question
                    </Button>
                </div>

            </div>

        </div>
    )
}
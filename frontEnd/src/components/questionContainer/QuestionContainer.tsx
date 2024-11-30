import { Button } from "../button/Button"
import "./QuestionContainer.css"


export function QuestionContainer() {

    return (
        <div className="questionContainer">

            <div className="question">

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut et, possimus in, voluptatibus iure reiciendis culpa pariatur accusamus aliquam inventore commodi nemo perferendis deserunt nostrum harum error quasi quam ex.

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
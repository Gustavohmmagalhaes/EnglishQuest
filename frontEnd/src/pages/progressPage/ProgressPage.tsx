import "./ProgressPage.css"
import Navibar from "../../components/navibar/Navibar"
import Header from "../../components/header/Header"
import { ProgressDiv } from "../../components/progressDiv/ProgressDiv"
export function ProgressPage() {
    return (
        <div className=" contentTotal ">

            <Navibar />

            <section className="mainContentProgress">

                <Header />

                <section className="contentProgress">

                    <ProgressDiv
                        title="WRONG QUESTIONS"
                        number={35}
                        descriptionRate="ERROR RATE"

                    />

                    <ProgressDiv
                        title="TOTAL QUESTIONS"
                        number={950}
                        descriptionRate="COMPLETION RATE"

                    />

                    <ProgressDiv
                        title="CORRECT QUESTIONS"
                        number={85}
                        descriptionRate="HIT RATE"

                    />

                </section>

            </section>

        </div>
    )
}
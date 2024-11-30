import {Navibar} from "../../components/navibar/Navibar"
import {Header} from "../../components/header/Header"
import { GoalsContent } from "../../components/goalsContent/GoalsContent"
import { Button } from "../../components/button/Button"
import "./GoalsPage.css"

export function GoalsPage() {
    return (
        <div className="contentTotal">

            <Navibar />

            <section className="mainContent">

                <Header />
                <GoalsContent/>
                <div className="startButton">
                    <Button >
                        START
                    </Button>

                    <Button >
                        Choose new goal
                    </Button>
                </div>
                
            </section>

        </div>
    )
}
import "./GoalsPage.css"
import Navibar from "../../components/navibar/Navibar"
import Header from "../../components/header/Header"
import { GoalsContent } from "../../components/goalsContent/GoalsContent"


export function GoalsPage() {
    return (
        <div className="contentTotal">

            <Navibar />

            <section className="mainContent">

                <Header />
                <GoalsContent/>

            </section>

        </div>
    )
}
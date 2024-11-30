import "./GoalsContent.css"


export function GoalsContent() {
    return (
        <section className="contentGoals">
            <div className="GoalsDivs">
                <section className="topGoals">
                    <p>Here you can create a weekly question goal, enter the desired number of questions!</p>
                    <input className="inputNumber"></input>
                </section>

                <section className="downGoals">
                    <div className="percentGoals"></div>
                    <p>COMPLETION RATE</p>
                </section>
            </div>
            
        </section>
    )
}
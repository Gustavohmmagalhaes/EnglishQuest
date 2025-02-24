import "./ProgressDiv.css"

interface ProgressDivProps{
    title: string,
    number: number,
    descriptionRate: string,
    percentCompleted: number
}

export function ProgressDiv({title, number, descriptionRate, percentCompleted}: ProgressDivProps ) {

    return (
        <div className="progressDivs">
            <section className="topProgress">
                <p>{title}</p>
                <p className="number">{number}</p>
                
            </section>

            <section className="downProgress">
                <div className="percent" style={{"--progress" : `${percentCompleted}%`} as React.CSSProperties}></div>
                <p>{descriptionRate}</p>
            </section>
        </div>
    )
}
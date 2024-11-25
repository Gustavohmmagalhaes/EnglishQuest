import "./ProgressDiv.css"

interface ProgressDivProps{
    title: string;
    number: number | string;
    descriptionRate: string;

}

export function ProgressDiv({title, number, descriptionRate}: ProgressDivProps ) {
    return (
        <div className="progressDivs">
            <section className="topProgress">
                <p>{title}</p>
                <p className="number">{number}</p>
            </section>

            <section className="downProgress">
                <div className="percent"></div>
                <p>{descriptionRate}</p>
            </section>
        </div>
    )
}
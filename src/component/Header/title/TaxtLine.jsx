import './title1.css'

function TaxtLine (Props) {
    return (
        <div className="taxtLine">
            <h2>{Props.num}</h2><p>{Props.txt}</p>
        </div>
    )
} 
export default TaxtLine; 
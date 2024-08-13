import '../styles/AboutCard.css'

export default function AboutCard({image, quote, name, position}){
    return (
        <div className="about-card">
            <img src={image}/>
            <h3>{`"${quote}"`}</h3>
            <div>
                <h4>{name}</h4>
                <h4>{position}</h4>
            </div>
        </div>
    )
}
import '../styles/ServiceCard.css'

export default function ServiceCard({label, image, description, link}){
    return (
        <div className="service-card">
            <h1>{label}</h1>
            <img src={image} alt={label} />
            <h4>{description}</h4>
            <div className="service-card--link">
                <a href={link}>Learn more</a>
                <img src="icons/tail-right.svg" />
            </div>
        </div>
    )
}
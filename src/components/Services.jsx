import '../styles/Services.css'
import ServiceCard from './ServiceCard'

import cardsData from '../assets/data/services_cards.json'


export default function Services(){
    const GetCards = () => {
        const cards = []

        for (let i = 0; i < Object.keys(cardsData).length; i++){
            cards.push(
                <ServiceCard
                    className="services--cards--card" 
                    key={i + 1}
                    {...cardsData[i + 1]}
                />
            )
        }

        return cards
    }

    return (
        <section className="services">
            <div className="services--title-text">
                <h1>Services we offer for you</h1>
                <h4>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h4>
            </div>

            <div className="services--cards">
                {GetCards()}
            </div>
        </section>
    )
}
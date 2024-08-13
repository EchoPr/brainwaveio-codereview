import '../styles/AboutCards.css'
import AboutCard from './AboutCard'

import cardsData from '../assets/data/employees_cards.json'

export default function AboutCards(){
    const GetCards = () => {
        const cards = []

        for (let i = 0; i < Object.keys(cardsData).length; i++){
            cards.push(
                <AboutCard
                    className="about-cards--card" 
                    key={i + 1}
                    {...cardsData[i + 1]}
                />
            )
        }

        return cards
    }

    return (
        <section className="about-cards">
            <div className='about-cards--content'>
                <h1>What people say about us</h1>
                <h4>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h4>

                <div className="about-cards--cards">
                    {GetCards()}
                </div>
            </div>
        </section>
    )
}
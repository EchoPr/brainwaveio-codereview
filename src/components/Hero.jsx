import '../styles/Hero.css'
import Header from './Header'


export default function Hero(){
    return (
        <section className="hero">
            <Header />
            
            <div className="hero--content">
                <div className="hero--content--info">
                    <h1>Make your business powerful with Shade</h1>
                    <h4>{`With lots of unique blocks, you can easily build a page without coding.
                     Build your next consultancy website within few minutes.`}</h4>
                    
                    <button className='hero--content--info--button button--content'>Get A Free Quote</button>
                    <div className='hero--content--info--watch-button'>
                        <img src='icons/watch_button_dark.svg'/>
                        <h4>Watch how we can help</h4>
                    </div>
                </div>

                <div className="hero--content--image">
                    <img src='images/hero_woman.png'/>
                    <div className='hero--content--image--circle'></div>
                    <div className="hero--content--image--rectangle"></div>
                    <img src='images/hero_dots.svg' className='hero--content--image--dots'/>
                    
                </div>

            </div>
        </section>
    )
}
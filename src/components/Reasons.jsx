import '../styles/Reasons.css'


export default function Reasons(){
    return (
        <section className="reasons">
            <div className="reasons--image">
                <img src="images/man_standing.png" />
                <div className="reasons--image--circle"></div>
            </div>

            <div className="reasons--content">
                <h1>Reasons you should choose us to grow today.</h1>
                <h4>We share common trends and strategies for improving your rental income and making sure you stay in high demand.</h4>
                <div className="reasons--content--checkers">
                    <div className="reasons--content--checker">
                        <img src="icons/checked.svg" />
                        <h4>Fully Responsive</h4>
                    </div>
                    <div className="reasons--content--checker">
                        <img src="icons/checked.svg" />
                        <h4>Easy to Edit</h4>
                    </div>
                    <div className="reasons--content--checker">
                        <img src="icons/checked.svg" />
                        <h4>Beautiful Layouts</h4>
                    </div>
                    <div className="reasons--content--checker">
                        <img src="icons/checked.svg" />
                        <h4>Google Font Included</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
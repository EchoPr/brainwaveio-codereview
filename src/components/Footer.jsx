import '../styles/Footer.css'

export default function Footer(){
    return (
        <section className="footer">
            <div className="footer--info">
                <h1>Brainwave.io</h1>
                <h4>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h4>
                <div className="footer--info--socials">
                    <a href="#"><img src="icons/twitter.svg" /></a>
                    <a href="#"><img src="icons/facebook.svg" /></a>
                    <a href="#"><img src="icons/instagram.svg" /></a>
                    <a href="#"><img src="icons/linkedin.svg" /></a>
                </div>
            </div>

            <div className="footer--categories">
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

            <div className="footer--categories">
                <h4>Product</h4>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>News</li>
                    <li>Help Desk</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="footer--categories">
                <h4>Services</h4>
                <ul>
                    <li>Digital Marketing</li>
                    <li>Content Writing</li>
                    <li>SEO for Business</li>
                    <li>IU Design</li>
                </ul>
            </div>

            <div className="footer--categories">
                <h4>Legal</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Return Policy</li>
                </ul>
            </div>
        </section>
    )
}
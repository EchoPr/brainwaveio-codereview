import '../styles/Header.css'


export default function Header(){
    return (
        <div className="header">
            <h2>Brainwave.io</h2>

            <div className='header--right-items'>
                <ul className='header--tabs-items'>
                    <li className="header--tabs-item">Demos</li>
                    <li className="header--tabs-item">Pages</li>
                    <li className="header--tabs-item">Support</li>
                    <li className="header--tabs-item">Contact</li>
                </ul>
                
                <button className='header--button-free-quote button--content'>Get A Free Quote</button>
            </div>

        </div>
    )
}
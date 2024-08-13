import './App.css'
import AboutCards from './components/AboutCards'
import AboutVideo from './components/AboutVideo'
import Alert from './components/Alert'
import Experience from './components/Experience'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'

import Header from './components/Header'
import Hero from './components/Hero'
import Reasons from './components/Reasons'
import Services from './components/Services'


function App() {
  return (
    <>
      <Hero />
      <Alert />
      <Experience />
      <Services />
      <Reasons />
      <AboutVideo />
      <AboutCards />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App

import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader'
import TopBar from './components/TopBar'
import Band from './components/Band'
import './App.css'
import './index.css'
import FirstSection from './components/FirstSection'
import StarsCanvas from './components/canvas/Stars'
import Footer from './components/Footer'
import CardItem from './components/CardItem'
import CardImg from './assets/Cards/template-item.png'

// Carga diferida de componentes
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className='app relative z-0 bg-slate-500'>
          < TopBar />
          <Suspense fallback={<Loader />}>
            <FirstSection />
            <Band />
            <div className='card-section flex items-center justify-between mx-10'>
              <CardItem title={"Medallas"} image={CardImg} type={"card-1"} />
              <CardItem title={"Trofeos"} image={CardImg} type={"card-2"} />
              <CardItem title={"Detalles"} image={CardImg} type={"card-3"} />
              <CardItem title={"Placas"} image={CardImg} type={"card-4"} />
            </div>
            <ContactForm />
            <StarsCanvas />
          </Suspense>
          <Footer />
        </div>
      </Router >
    </>
  )
}

export default App

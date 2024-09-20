import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader'
import TopBar from './components/TopBar'
import Band from './components/Band'
import './App.css'
import './index.css'
import FirstSection from './components/FirstSection'
import StarsCanvas from './components/canvas/Stars'

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
            <ContactForm />
            <Loader />
            <StarsCanvas />
          </Suspense>
        </div>
      </Router >
    </>
  )
}

export default App

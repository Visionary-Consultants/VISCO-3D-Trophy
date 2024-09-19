import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Loader from './components/Loader'
import TopBar from './components/TopBar'
import './App.css'
import './index.css'
import FirstSection from './components/FirstSection'

// Carga diferida de componentes
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className='app'>
          < TopBar />
          <Suspense fallback={<Loader />}>
            <FirstSection />
            <ContactForm />
            <Loader />
          </Suspense>
        </div>
      </Router >
    </>
  )
}

export default App

// App.jsx
import { useEffect } from 'react'
import ReactGA from 'react-ga'

import RoutesIndex from './RoutesIndex'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PageTransition from './components/PageTransition/'

const TRACKING_ID = 'G-6CS85B5JEC' // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="xl:pl-80">
        <div className="mx-auto px-4 pt-20 container">
          <main className="min-h-[calc(100vh-5rem)]">
            <PageTransition>
              <RoutesIndex />
            </PageTransition>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

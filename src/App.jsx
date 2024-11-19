// App.jsx
import { useEffect } from 'react'

import RoutesIndex from './RoutesIndex'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PageTransition from './components/PageTransition/'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="xl:pl-80">
        <div className="container mx-auto px-4 pt-20">
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

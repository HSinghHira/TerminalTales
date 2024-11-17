import RoutesIndex from './RoutesIndex'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <div className="xl:pl-80">
        {/* Offset for sidebar on large screens */}
        <div className="container mx-auto px-4 pt-20">
          {/* pt-20 accounts for header height */}

          <main className="min-h-[calc(100vh-5rem)]">
            <RoutesIndex />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

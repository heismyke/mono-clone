import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GettingStarted from './components/GettingStarted'
import Header from './components/Header'
import Reviews from './components/Reviews'
import BuildingBusinesses from './components/BuildingBusinesses'
function App() {
  return (
    <div>
      <Navbar />
      <Header />
        <BuildingBusinesses />
      <Reviews />
      <GettingStarted />
      <Footer />
    </div>
  )
}

export default App

import Footer from "../components/homePage/Footer"
import Navbar from "../components/homePage/Navbar"
import Hero from "../components/homePage/Hero"
import Featured from "../components/homePage/Featured"
import Health from "../components/Health"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Health />
      <Footer />
    </div>
  )
}

export default Homepage
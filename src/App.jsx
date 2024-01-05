
import CategoryMenuItem from "./components/CategoryMenuItem"
import InputFiled from "./components/InputFiled"
import Label from "./components/Label"
import Ad from "./components/layouts/Ad"
import Ads from "./components/layouts/Ads"
import Banner from "./components/layouts/Banner"
import Category from "./components/layouts/Category"
import Contact from "./components/layouts/Contact"
import Fotter from "./components/layouts/Fotter"
import Information from "./components/layouts/Information"
import Navbar from "./components/layouts/Navbar"
import NewArrivals from "./components/layouts/NewArrivals"
import OurBestsellers from "./components/layouts/OurBestsellers"
import SingUp from "./components/layouts/singUp"


  
function App() {

  return (
    <>
      <Navbar/>
      <Category/>
      <Banner/>
      <Information/>
      <Ad/>
      <NewArrivals/>
      <OurBestsellers/>
      <Ads/>
      <Fotter/>
      <SingUp/>
      
    </>
  )
}

export default App

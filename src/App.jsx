import { Advertise, Banner, Explore, Footer, Hero, Memory, Navbar, Newslatter, Pricings } from "./components"
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from "./data/travigodata"


function App() {

  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World"
        placesAPI={placesAPI} />
      <Advertise brands={brands}/>
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <Newslatter />
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App

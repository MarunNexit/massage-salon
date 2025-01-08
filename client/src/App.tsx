import './App.css'
import HeaderAppMain from "./components/header/HeaderAppMain.tsx";
import AboutUs from "./components/aboutus/AboutUs.tsx";
import Gallery from "./components/gallery/Gallery.tsx";
import Services from "./components/services/Services.tsx";
import Team from "./components/team/Team.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Location from "./components/location/Location.tsx";

function App() {

  return (
      <div className="App">
          <HeaderAppMain/>
          <AboutUs/>
          <Gallery/>
          <Services/>
          <Team/>
          <Reviews/>
          <Location/>
      </div>
  )
}

export default App

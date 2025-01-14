import './App.css'
import HeaderAppMain from "./components/header/HeaderAppMain.tsx";
import AboutUs from "./components/aboutus/AboutUs.tsx";
import Gallery from "./components/gallery/Gallery.tsx";
import Services from "./components/services/Services.tsx";
import Team from "./components/team/Team.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Location from "./components/location/Location.tsx";
import Header from "./components/header/Header.tsx";

function UserApp() {

    return (
        <div>
            <Header isAdmin={false}></Header>
            <HeaderAppMain/>
            <AboutUs/>
            <Gallery/>
            <Services isDrawer={false}/>
            <Team/>
            <Reviews/>
            <Location/>
        </div>
    )
}

export default UserApp

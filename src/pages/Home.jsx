import "../styles/home.css"
import SocialMedia from "../components/SocialMedia"
import HomeHero from "../components/HomeHero"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContent from "../components/MainContent"


export default function Home() {
    return(
        <>
            <Header />
            <HomeHero />
            <MainContent />
            {/* <Footer /> */}
        </>
    )
}



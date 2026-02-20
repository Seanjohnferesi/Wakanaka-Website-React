import logo from "../images/logo/make the high-qualit.png" 
import { useNavigate } from "react-router-dom"
import sideImg from "../images/background/nails-bg2.png";
import Header from "./Header";
import SocialMedia from "./SocialMedia";

function HomeHero () {
    const navigate = useNavigate()

    return(
        <>
            <section className="landing-page" id="home">
                <SocialMedia />

                <div className="logo-container">
                    <div className="logo">
                        <h2>Expert Care in the Comfort of Your Home <br /> Starts Here.</h2>
                        <p>A full studio experience dedicated to <br /> comfort, confidence, and natural beauty.</p>
                        <div className="explore-btn">
                            <a href="#main-content-cont"><button>Explore</button></a>
                            <span className="arrow">&#10549;</span>
                        </div>
                    </div>
                </div>
                
                <div className="img-display">
                    <img src={sideImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default HomeHero
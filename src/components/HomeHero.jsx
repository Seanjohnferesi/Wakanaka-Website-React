import logo from "../images/logo/make the high-qualit.png" 
import { useNavigate } from "react-router-dom"
import sideImg from "../images/background/nails-bg2.png";
import Header from "./Header";
import SocialMedia from "./SocialMedia";

function HomeHero () {
    const navigate = useNavigate()

    return(
        <>
            {/* <Header /> */}
            <section className="landing-page" id="home">
                <div className="img-display">
                    <img src={sideImg} alt="" />
                </div>
                <SocialMedia />
                <div className="logo">

                    <h2>Your Journey to Elegance <br /> Starts Here.</h2>
                    <p>A full studio experience dedicated to <br /> comfort, confidence, and natural beauty.</p>
                    {/* <img src={logo} alt="wakanaka logo" />
                    <h1>Wakanaka</h1>
                    <h2>Beauty Parlour</h2> */}
                    <div className="explore-btn">
                        <button
                            onClick={() => navigate("/explore")}
                        >Explore</button>
                        <span className="arrow">&#10549;</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHero
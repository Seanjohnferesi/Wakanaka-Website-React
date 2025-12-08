import logo from "../images/logo/make the high-qualit.png" 
import { useNavigate } from "react-router-dom"

function HomeHero () {
    const navigate = useNavigate()

    return(
        <section className="landing-page" id="home">
            <div className="logo">
                <img src={logo} alt="wakanaka logo" />
                <h1>Wakanaka</h1>
                <h2>Beauty Parlour</h2>
                <div className="explore-btn">
                    <button
                        onClick={() => navigate("/explore")}
                    >Explore</button>
                    <span className="arrow">&#10549;</span>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
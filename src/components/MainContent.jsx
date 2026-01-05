import "../styles/main-content.css"
import nails from "../images/icons/nail-polish.png"

function MainContent() {
    return (
        <section className="main-content-cont"> 
            <h1>Services</h1>
            <div className="main-content">
                <div className="nail-services">
                    <h2>Nails</h2>
                    <button className="services-btn">Explore</button>
                </div>
                <div className="spa-treatments">
                    <h2>Spa Treatments</h2>
                    <button className="services-btn">Explore</button>
                </div>
            </div>
        </section>
    )
} 

export default MainContent
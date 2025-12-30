import "../styles/main-content.css"
import nails from "../images/background/nude-clr.jpg"

function MainContent() {
    return (
        <section className="main-content-cont"> 
            <h1>Services</h1>
            <div className="main-content">
                <div className="nail-services">
                    <h2>Nail Services</h2>
                    <div className="nails-bg">
                        <img src={nails} alt="" />
                    </div>
                </div>
                <div className="spa-treatments">

                </div>
            </div>
        </section>
    )
} 

export default MainContent
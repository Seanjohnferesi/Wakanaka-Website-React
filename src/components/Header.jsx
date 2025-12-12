import logo from "../images/logo/make the high-qualit.png" 
import "../styles/header.css"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    return(
        <header>
            <div className="lft-header-flex">
                <h1>Wakanaka</h1>
                <img src={logo} alt="header logo" />
            </div>
            
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li onClick={() => navigate("/gallery")}><a>Gallery</a></li>
                </ul>
                <button className="book-btn">Book</button>
            </nav>
        </header>
    )

}

export default Header
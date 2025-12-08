import logo from "../images/logo/make the high-qualit.png" 

function Header() {
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
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header
import "./index.css"

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { FaSearch, FaRegHeart } from "react-icons/fa";

import { TbPaperBag } from "react-icons/tb";

function Header() {
    return (
        <main>
            <header className="Header_bg_container">
                <div className="Top_Logo_nav_div">
                    <div className="Logo_div_container">
                        <label htmlFor="toggle" className="Icons_name menu">
                            <GiHamburgerMenu />
                        </label>
                        <h1 className="Logo">LO<span className="span">G</span>O</h1>
                    </div>
                    <nav className="Top_nav_section">
                        <label className="Icons_name">
                            <FaSearch />
                        </label>
                        <label className="Icons_name">
                            <FaRegHeart />
                        </label>
                        <label className="Icons_name">
                            <TbPaperBag />
                        </label>
                    </nav>
                </div>
                <input type="checkbox" id="toggle" />
                <nav className="Bottom_nav_section">
                <Link to="/" className="Link">
                    <label className="Bottom_nav_section_name">
                        Home
                    </label>
                    </Link>
                    <Link to="/cart" className="Link">
                    <label className="Bottom_nav_section_name">
                        cart
                    </label>
                    </Link>
                    <label className="Bottom_nav_section_name">
                        about
                    </label>
                    <label className="Bottom_nav_section_name">
                        contact us
                    </label>
                </nav>
            </header>


        </main>

    )
}

export default Header;

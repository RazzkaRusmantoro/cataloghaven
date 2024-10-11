import { useNavigate } from "react-router-dom";
import "./navbar.css";
import Logo from "/assets/Logo.png";
import order from "/assets/order.png";
import cart from "/assets/cart.png";
import profile from "/assets/profile.png";
import categoryMenu from "/assets/3-Lines.png";
import categoryArrow from "/assets/arrow.png";

function Navbar() {
    const navigate = useNavigate();
    
    const handleHomeClick = () => {
        navigate("/");
    };
        
    const handleLoginClick = () => {
        navigate("/sign-in");
    };

    return (
        <div className="fullNavbar">
            <div className="Navbar">
                <img src={Logo} alt="Logo" className="logo" onClick={handleHomeClick}/>
                <input type="text" placeholder="Search for a product..." className="searchBar" />
                <div className="iconSection">
                    <div className="navButton" id="cart">
                        <p>Cart</p>
                        <img src={cart} alt="Cart" className="icons" />
                    </div>
                    <div className="navButton" id="order">
                        <p>Orders</p>
                        <img src={order} alt="order" className="icons" />
                    </div>
                    <div className="navButton" id="profile" onClick={handleLoginClick}>
                        <p>Login</p>
                        <img src={profile} alt="Profile" className="icons" />
                    </div>
                </div>
            </div>
            <div className="Navbar2">
                <div className="category">
                    <img src={categoryMenu} alt="category" className="icons" id="categoryMenu" />
                    <p>Categories</p>
                    <img src={categoryArrow} alt="category" className="icons" id="categoryArrow" />
                </div>
                <p>Best Sellers</p>
                <p>Deals</p>
                <p>Subscription</p>
                <p>Sell</p>
                <p>Customer Service</p>
                <p>About Us</p>
            </div>
        </div>
    );
}

export default Navbar;

import "./styles.css"

import { Link } from "react-router-dom";
import homeImg from "../../assets/home.svg"
import { NavLink } from "react-router-dom";


export default function Header(){
    return(
        <header>
            <nav className="container">
                <div className="nav-links-container">
                    <NavLink to="/home" className={({ isActive}) => isActive ? "nav-links active" : "nav-links"}>Início</NavLink>
                    <NavLink to="/products" className={({ isActive}) => isActive ? "nav-links active" : "nav-links"}>Produtos</NavLink>
                    <NavLink to="/about" className={({ isActive}) => isActive ? "nav-links active" : "nav-links"}>Sobre nós</NavLink>
                </div>
                <Link to="/home"><img src={homeImg} alt="Início" /></Link>
            </nav>
        </header>
    );
}
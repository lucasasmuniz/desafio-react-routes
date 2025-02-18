import "./styles.css"

import { Link,NavLink } from "react-router-dom";
import homeImg from "../../assets/home.svg"


export default function Header(){
    return(
        <header>
            <nav className="container">
                <div className="nav-links-container">
                    <NavLink to="/home" className={({ isActive}) => isActive ? "nav-links nv-white active" : "nav-links nv-white"}>Início</NavLink>
                    <NavLink to="/products" className={({ isActive}) => isActive ? "nav-links nv-white active" : "nav-links nv-white"}>Produtos</NavLink>
                    <NavLink to="/about" className={({ isActive}) => isActive ? "nav-links nv-white active" : "nav-links nv-white"}>Sobre nós</NavLink>
                </div>
                <Link to="/home"><img src={homeImg} alt="Início" /></Link>
            </nav>
        </header>
    );
}
import "./styles.css"

import { NavLink } from "react-router-dom";


export default function ProductBar() {
    return (
        <div className="product-bar-container">
            <NavLink to={"computers"} className={({ isActive }) => isActive ? "nav-links nv-black active" : "nav-links nv-black"}>Computadores</NavLink>
            <NavLink to={"electronics"} className={({ isActive }) => isActive ? "nav-links nv-black active" : "nav-links nv-black"}>Eletrônicos</NavLink>
            <NavLink to={"books"} className={({ isActive }) => isActive ? "nav-links nv-black active" : "nav-links nv-black"}>Livros</NavLink>
        </div>
    );
}
import { Outlet } from "react-router-dom";
import ProductBar from "../../../components/ProductBar";


export default function Products(){
    return(
        <main>
            <section id="product-section" className="container">
                <ProductBar />
                <Outlet />
            </section>
        </main>
    );
}
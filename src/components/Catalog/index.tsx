import { getProductsByTag } from "../../data";

type Props = {
    tag : string;
}

export default function Catalog({tag} : Props) {
    const product = getProductsByTag(tag);

    return (
        <div className="catalog">
            {product ? (
                product.stock.map((item, index) => <p key={index}>{item.name}</p>)
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
}
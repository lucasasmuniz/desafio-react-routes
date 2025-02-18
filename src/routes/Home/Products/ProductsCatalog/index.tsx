import { useParams } from "react-router-dom";
import Catalog from "../../../../components/Catalog/index.tsx";

export default function ProductCatalog() {
    const params = useParams();

    return (
        <Catalog tag={String(params.tagProduct)}/>
    );
}

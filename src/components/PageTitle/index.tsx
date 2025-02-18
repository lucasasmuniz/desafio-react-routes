import "./styles.css";

type Props = {
    title : string;
}

export default function PageTitle({title} : Props){
    return(
            <h2 className="home-title container mt-20">{title}</h2>
    );
}
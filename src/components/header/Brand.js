import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Relatos de Papel" title="Relatos de Papel"></img>
        </Link>
    )
}

export default Brand;
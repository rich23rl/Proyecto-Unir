import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Clásicos"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/No Ficcion">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Juvenil">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Infantil">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;


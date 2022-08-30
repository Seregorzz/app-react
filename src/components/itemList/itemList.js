import Item from "../Item/Item"


const ItemList = ({productos = []}) => {


    return (

        <div className="container my-5">
            <h2>Productos</h2>

            {productos.map ((prod) => {

                return <Item producto = {prod} key={prod.id}/>
            })}


        </div>
    )
         
         
}

export default ItemList
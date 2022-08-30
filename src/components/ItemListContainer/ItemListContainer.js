

import { useEffect, useState } from "react"
import { pedirdatos } from "../../helpers/pedirDatos"
import ItemList from "../itemList/itemList"








const ItemListContainer = (props) => {

    const [productos,setProductos ]= useState([])
    

useEffect (() => {

            pedirdatos()

            .then((res) => {
    
              setProductos(res)
              
             })
             .catch(() => {

                console.log("error")
             })
    
             .finally (() => {
    
                //console.log("fin del proceso")
             })

         },[])


         

return(

    <div>

        <ItemList productos={productos}/>
    </div>
   
    
)


   
}

export default ItemListContainer



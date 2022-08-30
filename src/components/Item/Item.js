import Contador from "../ItemCounts"


import Card from 'react-bootstrap/Card';







  







const Item = ({producto}) => {

    const onAdd = (counter) => {
        alert(`Agregaste ${counter} productos`);
        
        
      };

      
    return (
        

        <div className="acomoda" >
            <div className="container">
            

            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body className="tarjeta">
      <h1>{producto.nombre}</h1>
            <p>Precio : {producto.precio}</p>
            <small >Stock  : {producto.stock} </small>
            <p >{producto.descr}</p>
            <Contador  onAdd={onAdd} initial={1} stock={producto.stock}/>

        
        <Card.Text>
        

        </Card.Text>
        
      </Card.Body>
      <button > {producto.sinopsis} </button>
      
    </Card>
            
           
        
            </div>
            
        
            
            

        </div>
    )
}

export default Item
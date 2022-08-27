import './App.css';
import Navbar from './components/navbar';
import Titulo from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/ItemCounts';




export default function App  ()  {


  const onAdd = (counter) => {
    alert(`Agregaste ${counter} productos`);
  };


  return (
    <div >
      
      <header>
        
        
      <Navbar/>
     
      </header>

      <main>

      <Titulo guitarra="a la tienda mas grande de guitarras"/>
     

     
     <>
      <Contador onAdd={onAdd} initial={1} stock={7} />
    </>
  
      
    
  
      
      </main>
      

      <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </div>
  );
}




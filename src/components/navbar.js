

import Carrito from "./CartWidget"

const Navbar = () =>{

    return (
     <header>
        <section>

            
         
            <div className="menu">
                
                <nav>
                <ul>
                    
                    <li>GUITAR CENTER</li>
                    <li> <a href="https://www.google.com/">Inicio</a></li>
                    <li> <a href="https://www.google.com/">Productos</a></li>
                    <li> <a href="https://www.google.com/">Conocenos</a></li>
                    <li><Carrito/></li>

                    
                    
                </ul>
                </nav>


            </div>


        </section>
        </header>
    )

    


    
}

export default Navbar
import './App.css'
import Trabajo from './trabajo.js';
import Navbar from './components/navbar';
import guitarra from './components/img/guitarra.png'


const App = () => {
  return (
    <div >

      <header><img src={guitarra} alt=''></img>
      <Navbar/></header>
      
      <Trabajo />
    </div>
  );
}

export default App;

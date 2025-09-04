import './App.css';
import Discription from './Componet/Discription/Discription';
import Footer from './Componet/Footer/Footer';
import Hero from './Componet/Hero/Hero';
import Navbar from './Componet/Navbar/Navbar';
import NewCollection from './Componet/NewCollection/NewCollection';
import TopCollection from './Componet/TopCollection/TopCollection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <NewCollection/>
      <TopCollection/>
      <Discription/>
      <Footer/>
    </div>
  );
}

export default App;

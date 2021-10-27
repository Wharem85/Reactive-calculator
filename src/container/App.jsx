import Header from '../components/Header';
import Cuerpo from '../components/Cuerpo';
import Footer from '../components/Footer';
import ConversionLon from '../components/ConversionLon';
import ConversionPeso from '../components/ConversionPeso';
import ConversionTiempo from '../components/ConversionTiempo';
import Segunda from '../components/Segunda';
import SumaVectores from '../components/SumaVectores';
import '../Assets/App.css';


const App = () =>{
  return (
    <div>
      <Header/>

      <Cuerpo>
        <ConversionLon/>
        <ConversionTiempo/>
        <ConversionPeso/>
        <Segunda/>
        <SumaVectores/>
      </Cuerpo>
      <Footer/>
    </div>
  );
}

export default App;

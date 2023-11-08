import '../styles/Accueil.css';
import img from '../assets/img.png';
import LogementListe from '../components/Logementliste'
import Banner from '../components/Banner';


function Accueil() {
  return (
    <div>
      <Banner image={img} titre="Chez vous, partout et ailleurs" />
      <LogementListe/>
    </div>
  

    
  );
}

export default Accueil;



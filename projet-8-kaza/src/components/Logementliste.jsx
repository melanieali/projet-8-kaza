import logementlist from '../datas/listeLogements.json';
import {Link} from "react-router-dom";

function LogementListe () {
    return (
        <div id='card'>
            {logementlist.map((logement,index) => (
                <div key={index} className='logement'>
                    <Link to={`/logement/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title} className='logement-image'/>
                        <h2 className='logement-titre'>{logement.title}</h2>
                    </Link>
                </div>    
            ))}
        </div>
    )
  }
  
  export default LogementListe;
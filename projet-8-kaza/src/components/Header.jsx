import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {

    return (
        <nav>
            <div id='header'>
            <Link className='linkaccueil'to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
            </div>
        </nav>
    )
}

export default Header
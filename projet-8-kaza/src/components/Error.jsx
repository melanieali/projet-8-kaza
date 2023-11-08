import {Link} from 'react-router-dom';

function Error () {
    return (
        <div>
            <h1 className="number-error">404</h1>
            <p className="msg-error">Oups! La page que vous demandez n'existe pas.</p>
            <Link className='linkacc'to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;
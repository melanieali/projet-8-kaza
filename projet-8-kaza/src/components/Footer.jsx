import logo from '../assets/footerlogo.png'

function Footer() {

    return (
        <div id='footer'>
            <img src={logo} alt='kaza' className='footer-logo'/>
            <h1 className='footer-title'>© 2020 Kasa. All rights reserved</h1>
        </div>
        
    )
}

export default Footer
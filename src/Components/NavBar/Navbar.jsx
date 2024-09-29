import logo from '../../assets/Logoname.svg.png'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleclick = () => {
        setClick(!click)
    }
    return (
        <>
            <nav>

                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <p>Search for desatinition and activities</p>
                <div className={click ? 'menu active' : 'menu'}>
                    <a href="">Destinition</a>
                    <a href="">Activities</a>
                    <a href="">USD</a>
                    <a href="">Sign-Up</a>
                    <a href="">Login</a>

                </div>
                <div className="hamburger" onClick={handleclick}>
                    {click ? (<FaTimes style={{ color: 'black' }} size={25} />) : (<FaBars style={{ color: 'black' }} size={25} />)}
                </div>


            </nav>
        </>

    )
}

export default Navbar
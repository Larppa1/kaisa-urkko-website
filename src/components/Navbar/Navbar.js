import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    if(window.innerWidth < 768) {
        return(
            <header id="navbar" className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl" to='/' >Urheiluhieroja Kaisa Urkko</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary text-primary-content rounded-box w-52">
                            <li><Link to='/'>Etusivu</Link></li>
                            <li><Link to='/palvelut'>Palvelut</Link></li>
                            <li><Link to='/hinnasto'>Hinnasto</Link></li>
                            <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }else {
        return(
            <header id="navbar" className="navbar bg-primary text-primary-content">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl" to='/' >Urheiluhieroja Kaisa Urkko</Link>
                        <img src="https://i.ibb.co/JchFj5r/IMG-0400.jpg" alt="" width={window.innerHeight * 0.08} style={{borderRadius: 10, marginLeft: '3%'}} />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Etusivu</Link></li>
                            <li><Link to='/palvelut'>Tietoja</Link></li>
                            <li><Link to='/hinnasto'>Hinnasto</Link></li>
                            <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                        </ul>
                    </div>
            </header>
        )
    }
}
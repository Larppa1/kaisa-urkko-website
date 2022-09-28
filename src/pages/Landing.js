import { Link } from 'react-router-dom'
import './styles.css'

export default function Landing() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <div className="header">
                    <div className="navbar bg-primary text-primary-content">
                        <div className="flex-1">
                            <a className="btn btn-ghost normal-case text-xl">Urheiluhieroja Kaisa Urkko</a>
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
                    </div>
                </div>
                {/*END OF HEADER */}
                <div className="content">
                    <div className="content_1">
                        <article class="prose">
                            <h2 className='content_1_title'>Palveluihini kuuluvat:</h2>
                            <h3 className='content_1_info'>Hieronta 30-90min<br/>
                            Kuivakuppaus 15-30min<br/>
                            Intialainen päähieronta 45min<br/>
                            Teippaukset 15min
                            </h3>
                        </article>
                    </div>
                    <div className='content_2'>
                        <div className='content_2_left'>
                            <p className='content_2_left_info'>Olen vuonna 2021 Tampereen urheiluhierojakoulusta valmistunut koulutettu hieroja. Toimitilani sijaitsevat Pälkäneen keskustassa, Onkkalan VPK:n tiloissa.<br/><br/>Lisäksi teen kotikäyntejä pääosin Pälkäneen, Kangasalan sekä Hauhon alueella.</p>
                        </div>
                        <div className='content_2_right'>
                            <img className='content_2_right_img' src="https://i.ibb.co/0KjTpWx/kaisa-1.webp" alt=''/>
                        </div>
                    </div>
                </div>
                {/*END OF CONTENT */}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p>© 2022 - Urheiluhieroja Kaisa Urkko</p>
                    </div>
                </footer>
                {/*END OF FOOTER*/}
            </div>
        )
    }else {
        return(
            <div className="container">
                <div className="header">
                    <div className="navbar bg-primary text-primary-content">
                        <div className="flex-1">
                            <a className="btn btn-ghost normal-case text-xl">Urheiluhieroja Kaisa Urkko</a>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">
                                <li><Link to='/'>Etusivu</Link></li>
                                <li><Link to='/palvelut'>Tietoja</Link></li>
                                <li><Link to='/hinnasto'>Hinnasto</Link></li>
                                <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*END OF HEADER */}
                <div className="content">
                    <div className="content_1">
                        <article class="prose">
                            <h2 className='content_1_title'>Palveluihini kuuluvat:</h2>
                            <h3 className='content_1_info'>Hieronta 30-90min<br/>
                            Kuivakuppaus 15-30min<br/>
                            Intialainen päähieronta 45min<br/>
                            Teippaukset 15min
                            </h3>
                        </article>
                    </div>
                    <div className='content_2'>
                        <div className='content_2_left'>
                            <p className='content_2_left_info'>Olen vuonna 2021 Tampereen urheiluhierojakoulusta valmistunut koulutettu hieroja. Toimitilani sijaitsevat Pälkäneen keskustassa, Onkkalan VPK:n tiloissa. Lisäksi teen kotikäyntejä pääosin Pälkäneen, Kangasalan sekä Hauhon alueella.</p>
                        </div>
                        <div className='content_2_right'>
                            <img className='content_2_right_img' src="https://i.ibb.co/0KjTpWx/kaisa-1.webp" alt=''/>
                        </div>
                    </div>
                </div>
                {/*END OF CONTENT */}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p>© 2022 - Urheiluhieroja Kaisa Urkko</p>
                    </div>
                </footer>
                {/*END OF FOOTER*/}
            </div>
        )
    }
}
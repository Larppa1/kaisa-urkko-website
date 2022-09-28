import { Link } from 'react-router-dom'
import './styles.css'

export default function Services() {
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
                                    <li><Link to='/palvelut'>Tietoja</Link></li>
                                    <li><Link to='/hinnasto'>Hinnasto</Link></li>
                                    <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END OF HEADER */}
                <div className='services_content'>
                    <div className='services_content_right'>
                        <article class="prose">
                            <h1 className='services_content_right_title'>Tietoja</h1>
                            <p className='services_content_right_info'>Valmistuin kesäkuussa 2021 Tampereen urheiluhierojakoulusta. Teen hierontoja Pälkäneen hoitokeskus VeePeeKoo:n tiloissa Onkkaalan VPK:n talolla sovittuina ajankohtina.<br/><br/>
                                        Aloitin viime syksyllä matkailualan opinnot Lahdessa, joten hieronta-aikataulut riippuvat paljolti opintoaikatauluistani.<br/><br/>
                                        Haaveena olisi jatkossa käydä lyhyitä lisäkoulutuksia. Tällä hetkellä hieronnan lisäksi on mahdollista tulla intialaiseen päähierontaan, kuivakuppaukseen tai teippauksiin (kinesio ja urheilu).
                            </p>
                        </article>
                    </div>
                    <div className='services_content_left'>
                        <img className='prop_img' src="https://i.ibb.co/Ssj8w1h/prop-1.webp" alt=''/>
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
                                <li><Link to='/palvelut'>Palvelut</Link></li>
                                <li><Link to='/hinnasto'>Hinnasto</Link></li>
                                <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*END OF HEADER */}
                <div className='services_content'>
                    <div className='services_content_left'>
                        <img className='prop_img' src="https://i.ibb.co/Ssj8w1h/prop-1.webp" alt=''/>
                    </div>
                    <div className='services_content_right'>
                        <article class="prose">
                            <h1 className='services_content_right_title'>Tietoja</h1>
                            <p className='services_content_right_info'>Valmistuin kesäkuussa 2021 Tampereen urheiluhierojakoulusta. Teen hierontoja Pälkäneen hoitokeskus VeePeeKoo:n tiloissa Onkkaalan VPK:n talolla sovittuina ajankohtina.<br/><br/>
                                        Aloitin viime syksyllä matkailualan opinnot Lahdessa, joten hieronta-aikataulut riippuvat paljolti opintoaikatauluistani.<br/><br/>
                                        Haaveena olisi jatkossa käydä lyhyitä lisäkoulutuksia. Tällä hetkellä hieronnan lisäksi on mahdollista tulla intialaiseen päähierontaan, kuivakuppaukseen tai teippauksiin (kinesio ja urheilu).
                            </p>
                        </article>
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
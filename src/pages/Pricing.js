import { Link } from 'react-router-dom'
import './styles.css'

export default function Pricing() {
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
                <div className='content'>
                    <div className='title'>
                        <article class="prose">
                            <h1 className='text-5xl font-bold'>Hinnasto</h1>
                        </article>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-4xl font-bold">Hieronta</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>30min</h2>
                                    <h2>45min</h2>
                                    <h2>60min</h2>
                                    <h2>75min</h2>
                                    <h2>90min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>35€</h2>
                                    <h2>40€</h2>
                                    <h2>45€</h2>
                                    <h2>55€</h2>
                                    <h2>65€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-4xl font-bold">Kuivakuppaus</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>15min</h2>
                                    <h2>30min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>20€</h2>
                                    <h2>30€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content' style={{alignItems: 'center'}}>
                        <h1 className="text-3xl font-bold">Intialainen päähieronta</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>45min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>50€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-4xl font-bold">Teippaukset</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>15min</h2>
                                    <h2>Sis. hierontaan</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>25€</h2>
                                    <h2>15€</h2>
                                </article>
                            </div>
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
                                <li><Link to='/palvelut'>Palvelut</Link></li>
                                <li><Link to='/hinnasto'>Hinnasto</Link></li>
                                <li><Link to='/yhteystiedot'>Yhteystiedot</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*END OF HEADER */}
                <div className='content'>
                    <div className='title'>
                        <article class="prose">
                        <h1 className='text-5xl font-bold'>Hinnasto</h1>
                        </article>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-5xl font-bold">Hieronta</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>30min</h2>
                                    <h2>45min</h2>
                                    <h2>60min</h2>
                                    <h2>75min</h2>
                                    <h2>90min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>35€</h2>
                                    <h2>40€</h2>
                                    <h2>45€</h2>
                                    <h2>55€</h2>
                                    <h2>65€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-5xl font-bold">Kuivakuppaus</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>15min</h2>
                                    <h2>30min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>20€</h2>
                                    <h2>30€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-5xl font-bold">Intialainen päähieronta</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>45min</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>50€</h2>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='pricing_content bg-primary text-primary-content'>
                        <h1 className="text-5xl font-bold">Teippaukset</h1>
                        <div className="pricing_content_box">
                            <div className='pricing_content_1_left'>
                                <article class="prose">
                                    <h2>15min</h2>
                                    <h2>Sis. hierontaan</h2>
                                </article>
                            </div>
                            <div className='pricing_content_1_right'>
                                <article class="prose">
                                    <h2>25€</h2>
                                    <h2>15€</h2>
                                </article>
                            </div>
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
                        </ul>
                    </div>
                </div>
            </div>
            {/*END OF HEADER*/}
            <div className='content'>
                <div className='pricing_content bg-primary text-primary-content'>
                    <h1 className="text-5xl font-bold">Hieronta</h1>
                    <div className="pricing_content_box">
                        <div className='pricing_content_1_left'>
                            <article class="prose">
                                <h2>30min</h2>
                                <h2>45min</h2>
                                <h2>60min</h2>
                                <h2>75min</h2>
                                <h2>90min</h2>
                            </article>
                        </div>
                        <div className='pricing_content_1_right'>
                            <article class="prose">
                                <h2>35€</h2>
                                <h2>40€</h2>
                                <h2>45€</h2>
                                <h2>55€</h2>
                                <h2>65€</h2>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='pricing_content bg-primary text-primary-content'>
                    <h1 className="text-5xl font-bold">Kuivakuppaus</h1>
                    <div className="pricing_content_box">
                        <div className='pricing_content_1_left'>
                            <article class="prose">
                                <h2>15min</h2>
                                <h2>30min</h2>
                            </article>
                        </div>
                        <div className='pricing_content_1_right'>
                            <article class="prose">
                                <h2>20€</h2>
                                <h2>30€</h2>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='pricing_content bg-primary text-primary-content'>
                    <h1 className="text-5xl font-bold">Intialainen päähieronta</h1>
                    <div className="pricing_content_box">
                        <div className='pricing_content_1_left'>
                            <article class="prose">
                                <h2>45min</h2>
                            </article>
                        </div>
                        <div className='pricing_content_1_right'>
                            <article class="prose">
                                <h2>50€</h2>
                            </article>
                        </div>
                    </div>
                </div>
                <div className='pricing_content bg-primary text-primary-content'>
                    <h1 className="text-5xl font-bold">Teippaukset</h1>
                    <div className="pricing_content_box">
                        <div className='pricing_content_1_left'>
                            <article class="prose">
                                <h2>15min</h2>
                                <h2>Sis. hierontaan</h2>
                            </article>
                        </div>
                        <div className='pricing_content_1_right'>
                            <article class="prose">
                                <h2>25€</h2>
                                <h2>15€</h2>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {/*END OF CONTENT*/}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>© 2022 - Urheiluhieroja Kaisa Urkko</p>
                </div>
            </footer>
            {/*END OF FOOTER*/}
        </div>
    )
}
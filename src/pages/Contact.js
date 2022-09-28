import { Link } from 'react-router-dom'
import './styles.css'

export default function Contact() {
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
                <div className="contact_content">
                    <div className='title' style={{marginTop: '3vh'}}>
                        <article class="prose">
                            <h1 className='text-5xl font-bold'>Yhteystiedot</h1>
                        </article>
                    </div>
                    <div className='contact_info_container'>
                        <article class="prose">
                            <h2 className='contact_text'>Kaisa Urkko</h2>
                            <h3 className='contact_text'>puh. 040 808 5338</h3>
                        </article>
                    </div>
                    <div className='contact_info_socials'>
                        <a className='socialBtn' href='https://www.instagram.com/urheiluhierojakaisaurkko/' target='_blank' rel='noreferrer'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eOT653mBX7lWxEzfkypBRxyVCJZi6b-pG7sC28c&s' alt=''></img>
                        </a>
                        <a className='socialBtn' href='https://m.facebook.com/people/Urheiluhieroja-Kaisa-Urkko/100069865482419/'  target='_blank' rel='noreferrer'>
                            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt=''></img>
                        </a>
                    </div>
                    <div className='contact_info_container'>
                        <article class="prose">
                            <h1 className='footerText'>Pidä itsestäsi huolta - varaa aika hierontaan!</h1>
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
                    <div className="contact_content">
                        <div className='title' style={{marginTop: '3vh'}}>
                            <article class="prose">
                                <h1 className='text-5xl font-bold'>Yhteystiedot</h1>
                            </article>
                        </div>
                        <div className='contact_info_container'>
                            <article class="prose">
                                <h2 className='contact_text'>Kaisa Urkko</h2>
                                <h3 className='contact_text'>puh. 040 808 5338</h3>
                            </article>
                        </div>
                        <div className='contact_info_socials'>
                            <a className='socialBtn' href='https://www.instagram.com/urheiluhierojakaisaurkko/' target='_blank' rel='noreferrer'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eOT653mBX7lWxEzfkypBRxyVCJZi6b-pG7sC28c&s' alt=''></img>
                            </a>
                            <a className='socialBtn' href='https://m.facebook.com/people/Urheiluhieroja-Kaisa-Urkko/100069865482419/'  target='_blank' rel='noreferrer'>
                                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt=''></img>
                            </a>
                        </div>
                        <div className='contact_info_container'>
                            <article class="prose">
                                <h1 className='footerText'>Pidä itsestäsi huolta - varaa aika hierontaan!</h1>
                            </article>
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
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Landing() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='landingMain'>
                    <article className='prose'>
                        <section>
                            <div>
                                <h2>Palveluihini kuuluvat</h2>
                                <h3>Hieronta 30-90min<br/>
                                    Kuivakuppaus 15-30min<br/>
                                    Intialainen päähieronta 45min<br/>
                                    Teippaukset 15min
                                </h3>
                            </div>
                        </section>
                        <section>
                            <div>
                                <p>Olen vuonna 2021 Tampereen urheiluhierojakoulusta valmistunut koulutettu hieroja. Toimitilani sijaitsevat Pälkäneen keskustassa.<br/><br/>Lisäksi teen kotikäyntejä pääosin Pälkäneen, Kangasalan sekä Hauhon alueella. Kotikäynteihin lisätään 10-15€ matkakorvaus matkan pituudesta riippuen.</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/0KjTpWx/kaisa-1.webp" alt=''/>
                            </div>
                        </section>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='landingMain'>
                    <article className='prose'>
                        <section>
                            <div>
                                <h1>Palveluihini kuuluvat</h1>
                                <h2>Hieronta 30-90min<br/>
                                    Kuivakuppaus 15-30min<br/>
                                    Intialainen päähieronta 45min<br/>
                                    Teippaukset 15min
                                </h2>
                            </div>
                        </section>
                        <section>
                            <div>
                                <p>Olen vuonna 2021 Tampereen urheiluhierojakoulusta valmistunut koulutettu hieroja. Toimitilani sijaitsevat Pälkäneen keskustassa.<br/><br/>Lisäksi teen kotikäyntejä pääosin Pälkäneen, Kangasalan sekä Hauhon alueella. Kotikäynteihin lisätään 10-15€ matkakorvaus matkan pituudesta riippuen.</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/0KjTpWx/kaisa-1.webp" alt=''/>
                            </div>
                        </section>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}
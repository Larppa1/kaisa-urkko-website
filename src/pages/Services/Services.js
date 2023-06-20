import './Services.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

export default function Services() {
    return(
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main id='servicesMain'>
                <article className='prose'>
                    <section>
                        <h1>Tietoja</h1>
                            <p>Valmistuin kesäkuussa 2021 Tampereen urheiluhierojakoulusta. Teen hierontoja aivan Pälkäneen keskustassa.<br/><br/>
                                        Aloitin viime syksyllä matkailualan opinnot Lahdessa, joten hieronta-aikataulut riippuvat paljolti opintoaikatauluistani.<br/><br/>
                                        Haaveena olisi jatkossa käydä lyhyitä lisäkoulutuksia. Tällä hetkellä hieronnan lisäksi on mahdollista tulla intialaiseen päähierontaan, kuivakuppaukseen tai teippauksiin (kinesio ja urheilu).
                            </p>
                    </section>
                    <section>
                        <img src="https://i.ibb.co/sKtCLyb/IMG-0401.jpg" alt='' style={{borderRadius: 14}}/>
                    </section>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
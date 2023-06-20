import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Pricing.css'

export default function Pricing() {
    return(
        <div className="container">
            <header>
                <Navbar />
            </header>
            <main id='pricingMain'>
                <article className='prose'>
                    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1>Hinnasto</h1>
                        <img src="https://i.ibb.co/r7YLwZp/IMG-0117.jpg" width={window.innerWidth < 1280 ? "75%" : "33%"} alt="" />
                        <p style={{textAlign: 'center'}}>Opiskelija-alennus -5€ per hoitokerta! Muistathan ottaa voimassa olevan opiskelijakortin mukaan :)</p>
                    </section>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
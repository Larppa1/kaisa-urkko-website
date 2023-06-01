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
                    <section>
                        <h1>Hinnasto</h1>
                        <img src="https://i.ibb.co/r7YLwZp/IMG-0117.jpg" width={window.innerWidth < 1280 ? "75%" : "33%"} />
                    </section>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
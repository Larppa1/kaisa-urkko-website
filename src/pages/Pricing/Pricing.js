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
                        <div>
                            <h2>Hieronta</h2>
                        </div>
                        <table className="table shadow-xl">
                            <tbody>
                                <tr>
                                    <td className='bg-primary'>30min</td>
                                    <td className='bg-primary'>35€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>45min</td>
                                    <td className='bg-primary'>40€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>60min</td>
                                    <td className='bg-primary'>45€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>75min</td>
                                    <td className='bg-primary'>55€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>90min</td>
                                    <td className='bg-primary'>65€</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <div>
                            <h2>Kuivakuppaus</h2>
                        </div>
                        <table className="table shadow-xl">
                            <tbody>
                                <tr>
                                    <td className='bg-primary'>15min</td>
                                    <td className='bg-primary'>20€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>30min</td>
                                    <td className='bg-primary'>30€</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <div>
                            <h2>Intialainen päähieronta</h2>
                        </div>
                        <table className="table shadow-xl">
                            <tbody>
                                <tr>
                                    <td className='bg-primary'>45min</td>
                                    <td className='bg-primary'>50€</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <div>
                            <h2>Teippaukset</h2>
                        </div>
                        <table className="table shadow-xl">
                            <tbody>
                                <tr>
                                    <td className='bg-primary'>15min</td>
                                    <td className='bg-primary'>25€</td>
                                </tr>
                                <tr>
                                    <td className='bg-primary'>Sis. hierontaan</td>
                                    <td className='bg-primary'>15€</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
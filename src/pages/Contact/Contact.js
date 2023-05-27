import './Contact.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

export default function Contact() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='contactMain'>
                    <article className="prose">
                        <h1>Yhteystiedot</h1>
                        <section>
                            <h2>Kaisa Urkko</h2>
                            <h3>puh. 040 808 5338</h3>
                            <h3>Koulutie 3, 36600 Pälkäne</h3>
                        </section>
                        <section id='socialContainer'>
                            <section>
                                <a href='https://www.instagram.com/urheiluhierojakaisaurkko/' target='_blank' rel='noreferrer'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eOT653mBX7lWxEzfkypBRxyVCJZi6b-pG7sC28c&s' alt=''></img>
                                </a>
                            </section>
                            <section>
                                <a href='https://m.facebook.com/people/Urheiluhieroja-Kaisa-Urkko/100069865482419/'  target='_blank' rel='noreferrer'>
                                    <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt=''></img>
                                </a>
                            </section>
                        </section>
                        <section>
                            <h2>Pidä itsestäsi huolta - varaa aika hierontaan!</h2>
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
                <main id='contactMain'>
                    <article className="prose">
                        <h1>Yhteystiedot</h1>
                        <section>
                            <h2>Kaisa Urkko</h2>
                            <h3>puh. 040 808 5338</h3>
                            <h3>Koulutie 3, 36600 Pälkäne</h3>
                        </section>
                        <section id='socialContainer'>
                            <section>
                                <a href='https://www.instagram.com/urheiluhierojakaisaurkko/' target='_blank' rel='noreferrer'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eOT653mBX7lWxEzfkypBRxyVCJZi6b-pG7sC28c&s' alt=''></img>
                                </a>
                            </section>
                            <section>
                                <a href='https://m.facebook.com/people/Urheiluhieroja-Kaisa-Urkko/100069865482419/'  target='_blank' rel='noreferrer'>
                                    <img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt=''></img>
                                </a>
                            </section>
                        </section>
                        <section>
                            <h2>Pidä itsestäsi huolta - varaa aika hierontaan!</h2>
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
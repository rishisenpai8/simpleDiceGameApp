import styles from './LandingPage.module.css'
import Button from '../../Button/Button'
import dicePng from "../../../assets/dices 1.png"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate()
    return (
        <div className={styles.landingPage}>
            <div className={styles.container}>
                {/* left */}
                <div className={styles.landingPageHero} >
                    <img src={dicePng} />
                </div>

                {/* right */}
                <div className={styles.landingPageContent}>
                    <h1>DICE GAME</h1>
                    <Button className='primaryBtn' text='Play Now' onClick={() => navigate('/secondPage')} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
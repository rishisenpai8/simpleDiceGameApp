import styles from './SecondPage.module.css'
import Button from '../../Button/Button'
import cube from '../../../assets/cube.png'
import { useState } from 'react';

const Page2 = () => {
    const [score, setScore] = useState(0);
    const [userCalledNumber, setUserCalledNumber] = useState(null);
    const [showRules, setShowRules] = useState(false);
    const [currDice, setCurrDice] = useState(null)
    const [diceNotSelect, setDiceNotSelect] = useState(false);

    function handleRollDice() {
        if (userCalledNumber == null) {
            setDiceNotSelect(true)
            return
        }
        const randomNumber = Math.floor(Math.random() * 6 + 1)
        setCurrDice(randomNumber)
        console.log('Dice rolled: ' + randomNumber);
        if (userCalledNumber === randomNumber) {
            setScore(prev => prev + 1)
        }
        else {
            setScore(prev => prev - 1)
        }
        setUserCalledNumber(null)

    }
    function handleShowRuleClick() {
        setShowRules(!showRules)
    }

    function handleReset() {
        setScore(0);
        setCurrDice(null)
    }
    return (
        <div className={styles.secondPage}>
            <div className={styles.secondPageContainer}>
                <div className={styles.header}>
                    <div className={styles.scoreContainer}>
                        <div className={styles.score}>
                            {score}
                        </div>
                        <div className={styles.totalScore}>
                            Total Score
                        </div>
                    </div>
                    <div className={styles.selectNumber}>
                        {diceNotSelect && <p className={styles.warningMsg}>You have not selected any number</p>}
                        <ul>
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <li
                                    key={num}
                                    onClick={() => { setUserCalledNumber(num); setDiceNotSelect(false) }}
                                    className={
                                        userCalledNumber === num
                                            ? styles.selectedNum
                                            : styles.numberBox
                                    }
                                >
                                    {num}
                                </li>
                            ))}
                        </ul>

                        <h3>Select Number</h3>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.diceImage}><img src={cube} onClick={handleRollDice} /></div>
                    <div className={styles.bodyText} >Click on Dice to roll</div>
                    {currDice !== null && (<div className={styles.currScore}>Current Dice rolled :{currDice}</div>)}
                    <Button className='secondaryBtn' text='Reset Score' onClick={handleReset} />
                    <Button className='primaryBtn' text={showRules ? 'Hide Rules' : 'Show Rules'} onClick={handleShowRuleClick} />
                    {showRules &&
                        <div className={styles.showRules}>
                            <h2>How to play dice game</h2>
                            <div>
                                <p>Select any number</p>
                                <p>Click on dice image</p>
                                <p>after clicked on dice if selected number is equal to the number you've selected you will earn a point </p>
                                <p>If you guessed it wrong 1 points will be deducted</p>
                            </div>
                        </div>}

                </div>
            </div>
        </div>

    )

}

export default Page2
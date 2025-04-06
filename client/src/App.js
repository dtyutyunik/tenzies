import { useEffect, useState, useRef } from 'react';
import Die from './components/Die';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {

  const generateAllNewDice = (number) => {
    return Array(number).fill(0).map(() => (
      {
        die: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
        id: crypto.randomUUID()
      }
    ))
  };

  const [die, setDice] = useState(() => generateAllNewDice(10));
  const [winner, setWinner] = useState(false);
  const { width, height } = useWindowSize();
  const dieButtonRef = useRef(null);

  const generateNonHeldDice = () => {
    setDice(prevDie => prevDie.map(i =>
      i.isHeld ? i : generateAllNewDice(1)[0]
    ))
  }

  const checkWinner = () => {
    const allHeld = die.every(i => i.isHeld);
    const allSameDie = die.every(i => i.die === die[0].die);
    if (allHeld && allSameDie) {
      setWinner(true);
    }
  }

  useEffect(() => {
    checkWinner();
  }, [die])

  useEffect(() => {
    if (winner) {
      dieButtonRef.current.focus();
    }
  }, [winner])


  const holdDie = (id) => {
    setDice(prevDice => {
      return prevDice.map(i => i.id === id ? { ...i, isHeld: !i.isHeld } : i
      )
    })
  }

  const newGame = () => {
    setWinner(false);
    setDice(generateAllNewDice(10));
  }


  return (
    <main>
      {winner && <Confetti width={width} height={height} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <div className="diceContainer">
        {die.map((i) => {
          return <Die key={i.id} dice={i} holdDie={holdDie}></Die>
        })}
      </div>
      <button ref={dieButtonRef} className={winner ? 'newGame' : 'roll-dice'} onClick={winner ? newGame : generateNonHeldDice}>
        {winner ? 'New Game?!' : 'Reroll'}
      </button>

    </main>
  );
}


export default App;

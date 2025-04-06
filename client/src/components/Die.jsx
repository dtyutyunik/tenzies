
const Die = (props) => {
    const { die, id, isHeld } = props.dice;

    return (

        <button className={`die-button ${isHeld ? 'isHeld' : ''}`}
            onClick={() => props.holdDie(id)}
            aria-label={`Die with value ${die}`}>
            {die}
        </button>

    )
}
export default Die;
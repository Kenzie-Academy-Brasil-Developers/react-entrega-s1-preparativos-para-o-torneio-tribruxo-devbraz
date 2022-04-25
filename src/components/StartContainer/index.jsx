import ButtonComponent from '../ButtonComponent'
import GameContainer from '../GameContainer'
import './styles.css'


function StartContainer({click, setClick, tournamentWizzards}) {

  return (

    <div className='start-container' >
      {click? 
        <>
          <GameContainer tournamentWizzards={tournamentWizzards}/>
        </>
      :
        <>
          <h2>Triwizzard tournament</h2>
          <h3>Click the button to find the wizzards!</h3>
          <ButtonComponent onClick={()=> setClick(true)} >START!</ButtonComponent>
        </>
      }
    </div>

  )

}

export default StartContainer
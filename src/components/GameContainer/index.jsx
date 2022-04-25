import ButtonComponent from '../ButtonComponent'
import CardContainer from '../CardContainer'
import './styles.css'



function GameContainer({tournamentWizzards}) {



  return (

    <>
      <CardContainer tournamentWizzards={tournamentWizzards} />  
    </>
    
  )

}

export default GameContainer
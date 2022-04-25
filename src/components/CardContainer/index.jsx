import YellowCardInfo from '../YellowCardInfo'
import BlueCardInfo from '../BlueCardInfo'
import RedCardInfo from '../RedCardInfo'
import ButtonComponent from '../ButtonComponent'
import './styles.css'
import { useState } from 'react'


function CardContainer({tournamentWizzards}) {

  const yellowTeam = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Hufflepuff' )
  const blueTeam = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Slytherin' )
  const redTeam = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Gryffindor' )

  const [yellowCard, setYellowCard] = useState(Math.random(yellowTeam))
  const [blueCard, setBlueCard] = useState(Math.random(blueTeam))
  const [redCard, setRedCard] = useState(Math.random(redTeam))

  function randomYellowCard() {
    setYellowCard(Math.random(yellowTeam))
  }
  function randomBlueCard() {
    setBlueCard(Math.random(blueTeam))
  }
  function randomRedCard() {
    setRedCard(Math.random(redTeam))
  }

  return (
    <div>
      <div className='card-container'>
        <YellowCardInfo yellowCard={yellowCard}/>
        <BlueCardInfo blueCard={blueCard}/> 
        <RedCardInfo redCard={redCard}/>  
      </div>
      <ButtonComponent onClick={() => {
        randomYellowCard()
        randomBlueCard() 
        randomRedCard()}} >Try Again</ButtonComponent>
    </div> 
  )

}

export default CardContainer
import YellowCardInfo from '../YellowCardInfo'
import BlueCardInfo from '../BlueCardInfo'
import RedCardInfo from '../RedCardInfo'
import ButtonComponent from '../ButtonComponent'
import './styles.css'
import { useState } from 'react'


function CardContainer({tournamentWizzards}) {

  const yellowTeamWizzardChoiced = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Hufflepuff' )
  const blueTeamWizzardChoiced = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Slytherin' )
  const redTeamWizzardChoiced = tournamentWizzards.filter((tournamentWizzards) => tournamentWizzards.house === 'Gryffindor' )

  const [yellowCardRandomWizzard, setYellowCardRandomWizzard] = useState(Math.floor(Math.random() * (yellowTeamWizzardChoiced.length - 0 ) + 0))
  const [blueCardRandomWizzard, setBlueCardRandomWizzard] = useState(Math.floor(Math.random() * (blueTeamWizzardChoiced.length - 0 ) + 0))
  const [redCardRandomWizzard, setRedCardRandomWizzard] = useState(Math.floor(Math.random() * (redTeamWizzardChoiced.length - 0 ) + 0))

  function randomYellowCard() {
    setYellowCardRandomWizzard(Math.floor(Math.random() * (yellowTeamWizzardChoiced.length - 0 ) + 0))
  }
  function randomBlueCard() {
    setBlueCardRandomWizzard(Math.floor(Math.random() * (blueTeamWizzardChoiced.length - 0 ) + 0))
  }
  function randomRedCard() {
    setRedCardRandomWizzard(Math.floor(Math.random() * (redTeamWizzardChoiced.length - 0 ) + 0))
  }

  return (

    <div>
      <div className='card-container'>
        <YellowCardInfo yellowCardRandomWizzard={yellowCardRandomWizzard} yellowTeamWizzardChoiced={yellowTeamWizzardChoiced}/>
        <BlueCardInfo blueCardRandomWizzard={blueCardRandomWizzard} blueTeamWizzardChoiced={blueTeamWizzardChoiced}/> 
        <RedCardInfo redCardRandomWizzard={redCardRandomWizzard} redTeamWizzardChoiced={redTeamWizzardChoiced}/>  
      </div>
      <ButtonComponent onClick={() => {
        randomYellowCard()
        randomBlueCard() 
        randomRedCard()}} >Try Again</ButtonComponent>
    </div> 
    
  )

}

export default CardContainer
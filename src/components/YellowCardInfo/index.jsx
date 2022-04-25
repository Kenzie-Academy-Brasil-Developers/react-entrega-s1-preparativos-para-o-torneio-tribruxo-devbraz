import ImageComponent from '../ImageComponent'
import './styles.css'


function YellowCardInfo({yellowCardRandomWizzard, yellowTeamWizzardChoiced}) {

  return (

    <div className='yellow-card'>
      <ImageComponent className='yellow-card-img' src={yellowTeamWizzardChoiced[yellowCardRandomWizzard].image} alt={yellowTeamWizzardChoiced[yellowCardRandomWizzard].name}/>
      <p>{yellowTeamWizzardChoiced[yellowCardRandomWizzard].name}</p>
      <p className='yellow-card-house'>{yellowTeamWizzardChoiced[yellowCardRandomWizzard].house}</p>
    </div>

    

  )

}

export default YellowCardInfo
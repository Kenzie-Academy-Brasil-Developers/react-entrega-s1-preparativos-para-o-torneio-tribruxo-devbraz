import ImageComponent from '../ImageComponent'
import './styles.css'


function BlueCardInfo({blueCardRandomWizzard, blueTeamWizzardChoiced}) {

  return (

    <div className='blue-card'>
      <ImageComponent className='blue-card-img' src={blueTeamWizzardChoiced[blueCardRandomWizzard].image} alt={blueTeamWizzardChoiced[blueCardRandomWizzard].name}/>
      <p>{blueTeamWizzardChoiced[blueCardRandomWizzard].name}</p>
      <p className='blue-card-house'>{blueTeamWizzardChoiced[blueCardRandomWizzard].house}</p>
    </div>

  )

}

export default BlueCardInfo
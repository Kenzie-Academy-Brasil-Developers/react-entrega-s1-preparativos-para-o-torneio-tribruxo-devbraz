import ImageComponent from '../ImageComponent'
import './styles.css'


function RedCardInfo({redCardRandomWizzard, redTeamWizzardChoiced}) {

  return (

    <div className='red-card'>
      <ImageComponent className='red-card-img' src={redTeamWizzardChoiced[redCardRandomWizzard].image} alt={redTeamWizzardChoiced[redCardRandomWizzard].name}/>
      <p>{redTeamWizzardChoiced[redCardRandomWizzard].name}</p>
      <p className='red-card-house'>{redTeamWizzardChoiced[redCardRandomWizzard].house}</p>
    </div>

  )

}

export default RedCardInfo
import ImageComponent from '../ImageComponent'
import './styles.css'


function YellowCardInfo({yellowCard}) {

  return (

    <div className='yellow-card'>
      <ImageComponent className='yellow-card-img' src={yellowCard.image} alt={yellowCard.name}/>
      <p>{yellowCard.name}</p>
      <p className='yellow-card-house'>{yellowCard.house}</p>
    </div>

    

  )

}

export default YellowCardInfo
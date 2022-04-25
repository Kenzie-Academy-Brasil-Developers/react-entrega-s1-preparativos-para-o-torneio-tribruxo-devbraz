import ImageComponent from '../ImageComponent'
import './styles.css'


function BlueCardInfo({blueCard}) {

  return (

    <div className='blue-card'>
      <ImageComponent className='blue-card-img' src={blueCard.image} alt={blueCard.name}/>
      <p>{blueCard.name}</p>
      <p className='blue-card-house'>{blueCard.house}</p>
    </div>

    

  )

}

export default BlueCardInfo
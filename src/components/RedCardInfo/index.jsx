import ImageComponent from '../ImageComponent'
import './styles.css'


function RedCardInfo({redCard}) {

  return (

    <div className='red-card'>
      <ImageComponent className='red-card-img' src={redCard.image} alt={redCard.name}/>
      <p>{redCard.name}</p>
      <p className='red-card-house'>{redCard.house}</p>
    </div>

    

  )

}

export default RedCardInfo
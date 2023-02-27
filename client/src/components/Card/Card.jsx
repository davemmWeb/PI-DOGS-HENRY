import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

const Card = (props) => {
    
  return (
    <Link  to={`/detail/${props.name}`}>
        <div className={styles.container}>
          <h4>{props.name}</h4>  
          <div className={styles.tempImg}>
            <img src={props.image} alt={props.name} />             
            <p>Weight: </p>
            <br/>
            {props.weight}
          </div>    
            <span>{props.temperament}</span>            
        </div>                 
      </Link> 
  )
}
export default Card

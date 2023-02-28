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
            <div className={styles.weight}>
              <p>Weight: </p>
              <p>{props.weight}</p>
            </div>            
          </div>    
            <span>{props.temperament ? props.temperament : "Not have"}</span>            
        </div>                 
      </Link> 
  )
}
export default Card

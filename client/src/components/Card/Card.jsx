import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

const Card = (props) => {
    
  return (
    <Link  to={`/detail/${props.id}`}>
        <div className={styles.container}>
          <p>{props.name}</p>      
          <p>{props.temperament}</p>
          <img src={props.image} alt={props.name} />             
        </div>                 
      </Link> 
  )
}

export default Card
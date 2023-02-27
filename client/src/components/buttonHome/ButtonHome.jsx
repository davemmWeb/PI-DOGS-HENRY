import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./ButtonHome.module.css"


const ButtonHome = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.footprint}>
        <Link to={"/home"}>
          <button>Enter Home</button>
        </Link>
      </div>    
    </div>
  )
}

export default ButtonHome

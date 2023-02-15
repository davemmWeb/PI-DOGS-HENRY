import React from 'react'
import { Link } from 'react-router-dom'

const ButtonHome = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button>Enter Home</button>
      </Link>
    </div>
  )
}

export default ButtonHome

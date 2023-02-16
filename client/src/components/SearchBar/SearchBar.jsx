import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { searchForName } from '../../redux/actions'

const SearchBar = ({setMostrar}) => {

  const dispatch = useDispatch()  

  const handlerChange = (event) =>{
    event.preventDefault()    
    dispatch(searchForName(event.target.value))
  }  
  return (
    <div>
        <input onChange={handlerChange} type="text" placeholder='Search race' />
       
    </div>
  )
}

export default SearchBar
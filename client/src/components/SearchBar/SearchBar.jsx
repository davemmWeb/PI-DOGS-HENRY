import React from 'react'
import {useDispatch} from "react-redux"
import { searchForName } from '../../redux/actions'

const SearchBar = () => {

  const dispatch = useDispatch()  

  const handlerChange = (event) =>{
    event.preventDefault()
    const name = event.target.value
    dispatch(searchForName(name))
  }  
  
  return (
    <div>
        <input onChange={handlerChange} type="text" placeholder='Search race' />
       
    </div>
  )
}

export default SearchBar
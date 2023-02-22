import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { searchForName } from '../../redux/actions'
import styles from "./SearchBar.module.css"

const SearchBar = ({setDataToShow}) => {

  const dispatch = useDispatch()  

  const [name, setName] = useState('')

  const handlerChange = (event)=>{
    event.preventDefault()
    const {value} = event.target
    setName(value)
  }  
  const handlerClick = (event) =>{
    event.preventDefault()    
    dispatch(searchForName(name))
  } 
  const searchName = useSelector(state=>state.search_for_name)  

  useEffect(()=>{
    setDataToShow(searchName)
  },[searchName])

  return (
    <div className={styles.container}>
         <input  onChange={handlerChange} name="name" type="text" placeholder='Search race' />   
         <button onClick={handlerClick}>🔎</button>    
    </div>
  )
}

export default SearchBar
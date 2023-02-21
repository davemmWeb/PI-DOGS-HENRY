import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { searchForName } from '../../redux/actions'
import styles from "./SearchBar.module.css"

const SearchBar = ({setDataToShow}) => {

  const dispatch = useDispatch()  

  const handlerChange = (event) =>{
    event.preventDefault()    
    dispatch(searchForName(event.target.value))
  } 
  const searchName = useSelector(state=>state.search_for_name)
  useEffect(()=>{
    setDataToShow(searchName)
  },[searchName])

  return (
    <div className={styles.container}>
        🔎 <input onChange={handlerChange} type="text" placeholder='Search race' />       
    </div>
  )
}

export default SearchBar
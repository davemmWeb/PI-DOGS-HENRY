import React, {useEffect} from 'react'
import { 
     getTempApi,
     getTempDB,
     filterTemp,
     orderAscDes,
     orderMaxMin } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Form from "../Form/Form"
import SearchBar from '../SearchBar/SearchBar'
import styles from "./NavBar.module.css"
import {Link} from "react-router-dom"


const NavBar = ({setDataToShow, setCurrentPage}) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getTempDB())
      dispatch(getTempApi())
    }, [dispatch])

    const tempDB = useSelector(state=>state.get_temp_db)   
    const tempApi = useSelector(state=>state.get_temp_api)
    // *****************************************************************
    const handlerChangeApi = (event) =>{
        event.preventDefault()        
        dispatch(filterTemp(event.target.value))
    } 
    const tempsApi = useSelector(state=>state.filter_temp)
    useEffect(()=>{
        setDataToShow(tempsApi)
    },[tempsApi])
    // *****************************************************************
    const handlerChangeDb = (event) =>{
        event.preventDefault()        
        dispatch(filterTemp(event.target.value))
    } 
    const tempsDb = useSelector(state=>state.filter_temp_db)
    useEffect(()=>{
        setDataToShow(tempsDb)
    },[tempsDb])
    // *****************************************************************
    const handlerOrderAscDes = (event) =>{
        event.preventDefault()
        dispatch(orderAscDes(event.target.value))
        setCurrentPage(1)
    }
    const orderAsc = useSelector(state=>state.order_asc_des)
    useEffect(()=>{
        setDataToShow(orderAsc)
    },[orderAsc])
    // *****************************************************************
    const handlerOrderMinMax = (event) =>{
        event.preventDefault()
        dispatch(orderMaxMin(event.target.value))
        setCurrentPage(1)
    }
    const orderMax = useSelector(state=>state.order_max_min)
    useEffect(()=>{
        setDataToShow(orderMax)
    },[orderMax])

  return (
    <>  
        <div className={styles.container}>
            <SearchBar setDataToShow={setDataToShow}/>
            <label htmlFor="temperament">Temperament API</label>
            <select onChange={handlerChangeApi} >
                <option value="">Select</option>
                {
                    tempApi.map((value,index)=>{
                    return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>

            <label htmlFor="temperament">Temperament DB</label>
            <select onChange={handlerChangeDb}>
                <option value="">Select</option>
                {
                    tempDB.map((value,index)=>{
                    return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>

            <label htmlFor="temperament">Order ASC/DES</label>
            <select onChange={handlerOrderAscDes}>
                <option value="">Select</option>
                <option value="ASC">ASC</option>
                <option value="DES">DES</option>
                
            </select>

            <label htmlFor="temperament">Order Height</label>
            <select onChange={handlerOrderMinMax}>
                <option value="">Select</option>
                <option value="min_max">min - max</option>
                <option value="max_min">max - min</option>            
            </select>
            <Link to={"/form"}>
              <button>Create 🐕‍🦺</button>  
            </Link>
        </div>

    </>
  )
}

export default NavBar
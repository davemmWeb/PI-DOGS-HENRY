import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getTempDB} from "../../redux/actions"
import styles from "./FormTemp.module.css"

const FormTemp = ({setData, data, errors}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTempDB())      
  }, [dispatch]) 
  const temps = useSelector(state=>state.get_temp_db)
    
    const handlerSelectChange = (event) =>{
      event.preventDefault()
        const {value} = event.target
        setData({
            ...data,
            temperaments : [...data.temperaments,value]
        })
      }
      
  return (
    <>
        <label  htmlFor="temp">Temperament</label>
        <select className={errors.temperaments && styles.error} name="temperaments" onChange={handlerSelectChange}>          
          {
            temps.map((value,index)=>{ 
                return <option key={index} value={value.id}>{value.name}</option>
            })
          }          
        </select>
    </>
  )
}

export default FormTemp
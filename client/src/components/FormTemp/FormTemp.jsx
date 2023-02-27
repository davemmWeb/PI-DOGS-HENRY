import React from 'react'
import { useSelector} from "react-redux"
import styles from "./FormTemp.module.css"

const FormTemp = ({errors, tempsName,setTempsName,data,setData}) => {
  
  const temps = useSelector(state=>state.get_temp_db)
    
  const handlerSelectChange = (event) =>{
    event.preventDefault()
    const {value} = event.target
    const content = event.target.options[event.target.selectedIndex].text
    setData({
      ...data,
      temperaments : [...data.temperaments,value]
    })    
    setTempsName([...tempsName,content])   
  }
  return (
    <>
        <label  htmlFor="temp">Temperament</label>
        <select className={errors.temperaments && styles.error} 
                name="temperaments" 
                onChange={handlerSelectChange}>          
          {
            temps.map((value,index)=>{ 
                return <option key={index} value={value.id} >{value.name}</option>
            })
          }          
        </select>
    </>
  )
}

export default FormTemp
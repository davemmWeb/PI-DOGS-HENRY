import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({pagina,setPagina,maximo}) => {
    const [input, setInput] = useState(1)

    useEffect(()=>{        
        setPagina(1)               
    },[maximo])

    const nextPage = ()=>{
        if(pagina < maximo){
            setInput(input+1)
            setPagina(pagina+1 )
        }                 
    }
    const prevPage = ()=>{
        if(pagina > 1){
            setInput(input - 1)
            setPagina(pagina - 1)            
        }         
    }  
    const arrIndex = []
    for (let i = 1; i < maximo+1; i++) {
        arrIndex.push(i)        
    }
    
    const clickPage = (event) =>{
        event.preventDefault()
        setPagina(event.target.name)        
    }

  return (
    <div className={styles.container}>
        <button className={styles.button} onClick={prevPage}>Prev</button>  
        {
            arrIndex.map(value=>{
                return <button onClick={clickPage} name={value}>{value}</button>
            })
        }                
        <button className={styles.button}onClick={nextPage}>Next</button>        
    </div>
  )
}

export default Pagination
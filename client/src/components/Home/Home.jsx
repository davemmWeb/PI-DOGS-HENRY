import React,{useEffect} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getDogs } from '../../redux/actions'
import styles from "./Home.module.css"


const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getDogs())
    },[])

    const allDogs = useSelector(state=>state.allDogs)
    const getForName = useSelector(state=>state.searchForName)
     
    console.log(getForName)
  return (
    <div>
        <SearchBar/>
        <div className={styles.containerCards}>
            {
                getForName.length === 1 ? getForName.map((value,index)=>{
                    return <Card key={index} 
                        id= {value.id}
                        image = {value.image.url}
                        name = {value.name}
                        temperament = {value.temperament}
                        weight = {value.weight.imperial}
                    />
                }) : 
                allDogs.map((value,index)=>{
                    return <Card key={index} 
                        id= {value.id}
                        image = {value.image.url}
                        name = {value.name}
                        temperament = {value.temperament}
                        weight = {value.weight.imperial}
                    />
                })
            }
        </div>
        
    </div>
  )
}

export default Home
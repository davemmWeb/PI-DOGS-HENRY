import React,{useEffect, useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getDogs } from '../../redux/actions'
import styles from "./Home.module.css"
import NavBar from '../NavBar/NavBar'
import loading from '../../accets/reloading.gif'
import Pagination from '../Pagination/Pagination'


const Home = () => {
    const dispatch = useDispatch()

    const [mostrar, setMostrar] = useState([])
  
    const [pagina, setPagina] = useState(1)
    const [porPagina, setPorPagina] = useState(8)  
    const maximo = Math.ceil(mostrar.length / porPagina)
    
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])

    const allDogs = useSelector(state=>state.all_dogs)
    const getForName = useSelector(state=>state.search_for_name)


    useEffect(()=>{
        getForName.length === 0 ? 
        setMostrar(allDogs):
        setMostrar(getForName)
    },[allDogs,getForName])
     
    
  return (
    <div>
        <SearchBar setMostrar={setMostrar}/>
        <NavBar/>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} mostrar={mostrar}/>
        <div className={styles.containerCards}>
            {               
                mostrar.length ? mostrar.slice((pagina - 1)*porPagina,
                (pagina -1)* porPagina + porPagina).map((value,index)=>{
                    return <Card key={index} 
                        id= {value.id}
                        image = {value.image.url}
                        name = {value.name}
                        temperament = {value.temperament}
                        weight = {value.weight.imperial}
                    />
                }): 
                <div className={styles.loading}>
                    <img src={loading} alt="loading" />
                </div> 
            }
        </div>
        
    </div>
  )
}

export default Home
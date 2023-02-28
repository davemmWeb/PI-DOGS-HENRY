import React,{useEffect, useState} from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { getDogs,getTempDB } from '../../redux/actions'
import styles from "./Home.module.css"
import NavBar from '../NavBar/NavBar'
import loading from '../../accets/reloading.gif'
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom'


const ITEMS_PER_PAGE = 8;

const Home = () => {
    const dispatch = useDispatch()
    // **********************************************************************************   
    useEffect(()=>{ 
        dispatch(getTempDB())
        dispatch(getDogs())
    },[])
    const allDogs = useSelector(state=>state.all_dogs)    
    useEffect(()=>{
        setDataToShow(allDogs)
    },[allDogs]) 
    // **********************************************************************************
    const [currentPage, setCurrentPage] = useState(1);
    const [dataToShow, setDataToShow] = useState([])    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;    
    
  return (
    <div className={styles.container}>
        <div className={styles.exit}>
            <Link to={"/"}>
                <p>Exit 📤</p>
            </Link>
        </div>
        <NavBar setDataToShow={setDataToShow} onPageChange={handlePageChange}/>
        <Pagination 
          currentPage={currentPage} 
          totalPages={Math.ceil(dataToShow.length / ITEMS_PER_PAGE)} 
          onPageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
        />
        <div className={styles.containerCards}>
            {               
                dataToShow.length ? dataToShow.slice(startIndex, endIndex).map((value,index)=>{
                    return <Card key={index} 
                        id= {value.id}
                        image = {value.reference_image_id?`https://cdn2.thedogapi.com/images/${value.reference_image_id}.jpg`: value.image}
                        name = {value.name}
                        temperament = {value.temperaments?value.temperaments.map(value=>value.name):value.temperament}
                        weight = {value.weight.imperial?value.weight.imperial:value.weight}
                    />
                }):  
                    <img className={styles.imgLoading} src={loading} alt="loading" />
            } 
        </div>
        
    </div>
  )
}

export default Home
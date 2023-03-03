import React, {useEffect} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import { getDetail,deleteDog } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Detail.module.css"

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(getDetail(id))
    }, [dispatch])
    
    const detail = useSelector(state=>state.get_detail) 
    
    const onDelete = (event) =>{
        event.preventDefault()
        dispatch(deleteDog(id))
        navigate("/home")
    }
    
    
  return (
    <div className={styles.container}>    
        {
            detail.map((value,index)=>{
                return <div className={styles.containerDetail} key={index}>
                    <div className={styles.back}>
                        <Link  to={"/home"}>
                            <p>🔙</p>
                        </Link>        
                    </div>
                    <div className={styles.imageTitle}>
                        <h1>{value.name}</h1>
                        <img src={value.image.url?value.image.url:value.image} alt={value.name} />
                    </div>
                    <div className={styles.details}>
                        {
                            !value.image.url && <button onClick={onDelete}>Delete</button>
                        }                        
                        <p>🐶Height imperial : {value.height.imperial ? value.height.imperial : value.height}</p>
                        <p>🐶Height metric : {value.height.metric ? value.height.metric : value.height}</p>
                        <p>🐶Life Span : {value.life_span ? value.life_span : "not asigned"}</p>
                        <p>🐶Bred for : {value.bred_for ? value.bred_for : "not asigned"}</p>
                        <p>🐶Breed group : {value.breed_group ? value.breed_group : "not asigned"}</p>
                        <p>🐶Temperament : 
                            {value.temperament ? 
                            value.temperament : 
                            value.temperaments.map((value)=>{
                                return <div>
                                    <span key={value.id}>{value.name}</span>
                                </div>
                            })
                        }</p>
                        <p>🐶Weight imperial : {value.weight.imperial ? value.weight.imperial : value.weight}</p>
                        <p>🐶Weight metric : {value.weight.metric ? value.weight.metric : value.weight}</p>
                    </div>
                </div>
            })
        }   
    </div>
  )
}

export default Detail
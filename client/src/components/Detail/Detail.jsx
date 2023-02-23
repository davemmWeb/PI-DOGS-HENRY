import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Detail.module.css"

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
      dispatch(getDetail(id))
    }, [dispatch])
    
    const detail = useSelector(state=>state.get_detail)    
    
  return (
    <>    
        {
            detail.map((value,index)=>{
                return <div className={styles.container} key={index}>
                    <div className={styles.back}>
                        <Link  to={"/home"}>
                            <p>🔙</p>
                        </Link>        
                    </div>
                    <div className={styles.imageTitle}>
                        <h1>{value.name}</h1>
                        <img src={value.image.url} alt={value.name} />
                    </div>
                    <div className={styles.details}>
                        <p>🐶Height imperial : {value.height.imperial}</p>
                        <p>🐶Height metric : {value.height.metric}</p>
                        <p>🐶Life Span : {value.life_span}</p>
                        <p>🐶Bred for : {value.bred_for}</p>
                        <p>🐶Breed group : {value.breed_group}</p>
                        <p>🐶Temperament : {value.temperament}</p>
                        <p>🐶Weight imperial : {value.weight.imperial}</p>
                        <p>🐶Weight metric : {value.weight.metric}</p>
                    </div>
                </div>
            })
        }   
    </>
  )
}

export default Detail
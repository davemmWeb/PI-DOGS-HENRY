import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Detail.module.css"

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
      dispatch(getDetail(id))
    }, [dispatch])
    
    const detail = useSelector(state=>state.getDetail)    
    
  return (
    <div className={styles.container}>
        <h1>Race: {detail[0].name}</h1>
        <img src={detail[0].image.url} alt={detail[0].name} />
        {
            detail.map((value,index)=>{
                return <div className={styles.details} key={index}>
                    <p>Height imperial: {value.height.imperial}</p>
                    <p>Height metric: {value.height.metric}</p>
                    <p>Life Span: {value.life_span}</p>
                    <p>Bred for: {value.bred_for}</p>
                    <p>Breed group: {value.breed_group}</p>
                    <p>Temperament: {value.temperament}</p>
                    <p>Weight imperial: {value.weight.imperial}</p>
                    <p>Weight metric: {value.weight.metric}</p>
                </div>
            })
        }
    </div>
  )
}

export default Detail
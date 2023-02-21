import React, {useState, useEffect} from 'react'
import { 
  validationName,
  validateImage,
  validateHeight,
  validateWeight,
  validateLifeSpan, 
  validateTemp,
  } from './Validations'
import FormTemp from '../FormTemp/FormTemp'
import styles from "./Form.module.css"
import { useDispatch } from 'react-redux'
import { createNewRace } from '../../redux/actions'
import {Link} from "react-router-dom"


const Form = () => {

  const dispatch = useDispatch()

  const [data, setData] = useState({
    name: '',
    image:'',
    height: '',
    weight: '',
    life_span: '',
    temperaments:[]
  })

  const [errors, setErrors] = useState({
    name: '',
    image:'',
    height: '',
    weight: '',
    life_span: '',
    temperaments: ''
  })

  const [imagePreview, setImagePreview] = useState('')

  const handlerImageSelect = (event)=>{
    const file = event.target.files[0]
    if(!file) return

    setData({
      ...data,
      image : file.name
    })

    const reading = new FileReader()
    reading.readAsDataURL(file)
    
    reading.onload = function(){
      setImagePreview(reading.result)
    }
  }

  const handlerInputChange = (event) =>{
    event.preventDefault()
    const {name} = event.target
    const {value} = event.target
    setData({
      ...data,
      [name]:value
    })    
  }

  useEffect(() => {
    validation() 
  }, [data])
  

  const validation = () =>{
    setErrors({
      ...errors,
      name: validationName(data.name),
      image: validateImage(data.image),
      height: validateHeight(data.height),
      weight: validateWeight(data.weight),
      life_span: validateLifeSpan(data.life_span),
      temperaments : validateTemp(data.temperaments),
    })
  }

  const deleteTemp = (event) =>{  
    event.preventDefault()     
    setData({
      ...data,
      temperaments : [...data.temperaments.filter(value=>value != event.target.value)]
    })
  }

  const handlerSubmit = (event) =>{
    event.preventDefault() 
    const {name,image,height,weight,life_span,temperaments} = data
    if([name,image,height,weight,life_span].every((str)=>str.trim().length > 0) && temperaments.length > 0){
      dispatch(createNewRace(data)) 
      setData({
        name: '',
        image:'',
        height: '',
        weight: '',
        life_span: '',
        temperaments:[]
      })
    }else{
      return alert("Data incomplete")
    }   
  } 

  return (
    <>
    <div className={styles.container}>
      <div className={styles.getHome}>
        <Link  to={"/home"}>Home 🏠</Link>        
      </div>
      <form action="submit" className={styles.form}>        
          <label htmlFor="name">Name</label>
          <input className={errors.name && styles.error} type="text" name='name' onChange={handlerInputChange}/>          
        
          <label htmlFor="image">Image</label>
          <input className={errors.image && styles.error} type="file" name='image' onChange={handlerImageSelect}/>          
          
          <label htmlFor="height">Height</label>
          <input className={errors.height && styles.error} type="text" name='height'onChange={handlerInputChange}/>
        
          <label htmlFor="weight">Weight</label>
          <input className={errors.weight && styles.error} type="text" name='weight'onChange={handlerInputChange}/>

          <label htmlFor="life_span">Life span</label>
          <input className={errors.life_span && styles.error} type="text" name='life_span'onChange={handlerInputChange}/>

        <FormTemp  errors={errors} setData={setData} data={data}/>

        <button type='submit' onClick={handlerSubmit}>Create New Race</button>
      </form>

      <div className={styles.dataNewDog}>
        <h1>New Dog</h1>
        <h3>Name: {data.name}</h3>
        <h3>Image: </h3>
        {imagePreview && (
             <img className={styles.previewImage} src={imagePreview} alt="Vista previa de imagen" />
          )}
        <h3>Height: {data.height}</h3>
        <h3>Weight: {data.weight}</h3>
        <h3>Life span: {data.life_span}</h3>
        <h3>Temperaments: </h3>
        {
          data.temperaments.map((value,index)=>{
            return <p key={index}>{value} <button value={value} onClick={deleteTemp}>❌</button></p>
          })
        }

      </div>

    </div>
    </>
  )
}

export default Form
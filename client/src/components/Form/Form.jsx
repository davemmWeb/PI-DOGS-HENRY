import React, {useState, useEffect} from 'react'
import { 
  validationName,
  validateImage,
  validateHeight,
  validateWeight,
  validateLifeSpan, 
  } from './Validations'
import FormTemp from '../FormTemp/FormTemp'
import styles from "./Form.module.css"
import { useDispatch } from 'react-redux'
import { createNewRace } from '../../redux/actions'
import {Link} from "react-router-dom"
import coverVideo from "../../accets/videoDog4.mp4"



const Form = () => {

  const dispatch = useDispatch()
    
  // ******************************************************************************************************
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
  // ******************************************************************************************************
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
  // ******************************************************************************************************
    const handlerInputChange = (event) =>{
    event.preventDefault()
    const {name} = event.target
    const {value} = event.target
    setData({
      ...data,
      [name]:value
    })    
  }
  // ******************************************************************************************************
  const handlerSelectChangeMin = (event) =>{
    event.preventDefault()
    const {name} = event.target
    const {value} = event.target
    setData({
      ...data,
      [name] : value
    })
  }
  const handlerSelectChangeMax = (event) =>{
    event.preventDefault()
    const {name} = event.target
    const {value} = event.target
    if(!/^[^-]*-[^-]*$/.test(data[name])){
      setData({
        ...data,
        [name] : data[name] += -value
      }) 
    }  
  }
  // ******************************************************************************************************
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
    })
  }
  // ******************************************************************************************************
  const deleteTemp = (event) =>{  
    event.preventDefault()     
    setTempsName([...tempsName.filter(value=>value != event.target.value)]
    )
  }
  // ******************************************************************************************************
  const handlerSubmit = (event) =>{
    event.preventDefault()     
    const {name,image,height,weight,life_span,temperaments} = data    
    if([name,image,height,weight,life_span].every((str)=>str.trim().length > 0) && temperaments.length > 0){
      dispatch(createNewRace(data))       
    }else{
      return alert("Data incomplete")
    }   
  } 
  // ******************************************************************************************************
  const [tempsName, setTempsName] = useState([])
  const options = []
    for (let i = 1; i < 20; i++) {
      options.push(<option key={i}value={i}>{i}</option>)      
  }
  // ******************************************************************************************************
  return (
    <>
    <div className={styles.container}>
      <video className={styles.video} src={coverVideo} autoPlay loop muted/>
      <div className={styles.getHome}>
        <Link  to={"/home"}>
          <p>Home 🏠</p>
        </Link>        
      </div>
      <form action="submit" className={styles.form}>  
          {/* *****************INPUT NAME********************* */}
          <label htmlFor="name">Name</label>
          <input 
            className={errors.name && styles.error} 
            type="text" 
            name='name' 
            onChange={handlerInputChange}/>          
          {/* *****************INPUT IMAGE********************* */}
          <label htmlFor="image">Image</label>
          <input 
            className={errors.image && styles.error} 
            type="file" 
            name='image' 
            onChange={handlerImageSelect}/>          
         {/* *******************SELECT HEIGHT******************* */}
          <h4>Height</h4>
          <label htmlFor="height">Min</label>
          <select 
            className={errors.height? styles.errorMaxMin : styles.max_min} 
            name="height"
            onChange={handlerSelectChangeMin}>
            <option value="">Select</option>
            {options}
          </select>
          <label htmlFor="height">Max</label>
          <select 
            className={errors.height? styles.errorMaxMin : styles.max_min} 
            name="height"
            onChange={handlerSelectChangeMax}>
          <option value="">Select</option>
            {options}
          </select>
         {/* *******************SELECT WEIGHT******************* */}
          <h4>Weight</h4>
          <label htmlFor="weight">Min</label>
          <select 
            className={errors.weight? styles.errorMaxMin : styles.max_min} 
            name="weight"
            onChange={handlerSelectChangeMin}>
          <option value="">Select</option>
            {options}
          </select>
          <label htmlFor="weight">Max</label>
          <select 
            className={errors.weight? styles.errorMaxMin : styles.max_min} 
            name="weight"
            onChange={handlerSelectChangeMax}>
          <option value="">Select</option>
            {options}
          </select>
         {/* *******************SELECT LIFE_SPAN******************* */}
          <h4>Life span</h4>
          <label htmlFor="life_span">Min</label>
          <select 
            className={errors.life_span? styles.errorMaxMin : styles.max_min}
            name="life_span"
            onChange={handlerSelectChangeMin}>
          <option value="">Select</option>
            {options}
          </select>
          <label htmlFor="life_span">Max</label>
          <select 
            className={errors.life_span? styles.errorMaxMin : styles.max_min} 
            name="life_span"
            onChange={handlerSelectChangeMax}>
          <option value="">Select</option>
            {options}
          </select>
         {/* ************************************** */}         

        <FormTemp  
          errors={errors} 
          tempsName={tempsName} 
          setTempsName={setTempsName} 
          data={data}
          setData={setData}         
          />

        <button type='submit' onClick={handlerSubmit}>Create New Race</button>
      </form>

      <div className={styles.dataNewDog}>
        <div className={styles.data}>
          <h2>New Dog</h2>
          <h3>Name: {errors.name ? <span className={styles.errorh3}>{errors.name}</span> : data.name}</h3>
          <div className={styles.previewImage}>
            <h3>Image: {errors.image && <span className={styles.errorh3}>{errors.image}</span>}</h3>
              {imagePreview && (
                <img  src={imagePreview} alt="Vista previa de imagen" />
                )}
          </div>
          {/* *********************************** HEIGHT *********************************** */}
          <h3>Height: 
            { data.height ?
               <span> {data.height}</span>            
                : <span className={styles.errorh3}> {errors.height}</span>              
            }
          </h3>
          {/* *********************************** WEIGHT *********************************** */}
          <h3>Weight: 
            { data.weight ?
               <span> {data.weight}</span>            
                : <span className={styles.errorh3}> {errors.weight}</span>              
            }
          </h3>
          {/* *********************************** LIFE_SPAN *********************************** */}
          <h3>Life span: 
            { data.life_span ?
               <span> {data.life_span}</span>            
                : <span className={styles.errorh3}> {errors.life_span}</span>              
            }
          </h3>
          {/* *********************************** TEMPERAMENTS *********************************** */}
          <h3>Temperaments: </h3>
          <div className={styles.temperaments}>
            {
              tempsName.map((value,index)=>{
                return <p key={index}>{value} <button value={value} onClick={deleteTemp}>❌</button></p>
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form
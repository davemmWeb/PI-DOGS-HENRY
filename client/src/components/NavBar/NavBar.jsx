import React, {useEffect} from 'react'
import { getTempApi, getTempDB, filterTemp } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


const NavBar = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getTempDB())
      dispatch(getTempApi())
    }, [dispatch])

    const tempDB = useSelector(state=>state.get_temp_db)   
    const tempApi = useSelector(state=>state.get_temp_api)
    const filterTemp = useSelector(state=>state.filter_temp)



    const handlerChange = (event) =>{
        event.preventDefault()
        const temp = event.target.value
        dispatch(filterTemp(temp))
    }    
  return (
    <>  
        <label htmlFor="temperament">Temperament API</label>
        <select onChange={handlerChange} >
            <option value="">Select</option>
            {
                tempApi.map((value,index)=>{
                   return <option key={index} value={value}>{value}</option>
                })
            }
        </select>

        <label htmlFor="temperament">Temperament DB</label>
        <select name="" id="">
            <option value="">Select</option>
            {
                tempDB.map((value,index)=>{
                   return <option key={index} value={value}>{value}</option>
                })
            }
        </select>

    </>
  )
}

export default NavBar
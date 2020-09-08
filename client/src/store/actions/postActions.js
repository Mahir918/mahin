import * as Types from './Types'
import axios from 'axios'



export const addData = dataTodo => dispatch =>{
    axios
        .post('/api/post/', dataTodo)
        .then(response => {
            dispatch({
                type:Types.CREATE_DATA,
                payload:{
                    dataTodo: response.data
                }
            })
        })
        .catch(error =>{
            console.log(error)
        })
}

export const getData = () => dispatch =>{
    axios
        .get('/api/post/')
        .then(response =>{
            dispatch({
                type: Types.SET_USER,
                payload:{
                    result: response.data
                    
                }
            })
        })
        .catch(error =>{
            console.log(error)
        })
}

export const removeData = id => dispatch =>{
    axios.delete(`/api/post/${id}`)
    .then(response =>{
        dispatch({
            type:Types.REMOVE_DATA,
            payload:{
                id:response.data._id
            }
        })
    })
}

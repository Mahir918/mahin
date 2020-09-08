import * as Types from '../actions/Types'

const dataReducer = (state = [],action) =>{
    switch (action.type){
        case Types.SET_USER:{
            return action.payload.result
        }
        case Types.CREATE_DATA:{
            let data = [...state]
            data.unshift(action.payload.dataTodo)
            return data
        }
        case Types.REMOVE_DATA:{
            let data = [...state]
            return data.filter(tran =>{
                return tran._id !== action.payload.id
            })
        }
        default : return state
    }
}

export default dataReducer
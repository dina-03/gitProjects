import Types from './actionTypes';

const init = {
    users:[],
    currentUser: null,
    loading: false,
    error: {
        registration:null,
        login:null
    }
}

const usersReducer = (state = init, {type, payload})=>{
    switch(type){
        case Types.initState:
            return{
                ...state,
                users: [...payload.users],
                currentUser: payload.currentUser,
                loading: false
            }
        case Types.registration:
            return{
                ...state,
                users: [...state.users, payload],
                currentUser:payload,
                loading:false,

            }
        case Types.editUser:
            return{
                ...state,
                loading:false,
                currentUser: payload.currentUser,
                users: payload.users
            }
        
        case Types.login:
        return{
            ...state,
            loading: false,
            currentUser: payload,
        }
        case Types.logout:
            return{
                ...state,
                currentUser:null
            }        
        case Types.load:
        return {
            ...state,
            loading: true,
            error: {registration: null, login: null}
        }
        case Types.error:
            return{
                ...state,
                loading: false,
                error: {...state.error, ...payload}
            }
        default: return state
    }
}

export default usersReducer
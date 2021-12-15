import {createSlice} from "@reduxjs/toolkit";
import {login, registration} from "../service/authService";
import {stopLoading, startLoading, authSuccess} from "./appReducer/AppReducer";

const initialState = {
    error: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state, {payload}) => {
            state.error = payload
        },
        clearError: state => {
            state.error = null
        }
    }
})

export default auth.reducer;
export const {setError, clearError} = auth.actions;
export const errorSelector = state => state.auth.error;

export function loginAction(email, pass){
    return async dispatch=>{
        dispatch(startLoading())
        dispatch(clearError())
        try {
            await login(email, pass);
            dispatch(authSuccess());
        }catch (error){
            console.log(error)
            dispatch(setError(error.message))
        }finally {
            dispatch(stopLoading())
        }
    }
}

export function registrationAction(email, pass){
    return async dispatch=>{
        dispatch(startLoading())
        dispatch(clearError())
        try {
            await registration(email, pass);
            dispatch(authSuccess());
        }catch (error){
            console.log(error)
            dispatch(setError(error.message))
        }finally {
            dispatch(stopLoading())
        }
    }
}

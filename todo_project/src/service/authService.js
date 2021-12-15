import {fb} from "../config/firbase-config";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

const auth = getAuth(fb)

export const login = async (email, pass) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, pass);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)
    } catch (error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}

export const registration = async (email, pass) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)
    } catch (error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}

export const logout = async () => {
    console.log('logout service')
    try {
        await signOut(auth)
        localStorage.removeItem('USER_ID')
    }catch (error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}

/*
export async function login(email, pass) {
    try {
        const response = await signInWithEmailAndPassword(auth, email, pass);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)
    } catch (error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}
export async function registration(email, pass) {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)
    } catch (error) {
        console.log(error.message)
        await Promise.reject(error)
    }
}
*/

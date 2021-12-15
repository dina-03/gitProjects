import {db} from '../config/firbase-config'
import {doc, getDoc, arrayUnion, updateDoc, setDoc} from "firebase/firestore";

export const addTodoItem = async (title, uid) => {
    try {
        const docRef = doc(db, 'todos', uid)  //база данных, коллекция 'todos', юзер id
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            await updateDoc(docRef, {
                todos: arrayUnion({
                    title,
                    status: false
                })
            })
        } else {
            await setDoc(docRef, {todos: [{title, status: false}]})
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const getAllTodos = async (uid) => {
    try {
        const docRef = doc(db, 'todos', uid)
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            return docData.data();
        }
        return {todos: []}
    } catch (error) {
        console.log(error.message)
    }
}

export const changeTodos = async (todos, uid) => {
    try {
        const docRef = doc(db, 'todos', uid)
        await updateDoc(docRef, {todos: [...todos]})
    } catch (error) {
        console.log(error.message)
    }
}

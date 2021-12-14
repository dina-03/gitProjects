import { db } from '../config/firebase-config'

import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'

export const getAllMenus = async () => {
    try {
        const docRef = doc(db, 'menudatabase', 'menu')
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            return docData.data()
        }
        return { menu: [] }
    } catch (error) {
        console.log(error.message)
    }
}

export const addOrderItem = async ({id, order}) => {
    try {
        const docRef = doc(db, 'menudatabase', 'orders')
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            await updateDoc(docRef, {
                orders: arrayUnion({
                    id, order
                })
            })
        } else {
            await setDoc(docRef, {
                orders: {
                    id, order
                }
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const getAllOrders = async () => {
    try {
        const docRef = doc(db, 'menudatabase', 'orders')
        const docData = await getDoc(docRef)
        if (docData.exists()) {
            return docData.data()
        }
        return { orders: [] }
    } catch (error) {
        console.log(error.message)
    }
}
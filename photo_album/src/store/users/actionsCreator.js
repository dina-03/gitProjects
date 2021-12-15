import Types from './actionTypes';
import * as UsersData from './../../data/usersData';

export const initialState = () => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const data = {
                    users: UsersData.getUsers(),
                    currentUser: UsersData.getCurrentUser()
                }

                dispatch({ type: Types.initState, payload: { ...data } })
            } catch (e) {
                console.log(e.message)
            }
        }, 2000)

    }
}

export const registration = (user) => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const newUser = createUser(user)
                if (newUser) {
                    dispatch({
                        type: Types.registration,
                        payload: newUser
                    })
                } else {
                    throw new Error('user specified email is already exist')
                }

            } catch (e) {
                dispatch({ type: Types.error, payload: {registration:e.message }})
            }

        }, 2000)

    }

}

export const login = data => {
    return dispatch => {
        dispatch({ type: Types.load })
        setTimeout(() => {
            try {
                const user = UsersData.loginUser(data);
                if(user){
                    UsersData.setCurrentUserLocalStorage(user)
                    dispatch({type: Types.login, payload:user})
                }else{
                    throw new Error('password or email is wrong')
                }
            } catch(e) {
                dispatch({type: Types.error, payload:{login: e.message}})
            }
        }, 2000)
    }
}

// promiss().then(return result).catch() // 

export const logout = () => {
    return ({
        type: Types.logout
    })
}

export const updateUser = data =>{
    return dispatch =>{
        dispatch({type: Types.load})
        setTimeout(()=>{
            try{
                const newUsers = [...UsersData.getUsers()]
                const index = newUsers.findIndex(user => user.id ===data.id)
                newUsers[index] = data;
                UsersData.setUsersToLocalStorage(newUsers);
                UsersData.setCurrentUserLocalStorage(data)
                dispatch({
                    type: Types.editUser,
                    payload:{
                        users: [...newUsers],
                        currentUser: data
                    }
                })
            }catch(e){
                console.log(e.message)
            }

        },1000)
    }
}


const createUser = user => {
    const users = UsersData.getUsers();
    const isEMailExist = users.some(u => u.email === user.email);
    if (!isEMailExist) {
        user = { ...user, id: Date.now() }
        users.push(user)
        UsersData.setUsersToLocalStorage(users)
        UsersData.setCurrentUserLocalStorage(user)
        return user
    }
    return null
}

/* const newUsers = [...UsersData.getUsers()]
const index = newUsers.findIndex(user => user.id ===data.id)
if(index===-1){
    throw new Error ('no such user')
} */

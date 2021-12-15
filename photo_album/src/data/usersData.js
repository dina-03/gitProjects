
export const getUsers =()=>{
    const users = JSON.parse(localStorage.getItem('users'))
    return users ? users : []
}

export const setUsersToLocalStorage = (users) => localStorage.setItem('users', JSON.stringify(users))

export const setCurrentUserLocalStorage = (user) =>{
    localStorage.setItem('currentUser', JSON.stringify(user))
}

export const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem('currentUser'))
}

export const resetCurrentUser = ()=>{
    localStorage.removeItem('currentUser')
}

export const loginUser = (data) =>{
    const user = getUsers().find(u => u.email === data.email)
    return user ? (user.password === data.password ? user: null) : null
}


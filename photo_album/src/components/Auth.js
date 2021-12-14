import { Link, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import { initialState, logout } from '../store/users/actionsCreator'
import { useEffect} from 'react'
import { resetCurrentUser } from '../data/usersData'

const Auth = ({currentUser, initial, loading, users, userLogout})=>{
    
    useEffect(()=>{ 
        if(users.length ===0)
        initial()
        // eslint-disable-next-line
    }, [])

    const history = useHistory()
return (
        <>
        {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true">
        </span> : currentUser ? <>
                <li className ="text-white me-3 list-unstyled">{`Hi, ${currentUser.fName}!`}</li>
                <li className ="text-white list-unstyled"
                    onClick = {()=>{
                        userLogout()
                        resetCurrentUser()
                        history.push('/')
                    }}
                    style = {{cursor :'pointer'}}
                    >Logout</li>
                </> :
                <>
                <li className ="text-white me-3 list-unstyled">Hi, gast!</li>
                <Link className = 'nav-item' to="/login">Login</Link>
                </>
                } 
            
        </>
    )
}

const mapStateToProps = ({usersReducer})=>{
    return{
        currentUser: usersReducer.currentUser,
        loading: usersReducer.loading,
        users: usersReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initial: ()=>dispatch(initialState()),
        userLogout: ()=>dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

//{"fName":"Elena","lName":"Sitar","email":"lenasitars@gmail.com","password":"12345","avatar":"","id":1632311451584}
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import { connect } from 'react-redux'
import { login } from '../store/users/actionsCreator'

const Login = ({ currentUser, error, loginUser }) => {
    const [logData, setLogData] = useState({ email: '', password: '' })

    const onChangeHandler = ({ target }) => {
        setLogData({ ...logData, [target.name]: target.value })
    }

    return (
        <>
        {currentUser && <Redirect to ='/users' />}
        <div className='container my-5'>
            <div className='col-6 mx-auto my-5'>
                {error.login && <Error message={error.login} />}
                <h2 className="text-center">Enter your data please</h2>
                <input
                    className="form-control my-3"
                    type="text"
                    name="email"
                    placeholder="Type email"
                    onChange={onChangeHandler}
                    value={logData.email}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="password"
                    placeholder="Type password"
                    value={logData.password}
                    onChange={onChangeHandler}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={() => {
                            loginUser(logData)
                            setLogData({ email: '', password: '' })
                        }}
                    >Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    return {
        currentUser: usersReducer.currentUser,
        error: usersReducer.error
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loginUser: (data) => dispatch(login(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
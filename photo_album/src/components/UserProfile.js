import { useState } from 'react'
import UserAlbums from './UserAlbums'
import { connect } from 'react-redux'
import { updateUser } from '../store/users/actionsCreator';
import { Redirect } from 'react-router-dom';

const UserProfile = ({ currentUser, editUser }) => {

    const [user, setUser] = useState(currentUser);

    const changeFieldHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        if (!user.fName.trim() || !user.email.trim() || !user.password.trim()) return
        editUser(user)
    }

    return (
        <>{!currentUser ? <Redirect to='/users' /> :
            <div className='container'>
                <div className='row'>
                    <div className="card col-4 text-center p-3 my-2">
                        <h3 className="card-title">{user.fName} {user.lName}</h3>
                        {user.avatar ? <img src={user.avatar} className="card-img-top" alt="..." /> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" className="bi bi-person-fill mx-auto text-success" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>}
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="fName"
                                        value={user.fName}
                                        onChange={changeFieldHandler}
                                        autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="lName"
                                        value={user.lName}
                                        onChange={changeFieldHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        value={user.email}
                                        onChange={changeFieldHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={changeFieldHandler} />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Avatar</label>
                                    <input type="text"
                                        className="form-control"
                                        name="avatar"
                                        value={user.avatar}
                                        onChange={changeFieldHandler} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success w-100">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <UserAlbums currentUser={currentUser} />
                </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = ({ usersReducer }) => {
    return {
        currentUser: usersReducer.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (data) => dispatch(updateUser(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
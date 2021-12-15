import { useContext } from 'react';
import { AppContext } from '../App';
import Album from './Album'
import {connect} from 'react-redux'

const Albums = ({match, users})=>{
    let {albums} = useContext(AppContext)

    const userId = +match.params.id

    if(userId){
        albums = albums.filter(album => album.userId === userId)
    }

    return(
        <div className = 'container'>
            {users.length ===0 ? <div className="spinner-border mx-auto text-center" role="status" aria-hidden="true">
                </div> :
            <>
            <h1 className = 'text-center my-5'>{userId ? `Albums by ${findUserNameById(users, userId)}`:'All our albums'}</h1>
            <div className = "row row-cols-2 row-cols-md-4">
            {albums.map(album => <Album key = {album.id} album ={album} userName = {findUserNameById(users, album.userId)}/>)}
            </div>
            </>
            }
        </div>
    )
}

const findUserNameById = (usersArray, id) =>{
    return usersArray.find(user => user.id === id).fName
}

const mapStateToProps = ({usersReducer})=>{
    return{
        users: usersReducer.users
    }
}

export default connect(mapStateToProps)(Albums);

import React ,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    // here we want to access the data so user instead of setUser is used
    const {user}=useContext(UserContext)
    if(!user) return(<div>Please log in</div>)
    
    return(<div>Welcome {user.username} </div>)
}

export default Profile
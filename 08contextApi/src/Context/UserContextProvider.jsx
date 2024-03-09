import React from "react";
import UserContext from "./UserContext";



{/*{children} it is property*/};

const UserContextProvider =({children})=>{
    const [user,setUser]=React.useState(null)

    {/*here you can make apis hooks and provide them in the value of provider*/};
    
    return(
        <UserContext.Provider value={{user ,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
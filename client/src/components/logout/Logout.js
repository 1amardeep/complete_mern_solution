import React, {useEffect} from 'react'

const Logout = () => {

    const logOut = async ()=>{
        const result = await fetch('/logout', {
            method : "GET",
            headers:{
                   "Content-Type":"application/json"
          }
        });

       const data = await result.json();

       if(data.status ===200){
           console.log("logout sucessfully");
       }

    }
  
    useEffect(() => {
      logOut();
    }, [])

    return (
        <div>
            Sucessfully logout
        </div>
    )
}

export default Logout

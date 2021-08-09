import React, {useEffect} from 'react';

const Contact = () => {

    const contactPage = async ()=>{
        try {
              const res = await fetch("/contact",{
                  method: "GET",
                  headers:{
                      "Content-Type":"application/json",
                  }
              });

            const data = await res.json();

            if(res.status !==200){
                 throw new Error(res.error);
            }

        } catch (error) {
           console.log(error);
        }
   }

   useEffect(() => {
      contactPage();
   }, [])

    return (
        <div>
            Contact page
        </div>
    )
}

export default Contact

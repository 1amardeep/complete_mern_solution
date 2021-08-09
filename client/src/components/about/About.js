import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const About = () => {

    const history = useHistory();
    const callAboutPage = async ()=>{
         try {
               const res = await fetch("/about",{
                   method: "GET",
                   headers:{
                  //     Accept: "application/json",
                       "Content-Type":"application/json",
                   }
               //    credentials:'include'
               });

             const data = await res.json();

             if(res.status !==200){
                  throw new Error(res.error);
             }

         } catch (error) {
            console.log(error);
            history.push("/login");
         }
    }

    useEffect(() => {
       callAboutPage();
    }, [])


    return (
        <div>
            About page
        </div>
    )
}

export default About

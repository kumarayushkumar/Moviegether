import { useEffect, useState } from "react";
import  axios  from "axios";

function Home({ userToken }) {
    useEffect(() => {
        if(userToken) {
            fetchData(userToken)
        }
    }, [userToken])

    const fetchData = async (userToken) => {
        const res = await axios.get('http://localhost:4000/', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }) 
        console.log(res)
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
      );
}


export default Home;
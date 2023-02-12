import { useEffect, useState } from "react";
import  axios  from "axios";

function Home({ userToken }) {
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async (userToken) => {
        const res = await axios.get('http://localhost:4000/')
        console.log(res)
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
      );
}


export default Home;
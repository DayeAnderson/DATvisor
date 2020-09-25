import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './IndexPage.css';
const baseUrl = "/api/locationID";


const IndexPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([])
       
        const apiCall = async () => {
            try {
                const response = await axios.post(
                    baseUrl,
                    {
                        baseUrl: 'locations/search',
                        params: {
                        "location_id":"1",
                        "limit":"30",
                        "sort":"relevance",
                        "offset":"0",
                        "lang":"en_US",
                        "currency":"USD",
                        "units":"km",
                        "query": searchValue
                        }
                    })
                setData(response.data.attractions)
            } catch (err) {console.log(err)}
        }
       
        console.log(data)
        return (
            <>
             <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
             <br></br>
                <h1>Need Vacation Ideas?</h1>
                <div className="card">

            <b>Search the city!</b><br />
            <input className='IdeaInput'type="text" id="location" name="location" value={searchValue} onChange={event => setSearchValue(event.currentTarget.value)}/><br /><br />
            <button className="IdeaEnter" type="submit" onClick={()=> apiCall()}> ENTER </button>
            <br />
            <>
            {data.map(attraction =>
            <span className='attractions'
                key={attraction.location_id}>
                <a title={attraction.description}
                target='_blank'
                rel="noopener noreferrer"
                href={ attraction.booking.url}> { attraction.name } </a>
                <br /><br />
                </span>)}
            </>
                </div>
            </>
         );
}


 
export default IndexPage;



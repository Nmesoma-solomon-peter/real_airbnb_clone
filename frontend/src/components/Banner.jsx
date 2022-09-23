import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css';
import Search from './Search';


function Banner() {
    const [bannerButton,setbannerButton] = useState(false);
    const handleBannerbtn = ()=>{
        setbannerButton(!bannerButton);
    }
    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button className='banner__searchButton' variant='outlined' onClick={handleBannerbtn}>
                {bannerButton ?'hide' : 'Search'}
                </Button>
                {bannerButton&& <Search />}

            </div>
            <div className='banner__info'>
                <h1> Get out and spread you Imagination</h1>
                <h5>Find a different kind of getaway to uncover a new gem near you</h5>
                <Button variant="outline">
                Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
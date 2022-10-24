import React from 'react'

function Home(props) {
    return (
        <div id='homePage' className='h-75'>
            <div className=' d-flex align-items-center justify-content-center' >
                <img src='indir (1).jpg' />               
            </div>
            <span id='songHeader'>{props.songTitle}</span>
        </div>

    )
}
export default Home
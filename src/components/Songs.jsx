import React, { useState, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { FcMusic } from "react-icons/fc"
import { CiPlay1 } from "react-icons/ci"



function Songs(props) {

    const selectSong = (title, id) => {
        props.setSongPlaying(title)
        props.setSongTitle(title.title)
        props.setSongUrl(title.url)
        props.setIsplaying(false)
        const pos = props.songsdata.map(e => e.url).indexOf(title.url);
        props.setCurrentSong(pos)
    
    }


    return (
        <>
            {
                props.songsdata.map((item, i) => {
                    return (
                        <div onClick={() => {selectSong(item)}} key={i} id='deneme' className=' d-flex m-3 ' >
                            <div className='d-flex align-items-center p-2 songCard'>
                                <FcMusic size={30} />
                            </div>
                            <div id='cards' className='d-flex align-items-center m-3'>
                                {item.title}
                            </div>
                        </div>)

                })
            }

        </>
    )
}

export default Songs
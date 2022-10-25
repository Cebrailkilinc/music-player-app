import React, { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { FcMusic } from "react-icons/fc"
import { CiPlay1 } from "react-icons/ci"



function Songs(props) {
    const selectSong = (item,id) => {
        props.setItems(item)
        props.setSongPlaying(item)
        props.setSongUrl(item.url)
        props.setIsplaying(false)
        props.setSongPicture(item.picture)
        const pos = props.allSongs.map(e => e.url).indexOf(item.url);
        props.setCurrentSong(pos)
    }


    return (
        <>
            {
                props.allSongs.map((item, i) => {
                    return (
                        <div onClick={() => { selectSong(item, item.id) }} key={i} id='deneme' className={` d-flex m-3`} >
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
import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Songs from './Songs';
import Home from './Home';
import Player from './Player';

const songsdata = [
    {
        "id": "1",
        "title": "Drake - Forever",
        "url": "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_02_-_I_Gnomus_Vivo.mp3"
    },
    {
        "id": "2",
        "title": "Linking Park - In the end",
        "url": "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse"
    },
    {
        "id": "3",
        "title": "Travis Scott - Stop trina be God",
        "url": "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3"
    }
]

function Layout() {
    const [songTitle, setSongTitle] = useState("")
    const [songUrl, setSongUrl] = useState("")
    const [isplaying, setIsplaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(0)
    const [songPlaying, setSongPlaying] = useState("")


    return (
        <div className='d-flex vh-100 '>
            <div className='w-25 h-100 border-end '>
                <Songs setSongPlaying={setSongPlaying} songsdata={songsdata} setSongTitle={setSongTitle} setSongUrl={setSongUrl} setIsplaying={setIsplaying} setCurrentSong={setCurrentSong} />
            </div>
            <div className='w-75 h-100'>
                <Home songTitle={songTitle} />
                <Player songPlaying={songPlaying} setSongPlaying={setSongPlaying} songsdata={songsdata} setSongTitle={setSongTitle} setIsplaying={setIsplaying} isplaying={isplaying} songUrl={songUrl} setSongUrl={setSongUrl} setCurrentSong={setCurrentSong} currentSong={currentSong} />
            </div>
        </div>
    )
}

export default Layout
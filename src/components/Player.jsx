import React, { useRef, useState, useEffect } from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { TbPlayerPause, TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb"
import Form from 'react-bootstrap/Form';



function Player(props) {
    const audioElement = useRef()
    const clickRef = useRef()

    const [count, setCount] = useState(1)
    const [duration, setDuration] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const [rangeValue, setRangeValue] = useState("")

    const playPause = () => {
        props.setIsplaying(!props.isplaying)
    }

  

    const playNextSong = () => {
        playPause()
        setCount(count + 1)     
        if ( props.currentSong + count >props.allSongs.length ) {
            props.setCurrentSong(0)
            setCount(0)
        }
        if (props.currentSong + count < props.songsdata.length) {
            props.setSongUrl(props.songsdata[props.currentSong + count].url)
            console.log(props.songUrl)
            props.setSongTitle(props.allSongs[props.currentSong + count].title)
            props.setSongPicture(props.allSongs[props.currentSong + count].picture)
            playPause()
        } else {
            props.setCurrentSong(0)
            setCount(0)
        }
        console.log(props.songPicture)
    }

    const playPrevSong = () => {
        props.setIsplaying(false)
        setCount(count + 1)
      
        if ( props.currentSong - count < 0 ) {
            props.setCurrentSong(props.allSongs.length)
        }
        console.log("Array değeri : "+props.currentSong)
        if (props.currentSong - count >= 0 ) {            
            props.setSongUrl(props.songsdata[props.currentSong - count].url)       
            props.setSongTitle(props.songsdata[props.currentSong - count].title)
            props.setSongPicture(props.allSongs[props.currentSong - count].picture)
            playPause()
            console.log(props.currentSong - count)
        } else {
            setCount(0)
        }
    }

    useEffect(() => {
        if (props.isplaying) {
            audioElement.current.play()
        } else {
            audioElement.current.pause()
        }
    }, [props.isplaying])

    useEffect(() => {     
        const audio = audioElement.current;   
        setInterval(() => {
            setDuration(audio.duration)
            setCurrentTime(Math.floor(audio.currentTime))
        }, 100)
        audioElement.current.currentTime = rangeValue;

    }, [rangeValue])

    useEffect(() => {
        if (Math.floor( audioElement.current.currentTime) === Math.floor(audioElement.current.duration)) {
            props.setIsplaying(false)
        }
    }, [currentTime])


    return (
        <div id='player' className=' h-25 border-top d-flex flex-column justify-content-center align-items-center ' >
            <audio ref={audioElement} src={props.songUrl} />
            <div className='w-50 d-flex justify-content-center '>
                <span className='me-2'> {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}</span>
                <Form.Range defaultValue={currentTime} ref={clickRef} max={duration} min={0} value={currentTime}
                    onChange={e => {
                        setRangeValue(e.target.value)
                    }}
                />
                <span className='ms-2'>{Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <TbPlayerTrackPrev className='playButton' onClick={playPrevSong} size={25} />
                {props.isplaying === false ? <AiOutlinePlayCircle onClick={() => { props.setIsplaying(true) }} className='m-3 playButton' size={40} /> : <TbPlayerPause className='playButton m-3' onClick={() => { props.setIsplaying(false) }} size={40} />}
                <TbPlayerTrackNext className='playButton' onClick={playNextSong} size={25} />
            </div>
        </div>
    )
}

export default Player
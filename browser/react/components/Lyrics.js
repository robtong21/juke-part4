'use strict'

import React from 'react'

const Lyrics = (props) => {
    const {text, setArtist, artistQuery, setSong, songQuery, handleSubmit} = props

    const artistChange = e => {
        props.setArtist(e.target.value)
    }

    const songChange = e => {
        props.setSong(e.target.value)
    }

    render() {
        return (
            <div id="lyrics">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={artistQuery} placeholder="Artist" onChange={artistChange}></input>
                    <input type="text" value={songQuery} placeholder="Song" onChange={songChange}></input>
                    <pre>{text || 'Search above!'}</pre>
                    <button type="submit">Search for Lyrics</button>
                </form>
            </div>
        )
    };
}

export default Lyrics
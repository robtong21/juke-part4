'use strict'

import React from 'react'
import store from '../store'
import Lyrics from '../components/Lyrics'

class LyricsContainer extends React.Component {
    constructor() {
        super();
        this.state = Object.assign({}, store.getState(), {artistQuery: '',
            songQuery: ''})
        this.setArtist = this.setArtist.bind(this)
        this.setSong = this.setSong.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            const newState = store.getState();
            this.setState(newState)
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    setArtist(artist) {
        this.setState({
            artistQuery: artist,
        });
    }
    setSong(song) {
        this.setState({ 
            songQuery: song,
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <Lyrics 
                setArtist={this.setArtist} 
                setSong={this.setSong} 
                handleSubmit={this.handleSubmit}
                text={this.state.text}
                artistQuery={this.state.artistQuery}

            />
        )
    }
}

export default LyricsContainer
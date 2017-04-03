'use strict'

import React from 'react'
import store from '../store'
import Lyrics from '../components/Lyrics'
import { setLyrics, fetchLyrics } from '../action-creators/lyrics'
import axios from 'axios'


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

        if (this.state.artistQuery && this.state.songQuery) {

            var artist = this.state.artistQuery;
            var song = this.state.songQuery;

            const thunk = fetchLyrics(artist, song);
            store.dispatch(thunk);
            // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
            // .then(res => {
            //     console.log("Res IS", res);
            //     const setLyricsAction = setLyrics(res.data.lyric);
            //     store.dispatch(setLyricsAction);
            // });
        }
    }
    render() {
        return (
            <Lyrics 
                setArtist={this.setArtist} 
                setSong={this.setSong} 
                handleSubmit={this.handleSubmit}
                text={this.state.lyrics.text}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}

            />
        )
    }
}

export default LyricsContainer
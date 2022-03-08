import React, { Component } from 'react';
import './styles.scss'
class Player extends Component {
    render() {
        return (
            <div className='playlist_container'>
                <div className='flexbox_container'>
                    <div className='music_title_container'>
                        <div className='music_title'>

                        </div>
                    </div>
                    <div className='player'>

                    </div>
                    <div className='track_opt'>

                    </div>
                </div>
            </div>
        );
    }
}

export default Player;

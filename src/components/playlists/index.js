import React, { Component } from 'react';
import './styles.scss'
class Playlists extends Component {
    render() {
        return (
            <section className='playlists_container'>
                <div className='playlists_infos'>
                    <div className='infos'>
                        <h2 className='title'>
                            <a>À ne pas manquer aujourd'hui !</a>
                        </h2>
                    </div>
                    <a className='see_all'>See All</a>
                </div>
            </section>
        );
    }
}

export default Playlists;

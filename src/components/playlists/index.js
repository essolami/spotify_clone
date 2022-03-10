import React, { Component } from 'react';
import './styles.scss'
class Playlists extends Component {
    render() {
        return (
            <>
            <section className='playlists_container'>
                <div className='playlists_infos'>
                    <div className='infos'>
                        <h2 className='title'>
                            <a>{this.props.title}</a>
                        </h2>
                    </div>
                    <a className='see_all'>See All</a>
                </div>
                <div className='grid_container'>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                            <button>
                                
                            </button>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='item_picture'>
                            <img src="https://i.scdn.co/image/ab67706f00000002aa7761e7f0ca2a7baebbe23e"/>
                        </div>
                        <div className='item_info' >
                            <a dir="auto">
                                Hot Arabic Hits - Yalla يلا
                            </a>
                            <div class="item_desc">
                                Top Arabic hits are right here. Cover: A5rass.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            </>
        );
    }
}

export default Playlists;

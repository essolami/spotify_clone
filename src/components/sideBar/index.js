import React, { Component } from 'react';
import './styles.scss'
import { 
    SpotifyIcon,
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    LikedPlaylistIcon,
    AddPlaylistIcon
} from '..';

class SideBar extends Component {
    render() {
        return (
            <div className="navbar_wrapper">
                <div className="logo">
                    <SpotifyIcon className="spotifyIcon"/>
                </div>
                <ul className="icons_list">
                    <li>
                        <a className='current_item'>
                            <HomeIcon className="icon"/>
                            <span className='title_menu'>Home</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <SearchIcon className="icon"/>
                            <span className='title_menu'> Search</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <LibraryIcon className="icon"/>
                            <span className='title_menu'>Your Library</span>
                        </a>
                    </li>
                </ul>
                <div className='menu_container'>
                    <div className='first_menu'>
                        <div className='container_action'>
                            <div className='container_icon add__playlist'>
                                <AddPlaylistIcon className="icon"/>
                            </div>
                            <span className='title_menu'>Create Playlist</span>
                        </div>
                        <div className='container_action'>
                            <div className='container_icon liked__playlist'>
                                <LikedPlaylistIcon className="icon"/>
                            </div>
                            <span className='title_menu'>Liked Songs</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;

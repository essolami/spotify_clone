import React, { Component } from 'react';
import { Playlists } from '../../components';

class Home extends Component {
    render() { 
        return (
            <div className='content_section'>
                <div>
                   <Playlists/> 
                </div>
            </div>
        )
    }
}
 
export default Home ;
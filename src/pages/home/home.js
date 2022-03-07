import React, { Component } from 'react';


class Home extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        return (
            <div>
                We are in Home Page
            </div>
        )
    }
}
 
export default Home ;
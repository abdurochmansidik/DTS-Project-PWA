import React from 'react';
import Nasabah from './Nasabah.js'

class NavBar extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" height="100%">
                <div class="container" >
                    <h1>Data Nasabah</h1>
                    <hr/> <br/>
                    <Nasabah />
                </div>
            </div>
        )
    }
}

export default NavBar;
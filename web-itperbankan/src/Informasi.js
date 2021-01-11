import React from 'react';

class Informasi extends React.Component {
    render() {
        return (
            <div class="container p-2 mb-4" id="about">
                <div class="card shadow" style={{backgroundColor: "#fdfdfd"}}>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 p-4">
                                <h4 class="card-title"><strong>ABOUT</strong></h4>
                                <hr/>
                                    <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Informasi;
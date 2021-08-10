import React, { Component } from 'react';
import Post from '../Post/Post';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                        <Post id='12' userName='edwin' postImage='' likes='4567' />
            </div>
         );
    }
}
 
export default MainPage;
import React, {Component} from 'react';
//import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render(){
        return (
            <div>
            {/* <p>YouTube Component </p>
            <hr/>
            <YouTubeComp 
                time = "7.12" 
                title = "Tutorial 1"
                desc = "6x ditonton. 5 hari yang lalu"/>
            <YouTubeComp 
                time = "7.12" 
                title = "Tutorial 2"
                desc = "100x ditonton. 10 hari yang lalu"/>
            <YouTubeComp 
                time = "7.12" 
                title = "Tutorial 3"
                desc = "120x ditonton. 11 hari yang lalu"/>
            <YouTubeComp 
                time = "7.12" 
                title = "Tutorial 4" 
                desc = "200x ditonton. 15 hari yang lalu"/>
            <YouTubeComp /> */}

            <p>Counter</p>
            <hr/>
            <Product/>
            </div>
            
        )
    }
}

export default Home;
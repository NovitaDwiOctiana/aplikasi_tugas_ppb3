import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
 return (
<div className = "youtube-wrapper">
         <div className = " img-thumb">
             <img src = "https://www.youtube.com/watch?v=ZJ6QQLDIzrI" alt = ""/>
             <p className = "time">{props.time}</p>
         </div>
         <p className = "title">{props.title}</p>
         <p className = "desc">{props.desc}</p>
     </div>
 )
     
 } 
    
YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: "xxx ditonton. xx hari yang lalu"
}

export default YouTubeComp;
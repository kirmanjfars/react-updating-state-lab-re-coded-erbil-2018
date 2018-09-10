// Code YouTubeDebugger Component Here

import React from 'react'; 

class YouTubeDebugger  extends React.Component{
    constructor() {
    super();
     this.state = { 
       errors: [], 
       user: null, 
       settings: { bitrate: 8, video: { resolution: '1080p' } } 
     }}
     
     bitrate(){
       this.setState{
         settings.bitrate = 12
       }
     }
     
     resolution(){
        this.setState{
         settings.video.resolution = '720p'
       }
     }
  
  render(){
    return(
      <div>
      <button class="bitrate" onclick="bitrate">{this.state}  </button>
      <button class="resolution" onclick="resolution">{this.state}   </button>
      </div>
      )
  }
}


export default DigitalClicker ;


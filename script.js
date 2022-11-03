import "./index.scss";

import cloak from './assets/svg/rewindOff.svg'
import rewind from './assets/svg/rewindOff.svg'
import play from './assets/svg/playOff.svg'
import forward from './assets/svg/forwardOff.svg'

document.querySelector('#app').innerHTML = ` 
  <div class="divBackgroundImg">  
    <img id="backgroundImg" src="${cloak}" alt="">  
  </div> 

  <div class="player"> 

    <div class="titleMusic"> 

      <h1 id="title">
        No Role Modelz  
      </h1> 

      <p id="author"> 
        J. Cole
      </p> 

    </div> 

      <span class="icon"> 
        <img id="rewind" src="${rewind}" alt=""> 
      </span> 
      <span class="icon"> 
        <img id="play" src="${play}" alt=""> 
      </span> 
      <span class="icon"> 
        <img id="forward" src="${forward}" alt=""> 
      </span> 

  </div> 
  `;


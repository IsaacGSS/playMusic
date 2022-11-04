import "./style.scss";

import cloak from './assets/img/NoRoleModelz.jpeg'
import rewind from './assets/svg/rewindOff.svg'
import play from './assets/svg/playOff.svg'
import pause from './assets/svg/pauseOff.svg'
import forward from './assets/svg/forwardOff.svg'
import audio2 from './assets/music/NoRoleModelz.mp3'

let player = play

function button(e) {
  player = e
  console.log(player);
  return
}



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
        <img id="play" src="${player}" alt=""> 
      </span> 
      <span class="icon"> 
        <img id="forward" src="${forward}" alt=""> 
      </span> 

      <audio >
        <source id="mus" src="${audio2}" type="audio/mpeg">
      </audio>

  </div> `;

  let buttonPlayPause = document.querySelector('#play')
  
  buttonPlayPause.addEventListener("click", (e) => {
    const audioOn = document.querySelector('audio')
    let buttonPlayPauseId = buttonPlayPause.id

    if (buttonPlayPauseId === "play") {
      audioOn.play();
      document.getElementById(`${buttonPlayPauseId}`).id = "pause"
      console.log(buttonPlayPauseId);
      button(pause)
      return
    } 
    audioOn.pause();
    document.getElementById(`${buttonPlayPauseId}`).id = "play"
      button(play)
      console.log(buttonPlayPauseId);
  })

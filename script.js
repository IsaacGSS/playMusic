import "./index.scss";

import rewindOff from './assets/svg/rewindOff.svg'

let img = "./assets/img/No Role Modelz.jpeg"

document.querySelector('#app').innerHTML = ` <div class="divBackgroundImg"> <img id="backgroundImg" src="${img}" alt="">  </div> <div class="player"> <div class="titleMusic"> <h1 id="title">No Role Modelz</h1> <p id="author"> J. Cole</p> </div> <span class="icon"> <img id="rewind" src="${rewindOff}" alt=""> </span> <span class="icon"> <img id="play" src="assets/svg/playOff.svg" alt=""> </span> <span class="icon"> <img id="forward" src="assets/svg/forwardOff.svg" alt=""> </span> </div> `;

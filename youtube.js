const divnav = document.createElement('div');
divnav.id = "navigation"
container.appendChild(divnav);

//******************* */ icons

const img = document.createElement('img')
img.className = "lefticon"
img.src = "tubeicon.png"
divnav.appendChild(img)

const input = document.createElement('input')
input.setAttribute = ("type", "text")
divnav.appendChild(input)

const imgI = document.createElement('img')
imgI.src = "glassicon.png"
divnav.appendChild(imgI)

const imgII = document.createElement('img')
imgII.src = "micon.png"
divnav.appendChild(imgII)

const imgIII = document.createElement('img')
imgIII.className = "righticon"
imgIII.src = "camicon.png"
divnav.appendChild(imgIII)

//****************** */ container div, videoplayer % suggestions

const divcon = document.createElement('div');
divcon.id = "containerI";
container.appendChild(divcon);

//***************** */ youtube player div

const divplay = document.createElement('div');
divplay.id = "divplayer";
divcon.appendChild(divplay);

const vidplar = document.createElement('iframe')
vidplar.src = "https://www.youtube.com/embed/EceJQ05KTf4"
vidplar.width = "890"
vidplar.height = "500"
vidplar.title = "Youtube Video Player"
vidplar.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
vidplar.allowFullscreen = true;
divplay.appendChild(vidplar)

const title = document.createElement('h1');
title.textContent="Learn Full Stack Web development"
divplay.appendChild(title)

//***************** */ suggestions div

const divsug = document.createElement('div');
divsug.id = "suggestion"
divcon.appendChild(divsug);

const titleCSS = document.createElement('h4');
titleCSS.textContent="Learn CSS"
divsug.appendChild(titleCSS)

const vidsug = document.createElement('iframe')
vidsug.src = "https://www.youtube.com/embed/1PnVor36_40"
vidsug.width = "240"
vidsug.height = "180"
vidsug.title = "Youtube Video Player"
vidsug.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
vidsug.allowFullscreen = true;
divsug.appendChild(vidsug)

const titleHTML = document.createElement('h4');
titleHTML.textContent="Learn HTML"
divsug.appendChild(titleHTML)

const vidsugI = document.createElement('iframe')
vidsugI.src = "https://www.youtube.com/embed/pQN-pnXPaVg"
vidsugI.width = "240"
vidsugI.height = "180"
vidsugI.title = "Youtube Video Player"
vidsugI.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
vidsugI.allowFullscreen = true;
divsug.appendChild(vidsugI)

const titleJS = document.createElement('h4');
titleJS.textContent="Learn Javascript"
divsug.appendChild(titleJS)

const vidsugII = document.createElement('iframe')
vidsugII.src = "https://www.youtube.com/embed/PkZNo7MFNFg"
vidsugII.width = "240"
vidsugII.height = "180"
vidsugII.title = "Youtube Video Player"
vidsugII.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
vidsugII.allowFullscreen = true;
divsug.appendChild(vidsugII)
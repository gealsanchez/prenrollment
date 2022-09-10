const divnav = document.createElement('div');
divnav.id="navigation"
divnav.textContent="navigation bar"
container.appendChild(divnav);

const input=document.createElement('input')
input.setAttribute=("type","text")
divnav.appendChild(input)

const divcon = document.createElement('div');
divcon.id="containerI"
divcon.textContent="containerI"
container.appendChild(divcon);

const divplay = document.createElement('div');
divplay.textContent="player div"
divcon.appendChild(divplay);

const divsug = document.createElement('div');
divsug.textContent="suggestion div"
divcon.appendChild(divsug);
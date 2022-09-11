const divnav = document.createElement('div');
divnav.id = "navigation"
container.appendChild(divnav);

const img = document.createElement('img')
img.className="lefticon"
img.src="tubeicon.png"
divnav.appendChild(img)

const input = document.createElement('input')
input.setAttribute = ("type", "text")
divnav.appendChild(input)

const imgI = document.createElement('img')
imgI.src="glassicon.png"
divnav.appendChild(imgI)

const imgII = document.createElement('img')
imgII.src="micon.png"
divnav.appendChild(imgII)

const imgIII = document.createElement('img')
imgIII.className="righticon"
imgIII.src="camicon.png"
divnav.appendChild(imgIII)

const divcon = document.createElement('div');
divcon.id = "containerI"
divcon.textContent = "containerI"
container.appendChild(divcon);

const divplay = document.createElement('div');
divplay.textContent = "player div"
divcon.appendChild(divplay);

const divsug = document.createElement('div');
divsug.textContent = "suggestion div"
divcon.appendChild(divsug);
document.body.addEventListener('wheel', checkScrollDirection);

let background = 0

function refresh() {
  background = Math.round(Math.random() * 7)
  bg()
}

background = Math.round(Math.random() * 7)

bg()
function bg() {
  if(background === 0) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg0.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext" href="https://twitter.com/mklgustafsson" target="_blank">Background by Mikael Gustafsson</a>'
  } else if(background === 1) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg1.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Build made by Eric<br>Screenshot from me</a>'
  } else if(background === 2) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg2.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  } else if(background === 3) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg3.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  } else if(background === 4) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg4.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  } else if(background === 5) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg5.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  } else if(background === 6) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg6.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  } else if(background === 7) {
    document.getElementById('main').style.setProperty('background-image', 'url(images/bg7.png)')
    document.getElementById('bgtext_wrapper').innerHTML = '<a class="bg-text" id="bgtext">Screenshot from me</a>'
  }
}

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    close_()
  } else {
    open_()
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function open_() {
  document.getElementById('main').style.setProperty('height','75vh')

  document.getElementById('arrow').style.setProperty('top','60vh')
  document.getElementById('arrow').style.setProperty('opacity','0')

  document.getElementById('arrowtext').style.setProperty('bottom','60vh')
  document.getElementById('arrowtext').style.setProperty('opacity','0')

  document.getElementById('bgtext').style.setProperty('opacity','0')

  document.getElementById('projects').style.setProperty('transform', 'translateX(0) skewX(0deg) rotateX(0deg)')
  document.getElementById('projects').style.setProperty('transition', 'transform ease-out 0.25s')
}

function close_() {
  document.getElementById('main').style.setProperty('height','100vh')

  document.getElementById('arrow').style.setProperty('top','95vh')
  document.getElementById('arrow').style.setProperty('opacity','1')

  document.getElementById('arrowtext').style.setProperty('bottom','5vh')
  document.getElementById('arrowtext').style.setProperty('opacity','1')

  document.getElementById('bgtext').style.setProperty('opacity','0.5')

  document.getElementById('projects').style.setProperty('transform', 'translateX(-100vw) skewX(-25deg) rotateX(90deg)')
  document.getElementById('projects').style.setProperty('transition', 'transform ease-in 0.25s')
}

function hi() {
  console.log('hi', hicount)
  hicount += 1
  hi()
}
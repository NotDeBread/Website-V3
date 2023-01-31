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

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    close_()
  } else {
    open_()
  }
}

function open_() {
  document.getElementById('main').style.setProperty('height','74vh')

  document.getElementById('footer').style.setProperty('bottom','0')

  document.getElementById('arrow').style.setProperty('top','60vh')
  document.getElementById('arrow').style.setProperty('opacity','0')

  document.getElementById('arrowtext').style.setProperty('bottom','60vh')
  document.getElementById('arrowtext').style.setProperty('opacity','0')

  document.getElementById('bgtext').style.setProperty('opacity','0')
}

function close_() {
  document.getElementById('main').style.setProperty('height','100vh')

  document.getElementById('footer').style.setProperty('bottom','-26px')

  document.getElementById('arrow').style.setProperty('top','95vh')
  document.getElementById('arrow').style.setProperty('opacity','1')

  document.getElementById('arrowtext').style.setProperty('bottom','5vh')
  document.getElementById('arrowtext').style.setProperty('opacity','1')

  document.getElementById('bgtext').style.setProperty('opacity','0.5')
}

var hicount = 0

function fun() {
  console.log('Hi - Sends hi in the console up to 30,000 times!')
  console.log('     hi()')

  console.log('Smooth - Decides whether or not to smooth the transition between effects')
  console.log("     smooth(<'y' OR 'n'>, <time>)")

  console.log('Big - Scales the page')
  console.log('     big(<scale>)')

  console.log('Rotate - Rotates the page')
  console.log('     rotate(<degrees>)')

  console.log('Spin - Spins the page')
  console.log('     spin(<speed>)')
}

function hi() {
  console.log('hi', hicount)
  hicount += 1
  hi()
}

function smooth(input) {
  if(input === 'y') {
    document.getElementById('all').style.setProperty('transition','all ease-in-out 0.25s')
    console.log('Smoothing ON')

  } else if(input === 'n') {
    document.getElementById('all').style.setProperty('transition','none')
    console.log('Smoothing OFF')

  } else {
    console.log("Please put 'y' or 'n'")
  }
}

function big(scale) {
  document.getElementById('all').style.setProperty('scale',scale + '%')
}

function rotate(degrees) {
  document.getElementById('all').style.setProperty('rotate', degrees + 'deg')
}

var spinactive = false
var spindeg = 0

function spin(speed) {
  
  setInterval(() => {
    spindeg += speed
    document.getElementById('all').style.setProperty('rotate', spindeg + 'deg')
  },1)
}

function bright(brightness) {
  document.getElementById('all').style.setProperty('filter','brightness(' + brightness + '%)')
}

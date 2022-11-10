document.body.addEventListener('wheel', checkScrollDirection);

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
}

function close_() {
  document.getElementById('main').style.setProperty('height','100vh')

  document.getElementById('arrow').style.setProperty('top','95vh')
  document.getElementById('arrow').style.setProperty('opacity','1')

  document.getElementById('arrowtext').style.setProperty('bottom','5vh')
  document.getElementById('arrowtext').style.setProperty('opacity','1')

  document.getElementById('bgtext').style.setProperty('opacity','1')
}
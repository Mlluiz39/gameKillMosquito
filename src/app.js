let width = window.innerWidth
let height = window.innerHeight
let life = 1
let time = 31
let level = window.location.search.split('=')[1]

if (level === 'facil') {
  createsMosquitosTime = 1500
} else if (level === 'medio') {
  createsMosquitosTime = 1000
} else if (level === 'dificil') {
  createsMosquitosTime = 750
}

const pickUpHeightAndWidth = () => {
  width = window.innerWidth
  height = window.innerHeight
}
window.addEventListener('resize', pickUpHeightAndWidth)

const start = setInterval(() => {
  time -= 1
  if (time < 0) {
    clearInterval(start)
    clearInterval(createsStilt)
    window.location.href = './victory.html'
  } else {
    document.querySelector('[data-js=stopwatch]').innerHTML = time
  }
}, 1000)

const randomPosition = () => {
  if (document.querySelector('#fly')) {
    document.querySelector('#fly').remove()
    life > 3
      ? (window.location.href = './gameover.html')
      : (document.querySelector(`#v${life}`).src =
          './src/assets/coracao_vazio.png')
    life++
  }

  let positionX = Math.floor(Math.random() * width) - 90
  let positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  const fly = document.createElement('img')
  fly.src = './src/assets/pernilongo.png'
  fly.className = randomSize()
  fly.style.left = `${positionX}px`
  fly.style.top = `${positionY}px`
  fly.style.position = 'absolute'
  fly.id = 'fly'
  document.body.appendChild(fly)

  sideRandom() === 'left'
    ? (fly.style.transform = 'scaleX(-1)')
    : (fly.style.transform = 'scaleX(1)')

  fly.addEventListener('click', () => {
    document.querySelector('#fly').remove()
  })
}

const createsStilt = setInterval(() => {
  randomPosition()
}, createsMosquitosTime)

const randomSize = () => {
  const size = Math.floor(Math.random() * 3)
  switch (size) {
    case 0:
      return 'fly0'

    case 1:
      return 'fly1'

    case 2:
      return 'fly2'
  }
}

const sideRandom = () => {
  const side = Math.floor(Math.random() * 2)
  switch (side) {
    case 0:
      return 'left'

    case 1:
      return 'right'
  }
}

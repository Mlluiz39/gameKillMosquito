let width = window.innerWidth
let height = window.innerHeight

const pickUpHeightAndWidth = () => {
  width = window.innerWidth
  height = window.innerHeight
}
window.addEventListener('resize', pickUpHeightAndWidth)

const randomPosition = () => {
  if (document.querySelector('#fly')) {
    document.querySelector('#fly').remove()
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

setInterval(() => {
  randomPosition()
}, 1000)

const html = document.body
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
// themes
const darkModeButton = document.querySelector('.dark-mode')
const lightModeButton = document.querySelector('.light-mode')
// controls
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const decreaseButton = document.querySelector('.decrease')
const increaseButton = document.querySelector('.increase')
// cards buttons
const forestButton = document.querySelector('#forestSound')
const rainButton = document.querySelector('#rainSound')
const coffeeShopButton = document.querySelector('#coffeeShopSound')
const fireplaceButton = document.querySelector('#fireplaceSound')
const cardsButtons = document.querySelectorAll('.card')
// cards volume
const volForest = document.querySelector('.volForest')
const volRain = document.querySelector('.volRain')
const volCoffee = document.querySelector('.volCoffee')
const volFireplace = document.querySelector('.volFireplace')

export {
  html,
  minutesDisplay,
  secondsDisplay,
  darkModeButton,
  lightModeButton,
  playButton,
  pauseButton,
  stopButton,
  decreaseButton,
  increaseButton,
  forestButton,
  rainButton,
  coffeeShopButton,
  fireplaceButton,
  cardsButtons,
  volForest,
  volRain,
  volCoffee,
  volFireplace
}

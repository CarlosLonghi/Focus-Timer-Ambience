import {
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
} from './elements.js'

export default function ({ timer, controls, sounds }) {
  darkModeButton.addEventListener('click', () => {
    controls.toggleMode()
    sounds.pressButton()
  })

  lightModeButton.addEventListener('click', () => {
    controls.toggleMode()
    sounds.pressButton()
  })

  playButton.addEventListener('click', () => {
    timer.countDown(minutes, seconds)
    controls.playDisplay()
    sounds.pressButton()
  })

  pauseButton.addEventListener('click', () => {
    timer.pause()
    controls.pauseDisplay()
    sounds.pressButton()
  })

  stopButton.addEventListener('click', () => {
    timer.reset()
    controls.resetDisplay()
    sounds.pressButton()
  })

  decreaseButton.addEventListener('click', () => {
    timer.decreaseTime()
    sounds.pressButton()
  })

  increaseButton.addEventListener('click', () => {
    timer.increaseTime()
    sounds.pressButton()
  })

  forestButton.addEventListener('click', () => {
    sounds.forestControlSound()
  })

  volForest.addEventListener('input', () => {
    sounds.forestVolume()
  })

  rainButton.addEventListener('click', () => {
    sounds.rainControlSound()
  })

  volRain.addEventListener('input', () => {
    sounds.rainVolume()
  })

  coffeeShopButton.addEventListener('click', () => {
    sounds.coffeeControlSound()
  })

  volCoffee.addEventListener('input', () => {
    sounds.coffeeVolume()
  })

  fireplaceButton.addEventListener('click', () => {
    sounds.fireplaceControlSound()
  })

  volFireplace.addEventListener('input', () => {
    sounds.fireplaceVolume()
  })

  // card selection display
  cardsButtons.forEach(card => {
    card.addEventListener('click', () => {
      document.querySelector('.selected')?.classList.remove('selected')
      card.classList.add('selected')
    })
  })
}

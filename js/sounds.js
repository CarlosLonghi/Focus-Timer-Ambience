import {
   volForest, volRain, volCoffee, volFireplace 
} from './elements.js'
export default function () {
  const buttonPressAudio = new Audio('./songs/Button-press.wav')
  const kitchenTimer = new Audio('./songs/Kitchen-timer.mp3')
  const forestSound = new Audio('./songs/Floresta.wav')
  const rainSound = new Audio('./songs/Chuva.wav')
  const coffeeShopSound = new Audio('./songs/Cafeteria.wav')
  const fireplaceSound = new Audio('./songs/Lareira.wav')

  kitchenTimer.volume = 0.2
  buttonPressAudio.volume = 0.2
  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  fireplaceSound.loop = true

  // functions sounds
  function forestControlSound() {
    forestSound.play()
    forestVolume()
    rainSound.pause()
    coffeeShopSound.pause()
    fireplaceSound.pause()
  }

  function rainControlSound() {
    rainSound.play()
    rainVolume()
    forestSound.pause()
    coffeeShopSound.pause()
    fireplaceSound.pause()
  }

  function coffeeControlSound() {
    coffeeShopSound.play()
    coffeeVolume()
    rainSound.pause()
    fireplaceSound.pause()
    forestSound.pause()
  }

  function fireplaceControlSound() {
    fireplaceSound.play()
    fireplaceVolume()
    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function alarm() {
    kitchenTimer.play()
  }
  // volume sounds
  function forestVolume() {forestSound.volume = volForest.value}

  function rainVolume() {rainSound.volume = volRain.value}

  function coffeeVolume() {coffeeShopSound.volume = volCoffee.value}

  function fireplaceVolume() {fireplaceSound.volume = volFireplace.value}

  return {
    alarm,
    pressButton,
    forestControlSound,
    rainControlSound,
    coffeeControlSound,
    fireplaceControlSound,
    forestVolume,
    rainVolume,
    coffeeVolume,
    fireplaceVolume
  }
}

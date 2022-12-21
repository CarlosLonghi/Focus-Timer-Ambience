import Sounds from './sounds.js'

export default function Timer({minutesDisplay, secondsDisplay, resetDisplay}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function increaseTime() {
    minutes += 5
    updateDisplay(minutes, seconds)
  }

  function decreaseTime() {
    minutes -= 5
    if (minutes < 0) {
      minutes += 5
      return
    } else {
      updateDisplay(minutes, seconds)
    }
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let secondsClock = Number(secondsDisplay.textContent)
      let minutesClock = Number(minutesDisplay.textContent)
      let isFinished = minutesClock <= 0 && secondsClock <= 0

      updateDisplay(minutesClock, secondsClock)

      if (isFinished) {
        resetDisplay()
        reset()
        Sounds().alarm()
        return
      }

      if (secondsClock <= 0) {
        secondsClock = 60
        --minutesClock
      }

      updateDisplay(minutesClock, String(secondsClock - 1))
      countDown()
    }, 1000)
  }

  function reset() {
    updateDisplay(minutes, seconds)
    pause()
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(newMinutes, newSeconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(newSeconds).padStart(2, '0')
  }
  return {
    increaseTime,
    decreaseTime,
    countDown,
    pause,
    reset
  }
}

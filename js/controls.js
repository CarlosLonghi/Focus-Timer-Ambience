export default function Controls({
  playButton,
  pauseButton,
  darkModeButton,
  lightModeButton
}) {
  function playDisplay() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
  }
  function pauseDisplay() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }
  function resetDisplay() {
    pauseDisplay()
  }
  function toggleMode() {
    let bodyDocument = document.body
    bodyDocument.classList.toggle('dark-mode')
    darkModeButton.classList.toggle('hide')
    lightModeButton.classList.toggle('hide')
  }

  return {
    playDisplay,
    pauseDisplay,
    resetDisplay,
    toggleMode
  }
}

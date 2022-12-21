import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  darkModeButton,
  lightModeButton
} from './elements.js'

import Sounds from './sounds.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'

const controls = Controls({
  playButton,
  pauseButton,
  darkModeButton,
  lightModeButton
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetDisplay: controls.resetDisplay
})

const sounds = Sounds()

Events({ timer, controls, sounds })

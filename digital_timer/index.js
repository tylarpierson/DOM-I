// In order to see changes, run `npx serve digital_timer` from main directory

// In collaboration Axhon Ruiz 🐧, Kaitlyn Flynn👍, Tylar Pierson 🐘

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')
let timer
const blue = event => {
  // handle error somewhere?
  // typeof event === typeof new Error()
  //   ? handleError(event)
  //   :
  timer = handlesCountdownstart()
}

const handleError = err => console.error('oops', err)

const handlesCountdownstart = () => {
  return setInterval(countdownTick(), 10)
}

const handleCountdownStop = () => {
  clearInterval(timer)
  return true
}
// create a counter
// 0000
// 0010 = 10 ms

class Counter {
  constructor() {
    this.start = new Date()
  }
  now() {
    return new Date(Math.abs(new Date() - this.start))
  }

  checkIfDone() {
    return this.now().getMilliseconds() - this.start >= 10000
      ? handleCountdownStop()
      : false
  }
}
const countdownCounter = new Counter()

const render = time => {
  // secondTens
  secondTens.innerText =
    secondTens.innerText === `${time.getSeconds() % 1}`
      ? secondTens.innerText
      : `${time.getSeconds() % 1}`
  // secondOnes
  secondOnes.innerText =
    secondOnes.innerText === `${time.getSeconds() % 10}`
      ? secondOnes.innerText
      : `${time.getSeconds() % 10}`
  // msHundreds
  msHundreds.innerText =
    msHundreds.innerText === `${time.getMilliseconds() % 100}`
      ? msHundreds.innerText
      : `${time.getMilliseconds() % 100}`
  // msTens
  msTens.innerText =
    msTens.innerText === `${time.getMilliseconds() % 10}`
      ? msTens.innerText
      : `${time.getMilliseconds() % 10}`

  const timeArr = [secondTens, secondOnes, msHundreds, msTens]
}

function countdownTick() {
  return () => {
    // update our counter
    countdownCounter.checkIfDone()
    // handle the trash
    // timeout runs an extra time
    // render our changes
    render(countdownCounter.now())
  }
}

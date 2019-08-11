import initialDOM from './initial'
import setInputEvent from './inputEvent'
import getData from './fetch'

initialDOM()
setInputEvent()

getData().then(res => {
  return res.json()
})
.then(function(data) {
 window.poemLists = data
})
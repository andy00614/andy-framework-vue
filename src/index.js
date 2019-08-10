import _ from 'lodash'
import styles from '../css/style.css'
import Img from '../asset/green.jpg'
import printMe from './print'

function component() {
  const h1 = document.createElement('h1')

  h1.innerHTML = '杜若萌'
  h1.classList.add(styles.green) 
  // h1.className = styles['green']
  return h1
}

function setImg() { 
  const img = document.createElement('img')
  img.src = Img
  return img
}

document.body.appendChild(component())
document.body.appendChild(setImg())

// printMe()
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
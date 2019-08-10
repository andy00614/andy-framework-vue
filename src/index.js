import _ from 'lodash'
import styles from '../css/style.css'

function component() {
  const h1 = document.createElement('h1')
  h1.innerHTML = '杜若萌'
  h1.classList.add(styles.green)
  // h1.className = styles['green']
  return h1
}

document.body.appendChild(component())
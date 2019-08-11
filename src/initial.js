export default function initialDOM() {
  const input = document.createElement('input')
  const ul = document.createElement('ul')
  input.className="inputInfo"
  ul.className="contentContainer"
  document.body.appendChild(input)
  document.body.appendChild(ul)
  window.input = input
  window.ul = ul
}

function renderPages(lists) {
  clearPage()
  for(let i = 0; i < lists.length; i++) {
    const item = lists[i]
    const li = renderLi(item,i,lists)
    window.ul.appendChild(li)
  }
}

function renderLi(item,index,lists) {
  const li = document.createElement('li')
  li.style.display = 'flex'
  li.style.margin = '10px 0'

  const poemItem = renderItem(item.title,item.detail_text)

  const button = renderButton(index,lists)

  li.appendChild(poemItem)
  li.appendChild(button)

  return li
}

function renderItem(title,text) {
  const div = document.createElement('div')
  div.className = "item"
  div.innerHTML = `<div class="title">${title}</div><div class="content">${text}</div>`
  return div
}

function renderButton(index,lists) {
  const button = document.createElement('button')
  button.className = 'remove'
  button.innerHTML = '删除'
  button.addEventListener('click',function() {
    lists.splice(index,1)
    renderPages(lists)
  },false)
  return button
}

function clearPage() {
  window.ul.innerHTML = ''
}

export default renderPages
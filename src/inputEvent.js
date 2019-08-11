import selectVaildPoem from './selectVaildPoem'
import renderPages from './render'
// 设置input的行为
export default function setInputEvent() {
  const inputInstance = document.querySelector('.inputInfo')
  inputInstance.addEventListener('input',(e) => {
    // 1.拿到input的值
    // 2.通过input的值去筛选poemList，拿到符合条件的值
    // 3.通过上一步符合条件的值去渲染页面
    const inputValue = e.target.value
    const matchedLists = selectVaildPoem(inputValue)
    renderPages(matchedLists)
  },false)
}

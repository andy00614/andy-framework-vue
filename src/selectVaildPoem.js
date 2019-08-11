// entry: searchedValue
// output: target:[] 
export default function selectVaildPoem(serchedValue) {
  // 筛选条件：符合title或者content里包含的，就可以
  const result = []
  for(let item of window.poemLists) {
    if(item.title.indexOf(serchedValue) !== -1 || item.detail_text.indexOf(serchedValue) !== -1 ) {
      result.push(item)
    }
  }
  return result
}
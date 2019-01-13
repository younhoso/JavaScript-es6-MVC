import View from './View.js'

const tag = '[TabView]'

class TabView extends View {
  static tabName() {
    return {
      recomand: '추천 검색어',
      recent: '최근 검색어'
    }
  }

  setup(el){
    this.init(el)
    this.bindClick()
    return this
  } 
  
  setActiveTab(tabName) {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
      li.className = li.innerHTML === tabName ? 'active' : ''
    })
  }

  bindClick() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
      li.addEventListener('click', e => this.onclick(li.innerHTML))
    })
  }

  onclick(tabName){
    this.setActiveTab(tabName)
    this.emit('@change', {tabName})
  }

}

export default TabView;
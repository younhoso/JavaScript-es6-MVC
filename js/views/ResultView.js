import View from './View.js'

const tag = '[ResultView]'

class ResultView extends View {
  
  constructor() {
    super();
    this.massages = '검색 결과가 없습니다.';
  }

  setup (el) {
    this.init(el)
    return this
  }

  render (data = []) { //실제 화면에 그려주는 함수
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.massages
    this.show()
  } 

  getSearchResultsHtml(data) {
    return data.reduce((html, item) => {
      html += this.getSearchItsHtml(item)
      return html
    }, '<ul>')+'</ul>'
  }

  getSearchItsHtml(item) {
    return `<li>
      <img src="${item.image}"/>
      <p>${item.name}</p>
    </li>`
  }
}

export default ResultView

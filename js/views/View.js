const tag = '[View]'

class Parench { 
  init(el) { //엘리먼트를 인자로 받아서 자기 자신의 프로터티로 갔게 된다.
    if (!el) throw el
    this.el = el
    return this 
  }

  //뷰단에서 어떤 특정 이벤트 행동을 정의하는 함수
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }

  //controllers 에다가 이벤트를 보내줄 용도인 함수
  emit(eventname, data) {
    const evt = new CustomEvent(eventname, { detail: data }) // detail: 키를 가지고 있는 data 객체를 받는다.
    this.el.dispatchEvent(evt)
    return this
  }

  hide() {
    this.el.style.display = 'none'
    return this
  }

  show() {
    this.el.style.display = ''
    return this
  }
}

export default Parench
import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import SearchModel from '../models/SearchModel.js'


const tag = '[MainController]'
var Form = new FormView();
var Result = new ResultView();
var Tab = new TabView();
export default {
  init() {
    Form.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

      Tab.setup(document.querySelector('#tabs'))
        .on('@change', e => this.onChangeTab(e.detail.tabName))

      Result.setup(document.querySelector('#search-result'))

      this.renderView()
  },

  renderView() {
    console.log(tag, 'renderView');
    Tab.setActiveTab() 
    Result.hide()
  },

  search(query) {
    console.log(tag, 'onResetForm()', query)
    // search api
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    Result.hide();
  },

  onSearchResult(data){ 
    Result.render(data)
  },

  onChangeTab(tabName) {
    debugger
  }
}
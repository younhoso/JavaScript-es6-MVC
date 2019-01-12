import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'
var Form = new FormView();
var Result = new ResultView();
export default {
  init() {
    Form.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    Result.setup(document.querySelector('#search-result'))
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
  }
}
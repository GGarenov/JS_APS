export class SearchComponent {
  constructor(shoeService, renderHandler, templateFunction, router) {
    this.shoeService = shoeService;
    this.renderHandler = renderHandler;
    this.templateFunction = templateFunction;
    this.showView = this._showView.bind(this);
    this.searchHandler = this._searchHandler.bind(this);
    this.router = router;
  }

  async _showView(ctx) {
    let queryString = ctx.querystring;
    let shoes = [];
    if (queryString != '') {
      let queryArr = queryString.split('=');
      let value = queryArr[1];
      shoes = await this.shoeService.getByBrand(value);
    }
    let template = this.templateFunction(shoes, this.searchHandler);
    this.renderHandler(template);
  }

  async _searchHandler(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let searchValue = formData.get('search');

    if (searchValue == 'Brand cannot be empty') {
      alert('');
    }

    this.router.navigate(`/search?brand=${searchValue}`);
  }
}

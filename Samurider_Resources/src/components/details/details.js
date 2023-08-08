export class DetailsComponent {
  constructor(
    authService,
    motorService,
    renderHandler,
    templateFunction,
    router,
  ) {
    this.router = router;
    this.authService = authService;
    this.motorService = motorService;
    this.renderHandler = renderHandler;
    this.templateFunction = templateFunction;
    this.showView = this._showView.bind(this);
    this.deleteHandler = this._deleteHandler.bind(this);
  }

  async _showView(ctx) {
    let id = ctx.params.id;
    let motor = await this.motorService.getById(id);
    let currentUserId = this.authService.getUserId();
    let isOwner = currentUserId === motor._ownerId;
    let template = this.templateFunction(motor, isOwner, this.deleteHandler);
    this.renderHandler(template);
  }

  async _deleteHandler(id) {
    let result = confirm('Are you sure you want to delete this motor?');
    if (result == false) {
      return;
    }

    let deleteResult = await this.motorService.delete(id);
    this.router.navigate('/dashboard');
  }
}
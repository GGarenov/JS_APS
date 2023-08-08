export class EditComponent {
  constructor(motorService, renderHandler, templateFunction, router) {
    this.motorService = motorService;
    this.renderHandler = renderHandler;
    this.templateFunction = templateFunction;
    this.router = router;
    this.showView = this._showView.bind(this);
    this.editHandler = this._editHandler.bind(this);
  }

  async _showView(ctx) {
    let id = ctx.params.id;
    let motor = await this.motorService.getById(id);

    let template = this.templateFunction(motor, this.editHandler);
    this.renderHandler(template);
  }

  async _editHandler(e, id) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let motor = {
      model: formData.get('model'),
      imageUrl: formData.get('imageUrl'),
      year: formData.get('year'),
      mileage: formData.get('mileage'),
        contact: formData.get('contact'),
      about: formData.get('about'),
    };

    if (
      motor.model == '' ||
      motor.imageUrl == '' ||
      motor.year == '' ||
      motor.mileage == '' ||
      motor.contact == '' ||
      motor.about == ''
    ) {
      alert('Ne trqbva da ima prazni poleta');
      return;
    }


    let result = await this.motorService.edit(id, motor);
    this.router.navigate(`/motorcycles/${id}`);
  }
}
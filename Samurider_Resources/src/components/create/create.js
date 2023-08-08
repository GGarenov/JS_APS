export class CreateComponent {
  constructor(motorService, renderHandler, templateFunction, router) {
    this.motorService = motorService;
    this.renderHandler = renderHandler;
    this.templateFunction = templateFunction;
    this.router = router;
    this.showView = this._showView.bind(this);
    this.createHandler = this._createHandler.bind(this);
  }

  async _showView() {
    let template = this.templateFunction(this.createHandler);
    this.renderHandler(template);
  }

  async _createHandler(e) {
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

    let result = await this.motorService.create(motor);
    this.router.navigate('/dashboard');
  }
}
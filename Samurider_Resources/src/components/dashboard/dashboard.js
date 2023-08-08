export class DashboardComponent{
    constructor(motoService, renderHandler, templateFunction) {
        this.motoService = motoService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let motors = await this.motoService.getAll();
       let template = this.templateFunction(motors);
       this.renderHandler(template);
    }
}
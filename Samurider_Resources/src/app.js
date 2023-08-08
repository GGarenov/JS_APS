import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { CreateComponent } from './components/create/create.js';
import { createTemplate } from './components/create/createTemplate.js';
import { DashboardComponent } from './components/dashboard/dashboard.js';
import { dashboardTemplate } from './components/dashboard/dashboardTemplate.js';
import { DetailsComponent } from './components/details/details.js';
import { detailsTemplate } from './components/details/detailsTemplate.js';
import { EditComponent } from './components/edit/edit.js';
import { editTemplate } from './components/edit/editTemplate.js';
import { HomeComponent } from './components/home/home.js';
import { homeTemplate } from './components/home/homeTemplate.js';
import { LoginComponent } from './components/login/login.js';
import { loginTemplate } from './components/login/loginTemplate.js';
import { NavComponent } from './components/nav/nav.js';
import { navTemplate } from './components/nav/navTemplate.js';
import { RegisterComponent } from './components/register/register.js';
import { registerTemplate } from './components/register/registerTemplate.js';
import { AuthService } from './services/AuthService.js';
import { BaseCrudApiService } from './services/BaseCrudApiService.js';
import { SessionService } from './services/SessionService.js';

const main = document.querySelector('#wrapper main');
const nav = document.querySelector('#wrapper header');

//Router

let router = {
    navigate: page.show,
    redirect: page.redirect,
};

//Base Url
const baseurl = 'http://localhost:3030';

//Render handlers
let renderBody = (template) => render(template, main)
let renderNav = (template) => render(template, nav)

//Services

let sessionService = new SessionService();
let authService = new AuthService(baseurl, sessionService);
let motorsService = new BaseCrudApiService(baseurl, '/data/motorcycles', sessionService);


//Components

let navComponent = new NavComponent(authService, renderNav, navTemplate, router);
let homeComponent = new HomeComponent(renderBody, homeTemplate)
let loginComponent = new LoginComponent(authService, renderBody, loginTemplate, router);
let dashboardComponent = new DashboardComponent(motorsService, renderBody, dashboardTemplate);
let registerComponent = new RegisterComponent(authService, renderBody, registerTemplate, router);
let createComponent = new CreateComponent(motorsService, renderBody, createTemplate, router);
let editComponent = new EditComponent(motorsService, renderBody, editTemplate, router);
let detailsComponent = new DetailsComponent(authService, motorsService, renderBody, detailsTemplate, router)



//Routing

page('/index.html', '/');
page(navComponent.showView);

page('/', homeComponent.showView);
page('/login', loginComponent.showView);
page('/register', registerComponent.showView);
page('/dashboard', dashboardComponent.showView);
page('/create', createComponent.showView);
page('/edit/:id', editComponent.showView);
page('details/:id', detailsComponent.showView);
page.start();

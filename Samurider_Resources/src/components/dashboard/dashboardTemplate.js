import { html } from "../../../node_modules/lit-html/lit-html.js";

// model	imageUrl	year	mileage	contact	about

const motoTemplate = (motor) => html`
<div class="motorcycle">
        <img src="${motor.imageUrl}" alt="example1" />
        <h3 class="model">${motor.model}</h3>
        <p class="year">${motor.year}</p>
        <p class="mileage">${motor.mileage}</p>
        <p class="contact">${motor.contact}</p>
        <a class="details-btn" href="${`/details/${motor._id}`}">More Info</a>
    </div>`

export const dashboardTemplate = (motors) => html`

<h2>Available Motorcycles</h2>
<section id="dashboard">
 ${motors.length > 0
    ? html`
    ${motors.map(m => motoTemplate(m))}
    `
    : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
}
</section>`

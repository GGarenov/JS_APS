import { html } from "../../../node_modules/lit-html/lit-html.js";

export const editTemplate = (motor, submitHandler) => html`

<section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
        <h2>Edit Motorcycle</h2>
        <form class="edit-form" @submit=${(e) => submitHandler(e, motor._id)}>
            <input type="text" name="model" id="model" placeholder="Model"
            .value ${motor.model} />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image"
            .value=${motor.imageUrl} />
            <input type="number" name="year" id="year" placeholder="Year"
            .value=${motor.year} />
            <input type="number" name="mileage" id="mileage" placeholder="mileage"
            .value=${motor.mileage} />
            <input type="number" name="contact" id="contact" placeholder="contact"
            .value=${motor.contact} />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"
            .value=${motor.about}></textarea>
            <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
</section>
`
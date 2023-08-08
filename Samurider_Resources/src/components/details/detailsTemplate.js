import { html } from "../../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (motor, isOwner, deleteHandler) => html`


<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${motor.imageUrl} alt="example1" />
        <p id="details-title">Honda Hornet</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="year">${motor.year}</p>
                <p class="mileage">${motor.mileage}</p>
                <p class="contact">${motor.contact}</p>
                <p id="motorcycle-description">
                    ${motor.motorcycle - description}
                </p>
            </div>

            ${isOwner
        ? html` <div id="action-buttons">
                <a href="/edit/${motor._id}" id="edit-btn">Edit</a>
                <a href="javascript.void(0)" id="delete-btn"
                @click=${(e) => deleteHandler(motor._id)}>Delete</a>
            </div>`
        : ''
    
            }

           
        </div>
    </div>
</section>`
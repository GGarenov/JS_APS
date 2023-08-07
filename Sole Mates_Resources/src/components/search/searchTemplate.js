import { html } from '../../../node_modules/lit-html/lit-html.js';
import { shoeTemplate } from '../../components/shared/shoeTemplate.js';

export const searchTemplate = (shoes, submitHandler) =>
  html` <section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${submitHandler}>
      <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
      />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      ${shoes.length > 0
        ? html` <ul class="card-wrapper">
            ${shoes.map((s) => shoeTemplate(s))}
          </ul>`
        : html`<h2>There are no results found.</h2>`}
    </div>
  </section>`;

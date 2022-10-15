class HeroElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-element">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
            <img src="./images/heros/hero-image_2-large.jpg" alt="Hero Element" class="hero">
          </picture>
        </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);

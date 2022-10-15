class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="appbar">
            <div tabindex="0" class="appbar-brand">
                LogRestaurantX
            </div>
            <button id="menu" class="appbar-drawer" aria-label="navigation list button">☰</button>
            <nav>
                <div id="drawer" class="appbar-navigation">
                <ul>
                    <li class="nav-item"><a href="#/">Home</a></li>
                    <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav-item"><a href="https://www.linkedin.com/in/luthfi-khairullah-876667216" target="_blank">About
                        Us</a></li>
                </ul>
                </div>
            </nav>
        </div>
    `;
  }
}

customElements.define('app-bar', AppBar);

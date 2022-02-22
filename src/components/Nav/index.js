import "./styles.css";

export default class Nav {
  constructor($target) {
    this.$container = document.createElement("nav");
    this.$container.className = "res-nav";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = `

      <ul>
        <li>정기구독</li>
        <li>꽃다발</li>
        <li>당일배송</li>
        <li>플라워클래스</li>
      </ul>
    `;
  }
}

import "./styles.css";

export default class Header {
  constructor($target) {
    this.$container = document.createElement("header");
    this.$container.id = "Header";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    const menus = [
      "꽃 정기구독",
      "꽃다발",
      "당일배송",
      "플라워클래스",
      "소품샵",
      "이벤트",
    ];
    this.$container.innerHTML = ``;

    const $innerHeader = document.createElement("div");
    $innerHeader.className = "inner-header";
    // $innerHeader.innerText = "난 헤더야";

    const $menuLogo = document.createElement("a");
    $menuLogo.className = "menu-logo";
    $menuLogo.href = "/";
    $menuLogo.innerHTML = "KUKKA";

    const $menuList = document.createElement("ul");
    $menuList.className = "menu-list";
    // $menuList.innerHTML = "난 리스트";

    menus.map((menu) => {
      const $menuItem = document.createElement("div");
      $menuItem.className = "menu-item";
      $menuItem.innerHTML = `
        <li>
        ${menu}
        </li>
      `;
      $menuList.appendChild($menuItem);
    });

    const $userMenu = document.createElement("ul");
    $userMenu.className = "user-menu";
    $userMenu.innerHTML = `
      <li>유저</li>
      <li>장바구니</li>
    `;

    $innerHeader.appendChild($menuLogo);
    $innerHeader.appendChild($menuList);
    $innerHeader.appendChild($userMenu);
    this.$container.appendChild($innerHeader);
  }
}

import "./styles.css";

export default class Header {
  constructor($target) {
    this.$container = document.createElement("header");
    this.$container.id = "Header";
    $target.appendChild(this.$container);
    this.render();
  }

  onClickMenuButton = () => {
    window.scroll({ top: 1000 });
    console.log("눌림");
  };

  render() {
    const menus = [
      "꽃 정기구독",
      "꽃다발",
      "당일배송",
      "플라워클래스",
      "소품샵",
      "이벤트",
    ];

    const $menuButton = document.createElement("button");
    $menuButton.className = "menu-button";

    $menuButton.addEventListener("click", this.onClickMenuButton.bind(this));

    this.$container.innerHTML = ``;

    const $innerShadow = document.createElement("div");
    $innerShadow.className = "inner-shadow";

    const $innerHeader = document.createElement("div");
    $innerHeader.className = "inner-header";

    const $menuLogo = document.createElement("a");
    $menuLogo.className = "menu-logo";
    $menuLogo.href = "/";
    $menuLogo.innerHTML = `<img src="https://i.ibb.co/rQtGM58/111.jpg" alt="kukka-logo" border="0">`;

    const $menuList = document.createElement("ul");
    $menuList.className = "menu-list";

    menus.map((menu) => {
      const $menuItem = document.createElement("div");
      $menuItem.className = "menu-item";
      if (menu === "플라워클래스") {
        const $listItem = document.createElement("li");
        $menuItem.appendChild($listItem);
        $menuButton.innerHTML = menu;
        $listItem.appendChild($menuButton);
      } else {
        $menuItem.innerHTML = `
        <li>
        ${menu}
        </li>
      `;
      }
      $menuList.appendChild($menuItem);
    });

    const $userMenu = document.createElement("ul");
    $userMenu.className = "user-menu";
    $userMenu.innerHTML = `
      <li><a href="/"><img src="https://i.ibb.co/DQMPFc4/image.png" alt="image" border="0"></a></li>
      <li><a href="/"><img src="https://i.ibb.co/qpjJ7b7/image.png" alt="image" border="0"></a></li>
    `;

    $innerHeader.appendChild($menuLogo);
    $innerHeader.appendChild($menuList);
    $innerHeader.appendChild($userMenu);

    this.$container.appendChild($innerShadow);
    $innerShadow.appendChild($innerHeader);
  }
}

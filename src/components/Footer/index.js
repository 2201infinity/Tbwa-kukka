import "./styles.css";

export default class Footer {
  constructor($target) {
    this.$container = document.createElement("Footer");
    this.$container.id = "Footer";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;

    const $innerFooter = document.createElement("div");
    $innerFooter.className = "inner-footer";
    $innerFooter.innerHTML = `
    <h3> 꾸까 고객센터</h3>
    <p> 1661-1031 </p>
    <span>(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</span>
    <button>꾸까 고객센터</button>
    `;
    const $contact = document.createElement("p");
    $contact.className = "contact-text";
    $contact.innerText = "기업제휴 문의 : 070-4238-8251";

    const $infoBox = document.createElement("div");
    $infoBox.className = "info-footer";
    $infoBox.innerHTML = `
    상호명: 꾸까(kukka) 사업자 등록번호: 264-81-32594 대표자: 박춘화
    `;
    $innerFooter.appendChild($contact);
    this.$container.appendChild($innerFooter);
    this.$container.appendChild($infoBox);
  }
}

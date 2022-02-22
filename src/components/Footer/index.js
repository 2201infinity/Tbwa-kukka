import "./styles.css";

export default class Footer {
  constructor($target) {
    this.$container = document.createElement("footer");
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
    <p class="tel-text"> 1661-1031 </p>
    <span>(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</span>
    <button>꾸까 고객센터</button>
    <p class="contact-text">기업제휴 문의 : 070-4238-8251</p>
    <hr/>
    <p>상호명: 꾸까(kukka) 사업자 등록번호: 264-81-32594 대표자: 박춘화</p>
    <p> 소재지: 서울시 서초구 남부순환로333길 10 kukka
    기업공시 통신판매신고번호 2018-서울서초-1692 </p>

    `;
    this.$container.appendChild($innerFooter);
  }
}

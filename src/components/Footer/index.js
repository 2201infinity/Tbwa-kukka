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
    const $footerWrapper = document.createElement("div");
    $footerWrapper.className = "footer-wrapper";
    const $innerFooter = document.createElement("div");
    $innerFooter.className = "inner-footer";
    $innerFooter.innerHTML = `
    <div class="footer-top">
    <nav class="img-box">
    <div class="facebook"></div>
    <div class="insta"></div>
    <div class="youtube"></div>
    </nav>
    <h3> 꾸까 고객센터 <span class="tel-text"> 1661-1031 </span></h3>
    <span class="work-hour">(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</span>
    <p class="contact-text">기업제휴 문의 : 070-4238-8251</p>
    <button>꾸까 고객센터</button>
    <div class="logo"></div>
    </div>
    <hr/>
    <div class="info-box">
    <span class="info">상호명: 꾸까(kukka) </span>
    <span class="info">사업자 등록번호: 264-81-32594 </span>
    <span class="info end">대표자: 박춘화 </span>
    </div>
    <div class="info-box">
    <span class="info"> 소재지: 서울시 서초구 남부순환로333길 10 kukka</span>
    <span class="info"> 기업공시 </span>
    <span class="info end"> 통신판매신고번호 2018-서울서초-1692  </span>
    </div>
    <p class="copy"> &copy; 2014-2021 kukka, Inc. All rights reserved. </p>
    <nav class="footer-aside">
    <a class="link" href="/agreement/?next=/">이용약관</a>
    <a class="link" href="/privacy/?next=/">개인정보 처리방침</a>
    <a class="link end" href="https://partners.kukka.kr/" target="_blank">제휴안내</a>
    </nav>


    `;
    $footerWrapper.appendChild($innerFooter);
    this.$container.appendChild($footerWrapper);
  }
}

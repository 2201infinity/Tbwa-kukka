import "./styles.css";

export default class ImageBanner {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "ImageBanner";
    $target.appendChild(this.$container);
    this.render();
  }

  render() {
    const $InnerBanner = document.createElement("div");
    $InnerBanner.className = "InnerBanner";
    $InnerBanner.innerHTML = `
      <h1 class="upper-banner-title">꾸까 브랜드 스토리</h1>
      <a class="upper-subtitle" href="/">더보기</a>
    `;
    this.$container.appendChild($InnerBanner);

    const $leftBannerBox = document.createElement("div");
    $leftBannerBox.className = "left-box";
    $leftBannerBox.innerHTML = `
      <h1 class="banner-title">꾸까 브랜드 이야기</h1>
      <img class="banner-img" src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/brand_201225_w.png" alt="banner-img"></img>
      <p class="banner-subtitle-left">꽃으로 라이프스타일을 만들어가는 <br> kukka의 문화를 소개해요.</p>
      <button class="banner-btn">Brand Story</button>
    `;

    const $rightBannerBox = document.createElement("div");
    $rightBannerBox.className = "right-box";
    $rightBannerBox.innerHTML = `
      <img class="banner-img" src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/offline_201225_w.png" alt="banner-img"></img>
      <h1 class="banner-title">꾸까 오프라인 쇼룸</h1>
      <p class="banner-subtitle-right">꽃을 가까이서 만져보고 향기도 맡아보고,<br> 꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸 </p>
      <button class="banner-btn">꾸까 쇼룸 안내</button>
    `;
    $InnerBanner.appendChild($leftBannerBox);
    $InnerBanner.appendChild($rightBannerBox);
  }
}

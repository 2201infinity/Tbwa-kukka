import "./styles.css";

export default class ImageSlide {
  constructor($target) {
    this.$container = document.createElement("section");
    this.$container.className = "image-slider";
    (this.state = {
      item: [
        {
          src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsProductImage/2022/01/28/0_3_9UUfH2k.jpg",
          title: "양귀비 화병 세트",
          price: "32,900원",
          tags: ["광화문점", "강남점", "송파점", "부산동래점", "잠실점"],
        },
        {
          src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/1785/0_1_0Mf3Ifg.jpg",
          title: "가득찬 XL 꽃구독",
          price: "51,900원",
          tags: ["광화문점", "월계점", "강남점", "구로점", "잠실점"],
        },
        {
          src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/Contents/2648/0_1.jpg",
          title: "라넌큘러스 바스켓",
          price: "61,900원",
          tags: ["광화문점", "월계점", "송도점", "부산동래점", "잠실점"],
        },
      ],
    }),
      $target.appendChild(this.$container);
    this.render();
  }

  onNextButtonClick() {
    const temp = this.state.item.shift();
    this.state.item.push(temp);
    this.render();
  }

  onPrevButtonClick() {
    const temp = this.state.item.pop();
    this.state.item.unshift(temp);
    this.render();
  }

  render() {
    const { item } = this.state;

    const $nextButton = document.createElement("button");
    const $prevButton = document.createElement("button");

    $nextButton.className = "next-button";
    $nextButton.innerText = ">";
    $nextButton.addEventListener("click", this.onNextButtonClick.bind(this));

    $prevButton.className = "prev-button";
    $prevButton.innerText = "<";
    $prevButton.addEventListener("click", this.onPrevButtonClick.bind(this));

    this.$container.innerHTML = `
        <header class="header">
          <h3>꽃과 함께하는 일상, <strong>플라워 클래스</strong></h3>
          <a>더보기</a>
        </header>
        ${item
          .map(
            (e, index) => `
              <div class="slide-container ${`slide${index}`}">
                <div class="image-wrap">
                  <img src="${e.src}" />
                </div>
                <div class="slide-desc">
                  <p>${e.title}</p>
                  <p>${e.price}</p>
                  ${e.tags.map((tag) => `<span>${tag} </span>`).join("")}
                </div>
              </div>
            `
          )
          .join("")}
    `;
    this.$container.appendChild($nextButton);
    this.$container.appendChild($prevButton);
  }
}

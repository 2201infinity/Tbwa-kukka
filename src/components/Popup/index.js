import {
  POPUP_CONTENT_IMAGE,
  POPUP_COOKIE_NAME,
} from "../../utils/constants.js";
import cookie from "../../utils/cookie.js";
import { dateOfOneDay } from "../../utils/date.js";
import "./styles.css";

export default class Popup {
  constructor($target) {
    this.$container = document.createElement("div");
    this.$container.id = "Popup";
    $target.appendChild(this.$container);
    cookie.get(POPUP_COOKIE_NAME) ? this.$container.remove() : this.render();
  }

  onClosePopup() {
    document.body.style.overflow = "auto";
    this.$container.remove();
  }

  onCloseTodayPopup() {
    cookie.set(POPUP_COOKIE_NAME, "true", dateOfOneDay());
    this.onClosePopup();
  }

  render() {
    this.$container.innerHTML = ``;
    const $InnerPopup = document.createElement("div");
    $InnerPopup.className = "InnerPopup";

    const $PopupBackground = document.createElement("div");
    $PopupBackground.className = "PopupBackground";

    const $PopupImage = document.createElement("img");
    $PopupImage.className = "PopupImage";
    $PopupImage.src = POPUP_CONTENT_IMAGE;
    $PopupImage.alt = "Popup Image";
    $PopupImage.style.width = "100%";

    const $PopupContent = document.createElement("div");
    $PopupContent.className = "PopupContent";

    const $PopupFooter = document.createElement("div");
    $PopupFooter.className = "PopupFooter";

    const $PopupCloseButton = document.createElement("button");
    $PopupCloseButton.className = "PopupCloseButton";
    $PopupCloseButton.addEventListener("click", this.onClosePopup.bind(this));

    const $PopupTimeCloseButton = document.createElement("button");
    $PopupTimeCloseButton.className = "PopupTimeCloseButton";
    $PopupTimeCloseButton.addEventListener(
      "click",
      this.onCloseTodayPopup.bind(this)
    );

    $PopupFooter.appendChild($PopupCloseButton);
    $PopupFooter.appendChild($PopupTimeCloseButton);

    $InnerPopup.appendChild($PopupContent);
    $PopupContent.appendChild($PopupImage);
    $PopupContent.appendChild($PopupFooter);

    this.$container.appendChild($InnerPopup);
    this.$container.appendChild($PopupBackground);

    document.body.style.overflow = "hidden";
  }
}

import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.js";
import IFrameBox from "./components/IFrameBox/index.js";
import ImageBanner from "./components/ImageBanner/index.js";
import Popup from "./components/Popup/index.js";
import ImageSlide from "./components/ImageSlide/index.js";

export default class App {
  constructor($app) {
    new Header($app);
    new IFrameBox($app);
    new ImageSlide($app);
    new ImageBanner($app);
    new Footer($app);
    new Popup($app);
  }
}

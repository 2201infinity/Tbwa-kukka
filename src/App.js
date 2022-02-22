import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.js";
import IFrameBox from "./components/IFrameBox/index.js";
import ImageBanner from "./components/ImageBanner/index.js";
import ImageSlide from "./components/ImageSlide/index.js";

export default class App {
  constructor($app) {
    new Header($app);
    new ImageSlide($app);
    new IFrameBox($app);
    new ImageBanner($app);
    new ImageSlide($app);
    new Footer($app);
  }
}

import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.js";
import IFrameBox from "./components/IFrameBox/index.js";
import ImageBanner from "./components/ImageBanner/index.js";
import ImageSlider from "./components/ImageSlider/index.js";

export default class App {
  constructor($app) {
    new Header($app);
    new IFrameBox($app);
    new ImageSlider($app);
    new ImageBanner($app);
    new Footer($app);
  }
}

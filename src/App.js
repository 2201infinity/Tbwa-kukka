import Footer from "./components/Footer/index.js";
import Header from "./components/Header/index.js";
import IFrameBox from "./components/IFrameBox/index.js";

export default class App {
  constructor($app) {
    new Header($app);
    new IFrameBox($app);
    new Footer($app);
  }
}

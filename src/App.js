import Header from "./components/Header/index.js";
import IFrameBox from "./components/IFrameBox/index.js";

export default class App {
  constructor($app) {
    new Header($app);
    new IFrameBox($app);
  }
}

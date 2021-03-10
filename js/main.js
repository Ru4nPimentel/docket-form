import formJS from './module/form.js';
import ImgApi from './module/imgApi.js';
import Slider from './module/slide.js';
import maskTel from './module/masktel.js';

const slide = new Slider('.slide', '.slideBox');
const maskTel1 = new maskTel('.telmask1').init();
const maskTel2 = new maskTel('.telmask2').init();

async function loaded() {
  const loadedApi = await ImgApi();
  if (loadedApi) {
    slide.init();
    slide.addArrow('.prev', '.next');
  }
}

formJS();
loaded();

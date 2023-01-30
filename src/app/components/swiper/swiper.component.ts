import { Component, ViewEncapsulation} from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponentArg {

  constructor() { }

}

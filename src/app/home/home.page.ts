import { Component,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  constructor() {}

}

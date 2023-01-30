import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponentArg } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SwiperComponentArg],
  imports: [CommonModule, SwiperModule],
  exports: [SwiperComponentArg],
})
export class ComponentsModule {}

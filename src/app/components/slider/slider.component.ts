import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  @Input() slider;
  slideSelected = 0;
  interval;
  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      let contador = this.slideSelected;
      contador++;
      this.slideSelected = contador > this.slider.length - 1 ? 0 : contador;
    }, 10000000000);
  }

  selectedSlide(index: number) {
    this.slideSelected = index;
  }

}

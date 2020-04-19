import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  sliderArray: any;
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.sliderService.getData().subscribe((data:any) => {
      this.sliderArray = data.sliderArray;
    });
  }

}

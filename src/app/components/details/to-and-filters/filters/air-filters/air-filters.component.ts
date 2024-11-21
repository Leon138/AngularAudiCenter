import { Component, Input, OnInit } from '@angular/core';
import { AIR_FILTERS } from 'src/app/shared/constants/to-and-filters/air-filters.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-air-filters',
  templateUrl: './air-filters.component.html',
  styleUrls: ['./air-filters.component.scss'],
})
export class AirFiltersComponent implements OnInit {
  public airfilters = AIR_FILTERS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.airfilters.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

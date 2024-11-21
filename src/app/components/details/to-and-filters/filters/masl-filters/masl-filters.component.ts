import { Component, Input, OnInit } from '@angular/core';
import { MASL_FILTERS } from 'src/app/shared/constants/to-and-filters/masl-filters.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-masl-filters',
  templateUrl: './masl-filters.component.html',
  styleUrls: ['./masl-filters.component.scss'],
})
export class MaslFiltersComponent implements OnInit {
  public masjannyjfilters = MASL_FILTERS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.masjannyjfilters.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

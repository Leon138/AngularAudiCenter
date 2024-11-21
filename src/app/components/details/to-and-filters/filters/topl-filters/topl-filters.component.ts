import { Component, Input, OnInit } from '@angular/core';
import { TOPL_FILTERS } from 'src/app/shared/constants/to-and-filters/topl-filters.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-topl-filters',
  templateUrl: './topl-filters.component.html',
  styleUrls: ['./topl-filters.component.scss'],
})
export class ToplFiltersComponent implements OnInit {
  public toplivnyjfilters = TOPL_FILTERS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.toplivnyjfilters.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

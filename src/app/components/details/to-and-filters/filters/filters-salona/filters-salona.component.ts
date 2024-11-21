import { Component, Input, OnInit } from '@angular/core';
import { FILTERS_SALONA } from 'src/app/shared/constants/to-and-filters/filters-salona.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-filters-salona',
  templateUrl: './filters-salona.component.html',
  styleUrls: ['./filters-salona.component.scss'],
})
export class FiltersSalonaComponent implements OnInit {
  public filterssalona = FILTERS_SALONA;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.filterssalona.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

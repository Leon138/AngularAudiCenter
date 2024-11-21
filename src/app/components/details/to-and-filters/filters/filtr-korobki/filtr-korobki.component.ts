import { Component, Input, OnInit } from '@angular/core';
import { FILTERS_KOROBKI } from 'src/app/shared/constants/to-and-filters/filters-korobki.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-filtr-korobki',
  templateUrl: './filtr-korobki.component.html',
  styleUrls: ['./filtr-korobki.component.scss'],
})
export class FiltrKorobkiComponent implements OnInit {
  public filterskorobki = FILTERS_KOROBKI;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.filterskorobki.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

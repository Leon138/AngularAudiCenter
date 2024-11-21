import { Component, Input, OnInit } from '@angular/core';
import { ACCUMULATORS } from 'src/app/shared/constants/to-and-filters/accumulator.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-accumulators',
  templateUrl: './accumulators.component.html',
  styleUrls: ['./accumulators.component.scss'],
})
export class AccumulatorsComponent implements OnInit {
  public accumulators = ACCUMULATORS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.accumulators.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

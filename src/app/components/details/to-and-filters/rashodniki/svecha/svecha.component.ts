import { Component, Input, OnInit } from '@angular/core';
import { SVECHA } from 'src/app/shared/constants/to-and-filters/svecha.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-svecha',
  templateUrl: './svecha.component.html',
  styleUrls: ['./svecha.component.scss'],
})
export class SvechaComponent implements OnInit {
  public svecha = SVECHA;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.svecha.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

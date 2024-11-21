import { Component, Input, OnInit } from '@angular/core';
import { REMEN_GRM } from 'src/app/shared/constants/to-and-filters/remen-grm.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-remen-grm',
  templateUrl: './remen-grm.component.html',
  styleUrls: ['./remen-grm.component.scss'],
})
export class RemenGrmComponent implements OnInit {
  public remengrm = REMEN_GRM;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.remengrm.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

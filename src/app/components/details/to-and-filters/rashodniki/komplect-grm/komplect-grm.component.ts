import { Component, Input, OnInit } from '@angular/core';
import { KOMPLECT_GRM } from 'src/app/shared/constants/to-and-filters/komplect-grm.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-komplect-grm',
  templateUrl: './komplect-grm.component.html',
  styleUrls: ['./komplect-grm.component.scss'],
})
export class KomplectGrmComponent implements OnInit {
  public komplectgrm = KOMPLECT_GRM;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.komplectgrm.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

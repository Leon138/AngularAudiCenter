import { Component, Input, OnInit } from '@angular/core';
import { PORSHEN } from 'src/app/shared/constants/motor/porshen.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-porshens',
  templateUrl: './porshens.component.html',
  styleUrls: ['./porshens.component.scss'],
})
export class PorshensComponent implements OnInit {
  public porshens = PORSHEN;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.porshens.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

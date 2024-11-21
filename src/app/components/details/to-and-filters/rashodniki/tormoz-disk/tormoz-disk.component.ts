import { Component, Input, OnInit } from '@angular/core';
import { TORMOZ_DISKI } from 'src/app/shared/constants/to-and-filters/tormoz-disk.conts';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-tormoz-disk',
  templateUrl: './tormoz-disk.component.html',
  styleUrls: ['./tormoz-disk.component.scss'],
})
export class TormozDiskComponent implements OnInit {
  public tormoznyediski = TORMOZ_DISKI;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.tormoznyediski.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

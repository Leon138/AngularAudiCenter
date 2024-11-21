import { Component, Input, OnInit } from '@angular/core';
import { SUPPORTS } from 'src/app/shared/constants/brake-components/support.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-tormoznoj-support',
  templateUrl: './tormoznoj-support.component.html',
  styleUrls: ['./tormoznoj-support.component.scss'],
})
export class TormoznojSupportComponent implements OnInit {
  public tormoznojsupport = SUPPORTS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.tormoznojsupport.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

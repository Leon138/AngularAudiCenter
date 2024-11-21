import { Component, Input, OnInit } from '@angular/core';
import { KOLODKI } from 'src/app/shared/constants/to-and-filters/kolodki.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-kolodki',
  templateUrl: './kolodki.component.html',
  styleUrls: ['./kolodki.component.scss'],
})
export class KolodkiComponent implements OnInit {
  public kolodki = KOLODKI;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  addToCart(index: number) {
    this.kolodki.forEach((item, i) => {
      if (index == i) {
        this.lsService.addPart(item);
      }
    });
    this.counter = this.lsService.loadParts().length;
  }
}

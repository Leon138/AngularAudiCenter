import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-parts-item',
  templateUrl: './auto-parts-item.component.html',
  styleUrls: ['./auto-parts-item.component.scss'],
})
export class AutoPartsItemComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}

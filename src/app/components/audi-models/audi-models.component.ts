import { Component, Input, OnInit } from '@angular/core';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-audi-models',
  templateUrl: './audi-models.component.html',
  styleUrls: ['./audi-models.component.scss'],
})
export class AudiModelsComponent implements OnInit {
  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }
}

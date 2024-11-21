import { Component, Input, OnInit } from '@angular/core';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-test-drive',
  templateUrl: './test-drive.component.html',
  styleUrls: ['./test-drive.component.scss'],
})
export class TestDriveComponent implements OnInit {
  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }
}

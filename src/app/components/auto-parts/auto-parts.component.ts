import { Component, Input, OnInit } from '@angular/core';
import { BRAKE_SYSTEM } from 'src/app/shared/constants/brake-components/brake-components.const';
import { RASHODNIKI_AND_FILTRA } from 'src/app/shared/constants/to-and-filters/rashodniki-and-filters.const';
import { DVIGATEL_AND_EXHAUST } from 'src/app/shared/constants/motor/dvigatel-and-exhaust-system.const';
import { PODVESKA_COMPONENTS } from 'src/app/shared/constants/podveska/podveska-components.const';
import { TRANSMISSION_PARTS } from 'src/app/shared/constants/transmission/transmission-parts.const';
import { AIR_CONDITIONING_SYSTEM } from 'src/app/shared/constants/cooling-and-heating/air-conditioning-system.const';
import { ELECTRICA } from 'src/app/shared/constants/electrics-and-lighting/electrica.const';
import { BODY_COMPONENTS } from 'src/app/shared/constants/body-and-components/body-components.const';
import { AUTO_PARTS } from 'src/app/shared/constants/auto-parts.const';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-auto-parts',
  templateUrl: './auto-parts.component.html',
  styleUrls: ['./auto-parts.component.scss'],
})
export class AutoPartsComponent implements OnInit {
  public autoparts = AUTO_PARTS;
  public rashodnikiandfilters = RASHODNIKI_AND_FILTRA;
  public brakesystem = BRAKE_SYSTEM;
  public dvigatelandexhaust = DVIGATEL_AND_EXHAUST;
  public podveskacomponents = PODVESKA_COMPONENTS;
  public transmissionparts = TRANSMISSION_PARTS;
  public airsystem = AIR_CONDITIONING_SYSTEM;
  public electrica = ELECTRICA;
  public bodycomponents = BODY_COMPONENTS;

  @Input() counter!: number;

  constructor(private lsService: PartsService) {}

  ngOnInit(): void {
    this.counter = this.lsService.loadParts().length;
  }

  public toggleDiv(index: number) {
    this.autoparts[index].visible = !this.autoparts[index].visible;
  }
}

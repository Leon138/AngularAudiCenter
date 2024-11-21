import { Component, OnInit } from '@angular/core';
import { SOCIAL_MEDIA } from 'src/app/shared/constants/social-media.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public arrModel = [
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'Q3',
    'Q5',
    'Q7',
    'Q8',
  ];

  public socialMedia = SOCIAL_MEDIA;

  constructor() {}

  ngOnInit(): void {}
}

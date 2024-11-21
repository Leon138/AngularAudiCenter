import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public scroll: boolean = false;
  public prevScrolled = 0;

  @Input() counter!: number;

  constructor() {}

  ngOnInit(): void {}

  // скрытие/показ Header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let currentScroll = window.scrollY;

    if (currentScroll > this.prevScrolled) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
    this.prevScrolled = currentScroll;
  }
}

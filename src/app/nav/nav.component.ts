import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { INavElement } from 'src/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'], 
  host: {'[class.expanded]':'expanded'}
})

export class NavComponent implements OnInit {

    private expanded: boolean = false;
    @Output() navExpand = new EventEmitter<boolean>();
    navList: Array<INavElement> = [];

    constructor() { }

    ngOnInit() {

    }

    toggleNavigation(): void {
      this.expanded = !this.expanded;
      this.navExpand.emit(this.expanded);
    }

}

import { Component, OnInit } from '@angular/core';
import { ILogo } from '../../models/index';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})

export class TopbarComponent implements OnInit {

  logo: ILogo = {
    title: "Simple",
    subTitle: "Beta",
    imagePath: ""
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import * as Models from '../../models/index';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})

export class TopbarComponent implements OnInit {

  logo: Models.ILogo = {
    title: "Simple",
    subTitle: "Beta",
    imagePATH: ""
  }

  constructor() { }

  ngOnInit() {
  }

}

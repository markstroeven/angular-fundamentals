import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-awesome-bar',
  templateUrl: './awesome-bar.component.html',
  styleUrls: ['./awesome-bar.component.scss']
})
export class AwesomeBarComponent implements OnInit {

  @Input()
  public title: string;

  constructor() {
  }

  ngOnInit() {
  }

}

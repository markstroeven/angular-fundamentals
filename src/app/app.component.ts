import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public item: any = {
    data: 'foobar'
  };

  public env: any = environment;

  public titles: string [] = [
    'Awesomebox I',
    'Super awesomebox II',
    'Super duper awesomebox III'
  ];

  @ViewChild('container')
  public elementRef: ElementRef;

  public constructor(private renderer: Renderer2) {
  }

  public setBackgroundColor(color: string): void {
    console.log('setting ', color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

}

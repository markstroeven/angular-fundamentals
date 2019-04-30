import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {AwesomeBoxService} from './awesome-box.service';

@Component({
  selector: 'app-awesome-box',
  templateUrl: './awesome-box.component.html',
  styleUrls: ['./awesome-box.component.scss']
})
export class AwesomeBoxComponent {

  @Input()
  public contentItem: any;
  @Input()
  public title: string;

  @Output()
  public onColorChange: EventEmitter<string> = new EventEmitter();

  @ViewChild('container')
  public elementRef: ElementRef;

  private currentColor: string;

  constructor(private awesomeBoxService: AwesomeBoxService, private renderer: Renderer2) {
  }

  public setColor(): void {
    this.currentColor = this.awesomeBoxService.getRandomColor();
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.currentColor);
  }

  public selectColor(): void {
    this.onColorChange.emit(this.currentColor);
  }
}

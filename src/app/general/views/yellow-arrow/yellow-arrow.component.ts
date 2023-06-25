import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yellow-arrow',
  templateUrl: './yellow-arrow.component.html',
  styleUrls: ['./yellow-arrow.component.scss']
})
export class YellowArrowComponent {
  @Input() name: string = '';
}

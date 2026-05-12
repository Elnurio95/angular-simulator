import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {

  @Input() name!: string;
  @Output() clicked = new EventEmitter(); 
  
  notify() {
    this.clicked.emit(); 
  }

}

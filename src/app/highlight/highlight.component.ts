import { Component, Input } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  @Input() user: user;
  constructor() { }

  ngOnInit(): void{

  }

}

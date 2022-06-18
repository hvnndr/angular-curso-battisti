import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  @Input() name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  color: string = 'red';
  size: number = 40;
  classes: Array<any> = ["green-title", "small-title" ]
  constructor() { }

  ngOnInit(): void {
  }

}

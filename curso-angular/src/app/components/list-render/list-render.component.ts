import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: 'narcejo', type:'dog'},
    {name: 'tom', type: 'gato'},
    {name: 'pilow', type: 'lontra'},
    {name: 'bal', type: 'baleia'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

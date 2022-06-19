import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  numero: number = 2
  constructor() { }

  ngOnInit(): void {
  }

  public plusOne(): void{
    this.numero *= 2
  }
}

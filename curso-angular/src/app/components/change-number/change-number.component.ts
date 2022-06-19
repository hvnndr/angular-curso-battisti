import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {
  @Output() emitterNumber: EventEmitter<any> = new EventEmitter()
  number: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  public numberPlus(): void{
    this.emitterNumber.emit()
    console.log('Funcionou')
  }
}

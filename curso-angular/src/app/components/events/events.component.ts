import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  showText: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  public pressButton(): void{
    this.showText = !this.showText
  }
}

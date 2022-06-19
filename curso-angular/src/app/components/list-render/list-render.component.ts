import { Component, OnInit } from '@angular/core';
import {Animal} from "../../Animal";
import {ListService} from "../../service/list.service";

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'narcejo', type:'cachorro', age: 15},
    {name: 'tom', type: 'gato', age: 1},
    {name: 'pilow', type: 'lontra', age: 2},
    {name: 'bal', type: 'baleia', age: 30}
  ]
  animalDetails = ''

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal){
    console.log(`removendo animal ${animal.type}`)
    this.animals = this.listService.remove(this.animals, animal);
  }
}

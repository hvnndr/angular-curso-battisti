import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponentComponent} from "./components/first-component/first-component.component";
import {ListRenderComponent} from "./components/list-render/list-render.component";
import {IfRenderComponent} from "./components/if-render/if-render.component";
import {EventsComponent} from "./components/events/events.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path:'list', component: ListRenderComponent},
  {path: 'if', component: IfRenderComponent},
  {path: 'event', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

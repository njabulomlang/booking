import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ViewComponent } from './pages/view/view.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ListComponent } from './pages/list/list.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';

const routes: Routes = [
  {
    path:"", component:RoomsComponent
  },
{
  path:"view/:id", component:ViewComponent
},
{
  path:"book", component:BookingsComponent
},
{
  path:"list", component: ListComponent
},
{
  path:"date", component: DatepickerComponent
 }
, 
{
  path:"**", component:RoomsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

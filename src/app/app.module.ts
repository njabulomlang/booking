import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SearchRoomPipe } from './search-room.pipe';
import { SearchRoomsPipe } from './search-rooms.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { ViewComponent } from './pages/view/view.component';
import { ListComponent } from './pages/list/list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    RoomsComponent,
    SearchRoomPipe,
    SearchRoomsPipe,
    ViewComponent,
    ListComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

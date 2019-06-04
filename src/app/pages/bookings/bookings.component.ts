import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { room } from '../model/room';
import arry from '../view/view.component';
import { from } from 'rxjs';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  roomList: Array<room>;

  d =arry ;

  room ;
  price ;

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private booking: BookingService, private router: Router, private roomService: RoomService, private calendar: NgbCalendar) {
this.room=this.d[0].room ;
this.price = this.d[0].price

   }

  ngOnInit() {
    console.log(this.d);
    
    this.getBooking();
  }
  getBooking() {
    this.roomList = this.roomService.getRoom();
    console.log(this.roomList);
  }
  ngSubmit(v){
  this.booking.addBooking(v);
  this.router.navigate(["/list"]);
  }
  

}

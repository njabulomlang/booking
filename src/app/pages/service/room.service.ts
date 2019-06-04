import { Injectable } from '@angular/core';
import { room } from '../model/room';
import { booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

 
  room: Array<room> = [{
    id: 1,
    name: "Diepkloof zone 6",
    image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61140031_2290341294392197_1592409715411779584_o.jpg?_nc_cat=107&_nc_ht=scontent-jnb1-1.xx&oh=0fac6ccf78e29c3b8af503beb0b8dee2&oe=5D5ACEA0",
    image2: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61073623_2259598101020539_3118134265347309568_n.jpg?_nc_cat=109&_nc_ht=scontent-jnb1-1.xx&oh=e328687643e16c9c2991b4ba18fcb63a&oe=5D630AF1",
    image3: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61774513_2259598137687202_453266487365337088_n.jpg?_nc_cat=110&_nc_ht=scontent-jnb1-1.xx&oh=4869ba00e5d97317ffdd5e23ffca5d0b&oe=5D5113A6",
    image4: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61223218_2259598251020524_6315811144627912704_n.jpg?_nc_cat=110&_nc_ht=scontent-jnb1-1.xx&oh=3b1ce8ed6a0d667e4c4077648becc27f&oe=5D9AD9FF",
    price: "R 4000 pm",
    description: "This room is in good condition"
  },
  {id: 2,
    name: "Diepkloof zone 3",
    image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/42703899_172975873579436_1128945631360974848_o.jpg?_nc_cat=103&_nc_ht=scontent-jnb1-1.xx&oh=471feaa7f8f3ca1164fe716993cc3822&oe=5D9CE027",
    image2: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61280657_2299447610304272_652712347546157056_n.jpg?_nc_cat=106&_nc_ht=scontent-jnb1-1.xx&oh=29cda14ff162f3222a81686aea09f40b&oe=5D998464",
    image3: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60996576_2299445970304436_5436429217975762944_n.jpg?_nc_cat=110&_nc_ht=scontent-jnb1-1.xx&oh=3f4612117c8f815ceb2d872eaad75a4e&oe=5D616FF6",
    image4: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61058548_2299445986971101_202720588060426240_n.jpg?_nc_cat=103&_nc_ht=scontent-jnb1-1.xx&oh=896da88f48ed9141864c29f0b86bb140&oe=5D607C20",
    price: "R 8000 pm",
    description: "This room is in excellent and better condition"
  },
  {id: 3,
    name: "Diepkloof zone 7",
    image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61306919_835936746783698_171238580859961344_o.jpg?_nc_cat=102&_nc_ht=scontent-jnb1-1.xx&oh=72ae44de9e3d9678a40cbe50482d7919&oe=5D932A28",
    image2: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/52522635_2018162828302063_4451225288629551104_n.jpg?_nc_cat=101&_nc_ht=scontent-jnb1-1.xx&oh=17d914a4b7f2897e0cad350544538fc8&oe=5D9D835F",
    image3: "https://scontent-jnb1-1.xx.fbcdn.net/v/l/t1.0-9/52415896_2018158344969178_9107597014387916800_n.jpg?_nc_cat=111&_nc_ht=scontent-jnb1-1.xx&oh=c89fc52960da92a0f1fd37f1a8f250e8&oe=5D998E65",
    image4: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/52634663_2018158784969134_6357562225359585280_n.jpg?_nc_cat=101&_nc_ht=scontent-jnb1-1.xx&oh=8e041e6ca21f935f251754beeae136fb&oe=5D6183C8",
    price: "R 6000 pm",
    description: "Good place but noisy"
  },
  {id: 4,
    name: "Bara 4",
    image: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60806016_10156992974527745_292957992683307008_o.jpg?_nc_cat=105&_nc_ht=scontent-jnb1-1.xx&oh=258239e980785268262b5c9168797883&oe=5D5A9B0F",
    image2: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61059902_10218757691196565_3354856172459917312_n.jpg?_nc_cat=107&_nc_ht=scontent-jnb1-1.xx&oh=9267e8cae5c9e6653aed9033d1b23292&oe=5D5BA459",
    image3: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61068511_3109511579060701_6807613186674524160_n.jpg?_nc_cat=111&_nc_ht=scontent-jnb1-1.xx&oh=fa2df5f5819b92f3e4d4b194354c8aa9&oe=5D5F0680",
    image4: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/61266653_3109505042394688_4615238484662157312_n.jpg?_nc_cat=106&_nc_ht=scontent-jnb1-1.xx&oh=b4f549d50cad07ae26690ad3779b385c&oe=5D590F19",
    price: "R 5000 pm",
    description: "This room is for people not less than 30 years"
  }]
  booking: any;

  constructor() { }
  getRoom(): Array<room>{
    return this.room;
  }  

  getRoomById(id: number){
    let tempRoom: room;
    this.room.map(a=>{
      if(a.id == id){
        tempRoom = a;
      }
    });
    return tempRoom;
  }

  viewRoom(room: room){
    this.room.map((a, index) => {
      if (a.id === room.id) {
        a.name = room.name;
        a.image = room.image;
        a.image2 = a.image2;
        a.image3 = a.image3;
        a.image4 = a.image4;
        a.price = room.price;
        a.description = room.description;
      }
    });
  }
  getBookingById(id: number) {
    let tempBook: booking;
    this.booking.map(a=>{
      if(a.id == id){
        tempBook = a;
      }
    });
    return tempBook;
  }
}
 
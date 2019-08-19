// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-star-rating',
//   templateUrl: './star-rating.component.html',
//   styleUrls: ['./star-rating.component.scss']
// })
// export class StarRatingComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from "../../services/notes-service/notes.service";
import { rating } from "../../model/QAModel";
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  public ratingModel: rating;
  constructor(public askService:NotesService) { }

  ngOnInit() {
  }

  rate = 0;
  object;
  count = 0;
  @Input()
  public set rateMessage(v: any) {
    console.log('message in rate', v);

    this.object = v;
    if (v.rate != undefined)
      this.rate = v.rate.length;
  }

  /**
   * @description this method is for give the rating to the user quetion or answer
   * 
   */
  giveRating() {
    this.ratingModel = new rating();
    console.log("hello");
    if (this.count != 2) {
      this.count++;
      return;
    }
    this.ratingModel.rate = JSON.stringify(this.rate);


    this.ratingModel.id = this.object.id;
    this.ratingService(this.ratingModel);

  }

  /**
   * @description this method is for call rate service 
   * @returns body
   */
  ratingService(body) {
    this.askService.rate(body).subscribe(data => {
      console.log('data after rating', data);

    }, err => {
      console.log('error after rating ', err);

    })
  }


}


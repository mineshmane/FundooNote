import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {
  @Input() unPinedMessage;
  @Input() pinedMessage;
  constructor() {
    console.log(" unpined in masory ",this.unPinedMessage);
    
   }

  ngOnInit() {
  }
  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' }
  ];
}

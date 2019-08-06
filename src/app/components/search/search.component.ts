/******************************************************************************
 *  Execution       :cmd> node ng s                  
 *  @description    :dashboard whre some basic fumnctionality are implemented
 *  @file           :dashboard.ts
 *  @author         :Minesh Mane <mineshmane94@gmail.com>
 *  @version        :1.0
 
 ******************************************************************************/



import { Component, OnInit, OnChanges, Output } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { NotesService } from '../../services/notes-service/notes.service'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  allnotes = []
  card = []
  value;
  pinedArray = [];
  unpinedArray = []
  constructor(private dataService: DataService, private notesService: NotesService) { }

  //@Output()
  ngOnInit() {
    this.getNote();
    this.dataService.currentMessage.subscribe(message => {
      console.log("data in on change", message);
      if (message.type == 'search') {
        this.value = message.data
        this.card = this.findCard(this.allnotes, this.value)


        this.filterArray(this.card)

        // console.log("searched cards", this.card);
      }


    })
  }

  filterArray(note) {
    for (let i = note.length; i > 0; i--) {
      if (note[i - 1]["isDeleted"] === false) {

        if (note[i - 1]["isPined"] === true) {
          this.pinedArray.push(note[i - 1]);
          this.pinedArray.reverse();
          console.log("pinned array@@@@@@@", this.pinedArray);
        }
        else {
          this.unpinedArray.push(note[i - 1]);
          this.unpinedArray.reverse();
          console.log("unpinned array@@@@@@@", this.unpinedArray);
        }

      }
    }
  }

  getNote() {
    try {
      this.notesService.getNotes().subscribe(response => {
        this.allnotes = response['data'].data
        console.log("search data", this.allnotes);
      }, error => {
        console.log('error ', error);
      })
    } catch (error) {
      console.log(error);
    }
  }
  findCard = function (note, searchValue) {
    var cardNote = note.filter(item => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase())
    });
    return cardNote
  }

}







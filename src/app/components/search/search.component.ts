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
  constructor(private dataService: DataService, private notesService: NotesService) { }

  //@Output()
  ngOnInit() {
    this.getNote();
    this.dataService.currentMessage.subscribe(message => {
      console.log("data in on change", message);
      if(message.type=='search'){
        this.value = message.data
        this.card = this.findCard(this.allnotes, this.value)
        console.log("searched cards", this.card);
      }
  

    })
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
           return item.title.toLowerCase().startsWith(searchValue.toLowerCase()) || item.description.toLowerCase().startsWith(searchValue.toLowerCase())
    });
    return cardNote
  }

}







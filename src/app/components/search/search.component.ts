import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../../services/dataService/data.service';
import { NotesService } from '../../services/notes-service/notes.service'
import { notes } from 'src/app/model/notes';
import { all } from 'q';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  allnotes
  card=[]
  value;
  constructor(private dataService: DataService, private notesService: NotesService) { }
  

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      //  this.notes.filter(finction(note{
      //    return note.title==this.notes.title;
      //  }))
      console.log("data in on change", message);
      let value = message
      // this.searchNote(value);
      console.log(value);
  
     

    })


    this.getNote();
  }
  getNote() {
    try {
      this.notesService.getNotes().subscribe(response => {
        console.log('response  ', response['data'].data);
        console.log(" responsee 3", response);

        this.allnotes = response['data'].data
        console.log("search data", this.allnotes);
        

        let card = this.allnotes.filter(searchNote);
        console.log(card);
     

      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);
    }
  }

 function name(params:type) {
   
 } searchNote(title :string) {
    if(this.title===this.value)
    return notes
  }
  //  function searchNote(value:any) {
     
 
  
  //       if(value==undefined){
  //         console.log(" card not found");

  //       }
  //      else{
  //       if (this.allnotes.title.search(value))

  //      return value
  //      }
  //    });

 
  
  // function myFunction() {
  //   document.getElementById("demo").innerHTML = this.allnotes.filter(checkAdult);
  // }

}

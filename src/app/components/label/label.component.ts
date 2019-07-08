import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes-service/notes.service'
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  notes = []
  constructor(private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.getnoteByLabel()

    })
    // this.getnoteByLabel()
  }
  


  getnoteByLabel() {
    const label = this.route.snapshot.paramMap.get('label');
    console.log("label from route ",label);
    
    //localStorage.setItem('label',label)
    try {
      this.notesService.getNotesByLabel(label).subscribe(response => {
        console.log('response from service ', response);
      //  console.log(" responsee 3", response);

        this.notes = response['data'].data
console.log("notes array ",this.notes);

        this.notes.reverse();
      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }


  }

}

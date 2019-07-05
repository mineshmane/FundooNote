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
  }



  getLnoteByLabel() {
    const token = this.route.snapshot.paramMap.get('label');
    localStorage.setItem('label', token)
    try {
      this.notesService.getNotes().subscribe(response => {
        console.log('response  ', response['data'].data);
        console.log(" responsee 3", response);

        this.notes = response['data'].data

        this.notes.reverse();
      }, error => {
        console.log('error ', error);

      })
    } catch (error) {
      console.log(error);

    }


  }

}

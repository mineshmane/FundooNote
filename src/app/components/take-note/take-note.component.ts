import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { notes } from '../../model/notes'
@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  isOpen = true;
  //hide = true;
  click() {
    this.isOpen = true;
  }
  title='';
  description='';
  titleModel: String;
  contentModel: String;
  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
    this.titleModel = '';
    this.contentModel = '';

  }


  ngOnInit() {
  }
  addNote() {
    this.isOpen = !this.isOpen;
    let newNote: notes = {
      title: this.title,
      description: this.description,    
    }
    this.craeteNote(newNote);
  }

  craeteNote(note) {
    
    this.userService.addnote(note).subscribe(response => {
      console.log('response ', response);
      this.snackBar.open('note added succesfully', '', { duration: 2000 });
      //this.router.navigate(['/login']);
  
    }, error => {
      console.log('error ', error);
  
    })
  }
 
}

import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) { }

  addLabel(data){
    console.log("user service called", data);
   return this.httpService.postAth('noteLabels',data);
  }
  getLableList(){
    return this.httpService.getNotes('noteLabels/getNoteLabelList');
  
  }
}

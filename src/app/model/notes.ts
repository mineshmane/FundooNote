// export class notes {
//   title: String;
//   description: String;
//   color:string;
//   imageUrl: string;
//   reminder :string
//   //labelIdList:any
//  // collaberators:any
//   // isArchived: string;
//   // isDeleted: string;
//   // isPined: string;

//   questionAndAnswerNotes: any
  


// }
export class notes {
  title: string
  description: string
  color: string
  id: string
  reminder: [Date]
  userId: string
  data: any
  collaberators: [{}]
  isArchived: boolean
  isDeleted: boolean
  isPined: boolean
  labelIdList: string
  imageUrl: string
  questionAndAnswerNotes: [{}]
}
export class Label {
  label: string;
  isDeleted: false;
  userId: string;
}
export class User {
  "id": string;
  "firstName": string;
  "lastName": string;
  "email": string;
  "password": string;
  "confirmPassword": string;
  "service": string;
}
export class Collaborator {
  "firstName": string;
  "lastName": string;
  "email": string;
  "id": string;
}
export class Editor {
  "message": string
}
export class Reply {
  "message": string
}
export class addCheckList{
  itemName: string;
  status: string;
  isDeleted: boolean;
  notesId:string;    
}
export class updateCheckList{
noteId:string;
checkListId:string;
itemName:string;
status:string;
}

export class deleteCheckList{
noteId:string;
checkListId:string;
}
export class updateCard{
noteId:string;
file:File;
title:string;
description:string;
}
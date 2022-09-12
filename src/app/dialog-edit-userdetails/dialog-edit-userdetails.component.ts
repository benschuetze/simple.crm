import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-userdetails',
  templateUrl: './dialog-edit-userdetails.component.html',
  styleUrls: ['./dialog-edit-userdetails.component.scss']
})
export class DialogEditUserdetailsComponent implements OnInit {

user: User;

loading = false;
birthDate: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserdetailsComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  saveUser() {

  }

}

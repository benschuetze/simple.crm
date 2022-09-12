import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user: User = new User();
  birthDate: Date;
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogUserComponent> ,private firestore: AngularFirestore) {
   }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('current User is:', this.user);
    this
    .firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result:any) => {
      this.loading = false;
      console.log('Adding user finished', result);
      this.dialogRef.close();
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }


}

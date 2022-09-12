import { Component, OnInit, Inject} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  allUsers : [];


  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'id'})
    .subscribe((changes: any) => {
      console.log('Received changes from Database', changes);
      this.allUsers = changes;
      console.log('All users:', this.allUsers);
    })
  }

  openDialog() {
    this.dialog.open(DialogUserComponent);
  }

}

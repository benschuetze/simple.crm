import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserdetailsComponent } from '../dialog-edit-userdetails/dialog-edit-userdetails.component';



@Component({
  selector: 'app-user-detailview',
  templateUrl: './user-detailview.component.html',
  styleUrls: ['./user-detailview.component.scss']
})
export class UserDetailviewComponent implements OnInit {
  userId = '';
  user: User;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id'); // id ist variable deklariert in app-routing.module.ts
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.user = new User(user);
      console.log('retrieved user:', this.user)
    })
  }

  editAddress() {
   const dialog = this.dialog.open(DialogEditAddressComponent);
   dialog.componentInstance.user = new User(this.user.toJSON()); // mit componentInstance wird auf geöffnete Komponente zugegriffen
  }

  editUserDetails() {
   const dialog =  this.dialog.open(DialogEditUserdetailsComponent);
   dialog.componentInstance.user = new User(this.user.toJSON());
  }

}

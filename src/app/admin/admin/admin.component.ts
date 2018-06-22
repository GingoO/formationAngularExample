import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service'
import { MonServiceService } from '../../mon-service.service';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {Message} from 'primeng/api';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private dialog: MatDialog) { }

  adminName: string;

  msgs: Message[] = [];

  ngOnInit() {
  }

  unloginOpenDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      hasBackdrop: false,
      height: '700px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      this.adminName = name;
      this.msgs.push({severity:'info', summary:'Détails bloqués', detail:'Accès aux détails désormais bloqués'});
    })
  }

  retourAppli() {
    this.router.navigateByUrl('');
  }

  

}

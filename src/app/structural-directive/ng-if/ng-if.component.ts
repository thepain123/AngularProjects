import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  constructor() { }
  status:boolean = false;
  statusLogin : boolean = false;
  statusLogin2 : boolean = false;
  Show(){
    this.status = true;
  }
  Hide(){
    this.status = false;
  }
  Toggle(){
    this.status = !this.status;
  }


  Logout(){
    this.statusLogin = true;
  }
  Login(){
    this.statusLogin = false;
  }
  ngOnInit() {
  }

}

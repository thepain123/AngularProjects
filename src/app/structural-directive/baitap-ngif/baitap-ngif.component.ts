import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  // email:string ="cybersoft"
  // password:string = "cybersoft"
  userName :string;
  status:boolean = true;
  constructor() { }
  Login(email,password){
    if( email === "cybersoft" && password === "cybersoft")
    this.status = false;
    console.log(this.status);
    this.userName = email;
    localStorage.setItem("user",JSON.stringify(this.userName));
  }
  ngOnInit() {
    if(localStorage.getItem("user")){
      this.status = false;
      this.userName = JSON.parse(localStorage.getItem("user"));
    }
  }

}

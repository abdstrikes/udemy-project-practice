import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/shared/services/user-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:any;
  userName!: string;
  userDepot!:string;
  pname:any = '';
  namesArray:any= [];


  constructor(private userDetails:UserDetailsService) { }

  ngOnInit(): void {
    this.user=this.userDetails.getUserDetails();
    this.userName=this.user.name;
    this.userDepot=this.user.dept;
  }

  addNamesToArray(){
    this.namesArray.push(this.pname);
    this.pname='';
  }
  
  clearArray(){
    this.namesArray = [];
  }

  visib:boolean =false;

  isVisible(){
    this.visib = !this.visib;
    console.log(this.visib)
  }
}

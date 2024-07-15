import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { UserDetailsService } from 'src/app/shared/services/user-details.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  userName!: string;
  userDepot!: string;
  user: any;
  constructor(private userDetails: UserDetailsService, private router:Router) { }

  ngOnInit(): void {
    this.user =this.userDetails.getUserDetails();
    this.userName= this.user.name;
    this.userDepot= this.user.dept;
    // this.router.navigateByUrl('/customer/list');

   
  }
}
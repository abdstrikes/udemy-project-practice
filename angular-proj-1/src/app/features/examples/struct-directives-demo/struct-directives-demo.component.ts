import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/shared/services/user-details.service';

@Component({
  selector: 'app-struct-directives-demo',
  templateUrl: './struct-directives-demo.component.html',
  styleUrls: ['./struct-directives-demo.component.scss']
})
export class StructDirectivesDemoComponent implements OnInit {
  userName!: string;
  userDepot!: string;
  user: any;
  constructor(private userDetails: UserDetailsService) { }

  ngOnInit(): void {
    this.user =this.userDetails.getUserDetails();
    this.userName= this.user.name;
    this.userDepot= this.user.dept;
  }

}

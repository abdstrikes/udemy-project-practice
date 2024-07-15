import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit {
  childMsg!: string;
  constructor() { }

  ngOnInit(): void {
    this.childMsg = 'message received from parent to child as input'
  }

  receiveChildMessage(data:any){
    console.log(data)
  }

}
